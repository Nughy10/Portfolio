'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { skillsData } from '@/data/i18n';

function SkillCard({
  icon,
  items,
  label,
  index,
  isInView,
}: {
  icon: string;
  items: { name: string; label?: string }[];
  label: string;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
      className="rounded-xl p-5 border transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[var(--shadow-glow)]"
      style={{
        background: 'var(--bg-card)',
        borderColor: 'var(--border)',
      }}
    >
      <div className="flex items-center gap-2.5 mb-4">
        <span className="text-xl">{icon}</span>
        <h3 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
          {label}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((skill, i) => (
          <motion.span
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.2 + index * 0.08 + i * 0.03 }}
            className="text-sm px-3 py-1.5 rounded-lg terminal-text font-medium"
            style={{
              background: 'var(--accent-subtle)',
              color: 'var(--accent-hover)',
              border: '1px solid var(--border)',
            }}
          >
            {skill.name}
            {skill.label && (
              <span
                className="ml-1.5 text-xs opacity-70"
                style={{ color: 'var(--cyan)' }}
              >
                · {skill.label}
              </span>
            )}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsBento() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const categories = Object.entries(skillsData) as [
    keyof typeof skillsData,
    (typeof skillsData)[keyof typeof skillsData],
  ][];

  const getItems = (key: keyof typeof skillsData, items: string[]) =>
    key === 'languages' ? t.skills.languageItems : items.map((name) => ({ name }));

  return (
    <section id="skills" className="section" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">{t.skills.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map(([key, data], i) => (
            <SkillCard
              key={key}
              icon={data.icon}
              items={getItems(key, data.items)}
              label={t.skills.categories[key]}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}