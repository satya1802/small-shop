# Sprint Plan

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start sprints -->
## Sprint 1: Sprint 1

Stand up owner product management, flat-rate shipping and tax configuration, and baseline privacy/cookie compliance.

Capacity: 20 points · Committed: 19

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-011 | Story | Create and edit products | 8 | backend-agent | — |
| ↳ US-011-T1 | Task | Implement admin product endpoints | — | backend-agent | — |
| ↳ US-011-T2 | Task | Build admin product create/edit UI | — | frontend-agent | — |
| ↳ US-011-T3 | Task | Enforce catalogue visibility on unpublish/delete | — | backend-agent | — |
| US-013 | Story | Configure flat-rate shipping options | 5 | backend-agent | — |
| US-014 | Story | Configure the tax/VAT rate | 2 | backend-agent | — |
| US-018 | Story | Present a privacy notice | 1 | frontend-agent | — |
| US-019 | Story | Obtain cookie consent | 3 | frontend-agent | — |

## Sprint 2: Sprint 2

Launch shopper-facing catalogue browsing, product detail pages, stock-aware display and the shopping cart.

Capacity: 20 points · Committed: 19

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-001 | Story | Browse the product catalogue | 5 | frontend-agent | US-011 |
| US-002 | Story | View a product detail page | 3 | frontend-agent | US-001 |
| US-003 | Story | Add, update and remove cart items | 8 | backend-agent | US-001 |
| ↳ US-003-T1 | Task | Implement cart API endpoints | — | backend-agent | — |
| ↳ US-003-T2 | Task | Add stock-aware quantity capping | — | backend-agent | — |
| ↳ US-003-T3 | Task | Build cart UI | — | frontend-agent | — |
| US-012 | Story | Manage stock levels | 3 | backend-agent | US-011 |

## Sprint 3: Sprint 3

Enable guest checkout with shipping address capture, shipping-option and tax selection, and optional customer accounts.

Capacity: 20 points · Committed: 18

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-004 | Story | Check out as a guest with a shipping address | 8 | backend-agent | US-003 |
| ↳ US-004-T1 | Task | Implement checkout session creation with address capture | — | backend-agent | — |
| ↳ US-004-T2 | Task | Build guest checkout address form | — | frontend-agent | — |
| ↳ US-004-T3 | Task | Validate required/invalid fields server-side | — | backend-agent | — |
| US-005 | Story | Select an owner-defined shipping option | 3 | frontend-agent | US-004, US-013 |
| US-006 | Story | See tax applied to the order | 2 | backend-agent | US-004, US-014 |
| US-009 | Story | Create and sign in to a lightweight account | 5 | backend-agent | — |

## Sprint 4: Sprint 4

Complete Stripe card payment, safe order placement with stock decrement and on-screen confirmation, and order history.

Capacity: 20 points · Committed: 19

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-007 | Story | Pay by card at checkout | 8 | integration-agent | US-005, US-006 |
| ↳ US-007-T1 | Task | Integrate Stripe hosted payment session | — | integration-agent | — |
| ↳ US-007-T2 | Task | Implement Stripe webhook handler | — | backend-agent | — |
| ↳ US-007-T3 | Task | Handle decline/failure UX | — | frontend-agent | — |
| ↳ US-007-T4 | Task | Configure Stripe secrets | — | devops-agent | — |
| US-008 | Story | Place an order and see on-screen confirmation | 8 | backend-agent | US-007 |
| ↳ US-008-T1 | Task | Implement transactional order creation with stock decrement | — | backend-agent | — |
| ↳ US-008-T2 | Task | Handle insufficient-stock-at-payment case | — | backend-agent | — |
| ↳ US-008-T3 | Task | Build order confirmation page | — | frontend-agent | — |
| US-010 | Story | View my past orders | 3 | frontend-agent | US-009, US-008 |

## Sprint 5: Sprint 5

Deliver the owner admin dashboard, order fulfilment workflow, and account deletion for data protection.

Capacity: 20 points · Committed: 15

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-015 | Story | View the admin dashboard | 5 | frontend-agent | US-008 |
| US-016 | Story | View order details | 3 | frontend-agent | US-008 |
| US-017 | Story | Mark an order as shipped | 2 | backend-agent | US-016 |
| US-020 | Story | Delete my account and data | 5 | security-agent | US-009 |

## Unscheduled

_Nothing unscheduled._
<!-- sdlc:auto:end sprints -->
