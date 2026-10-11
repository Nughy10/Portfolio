#!/bin/bash
# Portfolio Setup Script - Run from ~/Escritorio/Pau/Portfolio/portfolio
echo "🚀 Setting up portfolio files..."

mkdir -p src/data src/contexts src/components


echo "  📄 Creating src/data/i18n.ts"
cat > 'src/data/i18n.ts' << 'FILEOF'
export type Locale = 'es' | 'en';

export const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      skills: 'Skills',
      experience: 'Experiencia',
      projects: 'Proyectos',
      education: 'Formación',
      contact: 'Contacto',
      downloadCV: 'Descargar CV',
    },
    hero: {
      greeting: 'Hola, soy',
      role: 'Full-Stack Developer',
      hint: 'Escribe "help" para ver los comandos disponibles',
      commands: {
        help: `Comandos disponibles:
  about     → Sobre mí
  skills    → Stack tecnológico
  exp       → Experiencia profesional
  projects  → Proyectos personales
  contact   → Información de contacto
  clear     → Limpiar terminal`,
        about: `> Pau Isach Noguera
  Full-Stack Developer con +4 años de experiencia
  Especializado en Angular, React, Vue.js, Java/Spring Boot
  Background en Ingeniería Electrónica y Telecomunicaciones
  Apasionado por arquitecturas limpias y soluciones escalables`,
        skills: `> Tech Stack
  Frontend  → Angular, React, Next.js, Vue.js, TypeScript
  Backend   → Java, Spring Boot, Node.js, Python
  DevOps    → Docker, Jenkins, SonarQube, Git
  DB        → PostgreSQL, MySQL, MongoDB`,
        exp: `> Experiencia Profesional
  2024-Act  → Zener Soft Consulting | Full-Stack Dev
  2022-2024 → Indra/Minsait (BBVA) | Full-Stack Dev
  2021-2022 → Tag Systems Group | Full-Stack Dev
  2018-2020 → Tavil IND | Automation Engineer`,
        projects: `> Proyectos Personales
  sessio-app.vercel.app     → AI Client Retention (Next.js)
  nughy10.github.io/Gym/    → Gym Tracker (React)
  nughy10.github.io/Pokedex → Pokédex (React)
  nughy10.github.io/Rick-Morty → Rick & Morty App (React)

  Escribe "open <proyecto>" para más detalles`,
        contact: `> Contacto
  Email     → pau.nughy@gmail.com
  LinkedIn  → linkedin.com/in/pau-isach-noguera
  GitHub    → github.com/Nughy10
  Ubicación → Barcelona, España`,
        clear: '',
        unknown: 'Comando no reconocido. Escribe "help" para ver los comandos.',
      },
    },
    about: {
      title: 'Sobre mí',
      bio: [
        'Ingeniero Electrónico reconvertido a Full-Stack Developer con más de 4 años de experiencia en desarrollo web profesional.',
        'Mi background en ingeniería me dio una base sólida en resolución de problemas y pensamiento analítico que aplico diariamente en el desarrollo de software.',
        'He trabajado en proyectos de gran escala para clientes como BBVA, implementando arquitecturas de microservicios con Java/Spring Boot y frontends con Angular, React y Vue.js.',
        'Me apasiona crear soluciones limpias, escalables y con impacto real. Busco un equipo donde seguir creciendo técnicamente y aportar valor desde el primer día.',
      ],
    },
    skills: {
      title: 'Skills',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        devops: 'DevOps & Tools',
        architecture: 'Arquitectura',
        automation: 'Automatización',
        languages: 'Idiomas',
      },
    },
    experience: {
      title: 'Experiencia',
      present: 'Actualidad',
      jobs: [
        {
          company: 'Zener Soft Consulting',
          role: 'Full-Stack Developer',
          period: 'Q1/2024 - Actualidad',
          location: 'Barcelona',
          description: 'Desarrollo full-stack con Angular 17 y Vue.js en frontend, Java con Spring Boot en backend. Arquitectura de microservicios con Docker, RabbitMQ, Eureka. Despliegue con Jenkins, SonarQube, Nexus y Portainer.',
          tech: ['Angular 17', 'Vue.js', 'Java', 'Spring Boot', 'Docker', 'RabbitMQ', 'Jenkins'],
        },
        {
          company: 'Indra / Minsait — BBVA',
          role: 'Full-Stack Developer',
          period: 'Q3/2022 - Q1/2024',
          location: 'Barcelona',
          description: 'Desarrollo de aplicaciones web para BBVA. Frontend con React y backend con Java/Spring Boot. APIs RESTful, PostgreSQL, metodologías ágiles con Scrum.',
          tech: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'Scrum'],
        },
        {
          company: 'Tag Systems Group',
          role: 'Full-Stack Developer',
          period: 'Q3/2021 - Q3/2022',
          location: 'Barcelona',
          description: 'Desarrollo web con React en frontend y Python/Node.js en backend. Integración de APIs y gestión de bases de datos.',
          tech: ['React', 'Python', 'Node.js', 'JavaScript', 'REST APIs'],
        },
        {
          company: 'Tavil IND',
          role: 'Automation Engineer',
          period: 'Q3/2018 - Q4/2020',
          location: 'Barcelona',
          description: 'Programación de PLCs (Siemens, B&R) y robots industriales (KUKA, FANUC, ABB). Automatización de líneas de producción con Python y Structured Text.',
          tech: ['Python', 'PLC Siemens', 'KUKA', 'FANUC', 'ABB', 'Structured Text'],
        },
      ],
    },
    projects: {
      title: 'Proyectos',
      viewCode: 'Ver Código',
      viewLive: 'Ver Demo',
      items: [
        {
          name: 'Sessio',
          description: 'Plataforma SaaS de retención de clientes con IA para coaches y profesionales del fitness. Dashboard con métricas predictivas.',
          tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Supabase', 'OpenAI'],
          live: 'https://sessio-app.vercel.app',
          github: 'https://github.com/Nughy10/sessio',
        },
        {
          name: 'Gym Tracker',
          description: 'Aplicación para registro y seguimiento de entrenamientos en el gimnasio con progresión de cargas.',
          tech: ['React', 'JavaScript', 'CSS3'],
          live: 'https://nughy10.github.io/Gym/',
          github: 'https://github.com/Nughy10/Gym',
        },
        {
          name: 'Pokédex',
          description: 'Pokédex interactiva con búsqueda, filtrado y detalles de cada Pokémon consumiendo la PokéAPI.',
          tech: ['React', 'JavaScript', 'REST API', 'CSS3'],
          live: 'https://nughy10.github.io/Pokedex',
          github: 'https://github.com/Nughy10/Pokedex',
        },
        {
          name: 'Rick & Morty App',
          description: 'Aplicación para explorar personajes de Rick and Morty con filtrado y paginación.',
          tech: ['React', 'JavaScript', 'REST API', 'CSS3'],
          live: 'https://nughy10.github.io/Rick-Morty',
          github: 'https://github.com/Nughy10/Rick-Morty',
        },
        {
          name: 'Shopping App',
          description: 'E-commerce con carrito de compras, gestión de productos y flujo de checkout.',
          tech: ['React', 'JavaScript', 'CSS3'],
          live: 'https://nughy10.github.io/Shopping',
          github: 'https://github.com/Nughy10/Shopping',
        },
        {
          name: 'Spotify Clone',
          description: 'Clon visual de Spotify con reproducción de música y navegación por artistas y playlists.',
          tech: ['React', 'JavaScript', 'Spotify API', 'CSS3'],
          live: 'https://nughy10.github.io/Spotify',
          github: 'https://github.com/Nughy10/Spotify',
        },
        {
          name: 'Football App',
          description: 'Aplicación de seguimiento de resultados y clasificaciones de fútbol en tiempo real.',
          tech: ['React', 'JavaScript', 'REST API', 'CSS3'],
          live: 'https://nughy10.github.io/Football',
          github: 'https://github.com/Nughy10/Football',
        },
      ],
    },
    education: {
      title: 'Formación',
      degrees: [
        {
          title: 'Full-Stack Web Development Bootcamp',
          institution: 'Upgrade Hub',
          year: '2021',
          description: 'Bootcamp intensivo de desarrollo web full-stack: React, Node.js, bases de datos, despliegue.',
        },
        {
          title: 'Grado en Ingeniería Electrónica y Telecomunicaciones',
          institution: 'Universitat de Barcelona (UB)',
          year: '2018',
          description: 'Formación en electrónica, programación, telecomunicaciones y automatización industrial.',
        },
      ],
      certifications: [
        'Programación PLC Siemens TIA Portal (2019)',
        'Programación PLC B&R Automation Studio (2019)',
        'Programación Robot KUKA (2019)',
        'Programación Robot FANUC (2019)',
        'Programación Robot ABB — RobotStudio (2019)',
        'Structured Text (ST) — IEC 61131-3 (2019)',
      ],
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Hablamos?',
      description: 'Estoy buscando nuevas oportunidades. Si crees que puedo aportar valor a tu equipo, no dudes en contactarme.',
      email: 'Email',
      location: 'Ubicación',
      locationValue: 'Barcelona, España',
      sendMessage: 'Enviar mensaje',
    },
    footer: {
      builtWith: 'Hecho con',
      and: 'y',
      by: 'por',
    },
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
      downloadCV: 'Download CV',
    },
    hero: {
      greeting: "Hi, I'm",
      role: 'Full-Stack Developer',
      hint: 'Type "help" to see available commands',
      commands: {
        help: `Available commands:
  about     → About me
  skills    → Tech stack
  exp       → Professional experience
  projects  → Personal projects
  contact   → Contact info
  clear     → Clear terminal`,
        about: `> Pau Isach Noguera
  Full-Stack Developer with 4+ years of experience
  Specialized in Angular, React, Vue.js, Java/Spring Boot
  Background in Electronics & Telecom Engineering
  Passionate about clean architecture and scalable solutions`,
        skills: `> Tech Stack
  Frontend  → Angular, React, Next.js, Vue.js, TypeScript
  Backend   → Java, Spring Boot, Node.js, Python
  DevOps    → Docker, Jenkins, SonarQube, Git
  DB        → PostgreSQL, MySQL, MongoDB`,
        exp: `> Professional Experience
  2024-Now  → Zener Soft Consulting | Full-Stack Dev
  2022-2024 → Indra/Minsait (BBVA) | Full-Stack Dev
  2021-2022 → Tag Systems Group | Full-Stack Dev
  2018-2020 → Tavil IND | Automation Engineer`,
        projects: `> Personal Projects
  sessio-app.vercel.app     → AI Client Retention (Next.js)
  nughy10.github.io/Gym/    → Gym Tracker (React)
  nughy10.github.io/Pokedex → Pokédex (React)
  nughy10.github.io/Rick-Morty → Rick & Morty App (React)

  Type "open <project>" for more details`,
        contact: `> Contact
  Email     → pau.nughy@gmail.com
  LinkedIn  → linkedin.com/in/pau-isach-noguera
  GitHub    → github.com/Nughy10
  Location  → Barcelona, Spain`,
        clear: '',
        unknown: 'Command not recognized. Type "help" to see available commands.',
      },
    },
    about: {
      title: 'About Me',
      bio: [
        'Electronics Engineer turned Full-Stack Developer with 4+ years of professional web development experience.',
        'My engineering background gave me a solid foundation in problem-solving and analytical thinking that I apply daily in software development.',
        "I've worked on large-scale projects for clients like BBVA, implementing microservice architectures with Java/Spring Boot and frontends with Angular, React, and Vue.js.",
        "I'm passionate about creating clean, scalable solutions with real impact. I'm looking for a team where I can keep growing technically and add value from day one.",
      ],
    },
    skills: {
      title: 'Skills',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        devops: 'DevOps & Tools',
        architecture: 'Architecture',
        automation: 'Automation',
        languages: 'Languages',
      },
    },
    experience: {
      title: 'Experience',
      present: 'Present',
      jobs: [
        {
          company: 'Zener Soft Consulting',
          role: 'Full-Stack Developer',
          period: 'Q1/2024 - Present',
          location: 'Barcelona',
          description: 'Full-stack development with Angular 17 and Vue.js on the frontend, Java with Spring Boot on the backend. Microservices architecture with Docker, RabbitMQ, Eureka. CI/CD with Jenkins, SonarQube, Nexus, and Portainer.',
          tech: ['Angular 17', 'Vue.js', 'Java', 'Spring Boot', 'Docker', 'RabbitMQ', 'Jenkins'],
        },
        {
          company: 'Indra / Minsait — BBVA',
          role: 'Full-Stack Developer',
          period: 'Q3/2022 - Q1/2024',
          location: 'Barcelona',
          description: 'Web application development for BBVA. Frontend with React and backend with Java/Spring Boot. RESTful APIs, PostgreSQL, agile methodologies with Scrum.',
          tech: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'Scrum'],
        },
        {
          company: 'Tag Systems Group',
          role: 'Full-Stack Developer',
          period: 'Q3/2021 - Q3/2022',
          location: 'Barcelona',
          description: 'Web development with React on the frontend and Python/Node.js on the backend. API integration and database management.',
          tech: ['React', 'Python', 'Node.js', 'JavaScript', 'REST APIs'],
        },
        {
          company: 'Tavil IND',
          role: 'Automation Engineer',
          period: 'Q3/2018 - Q4/2020',
          location: 'Barcelona',
          description: 'PLC programming (Siemens, B&R) and industrial robots (KUKA, FANUC, ABB). Production line automation with Python and Structured Text.',
          tech: ['Python', 'PLC Siemens', 'KUKA', 'FANUC', 'ABB', 'Structured Text'],
        },
      ],
    },
    projects: {
      title: 'Projects',
      viewCode: 'View Code',
      viewLive: 'Live Demo',
      items: [
        {
          name: 'Sessio',
          description: 'SaaS platform for AI-powered client retention for coaches and fitness professionals. Dashboard with predictive metrics.',
          tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Supabase', 'OpenAI'],
          live: 'https://sessio-app.vercel.app',
          github: 'https://github.com/Nughy10/sessio',
        },
        {
          name: 'Gym Tracker',
          description: 'Application for logging and tracking gym workouts with load progression.',
          tech: ['React', 'JavaScript', 'CSS3'],
          live: 'https://nughy10.github.io/Gym/',
          github: 'https://github.com/Nughy10/Gym',
        },
        {
          name: 'Pokédex',
          description: 'Interactive Pokédex with search, filtering, and detailed Pokémon info using the PokéAPI.',
          tech: ['React', 'JavaScript', 'REST API', 'CSS3'],
          live: 'https://nughy10.github.io/Pokedex',
          github: 'https://github.com/Nughy10/Pokedex',
        },
        {
          name: 'Rick & Morty App',
          description: 'Application to explore Rick and Morty characters with filtering and pagination.',
          tech: ['React', 'JavaScript', 'REST API', 'CSS3'],
          live: 'https://nughy10.github.io/Rick-Morty',
          github: 'https://github.com/Nughy10/Rick-Morty',
        },
        {
          name: 'Shopping App',
          description: 'E-commerce with shopping cart, product management, and checkout flow.',
          tech: ['React', 'JavaScript', 'CSS3'],
          live: 'https://nughy10.github.io/Shopping',
          github: 'https://github.com/Nughy10/Shopping',
        },
        {
          name: 'Spotify Clone',
          description: 'Visual Spotify clone with music playback and artist/playlist navigation.',
          tech: ['React', 'JavaScript', 'Spotify API', 'CSS3'],
          live: 'https://nughy10.github.io/Spotify',
          github: 'https://github.com/Nughy10/Spotify',
        },
        {
          name: 'Football App',
          description: 'Real-time football scores and standings tracking application.',
          tech: ['React', 'JavaScript', 'REST API', 'CSS3'],
          live: 'https://nughy10.github.io/Football',
          github: 'https://github.com/Nughy10/Football',
        },
      ],
    },
    education: {
      title: 'Education',
      degrees: [
        {
          title: 'Full-Stack Web Development Bootcamp',
          institution: 'Upgrade Hub',
          year: '2021',
          description: 'Intensive full-stack web development bootcamp: React, Node.js, databases, deployment.',
        },
        {
          title: 'Electronics & Telecommunications Engineering Degree',
          institution: 'University of Barcelona (UB)',
          year: '2018',
          description: 'Training in electronics, programming, telecommunications, and industrial automation.',
        },
      ],
      certifications: [
        'PLC Programming Siemens TIA Portal (2019)',
        'PLC Programming B&R Automation Studio (2019)',
        'KUKA Robot Programming (2019)',
        'FANUC Robot Programming (2019)',
        'ABB Robot Programming — RobotStudio (2019)',
        'Structured Text (ST) — IEC 61131-3 (2019)',
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: "Let's talk",
      description: "I'm looking for new opportunities. If you think I can add value to your team, don't hesitate to reach out.",
      email: 'Email',
      location: 'Location',
      locationValue: 'Barcelona, Spain',
      sendMessage: 'Send message',
    },
    footer: {
      builtWith: 'Built with',
      and: 'and',
      by: 'by',
    },
  },
} as const;

