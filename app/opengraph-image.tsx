import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Preview shown when the site is shared on LinkedIn, WhatsApp, Slack...
export const alt = 'Pau Isach Noguera — Desarrollador Full-Stack | Especialista en Frontend';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const [regular, bold] = await Promise.all([
  readFile(join(process.cwd(), 'assets/fonts/JetBrainsMono-Regular.ttf')),
  readFile(join(process.cwd(), 'assets/fonts/JetBrainsMono-Bold.ttf')),
]);

// Same palette as the dark theme in globals.css
const colors = {
  bg: '#0a0a0f',
  terminal: '#0d1117',
  border: 'rgba(255, 255, 255, 0.1)',
  text: '#e4e4e7',
  muted: '#a1a1aa',
  prompt: '#818cf8',
  green: '#4ade80',
  prop: '#22d3ee',
  accent: '#6366f1',
  cyan: '#06b6d4',
};

const stack = ['Angular', 'React', 'Next.js', 'Vue.js', 'TypeScript', 'Java/Spring Boot'];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: colors.bg,
          backgroundImage: `radial-gradient(circle at 12% 20%, rgba(99, 102, 241, 0.35), transparent 45%), radial-gradient(circle at 90% 85%, rgba(6, 182, 212, 0.28), transparent 45%)`,
          fontFamily: 'JetBrains Mono',
        }}
      >
        {/* Terminal window, like the hero of the site */}
        <div
          style={{
            width: 1040,
            display: 'flex',
            flexDirection: 'column',
            background: colors.terminal,
            border: `2px solid ${colors.border}`,
            borderRadius: 24,
            boxShadow: '0 24px 64px rgba(0, 0, 0, 0.6)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '22px 30px',
              borderBottom: `2px solid ${colors.border}`,
            }}
          >
            <div style={{ width: 18, height: 18, borderRadius: 9, background: '#ef4444' }} />
            <div style={{ width: 18, height: 18, borderRadius: 9, background: '#eab308' }} />
            <div style={{ width: 18, height: 18, borderRadius: 9, background: '#22c55e' }} />
            <div style={{ marginLeft: 16, fontSize: 22, color: colors.muted }}>pau@portfolio ~ %</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', padding: '40px 48px 48px' }}>
            <div style={{ display: 'flex', fontSize: 28, color: colors.text }}>
              <span style={{ color: colors.prompt, marginRight: 16 }}>❯</span>
              whoami
            </div>
            <div
              style={{
                display: 'flex',
                marginTop: 18,
                fontSize: 76,
                fontWeight: 700,
                letterSpacing: -2,
                backgroundImage: `linear-gradient(90deg, ${colors.prompt}, ${colors.cyan})`,
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Pau Isach Noguera
            </div>
            <div style={{ display: 'flex', marginTop: 10, fontSize: 29, color: colors.green }}>
              Desarrollador Full-Stack | Especialista en Frontend
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 34 }}>
              {stack.map((tech) => (
                <div
                  key={tech}
                  style={{
                    display: 'flex',
                    fontSize: 22,
                    padding: '6px 16px',
                    borderRadius: 10,
                    color: colors.prompt,
                    background: 'rgba(99, 102, 241, 0.14)',
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', marginTop: 34, fontSize: 24, color: colors.muted }}>
              <span style={{ color: colors.prop, marginRight: 14 }}>8+</span>
              años de experiencia · pau-nughy.dev
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'JetBrains Mono', data: regular, style: 'normal', weight: 400 },
        { name: 'JetBrains Mono', data: bold, style: 'normal', weight: 700 },
      ],
    }
  );
}
