import mongoose from '../services/db.js';

const DocumentSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  document_id: { type: String, unique: true, index: true },
  template_id: { type: String, index: true },
  language: { type: String, required: true, index: true },
  jurisdiction: { type: String, required: true },
  document_type: { type: String, required: true, index: true },
  
  // Document content
  facts: { type: String, required: true },
  parties: {
    petitioner: {
      name: String,
      address: String
    },
    respondent: {
      name: String,
      address: String
    }
  },
  relief_sought: String,
  prayer: String,
  
  // Document metadata
  required_docs: [String],
  filing_office: {
    name: String,
    address: String,
    hours: String
  },
  
  // AI metrics
  confidence_score: { type: Number, default: 0 },
  generated_by: { type: String, default: 'nyaysathi-ai' },
  plain_language_summary: String,
  citations: [{
    text: String,
    source: String
  }],
  
  // Validation results
  validation: {
    confidence: Number,
    warnings: [String],
    errors: [String],
    requires_human_review: { type: Boolean, default: false }
  },
  
  // Status tracking
  status: {
    type: String,
    enum: ['draft', 'validated', 'submitted', 'approved', 'rejected'],
    default: 'draft'
  },
  
  // File references
  pdf_url: String,
  docx_url: String,
  
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

DocumentSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

export const DocumentModel = mongoose.models.Document || mongoose.model('Document', DocumentSchema);