export const skillsData = {
  frontend: {
    icon: '🎨',
    items: [
      { name: 'Angular', level: 90 },
      { name: 'React', level: 88 },
      { name: 'Next.js', level: 80 },
      { name: 'Vue.js', level: 82 },
      { name: 'TypeScript', level: 88 },
      { name: 'JavaScript', level: 92 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3 / Tailwind', level: 90 },
    ],
  },
  backend: {
    icon: '⚙️',
    items: [
      { name: 'Java', level: 85 },
      { name: 'Spring Boot', level: 83 },
      { name: 'Node.js', level: 78 },
      { name: 'Python', level: 75 },
      { name: 'REST APIs', level: 90 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 78 },
    ],
  },
  devops: {
    icon: '🚀',
    items: [
      { name: 'Docker', level: 80 },
      { name: 'Jenkins', level: 75 },
      { name: 'SonarQube', level: 72 },
      { name: 'Git', level: 90 },
      { name: 'Linux', level: 78 },
      { name: 'Portainer', level: 70 },
    ],
  },
  architecture: {
    icon: '🏗️',
    items: [
      { name: 'Microservices', level: 80 },
      { name: 'RabbitMQ', level: 72 },
      { name: 'Eureka', level: 70 },
      { name: 'Keycloak', level: 68 },
    ],
  },
  automation: {
    icon: '🤖',
    items: [
      { name: 'PLC Siemens', level: 82 },
      { name: 'PLC B&R', level: 78 },
      { name: 'KUKA', level: 75 },
      { name: 'FANUC', level: 75 },
      { name: 'ABB', level: 72 },
    ],
  },
  languages: {
    icon: '🌍',
    items: [
      { name: 'Catalán', level: 100, label: 'Nativo' },
      { name: 'Español', level: 100, label: 'Nativo' },
      { name: 'English', level: 85, label: 'Advanced' },
    ],
  },
};

FILEOF

echo "  📄 Creating src/contexts/LanguageContext.tsx"
cat > 'src/contexts/LanguageContext.tsx' << 'FILEOF'
'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { translations, type Locale } from '@/data/i18n';

type TranslationType = typeof translations.es;

interface LanguageContextType {
  locale: Locale;
  t: TranslationType;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('es');

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === 'es' ? 'en' : 'es'));
  }, []);

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

