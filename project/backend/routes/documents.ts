import express from 'express';
import { OpenRouterService } from '../services/openrouter.js';
import { documentGenerator } from '../services/document-generator.js';

const router = express.Router();
const openRouter = new OpenRouterService();

router.get('/templates', async (req, res) => {
  try {
    const templates = [
      { 
        id: 1, 
        name: 'RTI Application', 
        category: 'Government',
        description: 'Right to Information request application',
        fields: ['applicant_name', 'public_authority', 'information_sought', 'address']
      },
      { 
        id: 2, 
        name: 'Labor Complaint', 
        category: 'Employment',
        description: 'Wage or labor dispute complaint',
        fields: ['employee_name', 'employer_name', 'issue_description', 'salary_amount']
      },
      { 
        id: 3, 
        name: 'Consumer Complaint', 
        category: 'Consumer Rights',
        description: 'Consumer rights violation complaint',
        fields: ['consumer_name', 'seller_name', 'product_service', 'issue_details']
      }
    ];
    
    res.json(templates);
  } catch (error) {
    console.error('Documents error:', error);
    res.status(500).json({ error: 'Failed to fetch documents' });
  }
});

// Generate document from conversation
router.post('/generate', async (req, res) => {
  try {
    const { 
      facts, 
      document_type, 
      language = 'hi', 
      jurisdiction = 'India',
      user_meta = {} 
    } = req.body;

    // Use AI to generate structured document
    const document = await openRouter.generateLegalDocument(
      `Generate a ${document_type} based on these facts: ${facts}`,
      `User details: ${JSON.stringify(user_meta)}. Jurisdiction: ${jurisdiction}`,
      language
    );

    // Generate PDF
    const pdfBuffer = documentGenerator.generatePDF(document);

    res.json({
      document_id: document.document_id,
      document: document,
      pdf_url: `/api/documents/pdf/${document.document_id}`,
      created_at: new Date().toISOString()
    });

  } catch (error) {
    console.error('Document generation error:', error);
    res.status(500).json({ 
      error: 'Failed to generate document',
      message: 'AI service may be unavailable. Please try again or use manual templates.'
    });
  }
});

// Get generated document as PDF
router.get('/pdf/:documentId', async (req, res) => {
  try {
    const { documentId } = req.params;
    
    // In production, fetch from database
    const sampleDocument = {
      document_id: documentId,
      language: 'hi',
      jurisdiction: 'India',
      document_type: 'sample',
      facts: 'Sample legal document',
      parties: {
        petitioner: { name: 'Sample User', address: 'Sample Address' }
      },
      relief_sought: 'Sample relief',
      prayer: 'Sample prayer',
      required_docs: ['Sample documents'],
      filing_office: {
        name: 'Sample Office',
        address: 'Sample Address',
        hours: '9-5'
      },
      confidence_score: 0.8,
      template_id: 'sample',
      generated_by: 'NyaySathi',
      timestamp: new Date().toISOString(),
      plain_language_summary: 'This is a sample legal document.'
    };

    const pdfBuffer = documentGenerator.generatePDF(sampleDocument);
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="document-${documentId}.pdf"`);
    res.send(pdfBuffer);

  } catch (error) {
    console.error('PDF generation error:', error);
    res.status(500).json({ error: 'Failed to generate PDF' });
  }
});

export default router;