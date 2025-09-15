import jsPDF from 'jspdf';
import { v4 as uuidv4 } from 'uuid';

export interface DocumentTemplate {
  id: string;
  type: string;
  language: string;
  jurisdiction: string;
  fields: Record<string, any>;
  content: string;
  requiredDocs: string[];
  filingOffice: {
    name: string;
    address: string;
    hours: string;
  };
}

export interface GeneratedDocument {
  document_id: string;
  language: string;
  jurisdiction: string;
  document_type: string;
  facts: string;
  parties: {
    petitioner: { name: string; address: string };
    respondent?: { name: string; address: string };
  };
  relief_sought: string;
  prayer: string;
  required_docs: string[];
  filing_office: {
    name: string;
    address: string;
    hours: string;
  };
  confidence_score: number;
  template_id: string;
  generated_by: string;
  timestamp: string;
  plain_language_summary: string;
  citations?: Array<{ text: string; source: string }>;
}

class DocumentGenerator {
  private templates: Map<string, DocumentTemplate> = new Map();

  constructor() {
    this.initializeTemplates();
  }

  private initializeTemplates() {
    const templates: DocumentTemplate[] = [
      {
        id: 'wage_complaint_hi_jharkhand',
        type: 'wage_complaint',
        language: 'hi',
        jurisdiction: 'Jharkhand',
        fields: {
          petitioner_name: '',
          petitioner_address: '',
          employer_name: '',
          employer_address: '',
          salary_amount: '',
          months_unpaid: '',
          total_amount: ''
        },
        content: `श्रम अधिकारी को,
जिला श्रम कार्यालय, {jurisdiction}

विषय: अवैतनिक मजदूरी की शिकायत

महोदय,

मैं {petitioner_name}, निवासी {petitioner_address}, आपको सविनय निवेदन करता हूं कि मैं {employer_name}, {employer_address} में कार्यरत था/थी।

मेरी मासिक तनख्वाह {salary_amount} रुपये थी। मेरे नियोक्ता ने {months_unpaid} महीनों का वेतन नहीं दिया है, जिसकी कुल राशि {total_amount} रुपये है।

अतः आपसे निवेदन है कि मेरी अवैतनिक मजदूरी दिलाने हेतु आवश्यक कार्यवाही करने की कृपा करें।

धन्यवाद।

{petitioner_name}
दिनांक: {date}`,
        requiredDocs: [
          'आधार कार्ड की फोटोकॉपी',
          'वेतन पर्ची (यदि उपलब्ध हो)',
          'नियुक्ति पत्र की प्रति',
          'बैंक खाता विवरण'
        ],
        filingOffice: {
          name: 'जिला श्रम कार्यालय',
          address: 'मुख्य सड़क, रांची, झारखंड',
          hours: '10:00 AM - 5:00 PM (सोमवार-शुक्रवार)'
        }
      },
      {
        id: 'rti_request_hi_all',
        type: 'rti_request',
        language: 'hi',
        jurisdiction: 'all',
        fields: {
          petitioner_name: '',
          petitioner_address: '',
          department: '',
          information_sought: '',
          purpose: ''
        },
        content: `सेवा में,
जन सूचना अधिकारी
{department}

विषय: सूचना का अधिकार अधिनियम 2005 की धारा 6(1) के अंतर्गत आवेदन

महोदय,

मैं {petitioner_name}, निवासी {petitioner_address}, सूचना का अधिकार अधिनियम 2005 की धारा 6(1) के अंतर्गत निम्नलिखित सूचना चाहता हूं:

{information_sought}

उक्त सूचना का उपयोग {purpose} के लिए किया जाएगा।

कृपया उक्त सूचना 30 दिन के अंदर उपलब्ध कराने की कृपा करें। आवेदन शुल्क ₹10 संलग्न है।

धन्यवाद।

{petitioner_name}
दिनांक: {date}`,
        requiredDocs: [
          'आधार कार्ड की फोटोकॉपी',
          '₹10 का आवेदन शुल्क (डिमांड ड्राफ्ट/नकद)'
        ],
        filingOffice: {
          name: 'संबंधित विभाग का जन सूचना अधिकारी',
          address: 'विभागीय कार्यालय',
          hours: '10:00 AM - 5:00 PM (सोमवार-शुक्रवार)'
        }
      }
    ];

    templates.forEach(template => {
      this.templates.set(template.id, template);
    });
  }

