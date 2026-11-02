# Identity Service (SSO & Token Issuance)

## Overview
Cross-cutting SSO and Auth Token issuing authority for all platform systems (`001_pms`, `002_pos`, etc.).

## Responsibilities
- Issue OAuth2 / OpenID Connect (OIDC) JWT tokens.
- Maintain centralized authentication credentials.
- Validate system boundaries (`aud` claim verification).
