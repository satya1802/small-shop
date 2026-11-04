# Product Requirements

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
## Summary

### REQ-TECHSTACK · approved · source: requirements:technology-stack

Product owner approved an exact technology stack: Express 5 (backend), AWS (cloud), PostgreSQL 16 (database), Next.js 15 (frontend). Requirements version 1, delivery scope marked 'lightweight'.

Decided by product owner, to be followed exactly (no substitutions):
- Backend: Express 5.
- Cloud: AWS -- single region near the single-country market, for fast pages and scaling from quiet launch to sales spikes without re-platforming; managed DB/storage reduce ops burden.
- Database: PostgreSQL 16 -- chosen for strong consistency (no overselling, no lost orders) across catalogue, carts, orders, customers.
- Frontend: Next.js 15 -- server-rendered catalogue/product pages for SEO and mobile speed; also hosts the responsive storefront and owner admin screens in one codebase.

**Related:** EPIC-001, EPIC-002, EPIC-003

### REQ-SERVICES · approved · source: requirements:services

Two runtime services approved: Stripe (SaaS payments) and Redis (container cache). Required env/API keys: REDIS_URL, STRIPE_SECRET_KEY.

- Payments: Stripe (saas), env var STRIPE_SECRET_KEY -- handles card data at checkout so the app never stores it; owner receives payouts via Stripe.
- Cache: Redis, container redis:7-alpine.
- API keys needed by the app: REDIS_URL, STRIPE_SECRET_KEY.

**Related:** EPIC-003, US-007, NFR-004

### REQ-OOS · approved · source: requirements:out-of-scope

Explicitly excluded from design/build: discount/promo codes, product reviews & ratings, native mobile app, email (SendGrid removed), and file storage (S3 removed).

Out of scope per product owner decision: Discount/promo codes; Product reviews & ratings; Native mobile app (iOS/Android); Email (the suggested SendGrid was removed from the stack); File storage (the suggested Amazon S3 was removed from the stack). These should not be designed or built in later phases.

- ⚠ Product images are in scope (catalogue/product photos) but the only file-storage service (S3) was removed from the stack; no alternative image storage mechanism has been specified yet -- flag for architecture phase.

### EPIC-001 · draft · source: requirements:EPIC-001

Product Catalogue & Browsing: shoppers browse a responsive product list and open product detail pages. Primary entry point to the shop.

- US-001 (high) Browse the product catalogue: list shows image, name, price in single currency (AC-001); zero-stock items shown out of stock and cannot be added to cart (AC-002); layout is responsive on mobile, no native app needed (AC-003).
- US-002 (high) View a product detail page: shows name, description, price, image(s), stock availability (AC-004); in-stock products allow choosing quantity up to available stock and adding to cart (AC-005); out-of-stock products disable add-to-cart (AC-006).
Note: prices are shown in a single currency, but the specific country/currency has not yet been named (assumption to confirm).

**Related:** US-001, US-002, AC-001, AC-002, AC-003, AC-004, AC-005, AC-006, NFR-001, NFR-002, NFR-003

- ⚠ Target country/currency for catalogue pricing has not been named -- flagged as an assumption to confirm.

### EPIC-002 · draft · source: requirements:EPIC-002

Shopping Cart: shoppers add, update, and remove cart items; cart reflects current prices and stock.

US-003 (high) Add, update and remove cart items: adding an in-stock item shows it in the cart with selected quantity and updated total (AC-007); changing quantity or removing an item recalculates the subtotal (AC-008); requesting more than available stock caps the quantity and informs the shopper (AC-009); an empty cart shows an empty-cart message and blocks checkout (AC-010).

**Related:** US-003, AC-007, AC-008, AC-009, AC-010

### EPIC-003 · draft · source: requirements:EPIC-003

Checkout, Payment & Order Placement: guest checkout is the primary path -- shipping address entry, owner-defined flat-rate shipping choice, Stripe card payment, single tax/VAT rate, and on-screen order confirmation with stock decrement.

