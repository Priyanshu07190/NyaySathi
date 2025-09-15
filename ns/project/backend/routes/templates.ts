import { Router } from 'express';
import { vectorDB } from '../services/vector-db.js';

const router = Router();

router.get('/', (req, res) => {
  try {
    const { language, document_type, jurisdiction } = req.query;
    
    const templates = vectorDB.getAllTemplates();
    
    let filteredTemplates = templates;
    
    if (language) {
      filteredTemplates = filteredTemplates.filter(t => t.language === language);
    }
    
    if (document_type) {
      filteredTemplates = filteredTemplates.filter(t => t.type === document_type);
    }
    
    if (jurisdiction) {
      filteredTemplates = filteredTemplates.filter(t => 
        t.jurisdiction === jurisdiction || t.jurisdiction === 'all'
      );
    }

    res.json({
      templates: filteredTemplates,
      count: filteredTemplates.length
    });
  } catch (error) {
    console.error('Error fetching templates:', error);
    res.status(500).json({ error: 'Failed to fetch templates' });
  }
});

router.get('/:template_id', (req, res) => {
  try {
    const { template_id } = req.params;
    const template = vectorDB.getTemplate(template_id);
    
    if (!template) {
      return res.status(404).json({ error: 'Template not found' });
    }

    res.json(template);
  } catch (error) {
    console.error('Error fetching template:', error);
    res.status(500).json({ error: 'Failed to fetch template' });
  }
});

router.post('/search', (req, res) => {
  try {
    const { query, language, document_type, limit = 5 } = req.body;
    
    if (!query) {
      return res.status(400).json({ error: 'Search query is required' });
    }

    const results = vectorDB.search(query, {
      language,
      document_type,
      type: 'template'
    }, limit);

    res.json({
      results,
      count: results.length,
      query
    });
  } catch (error) {
    console.error('Error searching templates:', error);
    res.status(500).json({ error: 'Failed to search templates' });
  }
});

export default router;