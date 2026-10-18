'use client';

import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { contactLinks, skillsData, type Translations } from '@/data/i18n';

// A command's output: titled sections with "label → value" rows and/or paragraphs
interface OutputSection {
  title?: string;
  rows?: [string, string][];
  paragraphs?: string[];
}

type TerminalLine =
  | { type: 'input'; content: string }
  | { type: 'output'; sections: OutputSection[] };

const COMPLETIONS = ['help', 'summary', 'skills', 'experience', 'projects', 'open ', 'education', 'contact', 'cv', 'clear'];
const ALIASES: Record<string, string> = { about: 'summary', exp: 'experience' };

// "Código Hombre" / "https://codigohombre.es" -> "codigohombre" / "codigohombre.es"
const normalize = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/[^a-z0-9.]/g, '');

// What the user types after "open": the project name without spaces, dots or accents
const projectSlug = (name: string) => normalize(name).replace(/\./g, '');

const text = (line: string): OutputSection[] => [{ paragraphs: [line] }];

// Every output is built from the same data as the page sections so they never drift apart
function buildCommands(t: Translations): Record<string, OutputSection[]> {
  const skills = (Object.keys(skillsData) as (keyof typeof skillsData)[]).map((key): [string, string] => [
    t.skills.categories[key],
    key === 'languages'
      ? t.skills.languageItems.map((l) => `${l.name} (${l.label})`).join(', ')
      : skillsData[key].items.join(', '),
  ]);

  // "Automation Studio ... – B&R Industrial Automation (2019)" -> ["2019", "Automation Studio ... – B&R ..."]
  const certifications = t.education.certifications.map((cert): [string, string] => {
    const match = cert.match(/^(.*?)\s*\((\d{4})\)$/);
    return match ? [match[2], match[1]] : ['', cert];
  });

  return {
    help: [{ title: t.hero.helpTitle, rows: t.hero.help.map(([cmd, desc]): [string, string] => [cmd, desc]) }],
    summary: [{ title: t.hero.aboutTitle, paragraphs: t.hero.about }],
    skills: [{ title: t.hero.skillsHeader, rows: skills }],
    experience: [
      {
        title: t.hero.expHeader,
        rows: t.experience.jobs.map((job): [string, string] => [job.period, `${job.company} | ${job.role}`]),
      },
    ],
    projects: [
      {
        title: t.hero.projectsHeader,
        rows: t.projects.items.map((p): [string, string] => [
          projectSlug(p.name),
          `${p.name} — ${p.description.replace(/\.$/, '')}${p.offline ? ` ${t.hero.offlineTag}` : ''}`,
        ]),
        paragraphs: [t.hero.projectsFooter],
      },
    ],
    education: [
      ...(['academic', 'training'] as const).map((kind) => ({
        title: `> ${kind === 'academic' ? t.education.academicTitle : t.education.trainingTitle}`,
        rows: t.education.degrees
          .filter((d) => d.kind === kind)
          .map((d): [string, string] => [d.year, `${d.title} | ${d.institution}`]),
      })),
      { title: `> ${t.education.certificationsTitle}`, rows: certifications },
    ],
    contact: [
      {
        title: `> ${t.contact.title}`,
        rows: Object.values(contactLinks).map((link): [string, string] => [link.label, link.display]),
        paragraphs: [t.hero.contactFooter],
      },
    ],
  };
}

