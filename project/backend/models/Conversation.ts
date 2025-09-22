import mongoose from '../services/db.js';

const ConversationSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  messages: [{
    role: { type: String, enum: ['user', 'assistant'], required: true },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    language: { type: String, default: 'hi' }
  }],
  language: { type: String, default: 'hi' },
  jurisdiction: { type: String, default: 'India' },
  intent: {
    classified: { type: String },
    confidence: { type: Number, default: 0 },
    entities: { type: Object, default: {} }
  },
  document_generated: {
    document_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Document' },
    generated_at: Date
  },
  status: {
    type: String,
    enum: ['active', 'completed', 'archived'],
    default: 'active'
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

ConversationSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

export const ConversationModel = mongoose.models.Conversation || mongoose.model('Conversation', ConversationSchema);