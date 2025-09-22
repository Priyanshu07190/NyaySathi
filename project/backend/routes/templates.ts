import { Router } from 'express';
import { vectorDB } from '../services/vector-db.js';
import { TemplateModel } from '../models/Template.js';

const router = Router();

// Create a new template
router.post('/', async (req, res) => {
  try {
    const { template_id, type, language, jurisdiction = 'all', fields = {}, content, requiredDocs = [], filingOffice = {} } = req.body || {};
    if (!template_id || !content || !type || !language) {
      return res.status(400).json({ error: 'template_id, type, language, and content are required' });
    }

    const existing = await TemplateModel.findOne({ template_id }).lean();
    if (existing) return res.status(409).json({ error: 'Template with this template_id already exists' });

    const doc = await TemplateModel.create({ template_id, type, language, jurisdiction, fields, content, requiredDocs, filingOffice });
    return res.status(201).json(doc);
  } catch (error) {
    console.error('Error creating template:', error);
    return res.status(500).json({ error: 'Failed to create template' });
  }
});

router.get('/', async (req, res) => {
  try {
    const { language, document_type, jurisdiction } = req.query as Record<string, string>;

    // Try DB first
    let query: any = {};
    if (language) query.language = language;
    if (document_type) query.type = document_type;
    if (jurisdiction) query.jurisdiction = { $in: [jurisdiction, 'all'] };

    let dbTemplates: any[] = [];
    try {
      dbTemplates = await TemplateModel.find(query).lean();
    } catch {}

    if (dbTemplates && dbTemplates.length > 0) {
      return res.json({ templates: dbTemplates, count: dbTemplates.length, source: 'db' });
    }

    // Fallback to in-memory vector DB
    const templates = vectorDB.getAllTemplates();
    let filteredTemplates = templates;
    if (language) filteredTemplates = filteredTemplates.filter(t => t.language === language);
    if (document_type) filteredTemplates = filteredTemplates.filter(t => t.type === document_type);
    if (jurisdiction) filteredTemplates = filteredTemplates.filter(t => t.jurisdiction === jurisdiction || t.jurisdiction === 'all');

    res.json({ templates: filteredTemplates, count: filteredTemplates.length, source: 'memory' });
  } catch (error) {
    console.error('Error fetching templates:', error);
    res.status(500).json({ error: 'Failed to fetch templates' });
  }
});

router.get('/:template_id', async (req, res) => {
  try {
    const { template_id } = req.params as any;
    let template: any = null;
    try {
      template = await TemplateModel.findOne({ template_id }).lean();
    } catch {}
    if (!template) {
      template = vectorDB.getTemplate(template_id);
    }
    if (!template) {
      return res.status(404).json({ error: 'Template not found' });
    }
    res.json(template);
  } catch (error) {
    console.error('Error fetching template:', error);
    res.status(500).json({ error: 'Failed to fetch template' });
  }
});

router.post('/search', async (req, res) => {
  try {
    const { query, language, document_type, limit = 5 } = req.body || {};
    if (!query || typeof query !== 'string') return res.status(400).json({ error: 'Search query is required' });

    // Try DB regex search
    try {
      const dbResults = await TemplateModel.find({
        ...(language ? { language } : {}),
        ...(document_type ? { type: document_type } : {}),
        $or: [
          { content: { $regex: query, $options: 'i' } },
          { template_id: { $regex: query, $options: 'i' } }
        ]
      })
      .limit(Math.min(20, Number(limit) || 5))
      .lean();
      if (dbResults.length > 0) {
        return res.json({ results: dbResults, count: dbResults.length, query, source: 'db' });
      }
    } catch {}

    // Fallback to memory search
    const results = vectorDB.search(query, { language, document_type, type: 'template' }, limit);
    res.json({ results, count: results.length, query, source: 'memory' });
  } catch (error) {
    console.error('Error searching templates:', error);
    res.status(500).json({ error: 'Failed to search templates' });
  }
});

// Seed DB with a couple of defaults if empty
router.post('/seed', async (_req, res) => {
  try {
    const count = await TemplateModel.estimatedDocumentCount();
    if (count > 0) return res.json({ seeded: false, reason: 'already has templates' });
    const memoryTemplates = vectorDB.getAllTemplates();
    const docs = memoryTemplates.map((t: any) => {
      const filingOffice = t.filing_office || t.filingOffice || (t.filing_office_template ? {
        name: t.filing_office_template,
        address: '',
        hours: ''
      } : {});
      return {
        template_id: t.id,
        type: t.type,
        language: t.language,
        jurisdiction: t.jurisdiction,
        fields: t.fields || {},
        content: t.content,
        requiredDocs: t.required_docs || t.requiredDocs || [],
        filingOffice
      };
    });
    await TemplateModel.insertMany(docs);
    res.json({ seeded: true, count: docs.length });
  } catch (error) {
    console.error('Error seeding templates:', error);
    res.status(500).json({ error: 'Failed to seed templates' });
  }
});

// Update a template by template_id
router.put('/:template_id', async (req, res) => {
  try {
    const { template_id } = req.params as any;
    const update: any = { ...req.body, updated_at: new Date() };
    delete update.template_id; // Do not allow changing the identifier
    const doc = await TemplateModel.findOneAndUpdate({ template_id }, update, { new: true }).lean();
    if (!doc) return res.status(404).json({ error: 'Template not found' });
    return res.json(doc);
  } catch (error) {
    console.error('Error updating template:', error);
    return res.status(500).json({ error: 'Failed to update template' });
  }
});

// Delete a template by template_id
router.delete('/:template_id', async (req, res) => {
  try {
    const { template_id } = req.params as any;
    const result = await TemplateModel.deleteOne({ template_id });
    if (result.deletedCount === 0) return res.status(404).json({ error: 'Template not found' });
    return res.json({ deleted: true, template_id });
  } catch (error) {
    console.error('Error deleting template:', error);
    return res.status(500).json({ error: 'Failed to delete template' });
  }
});

export default router;