export default function HeroTerminal() {
  const { locale, t } = useLanguage();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [typedChars, setTypedChars] = useState(0);
  const [prevLocale, setPrevLocale] = useState(locale);

  const commands = useMemo(() => buildCommands(t), [t]);

  // Focus the terminal on load, but not on touch devices (it would pop the keyboard up)
  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches) {
      inputRef.current?.focus({ preventScroll: true });
    }
  }, []);

  // Clear terminal history and restart the typewriter when language changes
  if (prevLocale !== locale) {
    setPrevLocale(locale);
    setHistory([]);
    setTypedChars(0);
  }

  // Typewriter effect for greeting
  const fullText = `${t.hero.greeting} Pau Isach Noguera`;
  const displayedText = fullText.slice(0, typedChars);
  const isTyping = typedChars < fullText.length;
  useEffect(() => {
    if (!isTyping) return;
    const timer = setTimeout(() => setTypedChars((n) => n + 1), 50);
    return () => clearTimeout(timer);
  }, [isTyping, typedChars]);

  // Auto-scroll terminal to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const openProject = useCallback(
    (query: string) => {
      const q = normalize(query);
      if (!q) return t.hero.openUsage;
      if (q in contactLinks) {
        const link = contactLinks[q as keyof typeof contactLinks];
        window.open(link.url, '_blank', 'noopener,noreferrer');
        return `${t.hero.opening} ${link.label}...`;
      }
      const project = t.projects.items.find(
        (p) => projectSlug(p.name).includes(q) || normalize(p.live).includes(q)
      );
      if (!project) return t.hero.projectNotFound;
      if (project.offline) return t.hero.projectOffline;
      window.open(project.live, '_blank', 'noopener,noreferrer');
      return `${t.hero.opening} ${project.live.replace(/^https?:\/\//, '')}...`;
    },
    [t]
  );

  const downloadCV = useCallback(() => {
    const link = document.createElement('a');
    link.href = t.cv;
    link.download = t.cv.slice(1);
    link.click();
    return t.hero.downloadingCV;
  }, [t]);

  const executeCommand = useCallback(
    (cmd: string) => {
      const raw = cmd.trim().toLowerCase();
      const trimmed = ALIASES[raw] ?? raw;
      let output: OutputSection[];

      if (trimmed === '') {
        return;
      } else if (trimmed === 'clear') {
        setHistory([]);
        setCommandHistory((prev) => [cmd, ...prev]);
        setHistoryIndex(-1);
        return;
      } else if (trimmed in commands) {
        output = commands[trimmed];
      } else if (trimmed === 'open' || trimmed.startsWith('open ')) {
        output = text(openProject(trimmed.slice(4)));
      } else if (trimmed === 'cv') {
        output = text(downloadCV());
      } else {
        output = text(t.hero.unknown);
      }

      setHistory((prev) => [
        ...prev,
        { type: 'input', content: cmd },
        { type: 'output', sections: output },
      ]);
      setCommandHistory((prev) => [cmd, ...prev]);
      setHistoryIndex(-1);
    },
    [commands, openProject, downloadCV, t]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const value = input.toLowerCase();
      if (!value) return;
      const match = COMPLETIONS.find((c) => c.startsWith(value));
      if (match) setInput(match);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-x-clip">
      {/* Background gradient orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[128px] opacity-20"
        style={{ background: 'var(--accent)' }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-[128px] opacity-15"
        style={{ background: 'var(--cyan)' }}
      />

      <div className="relative z-10 w-full max-w-5xl">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-5 sm:whitespace-nowrap">
            <span className="gradient-text">{displayedText}</span>
            {isTyping && <span className="terminal-cursor" />}
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isTyping ? 0 : 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg lg:text-xl xl:text-2xl md:whitespace-nowrap font-light terminal-text"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t.hero.role}
          </motion.p>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-xl overflow-hidden border max-w-3xl mx-auto"
          style={{
            background: 'var(--bg-terminal)',
            borderColor: 'var(--border)',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {/* Terminal header */}
          <div
            className="flex items-center gap-2 px-4 py-3 border-b"
            style={{ borderColor: 'var(--terminal-border)' }}
          >
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span
              className="text-xs terminal-text ml-2"
              style={{ color: 'var(--terminal-muted)' }}
            >
              pau@portfolio ~ %
            </span>
          </div>

          {/* Terminal body */}
          <div
            ref={terminalRef}
            onClick={() => inputRef.current?.focus()}
            className="p-4 min-h-[280px] max-h-[400px] overflow-y-auto cursor-text terminal-text text-sm"
          >
            {/* Welcome message */}
            <div className="mb-4" style={{ color: 'var(--terminal-muted)' }}>
              <p style={{ color: 'var(--terminal-green)' }}>
                {t.hero.welcome}
              </p>
              <p className="mt-1">{t.hero.hint}</p>
            </div>

            {/* History */}
            {history.map((line, i) => (
              <div key={i} className="mb-1">
                {line.type === 'input' ? (
                  <div className="flex items-center gap-2">
                    <span style={{ color: 'var(--terminal-prompt)' }}>❯</span>
                    <span style={{ color: 'var(--terminal-text)' }}>{line.content}</span>
                  </div>
                ) : (
                  <div
                    data-terminal-output
                    className="ml-4 mb-3 space-y-3"
                    style={{ color: 'var(--terminal-green)' }}
                  >
                    {line.sections.map((section, j) => (
                      <div key={j}>
                        {section.title && <p>{section.title}</p>}
                        {section.rows && (
                          // Labels in the left column, values wrap in the right one.
                          // On narrow screens the value goes under its label instead.
                          <div className="grid grid-cols-1 sm:grid-cols-[max-content_auto_minmax(0,1fr)] sm:gap-x-3 gap-y-1 sm:gap-y-0.5 pl-4">
                            {section.rows.map(([label, value]) => (
                              <div key={label + value} className="contents">
                                <span className="sm:whitespace-nowrap" style={{ color: 'var(--code-prop)' }}>
                                  {label}
                                </span>
                                <span className="hidden sm:inline" style={{ color: 'var(--terminal-muted)' }}>
                                  →
                                </span>
                                <span className="pl-4 sm:pl-0">{value}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {section.paragraphs?.map((paragraph, k) => (
                          <p key={k} className={section.title ? `pl-4 ${section.rows ? 'mt-3' : 'mt-1'}` : ''}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Current input */}
            <div className="flex items-center gap-2">
              <span style={{ color: 'var(--terminal-prompt)' }}>❯</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 min-w-0 bg-transparent outline-none terminal-text text-sm"
                style={{ color: 'var(--terminal-text)', caretColor: 'var(--terminal-cursor)' }}
                aria-label="Terminal"
                spellCheck={false}
                autoComplete="off"
              />
              {input === '' && <span className="terminal-cursor" />}
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex justify-center mt-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ color: 'var(--text-muted)' }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}