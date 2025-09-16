import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import conversationRouter from './routes/conversation.js';
import documentsRouter from './routes/documents.js';
import ngoRouter from './routes/ngo.js';
import adminRouter from './routes/admin.js';
import templatesRouter from './routes/templates.js';
import audioRouter from './routes/audio.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

// Note: File uploads for audio use in-memory storage configured in the audio router

// Routes
app.use('/api/conversation', conversationRouter);
app.use('/api/documents', documentsRouter);
app.use('/api/ngo', ngoRouter);
app.use('/api/admin', adminRouter);
app.use('/api/templates', templatesRouter);
app.use('/api/audio', audioRouter);

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
  console.log(`🚀 NyaySathi backend server running on port ${PORT}`);
  console.log(`📋 API docs available at http://localhost:${PORT}/api/health`);
});