import mongoose from '../services/db.js';

const SessionSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  session_id: { type: String, unique: true, index: true },
  language: { type: String, required: true },
  document_type: { type: String },
  status: {
    type: String,
    enum: ['active', 'completed', 'abandoned', 'error'],
    default: 'active'
  },
  conversation_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Conversation' },
  document_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Document' },
  confidence_score: { type: Number, default: 0 },
  
  // Session metadata
  ip_address: String,
  user_agent: String,
  
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  completed_at: Date
});

SessionSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

export const SessionModel = mongoose.models.Session || mongoose.model('Session', SessionSchema);