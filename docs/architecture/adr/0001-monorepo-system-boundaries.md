# ADR 0001: Monorepo System Boundaries & Data Ownership

* **Status**: Accepted
* **Deciders**: Platform Architecture Team
* **Date**: 2026-09-18

## Context
The developer platform host portfolio features 60 system specifications (001–060). We need an architectural decision on how these 60 systems are structured, packaged, and deployed.

## Decision
We adopt **Independently Deployable Modular Monolith Systems** within a monorepo topology:

1. **Portfolio as System Launcher**: The Portfolio (`fe/`) is a scrollytelling launcher and case study platform. It does not run system business logic.
2. **Strict Bounded Context & Data Ownership**: Each system (`001_pms`, `002_pos`, etc.) owns its database. Direct cross-database joins between systems are prohibited.
3. **Dual Adapter Pattern**: Frontend applications implement an `IPmsRepository` interface with two adapters:
   - `DummyPmsRepository` (Offline mock data mode)
   - `ApiPmsRepository` (Live REST API integration)
4. **Contract-First DBML Baseline**: All database schemas originate from DBML definitions in `docs/dbms/`.

## Consequences
- Systems are decoupled and can be deployed independently to custom domains or subdomains (`pms.domain.com`).
- Eliminates distributed microservice complexity overhead while retaining clear architectural boundaries.
