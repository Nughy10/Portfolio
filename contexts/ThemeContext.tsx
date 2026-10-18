'use client';

import { createContext, useContext, useState, useCallback, useEffect, useRef, type ReactNode } from 'react';
import { flushSync } from 'react-dom';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (x: number, y: number) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem('theme', theme);
  } catch {}
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const isTransitioning = useRef(false);

  // The inline script in layout.tsx already set data-theme before paint; sync state with it
  useEffect(() => {
    if (document.documentElement.getAttribute('data-theme') === 'light') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme('light');
    }
  }, []);

  const toggleTheme = useCallback(
    (x: number, y: number) => {
      if (isTransitioning.current) return;
      const next: Theme = theme === 'dark' ? 'light' : 'dark';

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!document.startViewTransition || reduceMotion) {
        applyTheme(next);
        setTheme(next);
        return;
      }

      isTransitioning.current = true;

      // Set CSS custom properties for the wave origin
      document.documentElement.style.setProperty('--wave-x', `${x}px`);
      document.documentElement.style.setProperty('--wave-y', `${y}px`);

      // The DOM must be updated synchronously inside the callback so the
      // "new" snapshot actually contains the new theme
      const transition = document.startViewTransition(() => {
        applyTheme(next);
        flushSync(() => setTheme(next));
      });

      transition.finished.finally(() => {
        isTransitioning.current = false;
      });
    },
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
