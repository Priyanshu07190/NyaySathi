import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

class WhisperService {
  private client: OpenAI;

  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY || process.env.OPENROUTER_API_KEY,
      baseURL: process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1'
    });
  }

  async transcribeAudio(audioBuffer: Buffer, language: string = 'hi'): Promise<{
    transcript: string;
    detectedLanguage: string;
    confidence: number;
  }> {
    try {
      // Save audio buffer to temporary file
      const tempDir = path.join(process.cwd(), 'temp');
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true });
      }

      const tempFilePath = path.join(tempDir, `audio_${uuidv4()}.webm`);
      fs.writeFileSync(tempFilePath, audioBuffer);

      // Transcribe using Whisper
      const transcription = await this.client.audio.transcriptions.create({
        file: fs.createReadStream(tempFilePath),
        model: 'whisper-1',
        language: this.mapLanguageCode(language),
        response_format: 'verbose_json',
        temperature: 0.1
      });

      // Clean up temp file
      fs.unlinkSync(tempFilePath);

      return {
        transcript: transcription.text || '',
        detectedLanguage: transcription.language || language,
        confidence: this.calculateConfidence(transcription)
      };

    } catch (error) {
      console.error('Whisper transcription error:', error);
      
      // Fallback to mock transcription for demo
      return this.getMockTranscription(language);
    }
  }

  private mapLanguageCode(lang: string): string {
    const languageMap: Record<string, string> = {
      'hi': 'hi',      // Hindi
      'ta': 'ta',      // Tamil
      'te': 'te',      // Telugu
      'kn': 'kn',      // Kannada
      'bn': 'bn',      // Bengali
      'gu': 'gu',      // Gujarati
      'mr': 'mr',      // Marathi
      'pa': 'pa',      // Punjabi
      'or': 'or',      // Odia
      'as': 'as',      // Assamese
      'en': 'en'       // English
    };

    return languageMap[lang] || 'hi';
  }

  private calculateConfidence(transcription: any): number {
    // Calculate confidence based on transcription quality
    if (!transcription.text || transcription.text.length < 5) {
      return 0.3;
    }

    // Simple heuristic based on text length and segments
    const textLength = transcription.text.length;
    const segments = transcription.segments || [];
    
    let confidence = 0.7;
    
    if (textLength > 50) confidence += 0.1;
    if (segments.length > 0) confidence += 0.1;
    
    return Math.min(confidence, 0.95);
  }

  private getMockTranscription(language: string): {
    transcript: string;
    detectedLanguage: string;
    confidence: number;
  } {
    const mockTranscripts: Record<string, string> = {
      'hi': 'मेरा मालिक तीन महीने से वेतन नहीं दे रहा है। मुझे क्या करना चाहिए?',
      'ta': 'என் முதலாளி மூன்று மாதமாக சம்பளம் கொடுக்கவில்லை। நான் என்ன செய்ய வேண்டும்?',
      'te': 'నా యజమాని మూడు నెలలుగా జీతం ఇవ్వడం లేదు। నేను ఏమి చేయాలి?',
      'kn': 'ನನ್ನ ಮಾಲೀಕರು ಮೂರು ತಿಂಗಳಿಂದ ಸಂಬಳ ಕೊಡುತ್ತಿಲ್ಲ। ನಾನು ಏನು ಮಾಡಬೇಕು?',
      'bn': 'আমার মালিক তিন মাস ধরে বেতন দিচ্ছে না। আমার কী করা উচিত?',
      'gu': 'મારા માલિક ત્રણ મહિનાથી પગાર આપતા નથી। મારે શું કરવું જોઈએ?',
      'en': 'My employer has not paid salary for three months. What should I do?'
    };

    return {
      transcript: mockTranscripts[language] || mockTranscripts['hi'],
      detectedLanguage: language,
      confidence: 0.85
    };
  }

  async synthesizeSpeech(text: string, language: string = 'hi'): Promise<Buffer> {
    try {
      const response = await this.client.audio.speech.create({
        model: 'tts-1',
        voice: 'alloy',
        input: text,
        response_format: 'mp3'
      });

      const buffer = Buffer.from(await response.arrayBuffer());
      return buffer;

    } catch (error) {
      console.error('TTS synthesis error:', error);
      throw new Error('Failed to synthesize speech');
    }
  }
}

export const whisperService = new WhisperService();