- US-004 (critical) Guest checkout with shipping address: can continue as guest, enter contact email and shipping address in the single supported country (AC-011); invalid/blank required fields block continuation and are flagged (AC-012).
- US-005 (high) Select owner-defined shipping option: flat-rate options with costs shown and selectable at the shipping step (AC-013); chosen shipping cost added to order total -- no live carrier rates/tracking, assumption to confirm (AC-014).
- US-006 (high) See tax applied: order summary calculates tax at the owner's single configured rate and shows it as a line in the total (AC-015).
- US-007 (critical) Pay by card: Stripe-hosted payment step charges the order total in the single configured currency, requires STRIPE_SECRET_KEY (AC-016); declined/failed payment shows an error, places no order, and preserves the cart for retry (AC-017).
- US-008 (critical) Place order and on-screen confirmation: successful payment shows order reference, items, totals, shipping address (AC-018); stock is decremented per purchased item (AC-019); insufficient stock at payment time stops the order, informs the shopper, and finalizes no charge for the unavailable item (AC-020).

**Related:** US-004, US-005, US-006, US-007, US-008, AC-011, AC-012, AC-013, AC-014, AC-015, AC-016, AC-017, AC-018, AC-019, AC-020, NFR-004, NFR-006

- ⚠ Conflict: the confirmed understanding referenced order-confirmation emails via a transactional provider, but email delivery is explicitly out of scope for this MVP -- confirmation is on-screen only. Needs stakeholder sign-off that on-screen-only confirmation is acceptable.
- ⚠ Single country/currency for shipping address and payment has not been named -- assumption to confirm.
- ⚠ No live carrier rates or tracking is an assumption pending confirmation.

### EPIC-004 · draft · source: requirements:EPIC-004

Optional Customer Account & Order History: shoppers may optionally register with email to view past orders; guest checkout remains primary.

- US-010/US-009 (low) Create and sign in to a lightweight account: registering with email creates an account usable on future visits (AC-021); account creation is never required to complete a purchase (AC-022).
- US-010 (low) View past orders: signed-in shoppers with prior orders see a list with order reference, date, items, totals, and current status such as placed or shipped (AC-023).
Assumption: email is the login identifier.

**Related:** US-009, US-010, AC-021, AC-022, AC-023, NFR-008

- ⚠ Confirm assumption that email is the sole login identifier (no password policy or other auth details specified).

### EPIC-005 · draft · source: requirements:EPIC-005

Owner Product & Stock Management: owner/admin creates, edits, publishes/unpublishes products and manages stock quantities, which gate catalogue availability.

- US-011 (high) Create and edit products: owner creates a product with name, description, price, image, publishable to the catalogue (AC-024); editing and saving updates the catalogue (AC-025); unpublishing/removing a product removes it from the shopper-facing catalogue (AC-026).
- US-012 (high) Manage stock levels: setting stock quantity shows the product as available while above zero (AC-027); stock reaching zero through purchases marks it out of stock and unpurchasable until replenished (AC-028).

**Related:** US-011, US-012, AC-024, AC-025, AC-026, AC-027, AC-028, NFR-005

### EPIC-006 · draft · source: requirements:EPIC-006

Owner Store Configuration: owner defines flat-rate shipping options and a single store-wide tax/VAT rate.

- US-013 (high) Configure flat-rate shipping options: creating a named shipping option with a flat cost makes it selectable at checkout (AC-029); editing or removing an option updates checkout choices accordingly (AC-030).
- US-014 (high) Configure the tax/VAT rate: setting a tax/VAT percentage applies it to all subsequent checkouts (AC-031) -- single rate, not a multi-jurisdiction engine, assumption to confirm.
Assumptions: shipping is flat-rate/owner-defined with no live carrier integration; single currency and single tax rate apply; specific country not yet named.

**Related:** US-013, US-014, AC-029, AC-030, AC-031, NFR-005

- ⚠ Specific country for tax/shipping rules has not been named -- assumption to confirm.
- ⚠ Single-rate (non-multi-jurisdiction) tax model is an assumption pending confirmation.

### EPIC-007 · draft · source: requirements:EPIC-007

Owner Admin Dashboard & Order Fulfilment: owner views a dashboard of orders, opens order details, and manually marks orders as shipped.

- US-015 (medium) View the admin dashboard: shows a summary of recent orders and which are awaiting shipment (AC-032).
- US-016 (high) View order details: opening an order shows its reference, items/quantities, totals, shipping option and address, and current status (AC-033).
- US-017 (high) Mark an order as shipped: marking an order shipped updates its status, and signed-in shoppers see the update in their order history (AC-034).
Fulfilment is manual -- no automated carrier labels or tracking.

