# Traceability Matrix

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start legend -->
Built from recorded links, not written by a model: requirement key → plan item (`source_stable_key`) → development ticket (`stable_key`) → the ticket's test steps → the last live deployment that started after the work finished. **AC tests** counts the story's acceptance criteria that have a test case, and those whose test cases all passed in the latest finished E2E run.
<!-- sdlc:auto:end legend -->

<!-- sdlc:auto:start matrix -->
| Requirement | Epic | Title | Plan items | Sprint | Design | Code | Commits | Ticket | Tests | AC tests | Deployed |
|---|---|---|---|---|---|---|---|---|---|---|---|
| US-001 | EPIC-001 | Browse the product catalogue | US-001 | 2 | GET /products, api, products, storefront | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-002 | EPIC-001 | View a product detail page | US-002 | 2 | GET /products/:id, api, products, storefront | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-003 | EPIC-002 | Add, update and remove cart items | US-003, US-003-T1, US-003-T2, US-003-T3 | 2 | DELETE /carts/:id/items/:itemId, GET /carts/:id, PATCH /carts/:id/items/:itemId, POST /carts, POST /carts/:id/items, api, cart_items, carts, db, products, storefront | — | — | not started | not run | 0/4 tested · 0/4 passing | — |
| US-004 | EPIC-003 | Check out as a guest with a shipping address | US-004, US-004-T1, US-004-T2, US-004-T3 | 3 | POST /checkout/session, api, carts, customers, db, storefront | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-005 | EPIC-003 | Select an owner-defined shipping option | US-005 | 3 | GET /shipping-options, api, shipping_options, storefront | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-006 | EPIC-003 | See tax applied to the order | US-006 | 3 | GET /settings/tax, api, store_settings, storefront | — | — | not started | not run | 0/1 tested · 0/1 passing | — |
| US-007 | EPIC-003 | Pay by card at checkout | US-007, US-007-T1, US-007-T2, US-007-T3, US-007-T4 | 4 | POST /checkout/session, POST /webhooks/stripe, api, orders, storefront, stripe | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-008 | EPIC-003 | Place an order and see on-screen confirmation | US-008, US-008-T1, US-008-T2, US-008-T3 | 4 | GET /orders/:reference, POST /webhooks/stripe, api, db, order_items, orders, products, storefront | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-009 | EPIC-004 | Create and sign in to a lightweight account | US-009 | 3 | POST /auth/login, POST /auth/register, api, customers, db, storefront | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-010 | EPIC-004 | View my past orders | US-010 | 4 | GET /account/orders, api, order_items, orders, storefront | — | — | not started | not run | 0/1 tested · 0/1 passing | — |
| US-011 | EPIC-005 | Create and edit products | US-011, US-011-T1, US-011-T2, US-011-T3 | 1 | DELETE /admin/products/:id, PATCH /admin/products/:id, POST /admin/products, api, db, products, storefront | backend/src/middleware/auth.ts, backend/src/routes/api.ts, backend/src/routes/storefront.ts, backend/src/schema.ts, backend/src/services/auth.ts +11 more | 585d943 | delivered | not run | 3/3 tested · 3/3 passing | — |
| US-012 | EPIC-005 | Manage stock levels | US-012 | 2 | PATCH /admin/products/:id, api, db, products | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-013 | EPIC-006 | Configure flat-rate shipping options | US-013 | 1 | GET /shipping-options, PATCH /admin/shipping-options/:id, POST /admin/shipping-options, api, db, shipping_options, storefront | — | 585d943 | delivered | not run | 2/2 tested · 0/2 passing | — |
| US-014 | EPIC-006 | Configure the tax/VAT rate | US-014 | 1 | GET /settings/tax, PUT /admin/settings/tax, api, db, store_settings, storefront | — | 585d943 | delivered | not run | 1/1 tested · 0/1 passing | — |
| US-015 | EPIC-007 | View the admin dashboard | US-015 | 5 | GET /admin/orders, api, orders, storefront | — | — | not started | not run | 0/1 tested · 0/1 passing | — |
| US-016 | EPIC-007 | View order details | US-016 | 5 | GET /admin/orders/:id, api, order_items, orders, storefront | — | — | not started | not run | 0/1 tested · 0/1 passing | — |
| US-017 | EPIC-007 | Mark an order as shipped | US-017 | 5 | PATCH /admin/orders/:id/ship, api, db, orders, storefront | — | — | not started | not run | 0/1 tested · 0/1 passing | — |
| US-018 | EPIC-008 | Present a privacy notice | US-018 | 1 | storefront | — | 50513cf | delivered | not run | 1/1 tested · 0/1 passing | — |
| US-019 | EPIC-008 | Obtain cookie consent | US-019 | 1 | storefront | frontend/e2e/admin-products.spec.ts, frontend/e2e/admin-shipping-tax.spec.ts, frontend/e2e/cookie-consent.spec.ts, frontend/e2e/privacy-notice.spec.ts, frontend/src/app/layout.tsx +4 more | 50513cf | delivered | not run | 2/2 tested · 0/2 passing | — |
| US-020 | EPIC-008 | Delete my account and data | US-020 | 5 | DELETE /account, api, customers, db, orders, storefront | — | — | not started | not run | 0/1 tested · 0/1 passing | — |
<!-- sdlc:auto:end matrix -->
