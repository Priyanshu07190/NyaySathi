import { useState, useRef, useCallback } from 'react';

interface VoiceHookProps {
  language: string;
  onTranscript: (text: string) => void;
}

// Language code mapping for Web Speech API
const getLanguageCode = (lang: string): string => {
  const languageMap: Record<string, string> = {
    'hi': 'hi-IN',
    'en': 'en-US', 
    'ta': 'ta-IN',
    'te': 'te-IN',
    'kn': 'kn-IN',
    'bn': 'bn-IN',
    'gu': 'gu-IN'
  };
  return languageMap[lang] || 'en-US';
};

export const useVoice = ({ language, onTranscript }: VoiceHookProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const synthesisRef = useRef<SpeechSynthesis | null>(null);

  // Initialize speech recognition
  const initializeRecognition = useCallback(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setIsSupported(false);
      return null;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = getLanguageCode(language);
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsRecording(true);
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      onTranscript(transcript);
      setIsRecording(false);
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error('Speech recognition error:', event.error);
      setIsRecording(false);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    return recognition;
  }, [language, onTranscript]);

  // Start voice recording
  const startRecording = useCallback(async () => {
    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      if (!recognitionRef.current) {
        recognitionRef.current = initializeRecognition();
      }
      
      if (recognitionRef.current) {
        recognitionRef.current.lang = getLanguageCode(language);
        recognitionRef.current.start();
      }
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Microphone access is required for voice input.');
    }
  }, [language, initializeRecognition]);

  // Stop voice recording
  const stopRecording = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsRecording(false);
  }, []);

  // Speak text aloud
  const speak = useCallback((text: string) => {
    if (!('speechSynthesis' in window)) {
      console.warn('Text-to-speech not supported');
      return;
    }

    // Stop any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = getLanguageCode(language);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    // Try to find a voice that matches the language
    const voices = window.speechSynthesis.getVoices();
    const matchingVoice = voices.find(voice => 
      voice.lang.startsWith(getLanguageCode(language).split('-')[0])
    );
    
    if (matchingVoice) {
      utterance.voice = matchingVoice;
    }

    window.speechSynthesis.speak(utterance);
  }, [language]);

  // Stop speaking
  const stopSpeaking = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, []);

  return {
    isRecording,
    isSpeaking,
    isSupported,
    startRecording,
    stopRecording,
    speak,
    stopSpeaking
  };
};