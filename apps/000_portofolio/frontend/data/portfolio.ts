 import type { DeveloperProfile, TechnologyItem, ArchitectureNode } from '~/types/portfolio'
 
 export const developerProfile: DeveloperProfile = {
   name: 'Valerius Vance',
   title: 'Senior Full-Stack Architect & Software Engineer',
   headline: 'My Journey',
   subheadline: 'A Developer Portfolio in Motion',
   heroText: 'I build resilient systems, elegant APIs, fluid interfaces, and digital experiences that turn complex ideas into robust products.',
   exploreText: 'I explore problems from every dimension — from domain model requirements and user interaction to high-throughput APIs, clean architecture, and distributed data structures.',
   buildText: 'I turn concepts into maintainable, production-ready applications — from the initial database schema to the micro-interactions on screen.',
   aboutText: [
     'I am a software engineer dedicated to building scalable backend systems and high-performance frontend interfaces. My approach merges rigorous software design principles with human-centered product aesthetics.',
     'With extensive experience in the Laravel ecosystem, Vue/Nuxt platforms, and RESTful API architecture, I construct applications that are engineered for reliability and designed to delight users.',
     'I believe code is an art of managing complexity — creating clear abstractions, minimizing unnecessary state, and crafting tools that feel effortless to use.'
   ],
   philosophy: [
     'Domain-Driven Integrity: Clean code starts with precise domain boundaries.',
     'Standard Library First: Leverage native platform capabilities before introducing abstraction.',
     'Performance as UX: Latency is an invisible bug; every millisecond saved matters.',
     'Decoupled Architecture: Isolate business logic from framework and transport layers.'
   ],
   interests: [
     'API Architecture & OpenApi Specifications',
     '3D Visual Web & Scrollytelling Experiences',
     'Distributed Systems & Event-Driven Queues',
     'Personal Knowledge & Productivity Systems (PMS)'
   ],
   socials: {
     github: 'https://github.com',
     linkedin: 'https://linkedin.com',
     email: 'valerius@developer.io'
   }
 }
 
 export const technologyStack: TechnologyItem[] = [
   {
     id: 'laravel',
     name: 'Laravel',
     category: 'Framework',
     description: 'Elegantly structured PHP framework for enterprise web APIs, authentication, queues, and task scheduling.',
     icon: 'Boxes',
     proficiency: 95,
     floatingPosition: { x: -3, y: 1.5, z: 0 }
   },
   {
     id: 'nuxt',
     name: 'Nuxt 4 / Vue 3',
     category: 'Framework',
     description: 'Hybrid SSR/SSG framework for Vue, crafting lightning-fast interactive interfaces with TypeScript.',
     icon: 'Layout',
     proficiency: 92,
     floatingPosition: { x: 3, y: 2, z: -1 }
   },
   {
     id: 'typescript',
     name: 'TypeScript',
     category: 'Language',
     description: 'Strongly typed JavaScript providing compile-time guarantees, clean contracts, and rich editor tooling.',
     icon: 'Code2',
     proficiency: 90,
     floatingPosition: { x: -2, y: -1, z: 1 }
   },
   {
     id: 'rest-api',
     name: 'REST API Architecture',
     category: 'Architecture',
     description: 'Standardized resource modeling, OpenAPI definitions, JSON:API conventions, and versioning patterns.',
     icon: 'Network',
     proficiency: 96,
     floatingPosition: { x: 2, y: -1.5, z: 0 }
   },
   {
     id: 'react',
     name: 'React Ecosystem',
     category: 'Framework',
     description: 'Component-driven application engineering, state synchronization, and component library creation.',
     icon: 'Component',
     proficiency: 85,
     floatingPosition: { x: 4, y: 0.5, z: 2 }
   },
   {
     id: 'postgres-mysql',
     name: 'PostgreSQL / MySQL',
     category: 'Database',
     description: 'Relational data modeling, indexed queries, transactions, and optimized ORM mappings.',
     icon: 'Database',
     proficiency: 90,
     floatingPosition: { x: -4, y: 0, z: -2 }
   },
   {
     id: 'docker',
     name: 'Docker & DevOps',
     category: 'DevOps',
     description: 'Containerized microservices, reproducible dev environments, CI/CD pipelines, and cloud orchestration.',
     icon: 'Container',
     proficiency: 84,
     floatingPosition: { x: 0, y: 3, z: -3 }
   },
   {
     id: 'redis-queues',
     name: 'Redis & Queue Systems',
     category: 'Architecture',
     description: 'Asynchronous event processing, high-throughput caching, rate limiting, and pub/sub channels.',
     icon: 'Zap',
     proficiency: 88,
     floatingPosition: { x: 1.5, y: -3, z: 1 }
   },
   {
     id: 'websocket',
     name: 'WebSockets & Reverb',
     category: 'Tooling',
     description: 'Real-time bidirectional data push for live updates, notifications, and interactive collaboration.',
     icon: 'Radio',
     proficiency: 86,
     floatingPosition: { x: -3.5, y: -2.5, z: 0 }
   }
 ]
 
 export const architectureNodes: ArchitectureNode[] = [
   {
     id: 'visitor',
     label: 'Visitor Interface',
     layer: 'presentation',
     description: 'Web browser consuming Nuxt frontend web application with scrollytelling visual layer.',
     technologies: ['HTML5', 'CSS3', 'WebGL / Canvas', 'GSAP'],
     responsibilities: ['Render interactive 3D scene', 'Handle scroll inputs', 'Display reactive portfolio content'],
     connections: ['nuxt_app']
   },
   {
     id: 'nuxt_app',
     label: 'Nuxt 4 Application',
     layer: 'presentation',
     description: 'Vue 3 SSR engine organizing layout, route orchestration, and component hierarchy.',
     technologies: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Tailwind CSS'],
     responsibilities: ['Component state management', 'Theme rendering', 'Route management'],
     connections: ['portfolio_content', 'pms_adapter']
   },
   {
     id: 'portfolio_content',
     label: 'Portfolio Content Layer',
     layer: 'content',
     description: 'Static local repository containing normalized metadata for projects, timeline, and tech stack.',
     technologies: ['TypeScript Models', 'Local Data Services'],
     responsibilities: ['Provide deterministic project definitions', 'Deliver career timeline milestones'],
     connections: []
   },
   {
     id: 'pms_adapter',
     label: 'PMS Adapter (IPmsRepository)',
     layer: 'pms_adapter',
     description: 'Repository interface pattern insulating UI components from storage implementation details.',
     technologies: ['Repository Pattern', 'TypeScript Interfaces', 'Composable Bridge'],
     responsibilities: ['Abstract data fetching source', 'Switch between Mock/API implementation', 'Normalize API responses'],
     connections: ['dummy_repo', 'laravel_api']
   },
   {
     id: 'dummy_repo',
     label: 'Dummy PMS Repository',
     layer: 'pms_adapter',
     description: 'In-memory mock repository serving synthetic PMS data without network dependency.',
     technologies: ['Local JS State', 'Simulated Latency'],
     responsibilities: ['Provide seed data for Projects/Tasks/Notes', 'Simulate CRUD state mutations'],
     connections: []
   },
   {
     id: 'laravel_api',
     label: 'Laravel REST API',
     layer: 'api',
     description: 'Remote backend framework running Laravel Sanctum authentication and relational REST endpoints.',
     technologies: ['Laravel 11', 'Sanctum Auth', 'PostgreSQL / MySQL', 'Redis Queues'],
     responsibilities: ['Authenticate user credentials', 'Enforce policy authorization', 'Persist entity state'],
     connections: []
   }
 ]