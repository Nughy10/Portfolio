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
      role: 'Analista Programador Full-Stack | Especialista en Automatización',
      welcome: 'Bienvenido al Terminal del Portfolio de Pau v1.0.0',
      hint: 'Escribe "help" para ver los comandos disponibles',
      commands: {
        help: `Comandos disponibles:
  about     → Sobre mí
  skills    → Stack tecnológico
  exp       → Experiencia profesional
  projects  → Proyectos profesionales
  contact   → Información de contacto
  clear     → Limpiar terminal`,
        about: `> Pau Isach Noguera
  Analista Programador Full-Stack & Especialista en Automatización
  5+ años en banca digital, sector público y automatización
  Background en Ingeniería Electrónica y Telecomunicaciones
  Disponible para posiciones remotas e internacionales`,
        skills: `> Tech Stack
  Frontend  → Angular, React, Next.js, Vue.js, TypeScript
  Backend   → Java, Spring Boot, Node.js, Python
  DevOps    → Docker, Jenkins, SonarQube, Git, Linux
  DB        → PostgreSQL, MySQL`,
        exp: `> Experiencia Profesional
  2024-Act  → Zener Soft Consulting | Analista Programador
  2022-2024 → Indra/Minsait (BBVA) | Desarrollador Full-Stack
  2021-2022 → Tag Systems Group | Full-Stack y Automatización
  2018-2020 → Tavil IND S.A.U. | Automatización y Robótica`,
        projects: `> Proyectos Profesionales
  sessiohq.com           → SaaS retención clientes con IA
  codigohombre.es        → Gestión de clientes
  introns.org            → Colección NFT
  721.harddiskmuseum.com → Marketplace NFT

  Escribe "open <proyecto>" para más detalles`,
        contact: `> Contacto
  Email     → pau.nughy@gmail.com
  LinkedIn  → linkedin.com/in/pau-isach-noguera
  GitHub    → github.com/Nughy10
  Ubicación → España`,
        clear: '',
        unknown: 'Comando no reconocido. Escribe "help" para ver los comandos.',
      },
    },
    about: {
      title: 'Sobre mí',
      bio: [
        'Analista Programador Full-Stack & Especialista en Automatización con 5+ años de experiencia en banca digital, sector público y sistemas automatizables.',
        'Mi background en Ingeniería Electrónica y Telecomunicaciones me dio una base sólida en resolución de problemas y pensamiento analítico que aplico diariamente en el desarrollo de software.',
        'He trabajado en proyectos de gran escala como BBVA (banca digital), ONT (coordinación de trasplantes) y Tesoro Público (gestión financiera estatal), implementando arquitecturas de microservicios con Java/Spring Boot y frontends con Angular, React y Vue.js.',
        'Profesional autónomo, versátil y orientado a resultados. Disponible para posiciones remotas, nacionales e internacionales.',
      ],
    },
    skills: {
      title: 'Skills',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend y Bases de Datos',
        devops: 'DevOps y Cloud',
        architecture: 'Arquitectura y Microservicios',
        automation: 'Automatización e Ingeniería',
        languages: 'Idiomas',
      },
    },
    experience: {
      title: 'Experiencia',
      present: 'Actualidad',
      jobs: [
        {
          company: 'Zener Soft Consulting',
          role: 'Analista Programador',
          period: 'Q1/2024 - Actualidad',
          location: 'España',
          description: 'Consultoría de tecnologías de la información en el sector público. Participé en dos proyectos: ONT (coordinación de trasplantes, donantes y pacientes) y Tesoro Público (gestión financiera estatal).',
          tech: ['Angular', 'Vue.js', 'TypeScript', 'Java', 'Spring Boot', 'Docker', 'RabbitMQ', 'Jenkins'],
        },
        {
          company: 'Indra (Minsait) — BBVA',
          role: 'Desarrollador Full-Stack',
          period: 'Q3/2022 - Q1/2024',
          location: 'España',
          description: 'Empresa multinacional española líder en consultoría de transformación digital. Proyecto en BBVA desarrollando herramientas internas de gestión y soporte para el área de pagos y banca digital.',
          tech: ['React.js', 'TypeScript', 'Bootstrap', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Git'],
        },
        {
          company: 'Tag Systems Group',
          role: 'Desarrollador Full-Stack y Automatización',
          period: 'Q3/2021 - Q3/2022',
          location: 'España',
          description: 'Grupo internacional especializado en fabricación, personalización y distribución de tarjetas inteligentes. Desarrollé software para pagos móviles, tokenización de tarjetas y automatización de procesos de fabricación.',
          tech: ['React.js', 'JavaScript', 'Python', 'Node.js', 'MySQL', 'Docker', 'Keycloak', 'Git'],
        },
        {
          company: 'Tavil IND S.A.U.',
          role: 'Desarrollador en Automatización y Robótica',
          period: 'Q3/2018 - Q4/2020',
          location: 'España',
          description: 'Empresa líder en automatización industrial especializada en líneas automáticas de encajado y paletización. Desarrollé software de programación PLC y robótica para sistemas automáticos de pick & place y paletización de productos.',
          tech: ['Python', 'ST', 'Siemens', 'B&R', 'KUKA', 'FANUC', 'ABB', 'Bihl+Wiedemann'],
        },
      ],
    },
    projects: {
      title: 'Proyectos',
      viewCode: 'Ver Código',
      viewLive: 'Ver Demo',
      items: [
        {
          name: 'Sessio HQ',
          description: 'SaaS de retención de clientes con IA para coaches y terapeutas.',
          tech: ['Next.js', 'Supabase', 'Vercel', 'Cloudflare', 'Stripe', 'Claude API'],
          live: 'https://sessiohq.com',
          github: '',
        },
        {
          name: 'Código Hombre',
          description: 'Aplicación para la gestión de clientes de Roger Ubach.',
          tech: ['Next.js', 'Supabase', 'Vercel', 'Cloudflare', 'Stripe', 'Resend'],
          live: 'https://codigohombre.es',
          github: '',
        },
        {
          name: 'RPSLS',
          description: 'Aplicación "Piedra, Papel, Tijera, Lagarto, Spock".',
          tech: ['LitElement', 'JavaScript', 'HTML5', 'CSS3', 'Netlify'],
          live: 'http://capable-entremet-55d8c2.netlify.app/',
          github: '',
        },
        {
          name: 'Introns',
          description: 'Colección de NFTs de Solimán López.',
          tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
          live: 'http://introns.org/#/',
          github: '',
        },
        {
          name: 'Celeste',
          description: 'Proyecto artístico digital de Solimán López.',
          tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
          live: 'http://celeste.solimanlopez.com/',
          github: '',
        },
        {
          name: 'HDM Marketplace',
          description: 'Marketplace de NFTs del Harddiskmuseum.',
          tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
          live: 'http://721.harddiskmuseum.com/',
          github: '',
        },
        {
          name: 'HDM Radar',
          description: 'Colección NFT para los artistas del Harddiskmuseum.',
          tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
          live: 'http://radar.harddiskmuseum.com/',
          github: '',
        },
      ],
    },
    education: {
      title: 'Formación',
      degrees: [
        {
          title: 'Curso de Programación Full-Stack',
          institution: 'Upgrade Hub / Madrid - Remoto',
          year: '2021',
          description: 'Bootcamp intensivo de desarrollo web full-stack: React, Node.js, bases de datos, despliegue.',
        },
        {
          title: 'Grado en Ingeniería Electrónica y Telecomunicaciones',
          institution: 'Universidad de Barcelona / Facultad de Física',
          year: '2018',
          description: 'Formación en electrónica, programación, telecomunicaciones y automatización industrial.',
        },
      ],
      certificationsTitle: 'Licencias y Certificaciones',
      certifications: [
        'Automation Studio Control / Motion & Visual Components – B&R Industrial Automation (2019)',
        'TIA PORTAL / WinCC – Siemens (2019)',
        'KUKA Robots Programming P1 & P2 – KUKA (2019)',
        'IRPickTool & IRVision / TPE Programming – FANUC (2019)',
        'IRC5 / Pick Master 3.0 – ABB (2019)',
        'AS-I 3.0 & AS-I Safety – Bihl + Wiedemann (2019)',
      ],
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Hablamos?',
      description: 'Estoy buscando nuevas oportunidades. Incorporación inmediata, 100% remoto, zona horaria flexible (CET). Si crees que puedo aportar valor a tu equipo, no dudes en contactarme.',
      email: 'Email',
      location: 'Ubicación',
      locationValue: 'España',
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
      role: 'Full-Stack Analyst Developer | Automation Specialist',
      welcome: "Welcome to Pau's Portfolio Terminal v1.0.0",
      hint: 'Type "help" to see available commands',
      commands: {
        help: `Available commands:
  about     → About me
  skills    → Tech stack
  exp       → Professional experience
  projects  → Professional projects
  contact   → Contact info
  clear     → Clear terminal`,
        about: `> Pau Isach Noguera
  Full-Stack Analyst Developer & Automation Specialist
  5+ years in digital banking, public sector & automation
  Background in Electronics & Telecom Engineering
  Available for remote and international positions`,
        skills: `> Tech Stack
  Frontend  → Angular, React, Next.js, Vue.js, TypeScript
  Backend   → Java, Spring Boot, Node.js, Python
  DevOps    → Docker, Jenkins, SonarQube, Git, Linux
  DB        → PostgreSQL, MySQL`,
        exp: `> Professional Experience
  2024-Now  → Zener Soft Consulting | Programmer Analyst
  2022-2024 → Indra/Minsait (BBVA) | Full-Stack Developer
  2021-2022 → Tag Systems Group | Full-Stack & Automation Dev
  2018-2020 → Tavil IND S.A.U. | Automation & Robotics Dev`,
        projects: `> Professional Projects
  sessiohq.com           → AI Customer Retention SaaS
  codigohombre.es        → Client Management App
  introns.org            → NFT Collection
  721.harddiskmuseum.com → NFT Marketplace

  Type "open <project>" for more details`,
        contact: `> Contact
  Email     → pau.nughy@gmail.com
  LinkedIn  → linkedin.com/in/pau-isach-noguera
  GitHub    → github.com/Nughy10
  Location  → Spain`,
        clear: '',
        unknown: 'Command not recognized. Type "help" to see available commands.',
      },
    },
    about: {
      title: 'About Me',
      bio: [
        'Full-Stack Analyst Developer & Automation Specialist with 5+ years of experience in digital banking, public sector, and automation systems.',
        'My background in Electronics & Telecommunications Engineering gave me a solid foundation in problem-solving and analytical thinking that I apply daily in software development.',
        "I've worked on large-scale projects such as BBVA (digital banking), ONT (transplant coordination) and Tesoro Público (state financial management), implementing microservice architectures with Java/Spring Boot and frontends with Angular, React, and Vue.js.",
        'Self-directed professional, versatile and results-oriented. Available for remote, national and international positions.',
      ],
    },
    skills: {
      title: 'Skills',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend & Databases',
        devops: 'DevOps & Cloud',
        architecture: 'Architecture & Microservices',
        automation: 'Automation & Engineering',
        languages: 'Languages',
      },
    },
    experience: {
      title: 'Experience',
      present: 'Present',
      jobs: [
        {
          company: 'Zener Soft Consulting',
          role: 'Programmer Analyst',
          period: 'Q1/2024 - Present',
          location: 'Spain',
          description: 'Information technology consulting in the public sector. Participated in two projects: ONT (coordination of transplants, donors and patients) and Tesoro Público (state financial management).',
          tech: ['Angular', 'Vue.js', 'TypeScript', 'Java', 'Spring Boot', 'Docker', 'RabbitMQ', 'Jenkins'],
        },
        {
          company: 'Indra (Minsait) — BBVA',
          role: 'Full-Stack Developer',
          period: 'Q3/2022 - Q1/2024',
          location: 'Spain',
          description: 'Multinational Spanish company leading digital transformation consulting and information technology. BBVA project developing internal management and support tools for the payments and digital banking area.',
          tech: ['React.js', 'TypeScript', 'Bootstrap', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Git'],
        },
        {
          company: 'Tag Systems Group',
          role: 'Full-Stack and Automation Developer',
          period: 'Q3/2021 - Q3/2022',
          location: 'Spain',
          description: 'International group specialized in manufacturing, customization and distribution of smart cards. Developed software for mobile payments, card tokenization and automation of manufacturing processes.',
          tech: ['React.js', 'JavaScript', 'Python', 'Node.js', 'MySQL', 'Docker', 'Keycloak', 'Git'],
        },
        {
          company: 'Tavil IND S.A.U.',
          role: 'Automation and Robotics Developer',
          period: 'Q3/2018 - Q4/2020',
          location: 'Spain',
          description: 'Company leading in industrial automation specialized in automatic boxing and palletizing lines. Developed PLC programming software and robotics for automatic pick & place and product palletization systems.',
          tech: ['Python', 'ST', 'Siemens', 'B&R', 'KUKA', 'FANUC', 'ABB', 'Bihl+Wiedemann'],
        },
      ],
    },
    projects: {
      title: 'Projects',
      viewCode: 'View Code',
      viewLive: 'Live Demo',
      items: [
        {
          name: 'Sessio HQ',
          description: 'SaaS for customer retention with AI for coaches and therapists.',
          tech: ['Next.js', 'Supabase', 'Vercel', 'Cloudflare', 'Stripe', 'Claude API'],
          live: 'https://sessiohq.com',
          github: '',
        },
        {
          name: 'Código Hombre',
          description: 'Application for client management for Roger Ubach.',
          tech: ['Next.js', 'Supabase', 'Vercel', 'Cloudflare', 'Stripe', 'Resend'],
          live: 'https://codigohombre.es',
          github: '',
        },
        {
          name: 'RPSLS',
          description: 'Application "Rock, Paper, Scissors, Lizard, Spock".',
          tech: ['LitElement', 'JavaScript', 'HTML5', 'CSS3', 'Netlify'],
          live: 'http://capable-entremet-55d8c2.netlify.app/',
          github: '',
        },
        {
          name: 'Introns',
          description: 'NFT Collection of Solimán López.',
          tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
          live: 'http://introns.org/#/',
          github: '',
        },
        {
          name: 'Celeste',
          description: 'Digital art project of Solimán López.',
          tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
          live: 'http://celeste.solimanlopez.com/',
          github: '',
        },
        {
          name: 'HDM Marketplace',
          description: 'Marketplace of NFTs from Harddiskmuseum.',
          tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
          live: 'http://721.harddiskmuseum.com/',
          github: '',
        },
        {
          name: 'HDM Radar',
          description: 'NFT Collection for artists from Harddiskmuseum.',
          tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
          live: 'http://radar.harddiskmuseum.com/',
          github: '',
        },
      ],
    },
    education: {
      title: 'Education',
      degrees: [
        {
          title: 'Full-Stack Programming Bootcamp',
          institution: 'Upgrade Hub / Madrid - Remote',
          year: '2021',
          description: 'Intensive full-stack web development bootcamp: React, Node.js, databases, deployment.',
        },
        {
          title: 'Degree in Electronics & Telecommunications Engineering',
          institution: 'University of Barcelona / Faculty of Physics',
          year: '2018',
          description: 'Training in electronics, programming, telecommunications, and industrial automation.',
        },
      ],
      certificationsTitle: 'Licenses and Certifications',
      certifications: [
        'Automation Studio Control / Motion & Visual Components – B&R Industrial Automation (2019)',
        'TIA PORTAL / WinCC – Siemens (2019)',
        'KUKA Robots Programming P1 & P2 – KUKA (2019)',
        'IRPickTool & IRVision / TPE Programming – FANUC (2019)',
        'IRC5 / Pick Master 3.0 – ABB (2019)',
        'AS-I 3.0 & AS-I Safety – Bihl + Wiedemann (2019)',
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: "Let's talk",
      description: "I'm looking for new opportunities. Immediate incorporation, 100% remote, flexible timezone (CET). If you think I can add value to your team, don't hesitate to reach out.",
      email: 'Email',
      location: 'Location',
      locationValue: 'Spain',
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
      { name: 'React.js', level: 88 },
      { name: 'Next.js', level: 80 },
      { name: 'Vue.js', level: 82 },
      { name: 'TypeScript', level: 88 },
      { name: 'JavaScript', level: 92 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Bootstrap', level: 85 },
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
      { name: 'Nexus', level: 70 },
      { name: 'Portainer', level: 70 },
      { name: 'Git', level: 90 },
      { name: 'Linux', level: 78 },
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
      { name: 'Python', level: 82 },
      { name: 'Structured Text (ST)', level: 80 },
      { name: 'Siemens', level: 82 },
      { name: 'B&R', level: 78 },
      { name: 'KUKA', level: 75 },
      { name: 'FANUC', level: 75 },
      { name: 'ABB', level: 72 },
      { name: 'Bihl + Wiedemann', level: 70 },
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