FILEOF

echo "  📄 Creating src/contexts/ThemeContext.tsx"
cat > 'src/contexts/ThemeContext.tsx' << 'FILEOF'
'use client';

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (x: number, y: number) => void;
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback((x: number, y: number) => {
    if (isTransitioning) return;

    // Check for View Transitions API support
    if (!document.startViewTransition) {
      setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
      return;
    }

    setIsTransitioning(true);

    // Set CSS custom properties for the wave origin
    document.documentElement.style.setProperty('--wave-x', `${x}px`);
    document.documentElement.style.setProperty('--wave-y', `${y}px`);

    const transition = document.startViewTransition(() => {
      setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    });

    transition.finished.then(() => {
      setIsTransitioning(false);
    });
  }, [isTransitioning]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

FILEOF

echo "  📄 Creating src/app/globals.css"
cat > 'src/app/globals.css' << 'FILEOF'
@import "tailwindcss";

/* ============================================
   THEME VARIABLES
   ============================================ */

:root {
  /* Dark theme (default) */
  --bg-primary: #0a0a0f;
  --bg-secondary: #12121a;
  --bg-card: #1a1a2e;
  --bg-card-hover: #22223a;
  --bg-terminal: #0d1117;
  --bg-code: #161b22;

  --text-primary: #e4e4e7;
  --text-secondary: #a1a1aa;
  --text-muted: #71717a;

  --accent: #6366f1;
  --accent-hover: #818cf8;
  --accent-glow: rgba(99, 102, 241, 0.3);
  --accent-subtle: rgba(99, 102, 241, 0.1);

  --green: #22c55e;
  --green-dim: #16a34a;
  --cyan: #06b6d4;
  --amber: #f59e0b;
  --rose: #f43f5e;

  --border: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(255, 255, 255, 0.15);

  --terminal-green: #4ade80;
  --terminal-prompt: #6366f1;
  --terminal-cursor: #6366f1;

  --nav-bg: rgba(10, 10, 15, 0.8);
  --nav-border: rgba(255, 255, 255, 0.06);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.5);
  --shadow-glow: 0 0 20px var(--accent-glow);
}

