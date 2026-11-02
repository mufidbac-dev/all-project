 import type { PortfolioProject } from '~/types/portfolio'
 
 export const projectsList: PortfolioProject[] = [
   {
     id: 'project-pms',
     title: 'Personal Management System (PMS)',
     tagline: 'A personal operating system for projects, tasks, notes, reminders, and financial metrics.',
     description: 'A comprehensive, domain-driven personal workspace built with Laravel 11 REST API and a high-performance Nuxt 4 frontend. Features modular workspaces for project tracking, task execution, markdown knowledge notes, time notifications, calendar events, and financial analytics.',
     category: 'Full Stack',
     role: 'Lead Architect & Full-Stack Developer',
     problem: 'Fragmented productivity tools lead to context switching, data silos, and friction when managing personal engineering projects alongside financial tracking.',
     solution: 'Engineered a unified API-driven system leveraging Laravel REST endpoints, Sanctum auth, normalized relational databases, and a responsive Nuxt adapter architecture.',
     technologies: ['Laravel 11', 'Nuxt 4', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Sanctum API'],
     architecture: 'Clean Domain Architecture with Repository & Service layer abstractions, decoupling storage drivers from presentation components.',
     keyFeatures: [
       'Modular Workspace Dashboard (Projects, Tasks, Notes, Reminders, Calendar)',
       'Financial Analytics & Transaction Summary Aggregation',
       'Decoupled Repository Pattern supporting offline mock mode & live REST sync',
       'Tagging & Priority taxonomy across all entity domains'
     ],
     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
     year: '2025',
     featured: true,
     githubUrl: 'https://github.com',
     demoUrl: '#pms-showcase',
     metrics: [
       { label: 'API Response Time', value: '< 45ms' },
       { label: 'Domain Entities', value: '7 Modules' },
       { label: 'Code Coverage', value: '94%' }
     ]
   },
   {
     id: 'project-enterprise-api',
     title: 'Enterprise High-Throughput REST Gateway',
     tagline: 'Distributed micro-service API engine with event queues, Redis caching, and rate limiting.',
     description: 'Designed and deployed a resilient REST API gateway powering real-time data sync across distributed backend infrastructure. Handles complex validation rules, transactional DB updates, and asynchronous background jobs.',
     category: 'Backend',
     role: 'Backend Systems Engineer',
     problem: 'Legacy monolithic API suffered from high latency during peak query spikes and unhandled database locks under concurrent write loads.',
     solution: 'Architected a modular Laravel REST platform with Redis caching layers, database indexing, worker queues, and robust OpenAPI contracts.',
     technologies: ['Laravel', 'PHP 8.3', 'Redis', 'PostgreSQL', 'Docker', 'Swagger / OpenAPI'],
     architecture: 'Event-driven hexagonal backend layout with explicit command query segregation.',
     keyFeatures: [
       'Automated OpenAPI documentation generation via Request Docs',
       'Redis atomic lock handling for concurrency control',
       'Zero-downtime database migration strategy',
       'Structured JSON log aggregation and telemetry'
     ],
     image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
     year: '2024',
     featured: true,
     githubUrl: 'https://github.com',
     metrics: [
       { label: 'Throughput', value: '12.5k rpm' },
       { label: 'Uptime', value: '99.99%' },
       { label: 'P99 Latency', value: '62ms' }
     ]
   },
   {
     id: 'project-scrollytelling-exp',
     title: 'Cinematic 3D Scrollytelling Experience',
     tagline: 'An immersive interactive web world merging WebGL, GSAP timelines, and dark gold aesthetics.',
     description: 'Crafted a custom scroll-driven presentation engine designed to convey narrative storytelling through WebGL particle depth, floating technical cards, and smooth scroll camera transitions.',
     category: 'Experiments',
     role: 'Creative Developer',
     problem: 'Conventional flat developer portfolio websites fail to capture visitor engagement or demonstrate advanced creative coding capabilities.',
     solution: 'Built a lightweight 3D canvas pipeline utilizing Three.js and GSAP ScrollTrigger, providing smooth fallback for mobile and low-power devices without sacrificing aesthetic impact.',
     technologies: ['Vue 3', 'Nuxt 4', 'Three.js', 'GSAP', 'Tailwind CSS'],
     architecture: 'Decoupled render loop with adaptive frame throttling and prefers-reduced-motion compliance.',
     keyFeatures: [
       'Continuous camera flythrough synced with page scroll',
       'Interactive 3D technology cards with hover physics',
       'Seamless portal transition into active workspace UI',
       'Complete responsive fallback strategy for mobile screens'
     ],
     image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
     year: '2026',
     featured: true,
     githubUrl: 'https://github.com',
     demoUrl: '#',
     metrics: [
       { label: 'FPS Target', value: '60 FPS' },
       { label: 'Lighthouse Score', value: '98/100' }
     ]
   },
   {
     id: 'project-design-system',
     title: 'Aura UI & Design System',
     tagline: 'Accessible Vue 3 component library built for dark-mode financial and technical dashboards.',
     description: 'Developed an internal UI component system with strict accessibility controls, ARIA landmark mappings, and customizable gold/navy glassmorphism tokens.',
     category: 'UI/UX',
     role: 'Frontend Architect',
     problem: 'Inconsistent UI primitives across multiple developer tools led to duplicated CSS styles and accessibility violations.',
     solution: 'Created a centralized Vue 3 design system with headless accessibility wrappers and tailwind plugins.',
     technologies: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Storybook'],
     architecture: 'Headless composable primitives with tokenized Tailwind styling.',
     keyFeatures: [
       'WCAG AAA compliant color contrast tokens',
       'Keyboard navigation & focus management traps',
       'Composable data table & modal primitives'
     ],
     image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
     year: '2024',
     featured: false,
     githubUrl: 'https://github.com'
   },
   {
     id: 'project-realtime-analytics',
     title: 'Reverb Realtime Data Streamer',
     tagline: 'WebSocket streaming middleware bridging Laravel events to client-side dashboards.',
     description: 'Implemented a high-frequency WebSocket sync service utilizing Laravel Reverb for streaming backend task mutations, metrics, and calendar updates instantly to connected clients.',
     category: 'Architecture',
     role: 'System Architect',
     problem: 'Polling REST endpoints every few seconds generated unnecessary database load and delayed state updates.',
     solution: 'Configured bidirectional WebSocket broadcast channels with token authentication and reconnection strategies.',
     technologies: ['Laravel Reverb', 'WebSockets', 'Vue 3', 'TypeScript', 'Redis'],
     architecture: 'Pub/Sub broadcasting bus integrated with client reactive stores.',
     keyFeatures: [
       'Sub-10ms event delivery across connected browser sessions',
       'Automatic connection recovery with exponential backoff',
       'Encrypted channel authentication'
     ],
     image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
     year: '2025',
     featured: false,
     githubUrl: 'https://github.com'
   }
 ]