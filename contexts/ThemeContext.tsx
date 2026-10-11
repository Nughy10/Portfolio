'use client';

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (x: number, y: number) => void;
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback((x: number, y: number) => {
    if (isTransitioning) return;

    // Check for View Transitions API support
    if (!document.startViewTransition) {
      setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
      return;
    }

    setIsTransitioning(true);

    // Set CSS custom properties for the wave origin
    document.documentElement.style.setProperty('--wave-x', `${x}px`);
    document.documentElement.style.setProperty('--wave-y', `${y}px`);

    const transition = document.startViewTransition(() => {
      setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    });

    transition.finished.then(() => {
      setIsTransitioning(false);
    });
  }, [isTransitioning]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isTransitioning }}>
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

