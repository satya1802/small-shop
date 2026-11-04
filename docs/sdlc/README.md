# small shop — SDLC Documentation

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start overview -->
small shop

**Documentation version:** v1
<!-- sdlc:auto:end overview -->

## Contents

<!-- sdlc:auto:start contents -->
| Document | State |
|---|---|
| [Requirements](requirements/README.md) | v1 approved |
| [Architecture](architecture/README.md) | 1 entry |
| [Development](development/README.md) | 1 entry |
| [Testing](testing/README.md) | 1 entry |
| [Deployment](deployment/README.md) | 1 entry |
| [Maintenance](maintenance/README.md) | 1 entry |
| [Data model](architecture/data-model.md) | not generated yet |
| [API (OpenAPI)](architecture/api/openapi.yaml) | not generated yet |
| [Decisions (ADRs)](architecture/adr/README.md) | 0 decisions |
| [Sprint plan](development/sprint-plan.md) | not generated yet |
| [Developer guide](development/developer-guide.md) | not generated yet |
| [API reference](development/api-reference.md) | 0 routes |
| [Test report](testing/test-report.md) | not run yet |
| [Tests](testing/test-cases.md) | 0 tests |
| [Deployment guide](deployment/deployment-guide.md) | not deployed yet |
| [Runbook](deployment/runbook.md) | not deployed yet |
| [Release notes](deployment/release-notes.md) | 0 releases |
| [Traceability matrix](traceability-matrix.md) | 20 requirements |
| [Changelog](CHANGELOG.md) | 1 version |
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

- Architecture phase has not started: no design artifacts, screen list, data models, or technical decisions provided.

### Development

- Development phase has not started: no plans, tickets, or implementation records provided.

### Testing

- Testing phase has not started: no test plans or results provided.

### Deployment

- No deployment recorded yet: environment setup, release process, and go-live status are undocumented.

### Maintenance

- No maintenance history recorded: this is expected since the application has not yet been deployed.
<!-- sdlc:auto:end open-gaps -->
