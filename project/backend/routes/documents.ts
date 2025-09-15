import express from 'express';

const router = express.Router();

router.get('/templates', async (req, res) => {
  try {
    const templates = [
      { id: 1, name: 'RTI Application', category: 'Government' },
      { id: 2, name: 'Labor Complaint', category: 'Employment' },
      { id: 3, name: 'Consumer Complaint', category: 'Consumer Rights' }
    ];
    
    res.json(templates);
  } catch (error) {
    console.error('Documents error:', error);
    res.status(500).json({ error: 'Failed to fetch documents' });
  }
});

export default router;