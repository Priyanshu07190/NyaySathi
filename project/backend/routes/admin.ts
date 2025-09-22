import { Router } from 'express';
import { AuthRequest } from '../middleware/auth.js';
import { SessionModel } from '../models/Session.js';
import { DocumentModel } from '../models/Document.js';
import { ConversationModel } from '../models/Conversation.js';

const router = Router();

router.get('/recent-sessions', async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const sessions = await SessionModel
      .find({ user_id: req.user.id })
      .sort({ created_at: -1 })
      .limit(10)
      .lean();

    res.json({
      sessions: sessions.map(session => ({
        session_id: session.session_id,
        language: session.language,
        document_type: session.document_type || 'unknown',
        status: session.status,
        created_at: session.created_at,
        confidence_score: session.confidence_score
      })),
      count: sessions.length
    });
  } catch (error) {
    console.error('Admin error:', error);
    res.status(500).json({ error: 'Failed to fetch recent sessions' });
  }
});

router.get('/statistics', async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const [
      totalSessions,
      completedDocuments,
      activeConversations
    ] = await Promise.all([
      SessionModel.countDocuments({ user_id: req.user.id }),
      DocumentModel.countDocuments({ user_id: req.user.id, status: { $in: ['validated', 'submitted', 'approved'] } }),
      ConversationModel.countDocuments({ user_id: req.user.id, status: 'active' })
    ]);

    res.json({
      totalSessions,
      completedDocuments,
      activeConversations
    });
  } catch (error) {
    console.error('Statistics error:', error);
    res.status(500).json({ error: 'Failed to fetch statistics' });
  }
});

export default router;