[data-theme='light'] {
  --bg-primary: #fafafa;
  --bg-secondary: #f4f4f5;
  --bg-card: #ffffff;
  --bg-card-hover: #f9f9fb;
  --bg-terminal: #1e1e2e;
  --bg-code: #282a36;

  --text-primary: #18181b;
  --text-secondary: #52525b;
  --text-muted: #a1a1aa;

  --accent: #4f46e5;
  --accent-hover: #6366f1;
  --accent-glow: rgba(79, 70, 229, 0.2);
  --accent-subtle: rgba(79, 70, 229, 0.06);

  --border: rgba(0, 0, 0, 0.08);
  --border-hover: rgba(0, 0, 0, 0.15);

  --terminal-green: #22c55e;
  --terminal-prompt: #4f46e5;
  --terminal-cursor: #4f46e5;

  --nav-bg: rgba(250, 250, 250, 0.85);
  --nav-border: rgba(0, 0, 0, 0.06);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.12);
  --shadow-glow: 0 0 20px var(--accent-glow);
}

/* ============================================
   VIEW TRANSITION — WAVE EFFECT
   ============================================ */

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root) {
  z-index: 1;
}

::view-transition-new(root) {
  z-index: 9999;
  animation: wave-reveal 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes wave-reveal {
  from {
    clip-path: circle(0% at var(--wave-x, 50%) var(--wave-y, 50%));
  }
  to {
    clip-path: circle(150% at var(--wave-x, 50%) var(--wave-y, 50%));
  }
}

/* ============================================
   BASE STYLES
   ============================================ */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

body {
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  min-height: 100vh;
  overflow-x: hidden;
  transition: background 0.3s ease;
}

/* ============================================
   SCROLLBAR
   ============================================ */

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}

