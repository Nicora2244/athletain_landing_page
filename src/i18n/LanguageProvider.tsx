import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { LanguageContext, type Language } from './context';
import { es } from './es';
import { en } from './en';

const STORAGE_KEY = 'athletain.language';

function initialLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'es' || saved === 'en') return saved;
  } catch {
    // Private browsing or storage restrictions must not block the page.
  }
  if (typeof navigator === 'undefined') return 'es';
  return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setCurrentLanguage] = useState<Language>(initialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: (next: Language) => {
        setCurrentLanguage(next);
        try {
          localStorage.setItem(STORAGE_KEY, next);
        } catch {
          // The choice still works for this session when storage is unavailable.
        }
      },
      t: (key: keyof typeof es) => (language === 'es' ? es : en)[key],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
