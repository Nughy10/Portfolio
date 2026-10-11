'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface TerminalLine {
  type: 'input' | 'output';
  content: string;
}

export default function HeroTerminal() {
  const { locale, t } = useLanguage();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(true);
  const [displayedText, setDisplayedText] = useState('');

  const commands = t.hero.commands;

  // Clear terminal history when language changes
  useEffect(() => {
    setHistory([]);
  }, [locale]);

  // Typewriter effect for greeting
  const fullText = `${t.hero.greeting} Pau Isach Noguera`;
  useEffect(() => {
    setDisplayedText('');
    setIsTyping(true);
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [fullText]);

  // Auto-scroll terminal to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim().toLowerCase();
      let output = '';

      if (trimmed === 'clear') {
        setHistory([]);
        return;
      } else if (trimmed in commands) {
        output = commands[trimmed as keyof typeof commands];
      } else if (trimmed.startsWith('open ')) {
        output = '🔗 Opening in a new tab...';
      } else if (trimmed === '') {
        return;
      } else {
        output = commands.unknown;
      }

      setHistory((prev) => [
        ...prev,
        { type: 'input', content: cmd },
        { type: 'output', content: output },
      ]);
      setCommandHistory((prev) => [cmd, ...prev]);
      setHistoryIndex(-1);
    },
    [commands]
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
      const available = ['help', 'about', 'skills', 'exp', 'projects', 'contact', 'clear'];
      const match = available.find((c) => c.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      {/* Background gradient orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[128px] opacity-20"
        style={{ background: 'var(--accent)' }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-[128px] opacity-15"
        style={{ background: 'var(--cyan)' }}
      />

      <div className="relative z-10 w-full max-w-3xl">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-3 whitespace-nowrap">
            <span className="gradient-text">{displayedText}</span>
            {isTyping && <span className="terminal-cursor" />}
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isTyping ? 0 : 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl sm:text-2xl font-light terminal-text"
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
          className="rounded-xl overflow-hidden border"
          style={{
            background: 'var(--bg-terminal)',
            borderColor: 'var(--border)',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {/* Terminal header */}
          <div
            className="flex items-center gap-2 px-4 py-3 border-b"
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span
              className="text-xs terminal-text ml-2"
              style={{ color: 'var(--text-muted)' }}
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
            <div className="mb-4" style={{ color: 'var(--text-muted)' }}>
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
                    <span style={{ color: 'var(--text-primary)' }}>{line.content}</span>
                  </div>
                ) : (
                  <pre
                    className="whitespace-pre-wrap ml-4"
                    style={{ color: 'var(--terminal-green)' }}
                  >
                    {line.content}
                  </pre>
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
                className="flex-1 bg-transparent outline-none terminal-text text-sm"
                style={{ color: 'var(--text-primary)', caretColor: 'var(--terminal-cursor)' }}
                autoFocus
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