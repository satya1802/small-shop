# Development

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
### DEV-PLAN-001 · approved · source: plan:PLAN

Development plan version 1 is approved, structured as 5 sprints of 20-point capacity each, covering 8 epics and 20 user stories for the small shop project.

Plan status: approved, version 1. Contains 5 sprints (Sprint 1-5), each with a stated goal and a capacity of 20 points. Backlog is organized into 8 epics (EPIC-001 through EPIC-008) spanning catalogue browsing, cart, checkout/payment, customer accounts, owner product/stock management, owner store configuration, owner admin dashboard/fulfilment, and data protection/privacy. All 20 known requirement IDs (US-001 to US-020) are represented as stories under these epics.

**Related:** US-001, US-002, US-003, US-004, US-005, US-006, US-007, US-008, US-009, US-010, US-011, US-012, US-013, US-014, US-015, US-016, US-017, US-018, US-019, US-020

- ⚠ No information provided on actual development execution: no commit history, ticket/task completion status, code review outcomes, or blockers.
- ⚠ Explicit mapping of which stories/tasks belong to which sprint is not given in the input; sprint goals suggest thematic groupings only.

### DEV-SPRINT-1 · approved · source: plan:SPRINT-1

Sprint 1 goal: stand up owner product management, flat-rate shipping and tax configuration, and baseline privacy/cookie compliance.

Capacity: 20 points. Goal text as planned: 'Stand up owner product management, flat-rate shipping and tax configuration, and baseline privacy/cookie compliance.' Thematically this goal aligns with stories under EPIC-005 (Owner Product & Stock Management: US-011, US-012), EPIC-006 (Owner Store Configuration: US-013, US-014), and EPIC-008 (Data Protection & Privacy: US-018, US-019), though the plan input does not explicitly assign these story IDs to this sprint.

**Related:** US-011, US-012, US-013, US-014, US-018, US-019

- ⚠ Input does not explicitly list which backlog item IDs are assigned to Sprint 1; the related story mapping above is inferred from thematic similarity between the sprint goal and epic descriptions, not confirmed by the input.

### DEV-SPRINT-2 · approved · source: plan:SPRINT-2

Sprint 2 goal: launch shopper-facing catalogue browsing, product detail pages, stock-aware display and the shopping cart.

Capacity: 20 points. Goal text as planned: 'Launch shopper-facing catalogue browsing, product detail pages, stock-aware display and the shopping cart.' Thematically aligns with EPIC-001 (Product Catalogue & Browsing: US-001, US-002) and EPIC-002 (Shopping Cart: US-003), though the plan input does not explicitly assign these story IDs to this sprint.

**Related:** US-001, US-002, US-003

- ⚠ Input does not explicitly list which backlog item IDs are assigned to Sprint 2; mapping above is inferred from thematic similarity only.

### DEV-SPRINT-3 · approved · source: plan:SPRINT-3

Sprint 3 goal: enable guest checkout with shipping address capture, shipping-option and tax selection, and optional customer accounts.

Capacity: 20 points. Goal text as planned: 'Enable guest checkout with shipping address capture, shipping-option and tax selection, and optional customer accounts.' Thematically aligns with EPIC-003 stories US-004, US-005, US-006 and EPIC-004 story US-009, though the plan input does not explicitly assign these story IDs to this sprint.

**Related:** US-004, US-005, US-006, US-009

- ⚠ Input does not explicitly list which backlog item IDs are assigned to Sprint 3; mapping above is inferred from thematic similarity only.

### DEV-SPRINT-4 · approved · source: plan:SPRINT-4

Sprint 4 goal: complete Stripe card payment, safe order placement with stock decrement and on-screen confirmation, and order history.

Capacity: 20 points. Goal text as planned: 'Complete Stripe card payment, safe order placement with stock decrement and on-screen confirmation, and order history.' Thematically aligns with EPIC-003 stories US-007, US-008 and EPIC-004 story US-010, though the plan input does not explicitly assign these story IDs to this sprint.

**Related:** US-007, US-008, US-010

- ⚠ Input does not explicitly list which backlog item IDs are assigned to Sprint 4; mapping above is inferred from thematic similarity only.

### DEV-SPRINT-5 · approved · source: plan:SPRINT-5

Sprint 5 goal: deliver the owner admin dashboard, order fulfilment workflow, and account deletion for data protection.

Capacity: 20 points. Goal text as planned: 'Deliver the owner admin dashboard, order fulfilment workflow, and account deletion for data protection.' Thematically aligns with EPIC-007 stories US-015, US-016, US-017 and EPIC-008 story US-020, though the plan input does not explicitly assign these story IDs to this sprint.

**Related:** US-015, US-016, US-017, US-020

- ⚠ Input does not explicitly list which backlog item IDs are assigned to Sprint 5; mapping above is inferred from thematic similarity only.

### DEV-EPIC-001 · draft · source: plan:EPIC-001

Epic covering shopper-facing catalogue browsing and product detail viewing.

