 import type { PmsOverviewData, PmsUser } from '~/types/pms'
 
 export const dummyPmsUser: PmsUser = {
   id: 1,
   name: 'Valerius Vance',
   email: 'valerius@developer.io',
   avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
   created_at: '2025-01-01T00:00:00.000000Z'
 }
 
 export const dummyPmsData: PmsOverviewData = {
   projects: [
     {
       id: 1,
       name: 'Portfolio 3D Scrollytelling',
       description: 'Cinematic developer portfolio with WebGL depth and Nuxt 4 scrollytelling.',
       status: 'active',
       color: '#D4AF37',
       tasks_count: 8,
       completed_tasks_count: 6,
       created_at: '2025-01-10T10:00:00Z',
       updated_at: '2025-02-15T14:30:00Z'
     },
     {
       id: 2,
       name: 'PMS Platform Engine',
       description: 'Personal Management System API backend with Laravel Sanctum & modular domain logic.',
       status: 'active',
       color: '#3B82F6',
       tasks_count: 14,
       completed_tasks_count: 11,
       created_at: '2025-01-05T09:00:00Z',
       updated_at: '2025-02-14T11:20:00Z'
     },
     {
       id: 3,
       name: 'Enterprise API Gateway',
       description: 'High-throughput microservices gateway with Redis rate limiting & queues.',
       status: 'completed',
       color: '#10B981',
       tasks_count: 20,
       completed_tasks_count: 20,
       created_at: '2024-11-01T08:00:00Z',
       updated_at: '2025-01-20T16:00:00Z'
     },
     {
       id: 4,
       name: 'Developer Tooling Suite',
       description: 'Internal CLI helpers, OpenAPI schema generators, and deployment scripts.',
       status: 'active',
       color: '#8B5CF6',
       tasks_count: 6,
       completed_tasks_count: 3,
       created_at: '2025-02-01T12:00:00Z',
       updated_at: '2025-02-16T09:15:00Z'
     }
   ],
   tasks: [
     {
       id: 101,
       project_id: 1,
       title: 'Design API architecture & repository interface',
       description: 'Abstract data fetching layer behind IPmsRepository contract.',
       status: 'done',
       priority: 'urgent',
       due_date: '2025-02-10',
       tags: ['Architecture', 'API', 'TypeScript'],
       created_at: '2025-02-01T10:00:00Z'
     },
     {
       id: 102,
       project_id: 2,
       title: 'Implement Sanctum token authentication',
       description: 'Configure POST /api/v1/auth/login and user profile context.',
       status: 'done',
       priority: 'high',
       due_date: '2025-02-12',
       tags: ['Backend', 'Security', 'Laravel'],
       created_at: '2025-02-02T11:00:00Z'
     },
     {
       id: 103,
       project_id: 2,
       title: 'Build projects & tasks REST CRUD module',
       description: 'Expose endpoints for /api/v1/projects and /api/v1/tasks.',
       status: 'in_progress',
       priority: 'high',
       due_date: '2025-02-18',
       tags: ['Laravel', 'API', 'Database'],
       created_at: '2025-02-05T09:30:00Z'
     },
     {
       id: 104,
       project_id: 1,
       title: 'Create cinematic portfolio animations & scroll trigger',
       description: 'Build GSAP scroll timelines and Three.js 3D depth camera flythrough.',
       status: 'in_progress',
       priority: 'urgent',
       due_date: '2025-02-20',
       tags: ['Frontend', 'GSAP', 'WebGL'],
       created_at: '2025-02-08T14:00:00Z'
     },
     {
       id: 105,
       project_id: 1,
       title: 'Connect PMS API adapter with environment toggle',
       description: 'Support seamless fallback between USE_DUMMY_DATA=true and live REST API.',
       status: 'todo',
       priority: 'medium',
       due_date: '2025-02-25',
       tags: ['Nuxt', 'Adapter', 'Integration'],
       created_at: '2025-02-10T16:45:00Z'
     }
   ],
   tags: [
     { id: 1, name: 'Architecture', color: '#D4AF37' },
     { id: 2, name: 'API', color: '#3B82F6' },
     { id: 3, name: 'Frontend', color: '#10B981' },
     { id: 4, name: 'Backend', color: '#EF4444' },
     { id: 5, name: 'Laravel', color: '#F97316' },
     { id: 6, name: 'TypeScript', color: '#6366F1' }
   ],
   notes: [
     {
       id: 201,
       title: 'System Architecture & Decoupling Strategy',
       content: 'The PMS showcase is isolated from the main portfolio visual system via an adapter interface (`IPmsRepository`). When `USE_DUMMY_DATA=true`, all components interact with local state without making external network calls.',
       category: 'Architecture',
       is_pinned: true,
       updated_at: '2025-02-14T15:30:00Z'
     },
     {
       id: 202,
       title: 'Product Roadmap Q1 2025',
       content: '1. Finish 3D Scrollytelling visual identity.\n2. Complete PMS integration adapter.\n3. Implement OpenGraph & Web Performance optimizations.\n4. Deploy containerized staging build.',
       category: 'Roadmap',
       is_pinned: true,
       updated_at: '2025-02-12T10:15:00Z'
     },
     {
       id: 203,
       title: 'Technical Decisions — Nuxt 4 & Three.js',
       content: 'Utilize 2D HTML Canvas as primary render surface for low-power mobile, scaling up to Three.js WebGL on desktop devices to maintain >60FPS target.',
       category: 'Engineering',
       is_pinned: false,
       updated_at: '2025-02-09T08:40:00Z'
     }
   ],
   reminders: [
     {
       id: 301,
       title: 'Review portfolio 3D scrollytelling performance on mobile devices',
       remind_at: 'Today at 16:00',
       is_completed: false,
       priority: 'high'
     },
     {
       id: 302,
       title: 'Deploy staging build & verify API fallback behavior',
       remind_at: 'Tomorrow at 10:00',
       is_completed: false,
       priority: 'high'
     },
     {
       id: 303,
       title: 'Audit accessibility keybindings & high-contrast mode',
       remind_at: 'Friday at 14:00',
       is_completed: true,
       priority: 'normal'
     }
   ],
   calendarEvents: [
     {
       id: 401,
       title: 'Sprint Planning & Architecture Sync',
       start_time: '09:00 AM',
       end_time: '10:30 AM',
       location: 'Virtual Workspace',
       category: 'sprint'
     },
     {
       id: 402,
       title: 'Deep Work: PMS Composable Implementation',
       start_time: '11:00 AM',
       end_time: '02:00 PM',
       category: 'deep_work'
     },
     {
       id: 403,
       title: 'Portfolio 3D Storytelling Design Review',
       start_time: '03:30 PM',
       end_time: '04:30 PM',
       category: 'review'
     }
   ],
   transactionSummary: {
     total_income: 14850,
     total_expense: 4320,
     net_balance: 10530,
     currency: 'USD',
     monthly_trend: [
       { month: 'Oct', income: 4200, expense: 1100 },
       { month: 'Nov', income: 4800, expense: 1250 },
       { month: 'Dec', income: 5100, expense: 1400 },
       { month: 'Jan', income: 5500, expense: 1350 },
       { month: 'Feb', income: 4850, expense: 1220 }
     ],
     recent_transactions: [
       {
         id: 501,
         title: 'Consulting — API Architecture',
         amount: 3200,
         type: 'income',
         category: 'Engineering Services',
         date: '2025-02-14'
       },
       {
         id: 502,
         title: 'Cloud Infrastructure & Hosting',
         amount: 185,
         type: 'expense',
         category: 'DevOps & Tooling',
         date: '2025-02-12'
       },
       {
         id: 503,
         title: 'SaaS Tooling & Domain Renewals',
         amount: 65,
         type: 'expense',
         category: 'Software Subscriptions',
         date: '2025-02-10'
       },
       {
         id: 504,
         title: 'Project Milestone Payment — PMS Platform',
         amount: 1650,
         type: 'income',
         category: 'Product Revenue',
         date: '2025-02-05'
       }
     ]
   }
 }