'use client';

import { Fragment } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Same stack as the portfolio entry in the CV
const stack = [
  { name: 'Next.js', color: 'var(--accent)' },
  { name: 'TypeScript', color: 'var(--cyan)' },
  { name: 'Tailwind CSS', color: 'var(--green)' },
  { name: 'Framer Motion', color: 'var(--rose)' },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="py-8 px-4 border-t text-center"
      style={{ borderColor: 'var(--border)' }}
    >
      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
        © 2026 · {t.footer.builtWith}{' '}
        {stack.map((tech, i) => (
          <Fragment key={tech.name}>
            {i > 0 && (i === stack.length - 1 ? ` ${t.footer.and} ` : ', ')}
            <span className="terminal-text" style={{ color: tech.color }}>
              {tech.name}
            </span>
          </Fragment>
        ))}{' '}
        {t.footer.by}{' '}
        <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
          Pau Isach Noguera
        </span>
      </p>
    </footer>
  );
}
