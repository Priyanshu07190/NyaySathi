import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configure dotenv to load from the project root FIRST
const envPath = join(__dirname, '..', '.env');
console.log('Loading .env from:', envPath);
const result = dotenv.config({ path: envPath });
if (result.error) {
  console.error('Error loading .env file:', result.error);
} else {
  console.log('✅ Environment variables loaded successfully');
  console.log('MONGODB_URI:', process.env.MONGODB_URI ? 'SET' : 'NOT SET');
  console.log('OPENROUTER_API_KEY:', process.env.OPENROUTER_API_KEY ? 'SET' : 'NOT SET');
}

// Import only basic modules first
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

// Import application modules AFTER env is loaded
import conversationRouter from './routes/conversation.js';
import documentsRouter from './routes/documents.js';
import ngoRouter from './routes/ngo.js';
import adminRouter from './routes/admin.js';
import templatesRouter from './routes/templates.js';
import authRouter from './routes/auth.js';
import { connectDB } from './services/db.js';
import { authenticateToken } from './middleware/auth.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-domain.com'] 
    : ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// Note: File uploads for audio use in-memory storage configured in the audio router

// Routes
app.use('/api/auth', authRouter);
app.use('/api/conversation', authenticateToken, conversationRouter);
app.use('/api/documents', authenticateToken, documentsRouter);
app.use('/api/ngo', authenticateToken, ngoRouter);
app.use('/api/admin', authenticateToken, adminRouter);
app.use('/api/templates', authenticateToken, templatesRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  // Connect to MongoDB if URI provided
  connectDB();
  console.log(`🚀 NyaySathi backend server running on port ${PORT}`);
  console.log(`📋 API docs available at http://localhost:${PORT}/api/health`);
});