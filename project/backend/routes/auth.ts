import express from 'express';
import rateLimit from 'express-rate-limit';
import { UserModel } from '../models/User.js';
import { generateToken, AuthRequest, authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Rate limiting for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: { error: 'Too many authentication attempts, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Register new user
router.post('/register', authLimiter, async (req, res) => {
  console.log('📝 Registration request received:', { email: req.body?.email, name: req.body?.name });
  
  try {
    const { email, password, name, phone, address } = req.body;

    // Validation
    if (!email || !password || !name) {
      console.log('❌ Validation failed: missing required fields');
      return res.status(400).json({ 
        error: 'Email, password, and name are required' 
      });
    }

    if (password.length < 6) {
      return res.status(400).json({ 
        error: 'Password must be at least 6 characters long' 
      });
    }

    console.log('🔍 Checking if user exists...');
    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      console.log('❌ User already exists');
      return res.status(409).json({ 
        error: 'User with this email already exists' 
      });
    }
    console.log('✅ User does not exist, proceeding with creation...');

    // Create new user
    const user = await UserModel.create({
      email,
      password,
      name,
      phone,
      address
    });

    // Generate token
    const token = generateToken(user._id.toString());

    // Update last login
    await UserModel.findByIdAndUpdate(user._id, { 
      lastLogin: new Date() 
    });

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        preferences: user.preferences,
        role: user.role
      }
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ 
      error: 'Registration failed',
      message: 'Internal server error' 
    });
  }
});

// Login user
router.post('/login', authLimiter, async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ 
        error: 'Email and password are required' 
      });
    }

    // Find user
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ 
        error: 'Invalid email or password' 
      });
    }

    // Check password
    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
      return res.status(401).json({ 
        error: 'Invalid email or password' 
      });
    }

    // Generate token
    const token = generateToken(user._id.toString());

    // Update last login
    await UserModel.findByIdAndUpdate(user._id, { 
      lastLogin: new Date() 
    });

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        preferences: user.preferences,
        role: user.role
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      error: 'Login failed',
      message: 'Internal server error' 
    });
  }
});

// Get user profile
router.get('/profile', authenticateToken, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const user = await UserModel.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        address: user.address,
        preferences: user.preferences,
        role: user.role,
        isEmailVerified: user.isEmailVerified,
        lastLogin: user.lastLogin,
        created_at: user.created_at
      }
    });

  } catch (error) {
    console.error('Profile fetch error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch profile' 
    });
  }
});

// Update user profile
router.put('/profile', authenticateToken, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const { name, phone, address, preferences } = req.body;
    
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.user.id,
      {
        ...(name && { name }),
        ...(phone && { phone }),
        ...(address && { address }),
        ...(preferences && { preferences }),
        updated_at: new Date()
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      message: 'Profile updated successfully',
      user: {
        id: updatedUser._id,
        email: updatedUser.email,
        name: updatedUser.name,
        phone: updatedUser.phone,
        address: updatedUser.address,
        preferences: updatedUser.preferences,
        role: updatedUser.role
      }
    });

  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ 
      error: 'Failed to update profile' 
    });
  }
});

// Update language preference
router.patch('/language', authenticateToken, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const { language } = req.body;
    
    if (!language || !['hi', 'en', 'ta', 'te', 'kn', 'bn', 'gu'].includes(language)) {
      return res.status(400).json({ error: 'Invalid language' });
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      req.user.id,
      {
        'preferences.language': language,
        updated_at: new Date()
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      message: 'Language preference updated',
      language: updatedUser.preferences.language
    });

  } catch (error) {
    console.error('Language update error:', error);
    res.status(500).json({ 
      error: 'Failed to update language preference' 
    });
  }
});

// Logout (client should delete token)
router.post('/logout', (req, res) => {
  res.json({ message: 'Logged out successfully' });
});

export default router;