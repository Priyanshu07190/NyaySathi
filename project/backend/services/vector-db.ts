import { v4 as uuidv4 } from 'uuid';

export interface VectorDocument {
  id: string;
  content: string;
  metadata: {
    type: string;
    language: string;
    jurisdiction?: string;
    template_id?: string;
    document_type?: string;
  };
  embedding?: number[];
}

// Simple in-memory vector store for demo
// In production, use Weaviate, Pinecone, or similar
class VectorDatabase {
  private documents: VectorDocument[] = [];
  private templates: Map<string, any> = new Map();

  constructor() {
    this.initializeTemplates();
  }

  private initializeTemplates() {
    // Sample legal templates - in production, load from files
    const templates = [
      {
        id: 'wage_complaint_hi',
        type: 'wage_complaint',
        language: 'hi',
        jurisdiction: 'all',
        content: `मजदूरी की शिकायत का प्रारूप:
        श्रम अधिकारी को
        आदरणीय महोदय,
        मैं [नाम] निवासी [पता] आपको सविनय निवेदन करता हूं कि मैं [कंपनी का नाम] में काम करता था।
        मेरी मासिक तनख्वाह [राशि] रुपये थी।
        [समस्या का विवरण]
        अतः आपसे निवेदन है कि मेरी समस्या का निराकरण करने की कृपा करें।
        धन्यवाद।`,
        required_docs: ['आधार कार्ड की फोटोकॉपी', 'वेतन पर्ची', 'नियुक्ति पत्र'],
        filing_office_template: 'जिला श्रम कार्यालय'
      },
      {
        id: 'rti_request_hi', 
        type: 'rti_request',
        language: 'hi',
        jurisdiction: 'all',
        content: `सूचना का अधिकार अधिनियम 2005 की धारा 6(1) के अंतर्गत आवेदन:
        सेवा में,
        जन सूचना अधिकारी
        [विभाग का नाम]
        
        महोदय,
        मैं [नाम], निवासी [पता] आपसे निम्नलिखित सूचना चाहता हूं:
        [सूचना का विवरण]
        
        कृपया उक्त सूचना 30 दिन के अंदर उपलब्ध कराने की कृपा करें।`,
        required_docs: ['आधार कार्ड की फोटोकॉपी', '10 रुपये का शुल्क'],
        filing_office_template: 'संबंधित विभाग का जन सूचना अधिकारी'
      }
    ];

    templates.forEach(template => {
      this.templates.set(template.id, template);
      this.addDocument({
        id: template.id,
        content: template.content,
        metadata: {
          type: 'template',
          language: template.language,
          jurisdiction: template.jurisdiction,
          template_id: template.id,
          document_type: template.type
        }
      });
    });
  }

  addDocument(doc: Omit<VectorDocument, 'id'> & { id?: string }): string {
    const document: VectorDocument = {
      id: doc.id || uuidv4(),
      content: doc.content,
      metadata: doc.metadata,
      embedding: this.generateSimpleEmbedding(doc.content) // Simplified for demo
    };
    
    this.documents.push(document);
    return document.id;
  }

  // Simplified semantic search - in production, use proper embeddings
  search(query: string, filters: Partial<VectorDocument['metadata']> = {}, topK: number = 5): VectorDocument[] {
    const queryTerms = query.toLowerCase().split(/\s+/);
    
    let filteredDocs = this.documents.filter(doc => {
      // Apply filters
      for (const [key, value] of Object.entries(filters)) {
        if (value && doc.metadata[key as keyof typeof doc.metadata] !== value) {
          return false;
        }
      }
      return true;
    });

    // Score documents based on term overlap
    const scoredDocs = filteredDocs.map(doc => {
      const contentTerms = doc.content.toLowerCase().split(/\s+/);
      const overlap = queryTerms.filter(term => 
        contentTerms.some(docTerm => docTerm.includes(term) || term.includes(docTerm))
      ).length;
      
      return {
        document: doc,
        score: overlap / queryTerms.length
      };
    });

    // Sort by score and return top K
    return scoredDocs
      .sort((a, b) => b.score - a.score)
      .slice(0, topK)
      .map(item => item.document);
  }

  getTemplate(templateId: string) {
    return this.templates.get(templateId);
  }

  getAllTemplates() {
    return Array.from(this.templates.values());
  }

  // Simple embedding simulation - replace with actual embeddings in production
  private generateSimpleEmbedding(text: string): number[] {
    // This is a placeholder - use actual embedding service in production
    const words = text.toLowerCase().split(/\s+/);
    const embedding = new Array(100).fill(0);
    
    words.forEach((word, i) => {
      const hash = this.simpleHash(word);
      embedding[hash % 100] += 1;
    });
    
    return embedding;
  }

  private simpleHash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
  }
}

export const vectorDB = new VectorDatabase();