::-webkit-scrollbar-thumb {
  background: var(--accent);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--accent-hover);
}

/* ============================================
   SELECTION
   ============================================ */

::selection {
  background: var(--accent);
  color: white;
}

/* ============================================
   TERMINAL STYLES
   ============================================ */

.terminal-text {
  font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;
}

.terminal-cursor {
  display: inline-block;
  width: 8px;
  height: 18px;
  background: var(--terminal-cursor);
  animation: blink 1s step-end infinite;
  vertical-align: text-bottom;
  margin-left: 2px;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* ============================================
   GLOW EFFECTS
   ============================================ */

.glow-border {
  position: relative;
}

.glow-border::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, var(--accent), var(--cyan), var(--accent));
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.glow-border:hover::before {
  opacity: 1;
}

/* ============================================
   GRADIENT TEXT
   ============================================ */

.gradient-text {
  background: linear-gradient(135deg, var(--accent) 0%, var(--cyan) 50%, var(--accent-hover) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ============================================
   BENTO GRID TILT
   ============================================ */

.bento-card {
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: transform 0.1s ease;
}

.bento-card-inner {
  transform: translateZ(20px);
}

/* ============================================
   SECTION STYLES
   ============================================ */

.section {
  padding: 6rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .section {
    padding: 8rem 2rem;
  }
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), var(--cyan));
  border-radius: 2px;
}

