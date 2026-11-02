 import type { ExperienceMilestone } from '~/types/portfolio'
 
 export const experienceMilestones: ExperienceMilestone[] = [
   {
     id: 'exp-lead-architect',
     year: '2024 — PRESENT',
     role: 'Senior Full-Stack Architect',
     company: 'Aetheria Systems / Independent Consultancy',
     location: 'Remote',
     type: 'Full-time / Contract',
     realm: '01 — The Sanctum of Systems',
     description: 'Leading the technical architecture and core full-stack development of enterprise web applications, API platforms, and personal productivity frameworks.',
     responsibilities: [
       'Architecting REST API gateways with Laravel 11, Redis caching, and PostgreSQL databases.',
       'Designing reactive frontend interfaces using Nuxt 4, Vue 3, and TypeScript.',
       'Establishing clean repository abstractions to isolate domain logic from external data services.',
       'Mentoring engineering teams on clean code, automated testing, and API specification standards.'
     ],
     technologies: ['Laravel', 'Nuxt 4', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Tailwind CSS'],
     achievements: [
       'Reduced P99 API latency by 45% across core transaction endpoints.',
       'Designed and delivered the Personal Management System (PMS) decoupled framework.',
       'Pioneered 3D scrollytelling web experiences for high-impact product launches.'
     ]
   },
   {
     id: 'exp-backend-lead',
     year: '2022 — 2024',
     role: 'Lead Backend Engineer',
     company: 'Vanguard Software Solutions',
     location: 'Remote',
     type: 'Full-time',
     realm: '02 — The Forge of APIs',
     description: 'Head of backend engineering responsible for micro-service integrations, auth protocols, and database query optimization.',
     responsibilities: [
       'Built enterprise RESTful APIs handling high concurrent throughput for financial & analytics data.',
       'Implemented Laravel Sanctum & OAuth2 authentication systems with fine-grained RBAC permissions.',
       'Configured Redis job queues for asynchronous reporting, email dispatch, and data processing.',
       'Created automated OpenAPI / Swagger documentation pipelines.'
     ],
     technologies: ['PHP 8.2', 'Laravel', 'MySQL', 'Redis', 'REST APIs', 'Sanctum', 'GitLab CI'],
     achievements: [
       'Maintained 99.99% API uptime across multi-region server clusters.',
       'Engineered real-time notification engine processing 500k daily events.',
       'Optimized slow query bottlenecks, improving database execution speeds by 3x.'
     ]
   },
   {
     id: 'exp-fullstack-dev',
     year: '2020 — 2022',
     role: 'Full-Stack Developer',
     company: 'Nexus Creative Tech',
     location: 'On-site / Hybrid',
     type: 'Full-time',
     realm: '03 — The Realm of Interfaces',
     description: 'Developed modern web applications combining robust backend services with interactive single-page frontends.',
     responsibilities: [
       'Engineered responsive SPAs using Vue.js, React, and Tailwind CSS.',
       'Developed custom CMS backends and admin portals with Laravel & REST endpoints.',
       'Collaborated with UI/UX designers to translate Figma visual specs into accessible code.',
       'Integrated payment gateways, calendar APIs, and third-party SaaS services.'
     ],
     technologies: ['Vue.js', 'React', 'TypeScript', 'Laravel', 'REST API', 'Sass', 'Webpack'],
     achievements: [
       'Delivered 12+ production client web applications on schedule.',
       'Implemented reusable component library adopted across 5 product teams.',
       'Achieved 95+ Lighthouse accessibility and performance ratings across client builds.'
     ]
   },
   {
     id: 'exp-foundation',
     year: '2018 — 2020',
     role: 'Junior Software Engineer',
     company: 'Genesis Digital Labs',
     location: 'On-site',
     type: 'Full-time',
     realm: '04 — The Origin of Code',
     description: 'Laid technical foundations in object-oriented programming, relational databases, and modern JavaScript.',
     responsibilities: [
       'Built core PHP and MySQL backend logic for web portals.',
       'Authored unit and integration tests using PHPUnit.',
       'Maintained legacy codebases, resolved security vulnerabilities, and fixed UI bugs.'
     ],
     technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5/CSS3', 'Git', 'PHPUnit'],
     achievements: [
       'Authored core backend modules for internal asset tracking system.',
       'Initiated adoption of Git workflow & code review best practices.'
     ]
   }
 ]