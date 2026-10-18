'use client';

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import { translations, type Locale, type Translations } from '@/data/i18n';

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('es');

  // Restore saved locale, or fall back to the browser language
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem('locale');
    } catch {}
    const preferred = saved ?? (navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en');
    if (preferred === 'en') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocale('en');
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => {
      const next = prev === 'es' ? 'en' : 'es';
      try {
        localStorage.setItem('locale', next);
      } catch {}
      return next;
    });
  }, []);

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
