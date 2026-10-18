'use client';

import { Fragment, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutCodeEditor() {
  const { locale, t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const codeLines = [
    { indent: 0, text: 'interface', keyword: true, rest: ' Developer {' },
    { indent: 1, text: 'name:', prop: true, value: ' "Pau Isach Noguera",' },
    { indent: 1, text: 'role:', prop: true, value: locale === 'es'
      ? ' "Analista Programador Full-Stack",'
      : ' "Full-Stack Analyst Developer",' },
    { indent: 1, text: 'location:', prop: true, value: locale === 'es' ? ' "España",' : ' "Spain",' },
    { indent: 1, text: 'experience:', prop: true, value: locale === 'es' ? ' "5+ años",' : ' "5+ years",' },
    { indent: 1, text: 'education:', prop: true, value: locale === 'es'
      ? ' "Ingeniería Electrónica y Telecomunicaciones",'
      : ' "Electronics & Telecom Engineering",' },
    { indent: 1, text: 'training:', prop: true, value: locale === 'es'
      ? ' "Curso de Programación Full-Stack",'
      : ' "Full-Stack Programming Bootcamp",' },
    { indent: 1, text: 'passion:', prop: true, value: locale === 'es'
      ? ' "Crear soluciones limpias y escalables",'
      : ' "Building clean & scalable solutions",' },
    { indent: 1, text: 'available:', prop: true, value: ' true,' },
    { indent: 0, text: '}', keyword: false, rest: '' },
  ];

  return (
    <section id="about" className="section" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">{t.about.title}</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Code editor */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl overflow-hidden border"
            style={{
              background: 'var(--bg-code)',
              borderColor: 'var(--border)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            {/* Editor header */}
            <div
              className="flex items-center gap-2 px-4 py-2.5 border-b"
              style={{ borderColor: 'var(--terminal-border)' }}
            >
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs terminal-text" style={{ color: 'var(--terminal-muted)' }}>
                developer.ts
              </span>
            </div>

            {/* Code content */}
            <div className="p-4 terminal-text text-xs sm:text-sm leading-7">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                  className="flex"
                >
                  {/* Line number */}
                  <span
                    className="select-none w-8 text-right mr-4 shrink-0"
                    style={{ color: 'var(--terminal-muted)', opacity: 0.5 }}
                  >
                    {i + 1}
                  </span>

                  {/* Code: the value starts right after the property name and, if it
                      doesn't fit, wraps aligned under its own first character */}
                  <span className="flex min-w-0" style={{ paddingLeft: `${line.indent * 1.5}rem` }}>
                    <span
                      className="shrink-0 whitespace-nowrap"
                      style={{
                        color: line.keyword
                          ? 'var(--code-keyword)'
                          : line.prop
                            ? 'var(--code-prop)'
                            : 'var(--terminal-text)',
                      }}
                    >
                      {line.text}
                    </span>
                    {line.rest?.trim() && (
                      <span className="ml-[1ch] whitespace-nowrap" style={{ color: 'var(--terminal-text)' }}>
                        {line.rest.trim()}
                      </span>
                    )}
                    {line.value && (
                      <span className="ml-[1ch] min-w-0" style={{ color: 'var(--terminal-green)' }}>
                        {/* Words never break inside (e.g. at the hyphen of "Full-Stack") */}
                        {line.value
                          .trim()
                          .split(' ')
                          .map((word, j) => (
                            // The space stays outside the nowrap span so lines can still break between words
                            <Fragment key={j}>
                              {j > 0 && ' '}
                              <span className="whitespace-nowrap">{word}</span>
                            </Fragment>
                          ))}
                      </span>
                    )}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bio paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center gap-4"
          >
            {t.about.bio.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}