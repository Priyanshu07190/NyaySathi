import { Router } from 'express';

const router = Router();

// Simple admin dashboard data
const adminStats = {
  total_sessions: 0,
  documents_generated: 0,
  ngo_escalations: 0,
  languages: ['hi', 'ta', 'te', 'kn'],
  document_types: ['wage_complaint', 'rti_request', 'pension_claim', 'tenancy_dispute']
};

router.get('/stats', (req, res) => {
  try {
    // In production, query actual database for real stats
    const stats = {
      ...adminStats,
      total_sessions: Math.floor(Math.random() * 1000) + 500,
      documents_generated: Math.floor(Math.random() * 800) + 300,
      ngo_escalations: Math.floor(Math.random() * 200) + 50,
      success_rate: 0.92,
      avg_confidence_score: 0.87,
      last_updated: new Date().toISOString()
    };

    res.json(stats);
  } catch (error) {
    console.error('Error fetching admin stats:', error);
    res.status(500).json({ error: 'Failed to fetch admin statistics' });
  }
});

router.get('/recent-sessions', (req, res) => {
  try {
    // Mock recent sessions data
    const sessions = Array.from({ length: 10 }, (_, i) => ({
      session_id: `session_${i + 1}`,
      language: ['hi', 'ta', 'te', 'kn'][Math.floor(Math.random() * 4)],
      document_type: ['wage_complaint', 'rti_request', 'pension_claim'][Math.floor(Math.random() * 3)],
      status: ['completed', 'pending', 'escalated'][Math.floor(Math.random() * 3)],
      created_at: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
      confidence_score: Math.random() * 0.5 + 0.5
    }));

    res.json({ sessions });
  } catch (error) {
    console.error('Error fetching recent sessions:', error);
    res.status(500).json({ error: 'Failed to fetch recent sessions' });
  }
});

export default router;