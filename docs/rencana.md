# Specification & Implementation Roadmap: Developer Platform Monorepo
**Archify Architecture Specification (tt-a1i Standard)**

---

## 1. Core Philosophy & System Boundaries

```text
+-----------------------------------------------------------------------+
|                         DEVELOPER PLATFORM                            |
|                                                                       |
|  +--------------------+   +-------------------+   +----------------+  |
|  |     PORTFOLIO      |   |   SYSTEM CATALOG  |   |    SERVICES    |  |
|  |  System Launcher   |   |   001 - 060 Apps  |   | Identity, Audit|  |
|  +---------+----------+   +---------+---------+   +-------+--------+  |
+------------|------------------------|---------------------|-----------+
             |                        |                     |
             v                        v                     v
   [portfolio.domain]         [app.domain / sub]    [auth/api.domain]
```

### Prinsip Utama
1. **Portfolio $\neq$ System Target**: Portfolio bertindak sebagai **System Launcher & Engineering Showcase**, bukan tempat logika bisnis 60 sistem dijalankan.
2. **System Boundary $\neq$ Microservice Boundary**: `001_pms`, `002_pos`, dst. adalah *independently deployable systems* (modular monolith di tahap awal), bukan 60 microservices mikro yang memicu *distributed system overhead*.
3. **Strict Data Ownership**: Setiap sistem wajib memiliki database sendiri. Dilarang melakukan *cross-database direct join*.
4. **Contract-First Development**: DBML di `dbms/` dan API contracts di `packages/contracts/` menjadi *single source of truth*.
5. **Dual Adapter Pattern**: Frontend Nuxt 4 menggunakan Repository Pattern (`DummyRepository` vs `ApiRepository`) agar UI dapat diuji secara offline/standalone maupun terintegrasi dengan Laravel REST API.

---

## 2. Struktur Monorepo Target

```text
developer-platform/
│
├── portfolio/                   # Web Portfolio & System Launcher
│   └── web/                     # Nuxt 4 Scrollytelling + Portal Engine
│
├── apps/                        # Independent Domain Applications (001-060)
│   ├── 001_pms/                 # Golden Reference System
│   │   ├── frontend/            # Nuxt 4 PMS Client
│   │   ├── backend/             # Laravel API Server
│   │   └── docs/                # System Architecture & Spec
│   ├── 002_pos/                 # Point of Sale System
│   │   ├── frontend/
│   │   └── backend/
│   └── ...                      # 003 - 060
│
├── services/                    # Shared Cross-Cutting Platform Services
│   ├── identity/                # SSO / Auth Service (OAuth2 / OIDC)
│   ├── notification/            # Central Push/Email/SMS Gateway
│   └── audit/                   # Security & Audit Log Aggregator
│
├── packages/                    # Shared Code & Config Base
│   ├── contracts/               # OpenAPI Specs & DTO Schemas
│   ├── types/                   # Shared TypeScript Interfaces
│   ├── ui/                      # Shared Design System Primitives
│   └── config/                  # Shared ESLint, TSConfig, Tailwind Configs
│
├── dbms/                        # Database Architecture Definition
│   ├── 001_pms.dbml             # PMS Schema Source of Truth
│   ├── 002_pos.dbml
│   └── ... 060_telecommunication_management_system.dbml
│
└── docs/                        # Global Platform Documentation
    ├── architecture/            # Archify Diagrams & ADR (Architecture Decision Records)
    ├── deployment/              # Infrastructure Topologies
    └── rencana.md               # Master Execution Plan & Roadmap
```

---

## 3. High-Level Topology Diagram (Archify Format)

### Ecosystem Network & Data Flow

```text
                                [ USER INTERNET ]
                                        │
                                        ▼
                          ┌───────────────────────────┐
                          │   Reverse Proxy / Ingress  │
                          │   (Cloudflare / Nginx)    │
                          └─────────────┬─────────────┘
                                        │
             ┌──────────────────────────┼──────────────────────────┐
             ▼                          ▼                          ▼
  ┌─────────────────────┐    ┌─────────────────────┐    ┌─────────────────────┐
  │ portfolio.domain    │    │ pms.domain          │    │ pos.domain          │
  │ (System Launcher)   │    │ (System 001)        │    │ (System 002)        │
  └──────────┬──────────┘    └──────────┬──────────┘    └──────────┬──────────┘
             │                          │                          │
             │                          ▼                          ▼
             │               ┌─────────────────────┐    ┌─────────────────────┐
             │               │ Nuxt 4 PMS Frontend │    │ Nuxt 4 POS Frontend │
             │               └──────────┬──────────┘    └──────────┬──────────┘
             │                          │                          │
             │                          ▼                          ▼
             │               ┌─────────────────────┐    ┌─────────────────────┐
             │               │ Laravel PMS API     │    │ Laravel POS API     │
             │               └──────────┬──────────┘    └──────────┬──────────┘
             │                          │                          │
             │                          ▼                          ▼
             │               ┌─────────────────────┐    ┌─────────────────────┐
             │               │ PostgreSQL PMS DB   │    │ PostgreSQL POS DB   │
             │               └─────────────────────┘    └─────────────────────┘
             │                                                     ▲
             └─────────────────────── Launch ──────────────────────┘
```


