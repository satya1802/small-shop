# small shop — SDLC Documentation

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start overview -->
small shop

**Documentation version:** v4
<!-- sdlc:auto:end overview -->

## Contents

<!-- sdlc:auto:start contents -->
| Document | State |
|---|---|
| [Requirements](requirements/README.md) | v1 approved |
| [Architecture](architecture/README.md) | 16 entries |
| [Development](development/README.md) | 7 entries |
| [Testing](testing/README.md) | 1 entry |
| [Deployment](deployment/README.md) | 1 entry |
| [Maintenance](maintenance/README.md) | 1 entry |
| [Data model](architecture/data-model.md) | generated |
| [API (OpenAPI)](architecture/api/openapi.yaml) | generated |
| [Decisions (ADRs)](architecture/adr/README.md) | 4 decisions |
| [Sprint plan](development/sprint-plan.md) | 5 sprints |
| [Developer guide](development/developer-guide.md) | generated |
| [API reference](development/api-reference.md) | 25 routes |
| [Test report](testing/test-report.md) | not run yet |
| [Tests](testing/test-cases.md) | 68 tests |
| [Deployment guide](deployment/deployment-guide.md) | not deployed yet |
| [Runbook](deployment/runbook.md) | not deployed yet |
| [Release notes](deployment/release-notes.md) | 0 releases |
| [Traceability matrix](traceability-matrix.md) | 20 requirements |
| [Changelog](CHANGELOG.md) | 4 versions |
<!-- sdlc:auto:end contents -->

## Open gaps

<!-- sdlc:auto:start open-gaps -->
### Requirements

- Product images are in scope (catalogue/product photos) but the only file-storage service (S3) was removed from the stack; no alternative image storage mechanism has been specified yet -- flag for architecture phase.
- Target country/currency for catalogue pricing has not been named -- flagged as an assumption to confirm.
- Conflict: the confirmed understanding referenced order-confirmation emails via a transactional provider, but email delivery is explicitly out of scope for this MVP -- confirmation is on-screen only. Needs stakeholder sign-off that on-screen-only confirmation is acceptable.
- Single country/currency for shipping address and payment has not been named -- assumption to confirm.
- No live carrier rates or tracking is an assumption pending confirmation.
- Confirm assumption that email is the sole login identifier (no password policy or other auth details specified).
- Specific country for tax/shipping rules has not been named -- assumption to confirm.
- Single-rate (non-multi-jurisdiction) tax model is an assumption pending confirmation.
- Conflict: confirmation emails were mentioned in the original understanding but email is out of scope for this MVP, so the owner works from on-screen order information only -- needs stakeholder confirmation that this is acceptable for fulfilment workflow.

### Architecture

- Input does not map architecture components/endpoints explicitly to the US-001..US-020 requirement IDs, so full requirement traceability for this phase cannot be confirmed without additional input.
- No explicit requirement ID links given in input for this critical path; mapping to shopper-facing user stories (e.g. checkout/cart stories) is inferred, not confirmed.
- No explicit requirement ID links given in input for this critical path.
- NFR-001 and NFR-002 are referenced as the rationale but are not present in the known requirement key list (US-001..US-020) supplied for this phase -- confirm whether these NFRs are tracked elsewhere.
- NFR-006 is referenced as rationale but is not present in the known requirement key list (US-001..US-020) supplied for this phase -- confirm whether it is tracked elsewhere.

### Development

- Sub-task-level delivery status for US-011-T1 (admin product endpoints), US-011-T2 (admin product create/edit UI), and US-011-T3 (catalogue visibility enforcement) not individually reported -- only story-level status given.
- Discrepancy: run status says 'completed' but only 5 of 20 planned stories (25%) have recorded tickets -- unclear whether this means the run only executed Sprint 1 and 'completed' refers to that sprint only, or whether later-sprint ticket data was omitted from this input.
- No delivery evidence (ticket status or commit) exists for US-001, US-002, US-003 (and sub-tasks US-003-T1/T2/T3), US-004 (and sub-tasks), US-005, US-006, US-007 (and sub-tasks), US-008 (and sub-tasks), US-009, US-010, US-012, US-015, US-016, US-017, or US-020.
- Cannot confirm whether shopping cart, checkout, payment, order placement, order history, admin dashboard/fulfilment, or account deletion features have been built.

### Testing

- Testing phase has not started: no test plans or results provided.

### Deployment

- No deployment recorded yet: environment setup, release process, and go-live status are undocumented.

### Maintenance

- No maintenance history recorded: this is expected since the application has not yet been deployed.
<!-- sdlc:auto:end open-gaps -->
