import express from 'express';

const router = express.Router();

router.post('/send', async (req, res) => {
  try {
    const { message, language = 'en' } = req.body;
    
    // Simulate AI response for now
    const response = {
      message: "Thank you for your legal query. I understand you need assistance. How can I help you further?",
      suggestions: [
        "Tell me more about your situation",
        "Do you have any documents related to this case?",
        "Would you like me to help draft a legal document?"
      ]
    };
    
    res.json(response);
  } catch (error) {
    console.error('Conversation error:', error);
    res.status(500).json({ error: 'Failed to process conversation' });
  }
});

export default router;