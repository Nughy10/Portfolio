'use client';

import { useCallback, useEffect, useRef } from 'react';
import { motion, useAnimationFrame, useInView, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { skillsData } from '@/data/i18n';

const CRUISE_SPEED = (Math.PI * 2) / 28; // rad/s — one lap every 28s
const HOVER_SPEED = CRUISE_SPEED * 0.2;

// Orbit radii as a fraction of the orbit area. Narrow cards (phones) get a tighter
// orbit so the long labels at the sides stay inside the card.
const RY = 0.34;
const rxFor = (width: number) => (width < 420 ? 0.3 : 0.42);

function OrbitCard({
  icon,
  items,
  label,
  hint,
  index,
  isInView,
}: {
  icon: string;
  items: { name: string; label?: string }[];
  label: string;
  hint: string;
  index: number;
  isInView: boolean;
}) {
  const areaRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const visible = useInView(areaRef, { margin: '120px' });
  const reduceMotion = useReducedMotion();
  const sim = useRef({
    angle: index * 0.9,
    velocity: CRUISE_SPEED,
    hovered: false,
    dragging: false,
    lastX: 0,
    lastTime: 0,
    width: 0,
    height: 0,
  });

  // Place every item on the ellipse. Items in the lower half are "in front":
  // bigger, brighter and above the planet; the upper half fades into the back.
  const layout = useCallback(() => {
    const s = sim.current;
    if (!s.width) return;
    const cx = s.width / 2;
    const cy = s.height / 2;
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const a = s.angle + (i / items.length) * Math.PI * 2;
      const depth = (Math.sin(a) + 1) / 2; // 0 = back, 1 = front
      const x = cx + s.width * rxFor(s.width) * Math.cos(a);
      const y = cy + s.height * RY * Math.sin(a);
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${0.72 + depth * 0.38})`;
      el.style.opacity = String(0.35 + depth * 0.65);
      el.style.zIndex = String(depth > 0.5 ? 10 + Math.round(depth * 10) : Math.round(depth * 10));
    });
  }, [items.length]);

  useEffect(() => {
    const el = areaRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => {
      sim.current.width = el.clientWidth;
      sim.current.height = el.clientHeight;
      if (pathRef.current) {
        const inset = `${(0.5 - rxFor(el.clientWidth)) * 100}%`;
        pathRef.current.style.left = inset;
        pathRef.current.style.right = inset;
      }
      layout();
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [layout]);

  useAnimationFrame((_, delta) => {
    const s = sim.current;
    if (!visible || s.dragging) return;
    const dt = Math.min(delta, 50) / 1000;
    const target = reduceMotion ? 0 : s.hovered ? HOVER_SPEED : CRUISE_SPEED;
    // Ease towards the cruise speed, so a fling slowly loses momentum
    s.velocity += (target - s.velocity) * Math.min(1, dt * 1.2);
    s.angle += s.velocity * dt;
    layout();
  });

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const s = sim.current;
    s.dragging = true;
    s.lastX = e.clientX;
    s.lastTime = performance.now();
    s.velocity = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const s = sim.current;
    if (!s.dragging) return;
    const now = performance.now();
    const deltaAngle = (e.clientX - s.lastX) / (s.width * rxFor(s.width));
    s.angle += deltaAngle;
    s.velocity = deltaAngle / Math.max((now - s.lastTime) / 1000, 0.001);
    s.lastX = e.clientX;
    s.lastTime = now;
    layout();
  };

  const onPointerUp = () => {
    const s = sim.current;
    s.dragging = false;
    // Cap the fling so a fast swipe doesn't turn into a blur
    s.velocity = Math.max(-8, Math.min(8, s.velocity));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
      className="rounded-xl p-5 border flex flex-col"
      style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
      onMouseEnter={() => (sim.current.hovered = true)}
      onMouseLeave={() => (sim.current.hovered = false)}
    >
      {/* The count sits absolutely so the title stays truly centred */}
      <div className="relative px-6">
        <h3 className="text-base font-semibold text-center" style={{ color: 'var(--text-primary)' }}>
          {label}
        </h3>
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2 text-xs terminal-text"
          style={{ color: 'var(--text-muted)' }}
        >
          {items.length}
        </span>
      </div>

      <div
        ref={areaRef}
        className="relative h-60 mt-2 select-none cursor-grab active:cursor-grabbing touch-pan-y"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* Orbit path */}
        <div
          ref={pathRef}
          className="absolute rounded-[50%] border border-dashed pointer-events-none"
          style={{
            top: `${(0.5 - RY) * 100}%`,
            bottom: `${(0.5 - RY) * 100}%`,
            borderColor: 'var(--border-hover)',
          }}
        />

        {/* Planet */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center text-2xl pointer-events-none"
          style={{
            zIndex: 10,
            background: 'radial-gradient(circle at 35% 30%, var(--accent-hover), var(--accent) 55%, #1e1b4b 100%)',
            boxShadow: '0 0 32px var(--accent-glow), inset -6px -8px 16px rgba(0, 0, 0, 0.35)',
          }}
        >
          {icon}
        </div>

        {/* Satellites */}
        {items.map((skill, i) => (
          <span
            key={skill.name}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className="absolute left-0 top-0 will-change-transform"
          >
            <span
              className="block whitespace-nowrap text-xs px-2.5 py-1 rounded-full terminal-text font-medium border transition-colors hover:border-[var(--accent)]"
              style={{
                background: 'var(--bg-card)',
                color: 'var(--accent-hover)',
                borderColor: 'var(--border-hover)',
              }}
            >
              {skill.name}
              {skill.label && (
                <span className="ml-1.5 opacity-70" style={{ color: 'var(--cyan)' }}>
                  · {skill.label}
                </span>
              )}
            </span>
          </span>
        ))}
      </div>

      <p className="text-[11px] text-center terminal-text" style={{ color: 'var(--text-muted)' }}>
        ⟲ {hint}
      </p>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {categories.map(([key, data], i) => (
            <OrbitCard
              key={key}
              icon={data.icon}
              items={getItems(key, data.items)}
              label={t.skills.categories[key]}
              hint={t.skills.dragHint}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
