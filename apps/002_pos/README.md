# System 002 — Point of Sales System (POS)

* **Status**: Development
* **Database Spec**: `dbms/002_point_of_sales_system.dbml`
* **API Contract**: `docs/contracts/002-pos.openapi.json`
* **Backend Migration**: `be/database/migrations/2026_09_18_000001_create_pos_tables.php`

## Blueprint Replication Setup
- Replicates architecture pattern established in `001_pms`.
- Independent Database Boundary (`pos_db`).
- Dual Repository Pattern adapter implementation target.
