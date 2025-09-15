import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

class OpenRouterService {
  private client: OpenAI;

  constructor() {
    this.client = new OpenAI({
      baseURL: process.env.OPENROUTER_BASE_URL || 'https://openrouter.ai/api/v1',
      apiKey: process.env.OPENROUTER_API_KEY,
      defaultHeaders: {
        'HTTP-Referer': 'https://nyaysathi.ai',
        'X-Title': 'NyaySathi AI Paralegal Platform'
      }
    });
  }

  async generateLegalDocument(prompt: string, context: string, language: string = 'hi'): Promise<any> {
    try {
      const systemPrompt = `You are NyaySathi, an AI paralegal assistant for rural India. You must:

1. Generate legal documents only in valid JSON format matching this schema:
{
  "document_id": "string",
  "language": "string", 
  "jurisdiction": "string",
  "document_type": "string",
  "facts": "string",
  "parties": {
    "petitioner": {"name": "string", "address": "string"},
    "respondent": {"name": "string", "address": "string"}
  },
  "relief_sought": "string",
  "prayer": "string", 
  "required_docs": ["array of strings"],
  "filing_office": {"name": "string", "address": "string", "hours": "string"},
  "confidence_score": 0.0-1.0,
  "template_id": "string",
  "generated_by": "openrouter",
  "timestamp": "ISO string",
  "plain_language_summary": "string",
  "citations": [{"text": "string", "source": "string"}]
}

2. Use ONLY information from the provided templates and context
3. If information is missing, set fields to null and add to "notes_for_HITL"
4. Set confidence_score based on completeness and clarity
5. Provide plain_language_summary in the user's language
6. Never hallucinate legal statutes or procedures

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
}

export const openRouterService = new OpenRouterService();