  generateDocument(
    facts: string,
    documentType: string,
    language: string,
    jurisdiction: string,
    userMeta: any
  ): GeneratedDocument {
    const templateId = `${documentType}_${language}_${jurisdiction.toLowerCase()}`;
    let template = this.templates.get(templateId);
    
    // Fallback to 'all' jurisdiction if specific not found
    if (!template) {
      template = this.templates.get(`${documentType}_${language}_all`);
    }

    if (!template) {
      throw new Error(`Template not found for ${documentType} in ${language}`);
    }

    // Extract entities from facts using simple pattern matching
    const entities = this.extractEntities(facts, documentType);

    // Generate document content
    const document: GeneratedDocument = {
      document_id: uuidv4(),
      language,
      jurisdiction,
      document_type: documentType,
      facts,
      parties: {
        petitioner: {
          name: userMeta.name || entities.petitioner_name || '[नाम भरें]',
          address: userMeta.address || entities.petitioner_address || '[पता भरें]'
        }
      },
      relief_sought: this.generateReliefSought(documentType, entities, language),
      prayer: this.generatePrayer(documentType, language),
      required_docs: template.requiredDocs,
      filing_office: template.filingOffice,
      confidence_score: this.calculateConfidence(entities, facts),
      template_id: template.id,
      generated_by: 'nyaysathi-ai',
      timestamp: new Date().toISOString(),
      plain_language_summary: this.generateSummary(documentType, entities, language)
    };

    // Add respondent if applicable
    if (entities.employer_name || entities.respondent_name) {
      document.parties.respondent = {
        name: entities.employer_name || entities.respondent_name || '[प्रतिवादी का नाम]',
        address: entities.employer_address || entities.respondent_address || '[प्रतिवादी का पता]'
      };
    }

    return document;
  }

  private extractEntities(facts: string, documentType: string): Record<string, any> {
    const entities: Record<string, any> = {};

    // Common patterns
    const namePattern = /(?:मेरा नाम|नाम|मैं)\s+([^\s,।]+(?:\s+[^\s,।]+)*)/g;
    const amountPattern = /(?:₹|रुपये?)\s*(\d+(?:,\d+)*)/g;
    const monthsPattern = /(\d+)\s*(?:महीन[ेों]?|माह)/g;
    const employerPattern = /(?:मालिक|नियोक्ता|कंपनी)\s+([^\s,।]+(?:\s+[^\s,।]+)*)/g;

    // Extract names
    let match = namePattern.exec(facts);
    if (match) {
      entities.petitioner_name = match[1].trim();
    }

    // Extract employer
    match = employerPattern.exec(facts);
    if (match) {
      entities.employer_name = match[1].trim();
    }

    // Extract amounts
    match = amountPattern.exec(facts);
    if (match) {
      entities.salary_amount = match[1].replace(/,/g, '');
    }

    // Extract months
    match = monthsPattern.exec(facts);
    if (match) {
      entities.months_unpaid = match[1];
      if (entities.salary_amount) {
        entities.total_amount = (parseInt(entities.salary_amount) * parseInt(match[1])).toString();
      }
    }

    return entities;
  }

  private generateReliefSought(documentType: string, entities: any, language: string): string {
    const reliefTemplates: Record<string, Record<string, string>> = {
      wage_complaint: {
        hi: `${entities.months_unpaid || '[X]'} महीनों का अवैतनिक वेतन ₹${entities.total_amount || '[राशि]'} का भुगतान तथा विलंब शुल्क सहित पूर्ण राशि का भुगतान।`,
        en: `Payment of unpaid wages for ${entities.months_unpaid || '[X]'} months amounting to ₹${entities.total_amount || '[amount]'} along with delay charges.`
      },
      rti_request: {
        hi: 'मांगी गई सूचना का 30 दिन के अंदर प्रदान किया जाना।',
        en: 'Provision of requested information within 30 days.'
      }
    };

    return reliefTemplates[documentType]?.[language] || 'उचित राहत प्रदान की जाए।';
  }

