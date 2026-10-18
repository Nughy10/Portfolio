'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

const navSections = ['about', 'skills', 'experience', 'projects', 'education', 'contact'] as const;

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { locale, t, toggleLocale } = useLanguage();
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Track scroll position for navbar bg and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section = the last one whose top has passed 40% of the viewport
      const sections = document.querySelectorAll<HTMLElement>('main section[id]');
      const line = window.innerHeight * 0.4;
      let current = '';
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section.id;
      }
      // At the very bottom the last section can't scroll up far enough, so force it
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom && sections.length) current = sections[sections.length - 1].id;
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  }, []);

  const handleThemeToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    toggleTheme(x, y);
  };

  const navLabels = t.nav;
  const themeLabel =
    locale === 'es'
      ? theme === 'dark' ? 'Modo claro' : 'Modo oscuro'
      : theme === 'dark' ? 'Light mode' : 'Dark mode';

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-xl border-b'
            : ''
        }`}
        style={{
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          borderColor: scrolled ? 'var(--nav-border)' : 'transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="terminal-text text-lg font-bold whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ color: 'var(--accent)' }}
            >
              {'<'}
              <span style={{ color: 'var(--text-primary)' }}>Pau</span>
              {' />'}
            </motion.button>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1">
              {navSections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollTo(section)}
                  className="relative px-3 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap"
                  style={{
                    color:
                      activeSection === section
                        ? 'var(--accent)'
                        : 'var(--text-secondary)',
                  }}
                >
                  {navLabels[section as keyof typeof navLabels]}
                  {activeSection === section && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                      style={{ background: 'var(--accent)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-2">
              {/* Language toggle */}
              <motion.button
                onClick={toggleLocale}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-2.5 py-1.5 rounded-lg text-xs font-bold terminal-text border transition-colors"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--text-secondary)',
                }}
                title={locale === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                aria-label={locale === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              >
                {locale === 'es' ? 'EN' : 'ES'}
              </motion.button>

              {/* Theme toggle */}
              <motion.button
                onClick={handleThemeToggle}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg transition-colors"
                style={{ color: 'var(--text-secondary)' }}
                title={themeLabel}
                aria-label={themeLabel}
              >
                {theme === 'dark' ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </motion.button>

              {/* Download CV */}
              <motion.a
                href={t.cv}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-white transition-colors whitespace-nowrap"
                style={{ background: 'var(--accent)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {navLabels.downloadCV}
              </motion.a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="Menu"
                aria-expanded={mobileOpen}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  {mobileOpen ? (
                    <>
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </>
                  ) : (
                    <>
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-16 lg:hidden"
            style={{ background: 'var(--bg-primary)' }}
          >
            <div className="flex flex-col items-center gap-2 p-8">
              {navSections.map((section, i) => (
                <motion.button
                  key={section}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(section)}
                  className="w-full text-center py-3 text-lg font-medium rounded-lg transition-colors"
                  style={{
                    color:
                      activeSection === section
                        ? 'var(--accent)'
                        : 'var(--text-secondary)',
                  }}
                >
                  {navLabels[section as keyof typeof navLabels]}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navSections.length * 0.05 }}
                href={t.cv}
                download
                className="mt-4 flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium"
                style={{ background: 'var(--accent)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {navLabels.downloadCV}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}