**Related:** US-015, US-016, US-017, AC-032, AC-033, AC-034, NFR-005

- ⚠ Conflict: confirmation emails were mentioned in the original understanding but email is out of scope for this MVP, so the owner works from on-screen order information only -- needs stakeholder confirmation that this is acceptable for fulfilment workflow.

### EPIC-008 · draft · source: requirements:EPIC-008

Data Protection & Privacy: privacy notice, cookie consent for non-essential cookies, and account/data deletion on request. No special-category data collected.

- US-018 (medium) Present a privacy notice: accessible from any storefront page, describing what data is collected and how it's used (AC-035).
- US-019 (medium) Obtain cookie consent: first-time visitors see a consent prompt to accept/decline non-essential cookies (AC-036); declining prevents non-essential cookies from being set (AC-037).
- US-020 (medium) Delete my account and data: signed-in shoppers can request deletion; account and personal data are deleted and sign-in is no longer possible, subject to legally required order-record retention (AC-038).

**Related:** US-018, US-019, US-020, AC-035, AC-036, AC-037, AC-038, NFR-007, NFR-009

### NFR-001 · draft · source: requirements:NFR-001

Performance: catalogue and product pages must be server-rendered for fast load, especially on phones, hosted in a single region near the single-country market.

Full content rendered server-side so pages appear immediately; single-region AWS hosting close to the target market keeps latency low. Applies to US-001, US-002.

**Related:** US-001, US-002

### NFR-002 · draft · source: requirements:NFR-002

Usability/SEO: catalogue and product pages must present full content server-side so search engines can index products.

Server-rendered content required for discoverability in search results. Applies to US-001, US-002.

**Related:** US-001, US-002

### NFR-003 · draft · source: requirements:NFR-003

Compatibility: storefront must be responsive and usable on mobile-sized screens as well as desktop; no native app is provided.

Applies to US-001.

**Related:** US-001

### NFR-004 · draft · source: requirements:NFR-004

Security: card data must be entered only through Stripe's hosted payment step; the application must never store card numbers itself.

Applies to US-007.

**Related:** US-007

### NFR-005 · draft · source: requirements:NFR-005

Security: all owner/admin functions (product/stock management, shipping/tax config, order viewing/fulfilment) require sign-in as owner/admin.

Applies to US-011, US-012, US-013, US-014, US-015, US-016, US-017.

**Related:** US-011, US-012, US-013, US-014, US-015, US-016, US-017

### NFR-006 · draft · source: requirements:NFR-006

Scalability: the shop must scale from quiet launch to sales spikes without re-platforming, and must prevent overselling/lost orders under concurrent purchases.

When multiple shoppers buy the last unit simultaneously, stock must decrement safely; if stock is insufficient at payment, the order is not completed and no charge is finalized. Applies to US-008.

**Related:** US-008

### NFR-007 · draft · source: requirements:NFR-007

Privacy: non-essential cookies must not be set until the shopper consents, and must not be set at all if declined.

Applies to US-019.

**Related:** US-019

### NFR-008 · draft · source: requirements:NFR-008

Privacy: a shopper's orders and personal data must be visible only to that shopper (when signed in) and to the owner/admin, never to other shoppers.

Applies to US-010.

**Related:** US-010

### NFR-009 · draft · source: requirements:NFR-009

Privacy: account deletion removes the account and personal data (sign-in no longer possible), subject only to legally required order-record retention; no special-category data is collected.

Applies to US-020.

**Related:** US-020
<!-- sdlc:auto:end narrative -->

<!-- sdlc:auto:start summary -->
**Requirements version:** v1  
**Delivery scope:** lightweight  
**Approved:** 2026-11-04

**Capabilities in scope:** Product catalogue browsing, Product detail pages, Shopping cart (add, update, remove items), Guest checkout with shipping address entry, Card payment at checkout, Order placement with on-screen confirmation, Stock levels that decrement on purchase, Owner product and stock management, Owner-defined shipping options setup, Configurable tax/VAT rate setup, Optional customer account to view past orders, Owner admin dashboard, Privacy notice and cookie consent, Stripe card payments (STRIPE_SECRET_KEY), Single currency with one owner-set tax/VAT rate, Flat-rate, owner-defined shipping options, Guest checkout as the primary purchase path

