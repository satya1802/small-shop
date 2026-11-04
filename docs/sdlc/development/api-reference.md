# API Reference

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start endpoints -->
| Method | Path | Handler | Source | Summary |
|---|---|---|---|---|
| GET | /health | — | `backend/src/app.ts:29` | Liveness probe, and the only handler here that is not a stub. |
<!-- sdlc:auto:end endpoints -->

<!-- sdlc:auto:start drift -->
**Designed but missing:**

- DELETE /account
- DELETE /admin/products/:id
- DELETE /carts/:id/items/:itemId
- GET /account/orders
- GET /admin/orders
- GET /admin/orders/:id
- GET /carts/:id
- GET /orders/:reference
- GET /products
- GET /products/:id
- GET /settings/tax
- GET /shipping-options
- PATCH /admin/orders/:id/ship
- PATCH /admin/products/:id
- PATCH /admin/shipping-options/:id
- PATCH /carts/:id/items/:itemId
- POST /admin/products
- POST /admin/shipping-options
- POST /auth/login
- POST /auth/register
- POST /carts
- POST /carts/:id/items
- POST /checkout/session
- POST /webhooks/stripe
- PUT /admin/settings/tax
<!-- sdlc:auto:end drift -->

<!-- sdlc:auto:start source -->
Generated from commit `86a177c`
<!-- sdlc:auto:end source -->
