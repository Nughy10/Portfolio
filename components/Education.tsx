'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import ConveyorLine from '@/components/ConveyorLine';

export default function Education() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="section" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">{t.education.title}</h2>

        <div className="space-y-8">
          {/* Education (academic degree) | Training (bootcamp) */}
          <div className="grid md:grid-cols-2 gap-5">
            {(['academic', 'training'] as const).map((kind, i) => (
              <motion.div
                key={kind}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex flex-col"
              >
                <h3 className="text-lg font-semibold mb-4 text-center" style={{ color: 'var(--text-primary)' }}>
                  {kind === 'academic' ? t.education.academicTitle : t.education.trainingTitle}
                </h3>
                {t.education.degrees
                  .filter((degree) => degree.kind === kind)
                  .map((degree) => (
                    <div
                      key={degree.title}
                      className="flex-1 p-5 rounded-xl border glow-border"
                      style={{
                        background: 'var(--bg-card)',
                        borderColor: 'var(--border)',
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                          style={{ background: 'var(--accent-subtle)' }}
                        >
                          {kind === 'academic' ? '🎓' : '💻'}
                        </div>
                        <div>
                          <h4 className="font-bold" style={{ color: 'var(--text-primary)' }}>
                            {degree.title}
                          </h4>
                          <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--accent)' }}>
                            {degree.institution}
                          </p>
                          <span className="text-xs terminal-text" style={{ color: 'var(--text-muted)' }}>
                            {degree.year}
                          </span>
                          <p className="text-sm mt-2" style={{ color: 'var(--text-secondary)' }}>
                            {degree.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-center" style={{ color: 'var(--text-primary)' }}>
              {t.education.certificationsTitle}
            </h3>
            <ConveyorLine
              // "TIA PORTAL / WinCC – Siemens (2019)" -> "SIEMENS"
              labels={t.education.certifications.map((cert) =>
                (cert.split(' – ').pop() ?? cert).replace(/\s*\(\d{4}\)$/, '').split(' ')[0].toUpperCase()
              )}
              caption={t.education.lineCaption}
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {t.education.certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-lg border"
                  style={{
                    background: 'var(--bg-card)',
                    borderColor: 'var(--border)',
                  }}
                >
                  <span style={{ color: 'var(--amber)' }}>🏆</span>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {cert}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}