---

## 4. Lifecycle System & Metadata Specification

Setiap sistem dalam katalog `001–050` wajib memiliki metadata terdaftar dengan siklus hidup:

```text
PLANNED ──> DESIGNED (DBML) ──> PROTOTYPE ──> DEVELOPMENT ──> STAGING ──> PRODUCTION
```

### Format Registri Katalog (`apps/catalog.json`)

```json
[
  {
    "id": "001",
    "code": "PMS",
    "name": "Personal Management System",
    "status": "DEVELOPMENT",
    "dbml_path": "dbms/001_pms.dbml",
    "frontend": "apps/001_pms/frontend",
    "backend": "apps/001_pms/backend",
    "live_url": "https://pms.domain.com"
  },
  {
    "id": "002",
    "code": "POS",
    "name": "Point of Sales System",
    "status": "DESIGNED",
    "dbml_path": "dbms/002_point_of_sales_system.dbml",
    "frontend": null,
    "backend": null,
    "live_url": null
  }
]
```

---

## 5. Phase Breakdown & Execution Roadmap

### Phase 0: Monorepo Foundation & Platform Governance
- Setup aturan linting, formatting, dan konvensi commit.
- Standardisasi environment variables dan scripting monorepo.
- Dokumentasi ADR (Architecture Decision Records) awal di `docs/architecture/adr/`.

### Phase 1: Catalog & Metadata Engine
- Buat metadata engine di `apps/catalog.json` untuk mengkatalogkan sistem `001-050`.
- Sambungkan catalog engine ke Nuxt Portfolio launcher.

### Phase 2: Database Schema Standardization (DBMS Layer)
- Validasi 50 file DBML pada `docs/dbms/`.
- Buat pipeline konversi DBML $\rightarrow$ Laravel Migration & TypeScript Types.

### Phase 3: Portfolio Launcher & Scrollytelling UI
- Integrasikan 9 storytelling sections di Portfolio (`fe/`).
- Sediakan launcher portal untuk setiap sistem dengan detail case study, DBML viewer, dan arsitektur Archify.

### Phase 4: Golden Reference Implementation — 001 PMS
- Selesaikan verifikasi end-to-end `001_pms` (Nuxt 4 Frontend + Laravel REST API Backend + PostgreSQL PMS Database).
- Terapkan Repository Pattern (`DummyPmsRepository` + `ApiPmsRepository`).
- Tulis automated feature tests & unit tests.

### Phase 5: Deployment & Subdomain Routing
- Setup Dockerization / Server deployment.
- Konfigurasi DNS subdomain: `portfolio.domain.com`, `pms.domain.com`, `pos.domain.com`.
- Setup CI/CD pipeline berbasis directory change detection.

### Phase 6: Extraction of Shared Platform Services
- Ekstrak Identity / Auth Service (`services/identity`).
- Ekstrak Central Notification Gateway & Audit Collector.

### Phase 7: Ecosystem Scaling (002 POS, 003 LMS, ...)
- Replikasi blueprint `001_pms` ke `002_pos`, `003_lms`, dan sistem selanjutnya secara bertahap.

---

## 6. Golden Reference Blueprint (001 PMS Architecture)

```text
UI Component (Nuxt 4)
       │
       ▼
Composable (usePms)
       │
       ▼
Service Layer (PmsService)
       │
       ▼
Repository Interface (IPmsRepository)
       ├───────────────────────────────┐
       ▼                               ▼
DummyPmsRepository              ApiPmsRepository
(USE_DUMMY_DATA=true)           (USE_DUMMY_DATA=false)
       │                               │
       ▼                               ▼
Mock JSON Data                  Laravel REST API
                                       │
                                       ▼
                                PostgreSQL PMS DB
```

---

## 7. Trade-off Analysis

| Param | Opsi Monolith Raksasa | Opsi Monorepo Systems (Selected) |
|---|---|---|
| **Bounded Context** | Terpolusi antar domain | Terisolasi per sistem |
| **Data Ownership** | Single Database Shared | Independent Database per App |
| **Deployment Complexity** | Rendah di awal, tinggi kemudian | Modular, independent deployment |
| **Engineering Showcase Value** | Biasa | Enterprise-grade Platform Architecture |

---

## 8. Summary & Governance Rules
- Status: Rencana terstruktur disahkan di `docs/rencana.md`.
- Next Step: Lanjutkan implementasi sesuai alur Phase 0 dan Phase 4 (PMS Reference Implementation).