/* ============================================
   EASTER EGG CONSOLE
   ============================================ */
/* Check the console ;) — loaded via layout.tsx script */

FILEOF

echo "  📄 Creating src/app/layout.tsx"
cat > 'src/app/layout.tsx' << 'FILEOF'
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pau Isach Noguera — Full-Stack Developer',
  description:
    'Full-Stack Developer con +4 años de experiencia en Angular, React, Vue.js, Java/Spring Boot. Portfolio profesional.',
  keywords: [
    'Full-Stack Developer',
    'Angular',
    'React',
    'Vue.js',
    'Java',
    'Spring Boot',
    'TypeScript',
    'Barcelona',
    'Portfolio',
  ],
  authors: [{ name: 'Pau Isach Noguera' }],
  openGraph: {
    title: 'Pau Isach Noguera — Full-Stack Developer',
    description:
      'Full-Stack Developer con +4 años de experiencia. Angular, React, Vue.js, Java/Spring Boot.',
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-theme="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main>{children}</main>
          </LanguageProvider>
        </ThemeProvider>

        {/* Easter egg for devs who open the console */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log(
                '%c👋 Hey developer!',
                'font-size: 24px; font-weight: bold; color: #6366f1;'
              );
              console.log(
                '%cIf you\\'re reading this, we should talk.\\n📧 pau.nughy@gmail.com\\n🔗 github.com/Nughy10',
                'font-size: 14px; color: #a1a1aa;'
              );
              console.log(
                '%cBuilt with Next.js 15 + TypeScript + Tailwind + Framer Motion',
                'font-size: 12px; color: #6366f1; font-style: italic;'
              );
            `,
          }}
        />
      </body>
    </html>
  );
}

FILEOF

echo "  📄 Creating src/app/page.tsx"
cat > 'src/app/page.tsx' << 'FILEOF'
import HeroTerminal from '@/components/HeroTerminal';
import AboutCodeEditor from '@/components/AboutCodeEditor';
import SkillsBento from '@/components/SkillsBento';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ProjectsGrid from '@/components/ProjectsGrid';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <HeroTerminal />
      <AboutCodeEditor />
      <SkillsBento />
      <ExperienceTimeline />
      <ProjectsGrid />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

FILEOF

echo "  📄 Creating src/components/Navbar.tsx"
cat > 'src/components/Navbar.tsx' << 'FILEOF'
'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

const navSections = ['about', 'skills', 'experience', 'projects', 'education', 'contact'] as const;

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { locale, t, toggleLocale } = useLanguage();
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Track scroll position for navbar bg and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Find active section
      const sections = navSections.map((id) => document.getElementById(id));
      let current = '';
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  }, []);

  const handleThemeToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    toggleTheme(x, y);
  };

  const navLabels = t.nav;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-xl border-b'
            : ''
        }`}
        style={{
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          borderColor: scrolled ? 'var(--nav-border)' : 'transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="terminal-text text-lg font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ color: 'var(--accent)' }}
            >
              {'<'}
              <span style={{ color: 'var(--text-primary)' }}>Pau</span>
              {' />'}
            </motion.button>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-1">
              {navSections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollTo(section)}
                  className="relative px-3 py-2 text-sm font-medium rounded-lg transition-colors"
                  style={{
                    color:
                      activeSection === section
                        ? 'var(--accent)'
                        : 'var(--text-secondary)',
                  }}
                >
                  {navLabels[section as keyof typeof navLabels]}
                  {activeSection === section && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                      style={{ background: 'var(--accent)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-2">
              {/* Language toggle */}
              <motion.button
                onClick={toggleLocale}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-2.5 py-1.5 rounded-lg text-xs font-bold terminal-text border transition-colors"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--text-secondary)',
                }}
                title={locale === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              >
                {locale === 'es' ? 'EN' : 'ES'}
              </motion.button>

              {/* Theme toggle */}
              <motion.button
                onClick={handleThemeToggle}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg transition-colors"
                style={{ color: 'var(--text-secondary)' }}
                title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
              >
                {theme === 'dark' ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </motion.button>

              {/* Download CV */}
              <motion.a
                href={locale === 'es' ? '/cv-es.pdf' : '/cv-en.pdf'}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-white transition-colors"
                style={{ background: 'var(--accent)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {navLabels.downloadCV}
              </motion.a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-lg"
                style={{ color: 'var(--text-secondary)' }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  {mobileOpen ? (
                    <>
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </>
                  ) : (
                    <>
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-16 md:hidden"
            style={{ background: 'var(--bg-primary)' }}
          >
            <div className="flex flex-col items-center gap-2 p-8">
              {navSections.map((section, i) => (
                <motion.button
                  key={section}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(section)}
                  className="w-full text-center py-3 text-lg font-medium rounded-lg transition-colors"
                  style={{
                    color:
                      activeSection === section
                        ? 'var(--accent)'
                        : 'var(--text-secondary)',
                  }}
                >
                  {navLabels[section as keyof typeof navLabels]}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navSections.length * 0.05 }}
                href={locale === 'es' ? '/cv-es.pdf' : '/cv-en.pdf'}
                download
                className="mt-4 flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium"
                style={{ background: 'var(--accent)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {navLabels.downloadCV}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

FILEOF

echo "  📄 Creating src/components/HeroTerminal.tsx"
cat > 'src/components/HeroTerminal.tsx' << 'FILEOF'
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface TerminalLine {
  type: 'input' | 'output';
  content: string;
}

export default function HeroTerminal() {
  const { t } = useLanguage();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(true);
  const [displayedText, setDisplayedText] = useState('');

  const commands = t.hero.commands;

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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3">
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
                Welcome to Pau&apos;s Portfolio Terminal v1.0.0
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

FILEOF

echo "  📄 Creating src/components/AboutCodeEditor.tsx"
cat > 'src/components/AboutCodeEditor.tsx' << 'FILEOF'
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutCodeEditor() {
  const { locale, t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const codeLines = [
    { indent: 0, text: 'interface', keyword: true, rest: ' Developer {' },
    { indent: 1, text: 'name:', prop: true, value: ' "Pau Isach Noguera",' },
    { indent: 1, text: 'role:', prop: true, value: ' "Full-Stack Developer",' },
    { indent: 1, text: 'location:', prop: true, value: ' "Barcelona, Spain",' },
    { indent: 1, text: 'experience:', prop: true, value: ' "4+ years",' },
    { indent: 1, text: 'education:', prop: true, value: ' "Electronics & Telecom Engineering",' },
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

        <div className="grid md:grid-cols-2 gap-8 mt-12">
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
              style={{ borderColor: 'var(--border)' }}
            >
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs terminal-text" style={{ color: 'var(--text-muted)' }}>
                developer.ts
              </span>
            </div>

            {/* Code content */}
            <div className="p-4 terminal-text text-sm leading-7 overflow-x-auto">
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
                    style={{ color: 'var(--text-muted)', opacity: 0.5 }}
                  >
                    {i + 1}
                  </span>

                  {/* Code */}
                  <span style={{ paddingLeft: `${line.indent * 1.5}rem` }}>
                    {line.keyword && (
                      <span style={{ color: 'var(--rose)' }}>{line.text}</span>
                    )}
                    {line.prop && (
                      <span style={{ color: 'var(--cyan)' }}>{line.text}</span>
                    )}
                    {!line.keyword && !line.prop && (
                      <span style={{ color: 'var(--text-primary)' }}>{line.text}</span>
                    )}
                    {line.rest && (
                      <span style={{ color: 'var(--text-primary)' }}>{line.rest}</span>
                    )}
                    {line.value && (
                      <span style={{ color: 'var(--green)' }}>{line.value}</span>
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

FILEOF

echo "  📄 Creating src/components/SkillsBento.tsx"
cat > 'src/components/SkillsBento.tsx' << 'FILEOF'
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
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
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
        borderColor: 'var(--border)',
        transition: 'transform 0.1s ease, box-shadow 0.3s ease',
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
                style={{ background: 'var(--bg-primary)' }}
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

FILEOF

echo "  📄 Creating src/components/ExperienceTimeline.tsx"
cat > 'src/components/ExperienceTimeline.tsx' << 'FILEOF'
'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ExperienceTimeline() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%']);

  return (
    <section id="experience" className="section" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">{t.experience.title}</h2>

        <div className="relative mt-12 ml-4 md:ml-0">
          {/* Animated vertical line */}
          <div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
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
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className={`relative mb-12 md:w-1/2 pl-8 md:pl-0 ${
                  isLeft ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
                }`}
              >
                {/* Dot on the line */}
                <div
                  className="absolute top-2 w-4 h-4 rounded-full border-2 z-10"
                  style={{
                    left: '-0.5rem',
                    borderColor: 'var(--accent)',
                    background: 'var(--bg-primary)',
                    ...(typeof window !== 'undefined' && window.innerWidth >= 768
                      ? isLeft
                        ? { left: 'auto', right: '-0.5rem' }
                        : { left: '-0.5rem' }
                      : {}),
                  }}
                />

                {/* Card */}
                <div
                  className="p-5 rounded-xl border transition-all duration-300 hover:border-opacity-50 glow-border"
                  style={{
                    background: 'var(--bg-card)',
                    borderColor: 'var(--border)',
                  }}
                >
                  <div className={`flex flex-col ${isLeft ? 'md:items-end' : ''}`}>
                    <span
                      className="text-xs terminal-text font-medium px-2 py-0.5 rounded-full mb-2 inline-block w-fit"
                      style={{
                        background: 'var(--accent-subtle)',
                        color: 'var(--accent)',
                      }}
                    >
                      {job.period}
                    </span>
                    <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                      {job.company}
                    </h3>
                    <p className="text-sm font-medium mb-2" style={{ color: 'var(--accent)' }}>
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
                            background: 'var(--bg-primary)',
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

FILEOF

echo "  📄 Creating src/components/ProjectsGrid.tsx"
cat > 'src/components/ProjectsGrid.tsx' << 'FILEOF'
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {t.projects.items.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group rounded-xl border overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border)',
              }}
            >
              {/* Card gradient top bar */}
              <div
                className="h-1"
                style={{
                  background: `linear-gradient(90deg, var(--accent), var(--cyan))`,
                  opacity: 0.7,
                }}
              />

              <div className="p-5">
                {/* Project name */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                    {project.name}
                  </h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg transition-colors hover:opacity-80"
                        style={{ color: 'var(--text-muted)' }}
                        title={t.projects.viewCode}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg transition-colors hover:opacity-80"
                        style={{ color: 'var(--text-muted)' }}
                        title={t.projects.viewLive}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-sm mb-4 leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded-md terminal-text"
                      style={{
                        background: 'var(--accent-subtle)',
                        color: 'var(--accent)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

FILEOF

echo "  📄 Creating src/components/Education.tsx"
cat > 'src/components/Education.tsx' << 'FILEOF'
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

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

        <div className="mt-12 space-y-12">
          {/* Degrees */}
          <div className="grid md:grid-cols-2 gap-5">
            {t.education.degrees.map((degree, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="p-5 rounded-xl border glow-border"
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
                    🎓
                  </div>
                  <div>
                    <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>
                      {degree.title}
                    </h3>
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
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Certifications
            </h3>
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

FILEOF

echo "  📄 Creating src/components/Contact.tsx"
cat > 'src/components/Contact.tsx' << 'FILEOF'
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Nughy10',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/pau-isach-noguera',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    url: 'mailto:pau.nughy@gmail.com',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function Contact() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="section" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="section-title mx-auto">{t.contact.title}</h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl font-bold mb-4 mt-8 gradient-text"
        >
          {t.contact.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-base mb-8"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t.contact.description}
        </motion.p>

        {/* Contact info cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="grid sm:grid-cols-2 gap-4 mb-10"
        >
          <div
            className="p-5 rounded-xl border text-center"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
          >
            <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>
              {t.contact.email}
            </p>
            <a
              href="mailto:pau.nughy@gmail.com"
              className="font-medium hover:underline"
              style={{ color: 'var(--accent)' }}
            >
              pau.nughy@gmail.com
            </a>
          </div>
          <div
            className="p-5 rounded-xl border text-center"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
          >
            <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>
              {t.contact.location}
            </p>
            <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
              {t.contact.locationValue}
            </p>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-4"
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.url}
              target={link.url.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-xl border transition-colors"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border)',
                color: 'var(--text-secondary)',
              }}
              title={link.name}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

FILEOF

echo "  📄 Creating src/components/Footer.tsx"
cat > 'src/components/Footer.tsx' << 'FILEOF'
'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="py-8 px-4 border-t text-center"
      style={{ borderColor: 'var(--border)' }}
    >
      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
        {t.footer.builtWith}{' '}
        <span className="terminal-text" style={{ color: 'var(--accent)' }}>
          Next.js
        </span>{' '}
        {t.footer.and}{' '}
        <span className="terminal-text" style={{ color: 'var(--cyan)' }}>
          Framer Motion
        </span>{' '}
        {t.footer.by}{' '}
        <a
          href="https://github.com/Nughy10"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium hover:underline"
          style={{ color: 'var(--text-primary)' }}
        >
          Pau Isach Noguera
        </a>
      </p>
    </footer>
  );
}

FILEOF

echo ""
echo "✅ All 15 files created!"
echo "Run: npm run dev"
