import mongoose from '../services/db.js';

const TemplateSchema = new mongoose.Schema({
  template_id: { type: String, unique: true, index: true },
  type: { type: String, index: true },
  language: { type: String, index: true },
  jurisdiction: { type: String, default: 'all', index: true },
  fields: { type: Object, default: {} },
  content: { type: String, required: true },
  requiredDocs: { type: [String], default: [] },
  filingOffice: {
    name: String,
    address: String,
    hours: String
  },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  is_public: { type: Boolean, default: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

TemplateSchema.pre('save', function (this: any, next: (err?: any) => void) {
  this.updated_at = new Date();
  next();
});

export const TemplateModel = mongoose.models.Template || mongoose.model('Template', TemplateSchema);
