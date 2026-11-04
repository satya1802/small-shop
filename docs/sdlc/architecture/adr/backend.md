<!-- sdlc:auto:start adr -->
# ADR-0002: Use Express 5 for Backend

Status: Accepted  
Date: 2026-11-04

## Context and Problem Statement

Which Backend technology does the project use? Decided in architecture v1.

## Considered Options

- Express 5
- NestJS
- Fastify

## Decision Outcome

Chosen option: Express 5, because Minimal, well-understood API layer for the REST endpoints, Stripe session creation and webhook handling, with the atomic stock-decrement transaction living in its order service.

## Consequences

Less built-in structure than a batteries-included framework, so conventions (validation, auth middleware) are assembled explicitly.
<!-- sdlc:auto:end adr -->