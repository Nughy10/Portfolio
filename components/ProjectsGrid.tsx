'use client';

import { useRef, useState } from 'react';
import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Translations } from '@/data/i18n';

type Project = Translations['projects']['items'][number];

const MAX_TILT = 10; // degrees

function ProjectCard({
  project,
  index,
  isInView,
  t,
}: {
  project: Project;
  index: number;
  isInView: boolean;
  t: Translations['projects'];
}) {
  const [flipped, setFlipped] = useState(false);
  const reduceMotion = useReducedMotion();
  const isLive = Boolean(project.live) && !project.offline;

  // Tilt towards the cursor, with a light glare that follows it
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, { stiffness: 220, damping: 20 });
  const rotateY = useSpring(tiltY, { stiffness: 220, damping: 20 });
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareOpacity = useSpring(0, { stiffness: 200, damping: 30 });
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.16), transparent 60%)`;

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    tiltY.set((px - 0.5) * MAX_TILT * 2);
    tiltX.set(-(py - 0.5) * MAX_TILT * 2);
    glareX.set(px * 100);
    glareY.set(py * 100);
    glareOpacity.set(1);
  };

  const onPointerLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
    glareOpacity.set(0);
  };

  const faceClass =
    'col-start-1 row-start-1 rounded-xl border overflow-hidden [backface-visibility:hidden]';
  const faceStyle = { background: 'var(--bg-card)', borderColor: 'var(--border)' };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
      className="[perspective:1000px]"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        className="h-full"
      >
        <div
          className="grid h-full [transform-style:preserve-3d]"
          style={{
            transform: `rotateY(${flipped ? 180 : 0}deg)`,
            transition: reduceMotion ? 'none' : 'transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1)',
          }}
        >
          {/* Front */}
          <button
            type="button"
            onClick={() => setFlipped(true)}
            inert={flipped}
            aria-label={`${project.name} — ${t.flipHint}`}
            className={`${faceClass} relative text-left flex flex-col`}
            style={faceStyle}
          >
            <span
              className="block h-1 w-full shrink-0"
              style={{
                background: isLive
                  ? 'linear-gradient(90deg, var(--accent), var(--cyan))'
                  : 'var(--text-muted)',
                opacity: isLive ? 0.8 : 0.35,
              }}
            />
            <span className="p-5 flex flex-col flex-1">
              <span
                className={`text-lg font-bold mb-3 ${isLive ? '' : 'pr-28'}`}
                style={{ color: 'var(--text-primary)' }}
              >
                {project.name}
              </span>
              <span className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                {project.description}
              </span>
              <span className="mt-4 text-xs terminal-text self-end" style={{ color: 'var(--text-muted)' }}>
                ⟳ {t.flipHint}
              </span>
            </span>

            {/* "Not in production" rubber stamp */}
            {!isLive && (
              <span
                className="absolute top-4 right-3 rotate-[8deg] text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border-2 terminal-text"
                style={{ color: 'var(--amber)', borderColor: 'var(--amber)', opacity: 0.85 }}
              >
                {t.offline}
              </span>
            )}

            <motion.span
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{ background: glare, opacity: glareOpacity }}
            />
          </button>

          {/* Back */}
          <div
            inert={!flipped}
            className={`${faceClass} [transform:rotateY(180deg)] p-5 flex flex-col`}
            style={faceStyle}
          >
            <h3 className="text-base font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
              {project.name}
            </h3>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-0.5 rounded-md terminal-text"
                  style={{ background: 'var(--accent-subtle)', color: 'var(--accent)' }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setFlipped(false)}
                className="shrink-0 text-xs terminal-text hover:underline"
                style={{ color: 'var(--text-muted)' }}
              >
                ⟲ {t.flipBack}
              </button>
              {isLive ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90"
                  style={{ background: 'var(--accent)' }}
                >
                  {t.visit}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              ) : (
                <span className="text-xs italic text-right" style={{ color: 'var(--text-muted)' }}>
                  {t.offlineHint}
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsGrid() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="section" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">{t.projects.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.projects.items.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} isInView={isInView} t={t.projects} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
