import express from 'express';
import { OpenRouterService } from '../services/openrouter.js';

const router = express.Router();
const openRouter = new OpenRouterService();

router.post('/send', async (req, res) => {
  try {
    const { message, language = 'hi', session_id = 'default' } = req.body;
    
    // Validate input
    if (!message || message.trim().length === 0) {
      return res.status(400).json({ 
        error: 'Message is required',
        message: language === 'hi' ? 'कृपया अपना संदेश लिखें।' : 'Please enter your message.'
      });
    }
    
    console.log(`📩 Conversation request - Language: ${language}, Message: ${message.substring(0, 50)}...`);
    
    // Default fallback responses
    let aiResponse = language === 'hi' 
      ? "धन्यवाद। मैं आपकी कानूनी समस्या को समझने की कोशिश कर रहा हूँ। कृपया और विवरण बताएं।"
      : "Thank you for your legal query. I understand you need assistance. Please provide more details.";
    
    let suggestions = language === 'hi' 
      ? [
          "अपनी समस्या के बारे में और बताएं",
          "दस्तावेज़ बनवाना चाहते हैं?", 
          "एनजीओ से संपर्क करें"
        ]
      : [
          "Tell me more about your situation",
          "Do you want to generate a document?", 
          "Connect with an NGO"
        ];
    
    try {
      // Try to get AI response
      console.log('🤖 Attempting to get AI response...');
      const aiResult = await openRouter.conversationResponse(message, language);
      
      if (aiResult && aiResult.message) {
        aiResponse = aiResult.message;
        suggestions = aiResult.suggestions || suggestions;
        console.log('✅ AI response received successfully');
      } else {
        console.log('⚠️ AI response was empty, using fallback');
      }
    } catch (aiError) {
      console.log('❌ AI service error:', aiError instanceof Error ? aiError.message : 'Unknown error');
      console.log('Using intelligent fallback response...');
    }
    
    const response = {
      session_id,
      message: aiResponse,
      suggestions,
      language,
      timestamp: new Date().toISOString()
    };
    
    console.log('📤 Sending response:', response.message.substring(0, 100) + '...');
    res.json(response);
    
  } catch (error) {
    console.error('❌ Conversation route error:', error);
    res.status(500).json({ 
      error: 'Failed to process conversation',
      message: req.body?.language === 'hi' 
        ? 'माफ करें, कुछ समस्या हुई है। कृपया दोबारा कोशिश करें।'
        : 'Sorry, something went wrong. Please try again.'
    });
  }
});

export default router;