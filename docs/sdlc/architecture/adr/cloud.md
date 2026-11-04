<!-- sdlc:auto:start adr -->
# ADR-0004: Use AWS for Cloud

Status: Accepted  
Date: 2026-11-04

## Context and Problem Statement

Which Cloud technology does the project use? Decided in architecture v1.

## Considered Options

- AWS
- Google Cloud
- Azure

## Decision Outcome

Chosen option: AWS, because Runs storefront, API, managed RDS PostgreSQL and Redis in one region close to the single-country market, scaling from quiet to spike without re-platforming.

## Consequences

Managed services reduce ops but add cloud-specific configuration; single-region keeps latency low at the cost of multi-region resilience not needed for this MVP.
<!-- sdlc:auto:end adr -->