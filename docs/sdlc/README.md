# small shop — SDLC Documentation

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start overview -->
small shop

**Documentation version:** v3
<!-- sdlc:auto:end overview -->

## Contents

<!-- sdlc:auto:start contents -->
| Document | State |
|---|---|
| [Requirements](requirements/README.md) | v1 approved |
| [Architecture](architecture/README.md) | 16 entries |
| [Development](development/README.md) | 14 entries |
| [Testing](testing/README.md) | 1 entry |
| [Deployment](deployment/README.md) | 1 entry |
| [Maintenance](maintenance/README.md) | 1 entry |
| [Data model](architecture/data-model.md) | generated |
| [API (OpenAPI)](architecture/api/openapi.yaml) | generated |
| [Decisions (ADRs)](architecture/adr/README.md) | 4 decisions |
| [Sprint plan](development/sprint-plan.md) | 5 sprints |
| [Developer guide](development/developer-guide.md) | generated |
| [API reference](development/api-reference.md) | 1 route |
| [Test report](testing/test-report.md) | not run yet |
| [Tests](testing/test-cases.md) | 0 tests |
| [Deployment guide](deployment/deployment-guide.md) | not deployed yet |
| [Runbook](deployment/runbook.md) | not deployed yet |
| [Release notes](deployment/release-notes.md) | 0 releases |
| [Traceability matrix](traceability-matrix.md) | 20 requirements |
| [Changelog](CHANGELOG.md) | 3 versions |
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

- No information provided on actual development execution: no commit history, ticket/task completion status, code review outcomes, or blockers.
- Explicit mapping of which stories/tasks belong to which sprint is not given in the input; sprint goals suggest thematic groupings only.
- Input does not explicitly list which backlog item IDs are assigned to Sprint 1; the related story mapping above is inferred from thematic similarity between the sprint goal and epic descriptions, not confirmed by the input.
- Input does not explicitly list which backlog item IDs are assigned to Sprint 2; mapping above is inferred from thematic similarity only.
- Input does not explicitly list which backlog item IDs are assigned to Sprint 3; mapping above is inferred from thematic similarity only.
- Input does not explicitly list which backlog item IDs are assigned to Sprint 4; mapping above is inferred from thematic similarity only.
- Input does not explicitly list which backlog item IDs are assigned to Sprint 5; mapping above is inferred from thematic similarity only.
- No industry/domain compliance skill (e.g. GDPR, CCPA) was named in the input alongside this epic, so specific regulation-to-requirement traceability could not be drawn beyond the generic privacy/consent/deletion stories listed here.

### Testing

- Testing phase has not started: no test plans or results provided.

### Deployment

- No deployment recorded yet: environment setup, release process, and go-live status are undocumented.

### Maintenance

- No maintenance history recorded: this is expected since the application has not yet been deployed.
<!-- sdlc:auto:end open-gaps -->
