import express from 'express';
import { OpenRouterService } from '../services/openrouter.js';
import { documentGenerator } from '../services/document-generator.js';
import { documentVerifier } from '../services/verifier.js';
import { AuthRequest } from '../middleware/auth.js';
import { DocumentModel } from '../models/Document.js';
import { v4 as uuidv4 } from 'uuid';

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
router.post('/generate', async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

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

    // Validate the generated document
    const validation = documentVerifier.verify(document);

    // Save to database
    const documentRecord = await DocumentModel.create({
      user_id: req.user.id,
      document_id: document.document_id,
      template_id: document.template_id,
      language,
      jurisdiction,
      document_type,
      facts,
      parties: document.parties,
      relief_sought: document.relief_sought,
      prayer: document.prayer,
      required_docs: document.required_docs,
      filing_office: document.filing_office,
      confidence_score: document.confidence_score,
      generated_by: document.generated_by,
      plain_language_summary: document.plain_language_summary,
      citations: document.citations || [],
      validation: {
        confidence: validation.confidence,
        warnings: validation.warnings,
        errors: validation.errors,
        requires_human_review: validation.requiredHumanReview
      },
      pdf_url: `/api/documents/pdf/${document.document_id}`
    });

    res.json({
      document_id: document.document_id,
      document: document,
      pdf_url: `/api/documents/pdf/${document.document_id}`,
      created_at: documentRecord.created_at,
      validation
    });

  } catch (error) {
    console.error('Document generation error:', error);
    res.status(500).json({ 
      error: 'Failed to generate document',
      message: 'AI service may be unavailable. Please try again or use manual templates.'
    });
  }
});

// Validate any provided document structure
router.post('/validate', (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const { document } = req.body;
    if (!document || typeof document !== 'object') {
      return res.status(400).json({ error: 'document is required in request body' });
    }
    const validation = documentVerifier.verify(document);
    return res.json(validation);
  } catch (error) {
    console.error('Document validation error:', error);
    return res.status(500).json({ error: 'Failed to validate document' });
  }
});

// Get user's documents
router.get('/', async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const { status, document_type, limit = 20 } = req.query as any;
    
    const query: any = { user_id: req.user.id };
    if (status) query.status = status;
    if (document_type) query.document_type = document_type;

    const documents = await DocumentModel
      .find(query)
      .sort({ created_at: -1 })
      .limit(parseInt(limit))
      .lean();

    res.json({
      documents: documents.map(doc => ({
        document_id: doc.document_id,
        document_type: doc.document_type,
        language: doc.language,
        status: doc.status,
        confidence_score: doc.confidence_score,
        created_at: doc.created_at,
        pdf_url: doc.pdf_url,
        plain_language_summary: doc.plain_language_summary
      })),
      count: documents.length
    });
  } catch (error) {
    console.error('Documents fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch documents' });
  }
});

// Get generated document as PDF
router.get('/pdf/:documentId', async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const { documentId } = req.params;
    
    // Fetch document from database
    const documentRecord = await DocumentModel.findOne({
      document_id: documentId,
      user_id: req.user.id
    }).lean() as any;

    if (!documentRecord) {
      return res.status(404).json({ error: 'Document not found' });
    }

    // Convert DB record to generator format
    const document = {
      document_id: documentRecord.document_id,
      language: documentRecord.language,
      jurisdiction: documentRecord.jurisdiction,
      document_type: documentRecord.document_type,
      facts: documentRecord.facts,
      parties: documentRecord.parties,
      relief_sought: documentRecord.relief_sought,
      prayer: documentRecord.prayer,
      required_docs: documentRecord.required_docs,
      filing_office: documentRecord.filing_office,
      confidence_score: documentRecord.confidence_score,
      template_id: documentRecord.template_id,
      generated_by: documentRecord.generated_by,
      timestamp: documentRecord.created_at.toISOString(),
      plain_language_summary: documentRecord.plain_language_summary
    };

    const pdfBuffer = documentGenerator.generatePDF(document);
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="document-${documentId}.pdf"`);
    res.send(pdfBuffer);

  } catch (error) {
    console.error('PDF generation error:', error);
    res.status(500).json({ error: 'Failed to generate PDF' });
  }
});

export default router;