**Approved technology stack:**

| Layer | Choice | Rationale |
|---|---|---|
| backend | Express | — |
| cloud | AWS | AWS runs your storefront, database and product-image storage in one place within a single region close to your single-country market, keeping pages fast for your shoppers. It scales from launch-day quiet to a sales spike without you re-platforming, and its managed database and storage reduce the day-to-day operations you'd otherwise carry. |
| database | PostgreSQL | Orders, stock levels and payments must stay correct — you can't oversell an item or lose an order. PostgreSQL enforces exactly this kind of consistency, so when two shoppers buy the last unit at once, stock decrements safely. It handles your catalogue, carts, orders and customer records in one reliable store with room to grow well past a small shop's volume. |
| frontend | Next.js | Your shop lives or dies on being found: when someone searches for a product you sell, your catalogue pages need to show up in Google and load fast on a phone. Next.js renders those product and category pages on the server so search engines and shoppers see full content immediately, which plain React does not do out of the box. It also comfortably handles the whole responsive storefront plus the owner's admin screens in one codebase. |
<!-- sdlc:auto:end summary -->

<!-- sdlc:auto:start epics -->
## EPIC-001: Product Catalogue & Browsing

Shoppers can browse the product catalogue and view detailed information about individual products on a responsive web storefront. This is the primary entry point to the shop. Prices are shown in a single currency (the specific country/currency has not yet been named — assumption to be confirmed).

### US-001: Browse the product catalogue

**Priority:** high

> As a shopper, I want to browse a list of products with images, names and prices, so that I can discover what the shop sells and decide what to buy.

| ID | Given | When | Then |
|---|---|---|---|
| AC-001 | the shop has published products | I visit the catalogue page | I see a list of available products each showing at least an image, name and price in the shop's single configured currency |
| AC-002 | a product has a stock quantity of zero | I view it in the catalogue | it is shown as out of stock and cannot be added to the cart |
| AC-003 | I am browsing on a mobile-sized screen | I open the catalogue page | the layout adapts responsively and remains usable without a native app |

### US-002: View a product detail page

**Priority:** high

> As a shopper, I want to open a dedicated page for a product with its full details, so that I can understand the product before adding it to my cart.

| ID | Given | When | Then |
|---|---|---|---|
| AC-004 | a product exists in the catalogue | I select it | I see a product detail page showing its name, description, price, image(s) and stock availability |
| AC-005 | a product is in stock | I am on its detail page | I can choose a quantity (up to the available stock) and add it to my cart |
| AC-006 | a product is out of stock | I am on its detail page | the add-to-cart action is disabled and the product is marked out of stock |

## EPIC-002: Shopping Cart

Shoppers can collect products in a cart and adjust quantities before checkout. The cart reflects current prices and stock availability.

### US-003: Add, update and remove cart items

**Priority:** high

> As a shopper, I want to add products to my cart and change or remove them, so that I can control exactly what I am about to buy.

| ID | Given | When | Then |
|---|---|---|---|
| AC-007 | I am viewing a product that is in stock | I add it to my cart | the item appears in my cart with the selected quantity and the cart total updates |
| AC-008 | I have an item in my cart | I change its quantity or remove it | the cart updates the line and recalculates the subtotal accordingly |
| AC-009 | I try to set a quantity greater than the available stock for an item | I update the cart | the quantity is capped at the available stock and I am informed |
| AC-010 | my cart is empty | I view the cart | I see an empty-cart message and cannot proceed to checkout |

## EPIC-003: Checkout, Payment & Order Placement

Shoppers check out — guest checkout is the primary path — entering a shipping address, choosing an owner-defined flat-rate shipping option, and paying by card. Assumption: card payments are taken online via Stripe and require a STRIPE_SECRET_KEY; a single currency and single owner-set tax/VAT rate apply. Stock decrements on successful purchase. Assumption/conflict to confirm: the confirmed understanding referred to order confirmation emails via a transactional email provider, but email delivery is out of scope for this MVP, so confirmation is provided on-screen only.

### US-004: Check out as a guest with a shipping address

**Priority:** critical

> As a shopper, I want to check out without creating an account and enter my shipping address, so that I can buy quickly as the primary purchase path.