  private generatePrayer(documentType: string, language: string): string {
    const prayerTemplates: Record<string, Record<string, string>> = {
      wage_complaint: {
        hi: 'अतः आपसे विनम्र निवेदन है कि उपरोक्त विषय में आवश्यक कार्यवाही करते हुए न्याय प्रदान करने की कृपा करें।',
        en: 'Therefore, it is humbly requested that necessary action be taken in the above matter and justice be provided.'
      },
      rti_request: {
        hi: 'कृपया मांगी गई सूचना यथाशीघ्र उपलब्ध कराने की कृपा करें।',
        en: 'Please provide the requested information at the earliest.'
      }
    };

    return prayerTemplates[documentType]?.[language] || 'न्याय की अपेक्षा में।';
  }

  private generateSummary(documentType: string, entities: any, language: string): string {
    const summaryTemplates: Record<string, Record<string, string>> = {
      wage_complaint: {
        hi: `यह ${entities.employer_name || 'नियोक्ता'} के विरुद्ध ${entities.months_unpaid || 'कई'} महीनों के अवैतनिक वेतन की शिकायत है। कुल राशि ₹${entities.total_amount || '[राशि]'} है।`,
        en: `This is a complaint against ${entities.employer_name || 'employer'} for unpaid wages of ${entities.months_unpaid || 'several'} months. Total amount is ₹${entities.total_amount || '[amount]'}.`
      },
      rti_request: {
        hi: 'यह सूचना का अधिकार के तहत सरकारी जानकारी मांगने का आवेदन है।',
        en: 'This is an application seeking government information under Right to Information Act.'
      }
    };

    return summaryTemplates[documentType]?.[language] || 'कानूनी दस्तावेज तैयार किया गया है।';
  }

  private calculateConfidence(entities: any, facts: string): number {
    let confidence = 0.6; // Base confidence

    // Increase confidence based on extracted entities
    if (entities.petitioner_name) confidence += 0.1;
    if (entities.employer_name) confidence += 0.1;
    if (entities.salary_amount) confidence += 0.1;
    if (entities.months_unpaid) confidence += 0.1;

    // Increase confidence based on facts length
    if (facts.length > 50) confidence += 0.05;
    if (facts.length > 100) confidence += 0.05;

    return Math.min(confidence, 0.95);
  }

  generatePDF(document: GeneratedDocument): Buffer {
    const pdf = new jsPDF();
    
    // Add title
    pdf.setFontSize(16);
    pdf.text(this.getDocumentTitle(document.document_type, document.language), 20, 30);
    
    // Add content
    pdf.setFontSize(12);
    let yPosition = 50;
    
    const content = this.formatDocumentContent(document);
    const lines = pdf.splitTextToSize(content, 170);
    
    lines.forEach((line: string) => {
      if (yPosition > 280) {
        pdf.addPage();
        yPosition = 20;
      }
      pdf.text(line, 20, yPosition);
      yPosition += 7;
    });
    
    // Add footer
    pdf.setFontSize(10);
    pdf.text('Generated by NyaySathi AI Platform', 20, 290);
    pdf.text(`Document ID: ${document.document_id}`, 20, 295);
    
    return Buffer.from(pdf.output('arraybuffer'));
  }

  private getDocumentTitle(type: string, language: string): string {
    const titles: Record<string, Record<string, string>> = {
      wage_complaint: {
        hi: 'मजदूरी की शिकायत',
        en: 'Wage Complaint'
      },
      rti_request: {
        hi: 'सूचना का अधिकार आवेदन',
        en: 'RTI Application'
      }
    };

    return titles[type]?.[language] || 'Legal Document';
  }

  private formatDocumentContent(document: GeneratedDocument): string {
    return `
Facts: ${document.facts}

Petitioner: ${document.parties.petitioner.name}
Address: ${document.parties.petitioner.address}

${document.parties.respondent ? `Respondent: ${document.parties.respondent.name}
Address: ${document.parties.respondent.address}` : ''}

Relief Sought: ${document.relief_sought}

Prayer: ${document.prayer}

Required Documents:
${document.required_docs.map(doc => `• ${doc}`).join('\n')}

Filing Office: ${document.filing_office.name}
Address: ${document.filing_office.address}
Hours: ${document.filing_office.hours}

Confidence Score: ${Math.round(document.confidence_score * 100)}%
Generated: ${new Date(document.timestamp).toLocaleString()}
    `.trim();
  }
}

export const documentGenerator = new DocumentGenerator();