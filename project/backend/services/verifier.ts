export interface VerificationResult {
  isValid: boolean;
  confidence: number;
  errors: string[];
  warnings: string[];
  requiredHumanReview: boolean;
}

export class DocumentVerifier {
  private readonly CONFIDENCE_THRESHOLD = 0.8;
  private readonly HUMAN_REVIEW_THRESHOLD = 0.6;

  verify(document: any): VerificationResult {
    const errors: string[] = [];
    const warnings: string[] = [];
    let confidence = 1.0;

    // Required field validation
    const requiredFields = ['document_type', 'facts', 'parties', 'relief_sought'];
    
    for (const field of requiredFields) {
      if (!document[field] || (typeof document[field] === 'string' && !document[field].trim())) {
        errors.push(`Required field missing: ${field}`);
        confidence -= 0.2;
      }
    }

    // Parties validation
    if (document.parties) {
      if (!document.parties.petitioner?.name) {
        errors.push('Petitioner name is required');
        confidence -= 0.15;
      }
      if (!document.parties.petitioner?.address) {
        warnings.push('Petitioner address should be provided');
        confidence -= 0.05;
      }
    }

    // Facts validation
    if (document.facts && document.facts.length < 20) {
      warnings.push('Facts section seems too brief - more details may be needed');
      confidence -= 0.1;
    }

    // Relief sought validation
    if (document.relief_sought && !document.relief_sought.includes('₹') && document.document_type === 'wage_complaint') {
      warnings.push('No monetary amount specified in wage complaint');
      confidence -= 0.05;
    }

    // Check for unrealistic amounts (basic sanity check)
    if (document.relief_sought) {
      const amounts = document.relief_sought.match(/₹\s*(\d+(?:,\d+)*)/g);
      if (amounts) {
        amounts.forEach((amount: string) => {
          const numStr = amount.replace(/[₹,\s]/g, '');
          const num = parseInt(numStr);
          if (num > 10000000) { // 1 crore
            warnings.push('Very high monetary claim detected - please verify');
            confidence -= 0.1;
          }
        });
      }
    }

    // Check confidence score from AI
    if (document.confidence_score && document.confidence_score < this.CONFIDENCE_THRESHOLD) {
      warnings.push('AI confidence is low - human review recommended');
      confidence = Math.min(confidence, document.confidence_score);
    }

    // Template validation
    if (!document.template_id) {
      warnings.push('No template reference found');
      confidence -= 0.05;
    }

    // Final confidence adjustment
    confidence = Math.max(0, Math.min(1, confidence));

    return {
      isValid: errors.length === 0,
      confidence,
      errors,
      warnings,
      requiredHumanReview: confidence < this.HUMAN_REVIEW_THRESHOLD || errors.length > 0
    };
  }

  validateSchema(document: any): boolean {
    const requiredStructure = {
      document_id: 'string',
      language: 'string',
      jurisdiction: 'string', 
      document_type: 'string',
      facts: 'string',
      parties: 'object',
      relief_sought: 'string',
      prayer: 'string'
    };

    for (const [field, expectedType] of Object.entries(requiredStructure)) {
      if (!(field in document)) {
        return false;
      }
      if (expectedType === 'object' && typeof document[field] !== 'object') {
        return false;
      }
      if (expectedType === 'string' && typeof document[field] !== 'string') {
        return false;
      }
    }

    return true;
  }
}

export const documentVerifier = new DocumentVerifier();