| ID | Given | When | Then |
|---|---|---|---|
| AC-011 | I have at least one item in my cart | I proceed to checkout | I can continue as a guest and enter my contact email and a shipping address within the single supported country |
| AC-012 | I am on the checkout page | I leave a required address or contact field blank or invalid | I am prevented from continuing and shown which fields need correcting |

### US-005: Select an owner-defined shipping option

**Priority:** high

> As a shopper, I want to choose from the shipping options the owner has set up, so that I know the delivery cost before paying.

| ID | Given | When | Then |
|---|---|---|---|
| AC-013 | the owner has configured one or more flat-rate shipping options | I reach the shipping step of checkout | I see the available flat-rate options with their costs and can select one |
| AC-014 | I have selected a shipping option | the order summary is shown | the shipping cost is added to the order total (no live carrier rates or tracking are involved — this is an assumption to confirm) |

### US-006: See tax applied to the order

**Priority:** high

> As a shopper, I want the applicable tax/VAT to be shown on my order, so that I understand the full price I am paying.

| ID | Given | When | Then |
|---|---|---|---|
| AC-015 | the owner has configured a single tax/VAT rate | I view the order summary at checkout | tax is calculated at that rate and shown as a line in the total |

### US-007: Pay by card at checkout

**Priority:** critical

> As a shopper, I want to pay securely by card at checkout, so that I can complete my purchase online.

| ID | Given | When | Then |
|---|---|---|---|
| AC-016 | I have entered my shipping details and selected a shipping option | I submit valid card details through the Stripe-hosted payment step (requires a configured STRIPE_SECRET_KEY) | my card is charged for the order total in the single configured currency |
| AC-017 | my card payment is declined or fails | I attempt to pay | I am shown an error, no order is placed, and my cart is preserved so I can retry |

### US-008: Place an order and see on-screen confirmation

**Priority:** critical

> As a shopper, I want to receive confirmation that my order was placed, so that I know my purchase succeeded.

| ID | Given | When | Then |
|---|---|---|---|
| AC-018 | my card payment succeeds | the order is placed | I see an on-screen confirmation showing an order reference, the items, totals and shipping address |
| AC-019 | an order is successfully placed | the payment is confirmed | the stock quantity of each purchased item is decremented by the quantity ordered |
| AC-020 | an item's available stock is insufficient at the moment of payment | I attempt to place the order | the order is not completed, I am informed, and no charge is finalised for the unavailable item |

## EPIC-004: Optional Customer Account & Order History

Shoppers may optionally create a lightweight email-based account to view their past orders. Guest checkout remains the primary path; rich account features are out of scope. Assumption: email is the login identifier.

### US-009: Create and sign in to a lightweight account

**Priority:** low

> As a shopper, I want to optionally create an account with my email, so that I can return and view my past orders.

| ID | Given | When | Then |
|---|---|---|---|
| AC-021 | I am a shopper without an account | I choose to register with my email | an account is created and I can sign in on future visits |
| AC-022 | guest checkout is available | I proceed to buy | I am never forced to create an account to complete a purchase |

### US-010: View my past orders

**Priority:** low

> As a signed-in shopper, I want to see a list of my previous orders and their details, so that I can review what I bought and its fulfilment status.

| ID | Given | When | Then |
|---|---|---|---|
| AC-023 | I am signed in and have placed orders while signed in | I open my order history | I see my past orders with their order reference, date, items, totals and current status (e.g. placed or shipped) |

## EPIC-005: Owner Product & Stock Management

The shop owner/admin manages the product catalogue and stock levels. Stock quantities are tracked and decrement on purchase; products can sell out.

### US-011: Create and edit products

**Priority:** high

> As a shop owner, I want to add and edit products with their details and price, so that I control what appears in the catalogue.

| ID | Given | When | Then |
|---|---|---|---|
| AC-024 | I am signed in as the owner/admin | I create a product with a name, description, price and image | the product is saved and can be published to the catalogue |
| AC-025 | an existing product | I edit its details and save | the catalogue reflects the updated information |
| AC-026 | a product should no longer be sold | I unpublish or remove it | it no longer appears in the shopper-facing catalogue |

### US-012: Manage stock levels

**Priority:** high

> As a shop owner, I want to set and update the stock quantity for each product, so that the shop reflects real availability and can sell out.

