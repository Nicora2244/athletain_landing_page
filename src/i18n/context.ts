import { createContext } from 'react';
import type { TranslationKey } from './es';

export type Language = 'es' | 'en';
export type Translate = (key: TranslationKey) => string;

export const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translate;
} | null>(null);
