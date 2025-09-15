import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LanguageState {
  currentLanguage: string;
  setLanguage: (language: string) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      currentLanguage: 'hi',
      setLanguage: (language: string) => set({ currentLanguage: language }),
    }),
    {
      name: 'nyaysathi-language',
    }
  )
);