| ID | Given | When | Then |
|---|---|---|---|
| AC-027 | I am editing a product | I set its stock quantity | the catalogue shows the product as available while stock is above zero |
| AC-028 | a product's stock reaches zero through purchases | a shopper views it | it is shown as out of stock and cannot be purchased until I replenish the stock |

## EPIC-006: Owner Store Configuration (Shipping & Tax)

The shop owner/admin configures the flat-rate shipping options and the single tax/VAT rate used across the store. Assumptions: shipping is flat-rate/owner-defined with no live carrier integration; a single currency and single tax rate apply; the specific country has not yet been named.

### US-013: Configure flat-rate shipping options

**Priority:** high

> As a shop owner, I want to define the shipping options and their flat costs, so that shoppers can choose a delivery method at checkout.

| ID | Given | When | Then |
|---|---|---|---|
| AC-029 | I am signed in as the owner/admin | I create a shipping option with a name and flat-rate cost | it becomes selectable by shoppers at checkout |
| AC-030 | an existing shipping option | I edit or remove it | the checkout shipping choices update accordingly |

### US-014: Configure the tax/VAT rate

**Priority:** high

> As a shop owner, I want to set a single tax/VAT rate for the store, so that the correct tax is applied to orders.

| ID | Given | When | Then |
|---|---|---|---|
| AC-031 | I am signed in as the owner/admin | I set the tax/VAT rate as a percentage | that rate is used to calculate tax on all subsequent checkouts (a single rate, not a multi-jurisdiction engine — assumption to confirm) |

## EPIC-007: Owner Admin Dashboard & Order Fulfilment

The shop owner/admin has a dashboard to view orders and fulfil them by marking them shipped. Fulfilment is manual — no automated carrier labels or tracking. Assumption/conflict: confirmation emails were mentioned in the understanding but email is out of scope for this MVP, so the owner works from on-screen order information only.

### US-015: View the admin dashboard

**Priority:** medium

> As a shop owner, I want a dashboard summarising orders, so that I can see at a glance what needs attention.

| ID | Given | When | Then |
|---|---|---|---|
| AC-032 | I am signed in as the owner/admin | I open the admin dashboard | I see a summary of recent orders and which are awaiting shipment |

### US-016: View order details

**Priority:** high

> As a shop owner, I want to open an order and see its full details, so that I can prepare and dispatch the correct goods.

| ID | Given | When | Then |
|---|---|---|---|
| AC-033 | an order has been placed | I open it from the dashboard | I see its order reference, items and quantities, totals, shipping option and shipping address, and current status |

### US-017: Mark an order as shipped

**Priority:** high

> As a shop owner, I want to mark an order as shipped once I have dispatched it, so that its fulfilment status is recorded.

| ID | Given | When | Then |
|---|---|---|---|
| AC-034 | an order is awaiting shipment | I mark it as shipped | its status changes to shipped and, if the order belongs to a signed-in account, the shopper sees the updated status in their order history |

## EPIC-008: Data Protection & Privacy

The storefront applies standard consumer data-protection practices: a privacy notice, cookie consent, and the ability to delete an account and its data. No special-category data is collected.

### US-018: Present a privacy notice

**Priority:** medium

> As a shopper, I want to read how my data is used, so that I can make an informed decision before sharing it.

| ID | Given | When | Then |
|---|---|---|---|
| AC-035 | I am on any page of the storefront | I look for the privacy notice | I can access a clear privacy notice describing what data is collected and how it is used |

### US-019: Obtain cookie consent

**Priority:** medium

> As a shopper, I want to be asked for cookie consent, so that my preferences about non-essential cookies are respected.

| ID | Given | When | Then |
|---|---|---|---|
| AC-036 | I visit the site for the first time | the page loads | I am shown a cookie consent prompt and can accept or decline non-essential cookies |
| AC-037 | I have declined non-essential cookies | I continue browsing | non-essential cookies are not set |

### US-020: Delete my account and data

**Priority:** medium

> As a shopper with an account, I want to request deletion of my account and associated personal data, so that I can exercise my data-protection rights.

| ID | Given | When | Then |
|---|---|---|---|
| AC-038 | I am signed in to my account | I request account/data deletion | my account and associated personal data are deleted (subject to any legally required order-record retention) and I can no longer sign in |
<!-- sdlc:auto:end epics -->
