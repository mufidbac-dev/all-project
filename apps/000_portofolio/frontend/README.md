 # My Journey — Personal Developer Portfolio & PMS Showcase
 
 > A premium 3D scrollytelling developer portfolio built with **Nuxt 4**, **Vue 3**, **TypeScript**, and **Tailwind CSS**. Features an embedded interactive **Personal Management System (PMS)** with a decoupled adapter architecture.
 
 ---
 
 ## 🌟 Key Features
 
 - **Cinematic RPG / Fantasy Scrollytelling**: Deep dark navy (`#050A0F`) and warm gold (`#D4AF37`) visual theme inspired by cinematic fantasy worlds.
 - **Interactive 9-Chapter Story Sequence**:
   1. `01 — THE BEGINNING`: Atmospheric hero scene with particle depth and explorer anchor.
   2. `02 — EXPLORE`: Floating technology stack cards with interactive detail inspector.
   3. `03 — BUILD`: Major software build case studies.
   4. `04 — EXPERIENCE`: Vertical career journey map and milestone achievements.
   5. `05 — PMS SHOWCASE`: Portal transition into an embedded interactive Personal Operating System.
   6. `06 — ARCHITECTURE`: Interactive Archify diagram modeling component and adapter topology.
   7. `07 — PROJECT GALLERY`: Filterable project matrix with modal case studies.
   8. `08 — ABOUT`: Developer bio narrative, philosophy, and current technical interests.
   9. `09 — CONTACT`: Epilogue scene with email, GitHub, LinkedIn, and resume links.
 - **Decoupled PMS Repository Architecture**: Toggle between offline mock data (`DummyPmsRepository`) and live backend API sync (`ApiPmsRepository`) seamlessly without UI code changes.
 - **Mobile & Accessibility Ready**: Responsive layout with 2D canvas fallback and `prefers-reduced-motion` support.
 - **Custom Magnetic Cursor & Floating Navigation**: Fluid desktop cursor with active section indicator (`01` through `09`).
 
 ---
 
 ## 🏗️ Architecture & Repository Pattern
 
 The project enforces strict layer separation using the Repository Pattern:
 
 ```
 UI Layer (PmsDashboard.vue)
       ↓
 Composable Layer (usePms.ts)
       ↓
 Service Layer (pms.service.ts)
       ↓
 Repository Interface (IPmsRepository)
       ├──> DummyPmsRepository (USE_DUMMY_DATA = true)
       └──> ApiPmsRepository   (USE_DUMMY_DATA = false) → Laravel REST API
 ```
 
 Data flow documentation and Archify diagrams can be found in `docs/ARCHITECTURE.md`.
 
 ---
 
 ## ⚙️ Environment Configuration
 
 Create a `.env` file in the root directory:
 
 ```env
 # Enable or disable dummy mock mode (default: true)
 USE_DUMMY_DATA=true
 
 # Base URL for live Laravel REST API
 NUXT_PUBLIC_API_BASE_URL=http://localhost:8000
 ```
 
 ### How to Switch to Live PMS API
 
 1. Set `USE_DUMMY_DATA=false` in your `.env` file.
 2. Set `NUXT_PUBLIC_API_BASE_URL` to your running Laravel API endpoint.
 3. The `PmsService` will automatically instantiate `ApiPmsRepository` instead of `DummyPmsRepository`.
 4. You can also toggle mode directly in the UI via the PMS Dashboard header button.
 
 ---
 
 ## 🚀 Getting Started
 
 ### Prerequisites
 - Node.js v18+ (v22 recommended)
 - npm, pnpm, or bun
 
 ### Installation
 
 ```bash
 # Install dependencies
 npm install
 
 # Run development server
 npm run dev
 ```
 
 The application will start at `http://localhost:3000`.
 
 ### Production Build
 
 ```bash
 # Generate production build
 npm run build
 
 # Preview build output
 npm run preview
 ```
 
 ---
 
 ## 📁 Project Structure
 
 ```
 ├── assets/
 │   └── css/main.css              # Custom Tailwind styles & theme variables
 ├── components/
 │   ├── ui/                       # Navigation, Progress, Cursor, Modal primitives
 │   ├── portfolio/                # 9 Storytelling section components
 │   └── pms/                      # Embedded PMS interactive workspace components
 ├── composables/                  # Vue composables (usePortfolio, usePms, useScrollStory, etc.)
 ├── data/                         # Synthetic seed data for portfolio & PMS mock mode
 ├── docs/                         # Archify topology documentation (ARCHITECTURE.md)
 ├── repositories/                 # IPmsRepository interface, Dummy & API repositories
 ├── services/                     # Domain services (PortfolioService, PmsService)
 ├── types/                        # TypeScript models for Portfolio & PMS
 ├── app.vue                       # Main layout wrapper
 ├── nuxt.config.ts                # Nuxt 4 configuration
 └── tailwind.config.js            # Tailwind theme extended with dark navy & gold palette
 ```
 
 ---
 
 ## 🛡️ License
 
 MIT License © 2026 Valerius Vance.