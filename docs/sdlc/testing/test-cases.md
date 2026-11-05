# Tests

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start summary -->
68 tests · Passed 59 · Failed 0 · Skipped 0 · Not run 9

Acceptance criteria covered: 9/38 · passing: 3/38
<!-- sdlc:auto:end summary -->

<!-- sdlc:auto:start tests -->
## Sprint 1

### US-011: Create and edit products

| Criteria | Test | Level | Result | File |
|---|---|---|---|---|
| AC-024 | Products & store settings admin screen > [AC-024] renders the saved product list fetched from the API, replacing seeded data | Unit | Passed | `frontend/src/app/admin-products/page.test.tsx` |
| AC-024 | Products & store settings admin screen > [AC-024] submits the new product form via POST /admin/products and shows it in the list | Unit | Passed | `frontend/src/app/admin-products/page.test.tsx` |
| AC-025 | Products & store settings admin screen > [AC-025] edits an existing product via PATCH and reflects the updated details | Unit | Passed | `frontend/src/app/admin-products/page.test.tsx` |
| AC-026 | Products & store settings admin screen > [AC-026] removing a product calls DELETE and the row leaves the list | Unit | Passed | `frontend/src/app/admin-products/page.test.tsx` |
| AC-026 | Products & store settings admin screen > [AC-026] unpublishing a product PATCHes published:false and the row leaves the live set | Unit | Passed | `frontend/src/app/admin-products/page.test.tsx` |
| AC-029, AC-030 | Products & store settings admin screen > [AC-029/AC-030] creates a shipping option via POST /admin/shipping-options | Unit | Passed | `frontend/src/app/admin-products/page.test.tsx` |
| AC-029, AC-030 | Products & store settings admin screen > [AC-029/AC-030] edits a shipping option via PATCH and removes it via PATCH active:false | Unit | Passed | `frontend/src/app/admin-products/page.test.tsx` |
| AC-029 | Products & store settings admin screen > [AC-029] shows an error state and retry when products fail to load | Unit | Passed | `frontend/src/app/admin-products/page.test.tsx` |
| AC-031 | Products & store settings admin screen > [AC-031] saves the tax rate via PUT /admin/settings/tax and shows the saved value | Unit | Passed | `frontend/src/app/admin-products/page.test.tsx` |
| AC-031 | Products & store settings admin screen > [AC-031] shows an empty state when there are no products | Unit | Passed | `frontend/src/app/admin-products/page.test.tsx` |
| — | every /admin/* route requires owner sign-in (NFR-005) > [NFR-005] DELETE /admin/products/00000000-0000-0000-0000-000000000000 returns 401 without a token | Integration | Passed | `backend/tests/integration/admin-auth.test.ts` |
| — | every /admin/* route requires owner sign-in (NFR-005) > [NFR-005] DELETE /admin/products/00000000-0000-0000-0000-000000000000 returns 403 for a signed-in non-owner | Integration | Passed | `backend/tests/integration/admin-auth.test.ts` |
| — | every /admin/* route requires owner sign-in (NFR-005) > [NFR-005] GET /admin/orders returns 401 without a token | Integration | Passed | `backend/tests/integration/admin-auth.test.ts` |
| — | every /admin/* route requires owner sign-in (NFR-005) > [NFR-005] GET /admin/orders returns 403 for a signed-in non-owner | Integration | Passed | `backend/tests/integration/admin-auth.test.ts` |
| — | every /admin/* route requires owner sign-in (NFR-005) > [NFR-005] GET /admin/orders/00000000-0000-0000-0000-000000000000 returns 401 without a token | Integration | Passed | `backend/tests/integration/admin-auth.test.ts` |
| — | every /admin/* route requires owner sign-in (NFR-005) > [NFR-005] GET /admin/orders/00000000-0000-0000-0000-000000000000 returns 403 for a signed-in non-owner | Integration | Passed | `backend/tests/integration/admin-auth.test.ts` |
| — | every /admin/* route requires owner sign-in (NFR-005) > [NFR-005] PATCH /admin/orders/00000000-0000-0000-0000-000000000000/ship returns 401 without a token | Integration | Passed | `backend/tests/integration/admin-auth.test.ts` |
| — | every /admin/* route requires owner sign-in (NFR-005) > [NFR-005] PATCH /admin/orders/00000000-0000-0000-0000-000000000000/ship returns 403 for a signed-in non-owner | Integration | Passed | `backend/tests/integration/admin-auth.test.ts` |
| — | every /admin/* route requires owner sign-in (NFR-005) > [NFR-005] PATCH /admin/products/00000000-0000-0000-0000-000000000000 returns 401 without a token | Integration | Passed | `backend/tests/integration/admin-auth.test.ts` |
| — | every /admin/* route requires owner sign-in (NFR-005) > [NFR-005] PATCH /admin/products/00000000-0000-0000-0000-000000000000 returns 403 for a signed-in non-owner | Integration | Passed | `backend/tests/integration/admin-auth.test.ts` |
| — | every /admin/* route requires owner sign-in (NFR-005) > [NFR-005] PATCH /admin/shipping-options/00000000-0000-0000-0000-000000000000 returns 401 without a token | Integration | Passed | `backend/tests/integration/admin-auth.test.ts` |
| — | every /admin/* route requires owner sign-in (NFR-005) > [NFR-005] PATCH /admin/shipping-options/00000000-0000-0000-0000-000000000000 returns 403 for a signed-in non-owner | Integration | Passed | `backend/tests/integration/admin-auth.test.ts` |
| — | every /admin/* route requires owner sign-in (NFR-005) > [NFR-005] POST /admin/products returns 401 without a token | Integration | Passed | `backend/tests/integration/admin-auth.test.ts` |
| — | every /admin/* route requires owner sign-in (NFR-005) > [NFR-005] POST /admin/products returns 403 for a signed-in non-owner | Integration | Passed | `backend/tests/integration/admin-auth.test.ts` |
| — | every /admin/* route requires owner sign-in (NFR-005) > [NFR-005] POST /admin/shipping-options returns 401 without a token | Integration | Passed | `backend/tests/integration/admin-auth.test.ts` |
| — | every /admin/* route requires owner sign-in (NFR-005) > [NFR-005] POST /admin/shipping-options returns 403 for a signed-in non-owner | Integration | Passed | `backend/tests/integration/admin-auth.test.ts` |
| — | every /admin/* route requires owner sign-in (NFR-005) > [NFR-005] PUT /admin/settings/tax returns 401 without a token | Integration | Passed | `backend/tests/integration/admin-auth.test.ts` |
| — | every /admin/* route requires owner sign-in (NFR-005) > [NFR-005] PUT /admin/settings/tax returns 403 for a signed-in non-owner | Integration | Passed | `backend/tests/integration/admin-auth.test.ts` |
| AC-024, AC-025, AC-026 | admin product CRUD (AC-024, AC-025, AC-026) > [AC-024] a product the owner creates (published) is published to GET /products | Integration | Passed | `backend/tests/integration/admin-products.test.ts` |
| AC-024, AC-025, AC-026 | admin product CRUD (AC-024, AC-025, AC-026) > [AC-025] editing a product and saving is reflected in the catalogue | Integration | Passed | `backend/tests/integration/admin-products.test.ts` |
| AC-024, AC-025, AC-026 | admin product CRUD (AC-024, AC-025, AC-026) > [AC-026] deleting a product removes it from the shopper catalogue | Integration | Passed | `backend/tests/integration/admin-products.test.ts` |
| AC-024, AC-025, AC-026 | admin product CRUD (AC-024, AC-025, AC-026) > [AC-026] unpublishing a product removes it from the shopper catalogue | Integration | Passed | `backend/tests/integration/admin-products.test.ts` |
| AC-024, AC-025, AC-026 | admin product CRUD (AC-024, AC-025, AC-026) > [validation] rejects a malformed product body with a 4xx | Integration | Passed | `backend/tests/integration/admin-products.test.ts` |
| — | admin product routes require owner sign-in (NFR-005) > [NFR-005] DELETE /admin/products/:id returns 401 without a token | Integration | Passed | `backend/tests/integration/admin-products.test.ts` |
| — | admin product routes require owner sign-in (NFR-005) > [NFR-005] PATCH /admin/products/:id returns 401 without a token | Integration | Passed | `backend/tests/integration/admin-products.test.ts` |
| — | admin product routes require owner sign-in (NFR-005) > [NFR-005] POST /admin/products returns 401 without a token | Integration | Passed | `backend/tests/integration/admin-products.test.ts` |
| — | admin product routes require owner sign-in (NFR-005) > [NFR-005] POST /admin/products returns 403 for a signed-in non-owner | Integration | Passed | `backend/tests/integration/admin-products.test.ts` |
| AC-029, AC-030 | admin shipping options (AC-029, AC-030) > [AC-029] a shipping option the owner creates appears in GET /shipping-options | Integration | Passed | `backend/tests/integration/admin-shipping.test.ts` |
| AC-029, AC-030 | admin shipping options (AC-029, AC-030) > [AC-030] editing a shipping option updates GET /shipping-options | Integration | Passed | `backend/tests/integration/admin-shipping.test.ts` |
| AC-029, AC-030 | admin shipping options (AC-029, AC-030) > [AC-030] removing/deactivating a shipping option removes it from GET /shipping-options | Integration | Passed | `backend/tests/integration/admin-shipping.test.ts` |
| AC-029, AC-030 | admin shipping options (AC-029, AC-030) > [validation] rejects a malformed shipping option body with a 4xx | Integration | Passed | `backend/tests/integration/admin-shipping.test.ts` |
| — | admin shipping routes require owner sign-in (NFR-005) > [NFR-005] PATCH /admin/shipping-options/:id returns 401 without a token | Integration | Passed | `backend/tests/integration/admin-shipping.test.ts` |
| — | admin shipping routes require owner sign-in (NFR-005) > [NFR-005] POST /admin/shipping-options returns 401 without a token | Integration | Passed | `backend/tests/integration/admin-shipping.test.ts` |
| — | admin shipping routes require owner sign-in (NFR-005) > [NFR-005] POST /admin/shipping-options returns 403 for a signed-in non-owner | Integration | Passed | `backend/tests/integration/admin-shipping.test.ts` |
| — | admin tax route requires owner sign-in (NFR-005) > [NFR-005] PUT /admin/settings/tax returns 401 without a token | Integration | Passed | `backend/tests/integration/admin-tax.test.ts` |
| — | admin tax route requires owner sign-in (NFR-005) > [NFR-005] PUT /admin/settings/tax returns 403 for a signed-in non-owner | Integration | Passed | `backend/tests/integration/admin-tax.test.ts` |
| AC-031 | admin tax settings (AC-031) > [AC-031] PUT /admin/settings/tax persists a single percentage returned by GET /settings/tax | Integration | Passed | `backend/tests/integration/admin-tax.test.ts` |
| AC-031 | admin tax settings (AC-031) > [validation] rejects a malformed tax body with a 4xx | Integration | Passed | `backend/tests/integration/admin-tax.test.ts` |

### US-019: Obtain cookie consent

| Criteria | Test | Level | Result | File |
|---|---|---|---|---|
| AC-035 | Privacy notice page > [AC-035] describes what data is collected and how it is used | Unit | Passed | `frontend/src/app/privacy/page.test.tsx` |
| AC-036 | ConsentBanner > [AC-036] shows the prompt on a first visit with explicit accept and decline actions | Unit | Passed | `frontend/src/components/ConsentBanner.test.tsx` |
| AC-037 | ConsentBanner > [AC-037/NFR-007] declining stores only the essential consent record and no other key is set | Unit | Passed | `frontend/src/components/ConsentBanner.test.tsx` |
| AC-037 | ConsentBanner > [AC-037/NFR-007] once declined is stored, the prompt does not reappear on remount | Unit | Passed | `frontend/src/components/ConsentBanner.test.tsx` |
| — | ConsentBanner > accepting once means the prompt does not reappear on remount | Unit | Passed | `frontend/src/components/ConsentBanner.test.tsx` |
| — | ConsentBanner > accepting stores the consent and dismisses the prompt | Unit | Passed | `frontend/src/components/ConsentBanner.test.tsx` |
| — | owner creates a product, edits it, then unpublishes it | E2E | Not run yet | `frontend/e2e/admin-products.spec.ts` |
| AC-029, AC-030, AC-031 | [AC-029][AC-030][AC-031] owner creates and edits a shipping option, values persist across reload | E2E | Not run yet | `frontend/e2e/admin-shipping-tax.spec.ts` |
| AC-031 | [AC-031] owner sets the tax rate and it persists across reload | E2E | Not run yet | `frontend/e2e/admin-shipping-tax.spec.ts` |
| AC-036 | [AC-036] shows the consent prompt on first visit | E2E | Not run yet | `frontend/e2e/cookie-consent.spec.ts` |
| AC-036 | [AC-036][NFR-007] declining the prompt sets no non-essential cookies | E2E | Not run yet | `frontend/e2e/cookie-consent.spec.ts` |
| AC-037 | [AC-037] the prompt stays dismissed on reload after accepting | E2E | Not run yet | `frontend/e2e/cookie-consent.spec.ts` |
| AC-037 | [AC-037] the prompt stays dismissed on reload after declining | E2E | Not run yet | `frontend/e2e/cookie-consent.spec.ts` |
| AC-035 | [AC-035] the privacy notice is reachable from a storefront page and describes data collection and use | E2E | Not run yet | `frontend/e2e/privacy-notice.spec.ts` |

## Project setup

| Criteria | Test | Level | Result | File |
|---|---|---|---|---|
| — | createStatements > creates only tables that do not exist yet | Unit | Passed | `backend/tests/database.test.ts` |
| — | databaseUrl > drops the driver part the platform writes | Unit | Passed | `backend/tests/database.test.ts` |
| — | databaseUrl > refuses to guess when no database is set | Unit | Passed | `backend/tests/database.test.ts` |
| — | health > reports ok | Unit | Passed | `backend/tests/health.test.ts` |
| — | Shop catalogue > renders without crashing | Unit | Passed | `frontend/src/app.test.tsx` |
| — | the app loads | E2E | Not run yet | `frontend/e2e/example.spec.ts` |
<!-- sdlc:auto:end tests -->
