'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="py-8 px-4 border-t text-center"
      style={{ borderColor: 'var(--border)' }}
    >
      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
        {t.footer.builtWith}{' '}
        <span className="terminal-text" style={{ color: 'var(--accent)' }}>
          Next.js
        </span>{' '}
        {t.footer.and}{' '}
        <span className="terminal-text" style={{ color: 'var(--cyan)' }}>
          Framer Motion
        </span>{' '}
        {t.footer.by}{' '}
        <a
          href="https://github.com/Nughy10"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium hover:underline"
          style={{ color: 'var(--text-primary)' }}
        >
          Pau Isach Noguera
        </a>
      </p>
    </footer>
  );
}

