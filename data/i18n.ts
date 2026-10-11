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
      certificationsTitle: 'Certificaciones',
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
      certificationsTitle: 'Certifications',
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