'use client';

import { useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { skillsData } from '@/data/i18n';

function BentoCard({
  category,
  icon,
  items,
  label,
  index,
  isInView,
}: {
  category: string;
  icon: string;
  items: { name: string; level: number; label?: string }[];
  label: string;
  index: number;
  isInView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
    setIsHovered(false);
  }, []);

  // Determine grid span based on item count
  const isLarge = items.length >= 6;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`bento-card rounded-xl p-5 border cursor-default ${isLarge ? 'md:col-span-2' : ''}`}
      style={{
        transform,
        background: 'var(--bg-card)',
        borderColor: isHovered ? 'var(--accent)' : 'var(--border)',
        boxShadow: isHovered ? 'var(--shadow-glow)' : 'none',
        transition: 'transform 0.1s ease, box-shadow 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div className="bento-card-inner">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
            {label}
          </h3>
        </div>

        <div className="space-y-3">
          {items.map((skill, i) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {skill.name}
                </span>
                {skill.label ? (
                  <span className="text-xs terminal-text" style={{ color: 'var(--accent)' }}>
                    {skill.label}
                  </span>
                ) : (
                  <span className="text-xs terminal-text" style={{ color: 'var(--text-muted)' }}>
                    {skill.level}%
                  </span>
                )}
              </div>
              <div
                className="h-1.5 rounded-full overflow-hidden"
                style={{ background: 'var(--bg-secondary)' }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 + i * 0.05, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, var(--accent), var(--cyan))`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsBento() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const categories = Object.entries(skillsData) as [
    keyof typeof skillsData,
    (typeof skillsData)[keyof typeof skillsData],
  ][];

  return (
    <section id="skills" className="section" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">{t.skills.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {categories.map(([key, data], i) => (
            <BentoCard
              key={key}
              category={key}
              icon={data.icon}
              items={data.items}
              label={t.skills.categories[key as keyof typeof t.skills.categories]}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}