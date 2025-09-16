import express from 'express';
import { OpenRouterService } from '../services/openrouter.js';

const router = express.Router();
const openRouter = new OpenRouterService();

router.post('/send', async (req, res) => {
  try {
    const { message, language = 'hi', session_id = 'default' } = req.body;
    
    // Use OpenRouter for AI response
    let aiResponse = "Thank you for your legal query. I understand you need assistance. How can I help you further?";
    let suggestions = [
      "Tell me more about your situation",
      "Do you have any documents related to this case?", 
      "Would you like me to help draft a legal document?"
    ];
    
    try {
      // Try to get AI response if API key is available
      const response = await openRouter.conversationResponse(message, language);
      if (response) {
        aiResponse = response.message || aiResponse;
        suggestions = response.suggestions || suggestions;
      }
    } catch (aiError) {
      console.log('AI service unavailable, using fallback response');
    }
    
    const response = {
      session_id,
      message: aiResponse,
      suggestions,
      language
    };
    
    res.json(response);
  } catch (error) {
    console.error('Conversation error:', error);
    res.status(500).json({ error: 'Failed to process conversation' });
  }
});

export default router;