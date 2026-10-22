'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ExperienceTimeline() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%']);

  return (
    <section id="experience" className="section" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <h2 className="section-title">{t.experience.title}</h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Animated vertical line */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{ background: 'var(--border)' }}
          >
            <motion.div
              className="w-full rounded-full"
              style={{
                height: lineHeight,
                background: 'linear-gradient(180deg, var(--accent), var(--cyan))',
              }}
            />
          </div>

          {/* Timeline items */}
          {t.experience.jobs.map((job, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                className={`relative mb-8 md:w-1/2 pl-10 md:pl-0 ${
                  isLeft ? 'md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'
                }`}
              >
                {/* Dot on the line */}
                <div
                  className={`absolute top-3 w-3 h-3 rounded-full border-2 z-10 left-[10px] ${
                    isLeft ? 'md:left-auto md:-right-[6px]' : 'md:-left-[6px]'
                  }`}
                  style={{
                    borderColor: 'var(--accent)',
                    background: 'var(--bg-primary)',
                  }}
                />

                {/* Card */}
                <div
                  className="p-5 rounded-xl border transition-all duration-300 glow-border"
                  style={{
                    background: 'var(--bg-card)',
                    borderColor: 'var(--border)',
                  }}
                >
                  <div className={`flex flex-col ${isLeft ? 'md:items-end' : ''}`}>
                    <span
                      className="text-xs terminal-text font-medium px-2.5 py-1 rounded-full mb-2 inline-block w-fit"
                      style={{
                        background: 'var(--accent-subtle)',
                        color: 'var(--accent)',
                      }}
                    >
                      {job.period}
                    </span>
                    <h3 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                      {job.company}
                    </h3>
                    <p className="text-sm font-medium mb-2" style={{ color: 'var(--accent-hover)' }}>
                      {job.role}
                    </p>
                    <p
                      className="text-sm mb-3 leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {job.description}
                    </p>
                    <div className={`flex flex-wrap gap-1.5 ${isLeft ? 'md:justify-end' : ''}`}>
                      {job.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-0.5 rounded-md terminal-text"
                          style={{
                            background: 'var(--bg-secondary)',
                            color: 'var(--text-muted)',
                            border: '1px solid var(--border)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}