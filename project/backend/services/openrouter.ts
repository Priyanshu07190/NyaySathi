import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

class OpenRouterService {
  private client: OpenAI | null = null;
  private hasValidApiKey: boolean;

  constructor() {
    const apiKey = process.env.OPENROUTER_API_KEY;
    this.hasValidApiKey = Boolean(apiKey && apiKey !== 'sk-or-placeholder' && apiKey.length > 10);
    
    if (this.hasValidApiKey) {
      this.client = new OpenAI({
        baseURL: process.env.OPENROUTER_BASE_URL || 'https://openrouter.ai/api/v1',
        apiKey: apiKey,
        defaultHeaders: {
          'HTTP-Referer': 'https://nyaysathi.ai',
          'X-Title': 'NyaySathi AI Paralegal Platform'
        }
      });
    } else {
      console.warn('OpenRouter API key not configured. AI features will use mock responses.');
    }
  }

  async generateLegalDocument(prompt: string, context: string, language: string = 'hi'): Promise<any> {
    try {
      if (!this.hasValidApiKey || !this.client) {
        return this.getMockDocumentResponse(prompt, language);
      }

      const systemPrompt = `You are NyaySathi, an AI legal assistant specializing in Indian law. Generate legal documents in JSON format with proper Hindi/English content based on the user's needs.

Always respond with a JSON object containing:
- title: Document title
- content: Document body with legal language  
- sections: Array of document sections
- metadata: Document metadata (type, language, etc.)

Language: ${language}
Context/Templates: ${context}`;

      const response = await this.client.chat.completions.create({
        model: 'anthropic/claude-3.5-sonnet',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: prompt }
        ],
        temperature: 0.1,
        max_tokens: 2048
      });

      const content = response.choices[0]?.message?.content;
      if (!content) {
        throw new Error('No response generated');
      }

      // Try to parse JSON response
      try {
        return JSON.parse(content);
      } catch (parseError) {
        console.error('Failed to parse JSON response:', content);
        throw new Error('Invalid JSON response from AI');
      }

    } catch (error) {
      console.error('OpenRouter API error:', error);
      throw new Error(`AI generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async classifyIntent(text: string, language: string = 'hi'): Promise<{
    intent: string;
    entities: Record<string, any>;
    confidence: number;
  }> {
    try {
      if (!this.hasValidApiKey || !this.client) {
        return this.getMockIntentResponse(text, language);
      }

      const prompt = `Analyze this user input and classify the legal intent. Return JSON only:

{
  "intent": "one of: wage_complaint, rti_request, pension_claim, tenancy_dispute, other",
  "entities": {
    "employer": "string or null",
    "amount": "number or null", 
    "duration": "string or null",
    "location": "string or null",
    "names": ["array of person names"],
    "dates": ["array of dates mentioned"]
  },
  "confidence": 0.0-1.0
}

User input (${language}): ${text}`;

      const response = await this.client.chat.completions.create({
        model: 'anthropic/claude-3.5-sonnet',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.1,
        max_tokens: 512
      });

      const content = response.choices[0]?.message?.content;
      if (!content) {
        throw new Error('No classification response');
      }

      return JSON.parse(content);
    } catch (error) {
      console.error('Intent classification error:', error);
      return {
        intent: 'other',
        entities: {},
        confidence: 0.1
      };
    }
  }

  async conversationResponse(message: string, language: string = 'hi'): Promise<any> {
    try {
      if (!this.hasValidApiKey || !this.client) {
        return this.getMockConversationResponse(message, language);
      }

      const systemPrompt = `You are NyaySathi, an AI paralegal assistant for rural India. You help users with legal issues by:
1. Understanding their problems in simple language
2. Providing helpful legal guidance
3. Suggesting next steps like document generation or NGO contact

Respond in ${language === 'hi' ? 'Hindi' : 'English'} in a helpful, empathetic way.
Always ask clarifying questions to better understand the user's situation.`;

      const response = await this.client.chat.completions.create({
        model: 'openai/gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        max_tokens: 300,
        temperature: 0.7
      });

      const aiMessage = response.choices[0]?.message?.content || 'I understand your concern. Could you please provide more details?';
      
      return {
        message: aiMessage,
        suggestions: [
          language === 'hi' ? 'अपनी समस्या के बारे में और बताएं' : 'Tell me more about your issue',
          language === 'hi' ? 'दस्तावेज़ बनवाना चाहते हैं?' : 'Do you want to generate a document?',
          language === 'hi' ? 'एनजीओ से संपर्क करें' : 'Connect with an NGO'
        ]
      };
    } catch (error) {
      console.error('Conversation error:', error);
      throw error;
    }
  }

  private getMockDocumentResponse(prompt: string, language: string) {
    return {
      title: language === 'hi' ? 'कानूनी दस्तावेज़' : 'Legal Document',
      content: language === 'hi' 
        ? 'यह एक नमूना कानूनी दस्तावेज़ है। वास्तविक AI सुविधाओं के लिए OpenRouter API key की आवश्यकता है।'
        : 'This is a sample legal document. Real AI features require OpenRouter API key configuration.',
      sections: [
        {
          heading: language === 'hi' ? 'परिचय' : 'Introduction',
          content: language === 'hi' 
            ? 'API key कॉन्फ़िगर करने के बाद यहाँ वास्तविक AI-generated content दिखेगा।'
            : 'Real AI-generated content will appear here after API key configuration.'
        }
      ],
      metadata: {
        type: 'mock_document',
        language: language,
        generated: true
      }
    };
  }

  private getMockConversationResponse(message: string, language: string) {
    return {
      response: language === 'hi' 
        ? 'मैं NyaySathi हूँ। वर्तमान में मैं डेमो मोड में हूँ। पूर्ण AI सुविधाओं के लिए OpenRouter API key की आवश्यकता है। कृपया अपनी कानूनी समस्या बताएं।'
        : 'I am NyaySathi. Currently in demo mode. Full AI features require OpenRouter API key. Please describe your legal issue.',
      suggestions: [
        language === 'hi' ? 'वेतन की समस्या' : 'Salary Issues',
        language === 'hi' ? 'संपत्ति विवाद' : 'Property Dispute', 
        language === 'hi' ? 'RTI आवेदन' : 'RTI Application'
      ]
    };
  }

  private getMockIntentResponse(text: string, language: string) {
    // Simple keyword-based intent detection for demo mode
    const lowerText = text.toLowerCase();
    let intent = 'other';
    
    if (lowerText.includes('salary') || lowerText.includes('wage') || lowerText.includes('वेतन') || lowerText.includes('तनख्वाह')) {
      intent = 'wage_complaint';
    } else if (lowerText.includes('rti') || lowerText.includes('information') || lowerText.includes('जानकारी')) {
      intent = 'rti_request';
    } else if (lowerText.includes('pension') || lowerText.includes('पेंशन')) {
      intent = 'pension_claim';
    } else if (lowerText.includes('rent') || lowerText.includes('tenant') || lowerText.includes('किराया') || lowerText.includes('मकान')) {
      intent = 'tenancy_dispute';
    }

    return {
      intent,
      entities: {
        employer: null,
        amount: null,
        duration: null,
        location: null,
        names: [],
        dates: []
      },
      confidence: 0.5
    };
  }
}

export { OpenRouterService };
export const openRouterService = new OpenRouterService();