EPIC-001 Product Catalogue & Browsing. No points/role assigned at epic level (aggregation item). Contains: US-001 'Browse the product catalogue' (5 points, role: frontend-agent); US-002 'View a product detail page' (3 points, role: frontend-agent). No subtasks listed for either story.

**Related:** US-001, US-002

### DEV-EPIC-002 · draft · source: plan:EPIC-002

Epic covering shopping cart add/update/remove functionality.

EPIC-002 Shopping Cart. No points/role assigned at epic level. Contains: US-003 'Add, update and remove cart items' (8 points, role: backend-agent), broken into tasks: US-003-T1 Implement cart API endpoints (backend-agent); US-003-T2 Add stock-aware quantity capping (backend-agent); US-003-T3 Build cart UI (frontend-agent).

**Related:** US-003

### DEV-EPIC-003 · draft · source: plan:EPIC-003

Epic covering guest checkout, shipping/tax selection, card payment via Stripe, and order placement with confirmation.

EPIC-003 Checkout, Payment & Order Placement. No points/role assigned at epic level. Contains: US-004 'Check out as a guest with a shipping address' (8 points, backend-agent) with tasks US-004-T1 Implement checkout session creation with address capture (backend-agent), US-004-T2 Build guest checkout address form (frontend-agent), US-004-T3 Validate required/invalid fields server-side (backend-agent); US-005 'Select an owner-defined shipping option' (3 points, frontend-agent); US-006 'See tax applied to the order' (2 points, backend-agent); US-007 'Pay by card at checkout' (8 points, integration-agent) with tasks US-007-T1 Integrate Stripe hosted payment session (integration-agent), US-007-T2 Implement Stripe webhook handler (backend-agent), US-007-T3 Handle decline/failure UX (frontend-agent), US-007-T4 Configure Stripe secrets (devops-agent); US-008 'Place an order and see on-screen confirmation' (8 points, backend-agent) with tasks US-008-T1 Implement transactional order creation with stock decrement (backend-agent), US-008-T2 Handle insufficient-stock-at-payment case (backend-agent), US-008-T3 Build order confirmation page (frontend-agent).

**Related:** US-004, US-005, US-006, US-007, US-008

### DEV-EPIC-004 · draft · source: plan:EPIC-004

Epic covering optional lightweight customer accounts and order history viewing.

EPIC-004 Optional Customer Account & Order History. No points/role assigned at epic level. Contains: US-009 'Create and sign in to a lightweight account' (5 points, backend-agent); US-010 'View my past orders' (3 points, frontend-agent). No subtasks listed for either story.

**Related:** US-009, US-010

### DEV-EPIC-005 · draft · source: plan:EPIC-005

Epic covering owner-side product creation/editing and stock level management.

EPIC-005 Owner Product & Stock Management. No points/role assigned at epic level. Contains: US-011 'Create and edit products' (8 points, backend-agent) with tasks US-011-T1 Implement admin product endpoints (backend-agent), US-011-T2 Build admin product create/edit UI (frontend-agent), US-011-T3 Enforce catalogue visibility on unpublish/delete (backend-agent); US-012 'Manage stock levels' (3 points, backend-agent), no subtasks listed.

**Related:** US-011, US-012

### DEV-EPIC-006 · draft · source: plan:EPIC-006

Epic covering owner configuration of flat-rate shipping options and the tax/VAT rate.

EPIC-006 Owner Store Configuration (Shipping & Tax). No points/role assigned at epic level. Contains: US-013 'Configure flat-rate shipping options' (5 points, backend-agent); US-014 'Configure the tax/VAT rate' (2 points, backend-agent). No subtasks listed for either story.

**Related:** US-013, US-014

### DEV-EPIC-007 · draft · source: plan:EPIC-007

Epic covering the owner admin dashboard, order detail viewing, and marking orders shipped.

EPIC-007 Owner Admin Dashboard & Order Fulfilment. No points/role assigned at epic level. Contains: US-015 'View the admin dashboard' (5 points, frontend-agent); US-016 'View order details' (3 points, frontend-agent); US-017 'Mark an order as shipped' (2 points, backend-agent). No subtasks listed for any story.

**Related:** US-015, US-016, US-017

### DEV-EPIC-008 · draft · source: plan:EPIC-008

Epic covering privacy notice, cookie consent, and account/data deletion.

EPIC-008 Data Protection & Privacy. No points/role assigned at epic level. Contains: US-018 'Present a privacy notice' (1 point, frontend-agent); US-019 'Obtain cookie consent' (3 points, frontend-agent); US-020 'Delete my account and data' (5 points, security-agent). No subtasks listed for any story.

**Related:** US-018, US-019, US-020

- ⚠ No industry/domain compliance skill (e.g. GDPR, CCPA) was named in the input alongside this epic, so specific regulation-to-requirement traceability could not be drawn beyond the generic privacy/consent/deletion stories listed here.
<!-- sdlc:auto:end narrative -->
