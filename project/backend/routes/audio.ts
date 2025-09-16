import express from 'express';
import multer from 'multer';
import { whisperService } from '../services/whisper.js';

const router = express.Router();

// Use memory storage for handling in-memory audio uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 } // 10 MB
});

// POST /api/audio/transcribe
router.post('/transcribe', upload.single('audio'), async (req, res) => {
  try {
    const language = (req.body?.language || req.query?.language || 'hi') as string;
    const file = req.file;

    if (!file || !file.buffer) {
      return res.status(400).json({ error: 'No audio file uploaded. Use form-data with field "audio".' });
    }

    const result = await whisperService.transcribeAudio(file.buffer, language);
    return res.json({
      transcript: result.transcript,
      detectedLanguage: result.detectedLanguage,
      confidence: result.confidence
    });
  } catch (error) {
    console.error('Audio transcribe error:', error);
    return res.status(500).json({ error: 'Failed to transcribe audio' });
  }
});

// POST /api/audio/tts
router.post('/tts', async (req, res) => {
  try {
    const { text, language = 'hi' } = req.body || {};
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Invalid or missing "text" in body' });
    }

    const audioBuffer = await whisperService.synthesizeSpeech(text, language);
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Disposition', 'inline; filename="speech.mp3"');
    return res.send(audioBuffer);
  } catch (error) {
    console.error('TTS error:', error);
    return res.status(500).json({ error: 'Failed to synthesize speech' });
  }
});

export default router;
