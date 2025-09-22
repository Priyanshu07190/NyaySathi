import mongoose from '../services/db.js';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true,
    trim: true,
    index: true
  },
  password: { 
    type: String, 
    required: true,
    minLength: 6
  },
  name: { 
    type: String, 
    required: true,
    trim: true
  },
  phone: { 
    type: String,
    trim: true
  },
  address: { 
    type: String,
    trim: true
  },
  preferences: {
    language: { 
      type: String, 
      default: 'hi',
      enum: ['hi', 'en', 'ta', 'te', 'kn', 'bn', 'gu']
    },
    notifications: { 
      type: Boolean, 
      default: true 
    },
    theme: { 
      type: String, 
      default: 'light',
      enum: ['light', 'dark']
    }
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin', 'ngo']
  },
  isEmailVerified: {
    type: Boolean,
    default: false
  },
  lastLogin: {
    type: Date
  },
  created_at: { 
    type: Date, 
    default: Date.now 
  },
  updated_at: { 
    type: Date, 
    default: Date.now 
  }
});

// Hash password before saving
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

// Update timestamp on save
UserSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

// Compare password method
UserSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

// Remove password from JSON output
UserSchema.methods.toJSON = function() {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

export const UserModel = mongoose.models.User || mongoose.model('User', UserSchema);