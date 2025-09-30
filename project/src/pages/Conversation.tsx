import { useState } from 'react';
import { Mic, MicOff, Send, FileText, Volume2, VolumeX } from 'lucide-react';
import { useLanguageStore } from '../store/languageStore';
import { getLanguageContent } from '../utils/languages';
import { useVoice } from '../hooks/useVoice';
import { useAuth } from '../contexts/AuthContext';

export function Conversation() {
  const { currentLanguage } = useLanguageStore();
  const content = getLanguageContent(currentLanguage);
  const { token } = useAuth();
  const [messages, setMessages] = useState<Array<{id: number, text: string, isUser: boolean}>>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Voice functionality
  const {
    isRecording,
    isSpeaking,
    isSupported,
    startRecording,
    stopRecording,
    speak,
    stopSpeaking
  } = useVoice({
    language: currentLanguage,
    onTranscript: (transcript) => {
      setInputText(transcript);
    }
  });

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;
    
    const userMessage = {
      id: Date.now(),
      text: inputText,
      isUser: true
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);
    
    try {
      // Call backend API
      const response = await fetch('/api/conversation/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          message: inputText,
          language: currentLanguage,
          session_id: 'user_session'
        })
      });
      
      const data = await response.json();
      
      const aiResponse = {
        id: Date.now() + 1,
        text: data.message || content.needHelp,
        isUser: false
      };
      setMessages(prev => [...prev, aiResponse]);
      
      // Speak the AI response
      speak(aiResponse.text);
    } catch (error) {
      console.error('Failed to send message:', error);
      const fallbackResponse = {
        id: Date.now() + 1,
        text: content.error,
        isUser: false
      };
      setMessages(prev => [...prev, fallbackResponse]);
      
      // Speak the error message
      speak(fallbackResponse.text);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleRecording = () => {
    if (!isSupported) {
      alert('Voice recognition is not supported in your browser.');
      return;
    }

    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  const toggleSpeaking = () => {
    if (isSpeaking) {
      stopSpeaking();
    } else {
      // Find the last AI message and speak it again
      const lastAiMessage = messages
        .filter(m => !m.isUser)
        .pop();
      
      if (lastAiMessage) {
        speak(lastAiMessage.text);
      }
    }
  };

  const generateDocument = async (documentType: string) => {
    setIsLoading(true);
    try {
      // Extract facts from conversation history
      const userMessages = messages.filter(m => m.isUser).map(m => m.text).join('. ');
      
      const response = await fetch('/api/documents/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          facts: userMessages,
          document_type: documentType,
          language: currentLanguage,
          jurisdiction: 'India',
          user_meta: { name: 'User', address: '' }
        })
      });
      
      const data = await response.json();
      
      if (data.document) {
        const docMessage = {
          id: Date.now(),
          text: `📄 Document generated successfully! ${data.document.plain_language_summary || 'Your legal document is ready.'}`,
          isUser: false
        };
        setMessages(prev => [...prev, docMessage]);
        
        // Open PDF in new tab
        if (data.pdf_url) {
          window.open(`http://localhost:3001${data.pdf_url}`, '_blank');
        }
      }
    } catch (error) {
      console.error('Document generation failed:', error);
      const errorMessage = {
        id: Date.now(),
        text: 'Sorry, I could not generate the document right now. Please try again later.',
        isUser: false
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
          <h1 className="text-2xl font-bold text-white">{content.talkToAssistant}</h1>
          <p className="text-blue-100 mt-2">{content.yourLegalAssistant}</p>
        </div>
        
        <div className="h-96 overflow-y-auto p-6 space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 mt-20">
              <p>{content.tellYourProblem}</p>
            </div>
          )}
          
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.isUser
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
                <div className="animate-pulse">{content.typing}</div>
              </div>
            </div>
          )}
        </div>
        
        <div className="border-t bg-gray-50 p-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleRecording}
              disabled={!isSupported}
              className={`p-2 rounded-full transition-colors ${
                isRecording
                  ? 'bg-red-600 text-white animate-pulse'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              } ${!isSupported ? 'opacity-50 cursor-not-allowed' : ''}`}
              title={isRecording ? 'Stop recording' : 'Start voice input'}
            >
              {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
            </button>
            
            <button
              onClick={toggleSpeaking}
              className={`p-2 rounded-full transition-colors ${
                isSpeaking
                  ? 'bg-blue-600 text-white animate-pulse'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
              title={isSpeaking ? 'Stop speaking' : 'Voice output enabled'}
            >
              {isSpeaking ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
            
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={isRecording ? 'Listening...' : content.tellYourProblem}
                className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isRecording ? 'bg-red-50 border-red-300' : ''
                }`}
                disabled={isRecording}
              />
              {isRecording && (
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              )}
            </div>
            
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isLoading}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
          
          {/* Document Generation Options */}
          {messages.length > 0 && (
            <div className="mt-4 border-t pt-4">
              <p className="text-sm text-gray-600 mb-2">{content.readyToGenerate}</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => generateDocument('wage_complaint')}
                  disabled={isLoading}
                  className="flex items-center px-3 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 disabled:opacity-50"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  {content.wageComplaint}
                </button>
                <button
                  onClick={() => generateDocument('rti_application')}
                  disabled={isLoading}
                  className="flex items-center px-3 py-2 bg-orange-600 text-white text-sm rounded-lg hover:bg-orange-700 disabled:opacity-50"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  {content.rtiRequest}
                </button>
                <button
                  onClick={() => generateDocument('consumer_complaint')}
                  disabled={isLoading}
                  className="flex items-center px-3 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 disabled:opacity-50"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  {content.tenancyDispute}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}