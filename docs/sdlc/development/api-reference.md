# API Reference

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start endpoints -->
| Method | Path | Handler | Source | Summary |
|---|---|---|---|---|
| DELETE | /account | — | `backend/src/routes/api.ts:128` | Delete account and personal data (retain order records as legally required) |
| GET | /account/orders | — | `backend/src/routes/api.ts:123` | List the signed-in shopper's past orders |
| GET | /admin/orders | — | `backend/src/routes/storefront.ts:135` | Owner dashboard: recent orders and those awaiting shipment |
| GET | /admin/orders/{id} | — | `backend/src/routes/storefront.ts:140` | Owner views full order details |
| PATCH | /admin/orders/{id}/ship | — | `backend/src/routes/storefront.ts:145` | Owner marks an order shipped |
| POST | /admin/products | — | `backend/src/routes/storefront.ts:36` | Owner creates a product |
| DELETE | /admin/products/{id} | — | `backend/src/routes/storefront.ts:75` | Owner removes/unpublishes a product |
| PATCH | /admin/products/{id} | — | `backend/src/routes/storefront.ts:54` | Owner edits product, stock or publish state |
| PUT | /admin/settings/tax | — | `backend/src/routes/storefront.ts:124` | Owner sets the single tax/VAT rate and currency |
| POST | /admin/shipping-options | — | `backend/src/routes/storefront.ts:98` | Owner creates a flat-rate shipping option |
| PATCH | /admin/shipping-options/{id} | — | `backend/src/routes/storefront.ts:109` | Owner edits or deactivates a shipping option |
| POST | /auth/login | — | `backend/src/routes/api.ts:108` | Sign in and receive JWT |
| POST | /auth/register | — | `backend/src/routes/api.ts:93` | Create a lightweight email account |
| POST | /carts | — | `backend/src/routes/api.ts:42` | Create a cart (guest or signed-in) |
| GET | /carts/{id} | — | `backend/src/routes/api.ts:62` | Get cart with recalculated subtotal |
| POST | /carts/{id}/items | — | `backend/src/routes/api.ts:47` | Add item to cart, quantity capped at stock |
| DELETE | /carts/{id}/items/{itemId} | — | `backend/src/routes/api.ts:57` | Remove a cart line |
| PATCH | /carts/{id}/items/{itemId} | — | `backend/src/routes/api.ts:52` | Update quantity (capped) or remove item |
| POST | /checkout/session | — | `backend/src/routes/api.ts:83` | Validate cart, compute tax+shipping, create Stripe Checkout session |
| GET | /health | — | `backend/src/app.ts:38` | Liveness probe, and the only handler here that is not a stub. |
| GET | /orders/{reference} | — | `backend/src/routes/api.ts:88` | Fetch order for on-screen confirmation |
| GET | /products | — | `backend/src/routes/api.ts:26` | List published products with image, name, price and stock flag |
| GET | /products/{id} | — | `backend/src/routes/api.ts:32` | Product detail page data |
| GET | /settings/tax | — | `backend/src/routes/api.ts:73` | Get single configured tax rate and currency |
| GET | /shipping-options | — | `backend/src/routes/api.ts:67` | List active flat-rate shipping options for checkout |
<!-- sdlc:auto:end endpoints -->

<!-- sdlc:auto:start drift -->
**Designed but missing:**

- DELETE /admin/products/:id
- DELETE /carts/:id/items/:itemId
- GET /admin/orders/:id
- GET /carts/:id
- GET /orders/:reference
- GET /products/:id
- PATCH /admin/orders/:id/ship
- PATCH /admin/products/:id
- PATCH /admin/shipping-options/:id
- PATCH /carts/:id/items/:itemId
- POST /carts/:id/items
- POST /webhooks/stripe

**Code only:**

- DELETE /admin/products/{id}
- DELETE /carts/{id}/items/{itemId}
- GET /admin/orders/{id}
- GET /carts/{id}
- GET /orders/{reference}
- GET /products/{id}
- PATCH /admin/orders/{id}/ship
- PATCH /admin/products/{id}
- PATCH /admin/shipping-options/{id}
- PATCH /carts/{id}/items/{itemId}
- POST /carts/{id}/items
<!-- sdlc:auto:end drift -->

<!-- sdlc:auto:start source -->
Generated from commit `4648cda`
<!-- sdlc:auto:end source -->
