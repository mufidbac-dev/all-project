# System 001 — Personal Management System (PMS)

* **Status**: Development (Golden Reference System)
* **Frontend Target**: Nuxt 4 (`fe/` or `apps/001_pms/frontend`)
* **Backend Target**: Laravel API (`be/` or `apps/001_pms/backend`)
* **Database Spec**: `docs/dbms/001_pms.dbml`

## Blueprint Components
- **Repository Pattern Interface**: `IPmsRepository`
- **Adapters**: `DummyPmsRepository` (mock) & `ApiPmsRepository` (live)
- **Database Boundary**: Isolated PostgreSQL Database (`pms_db`)
