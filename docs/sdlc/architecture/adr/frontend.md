<!-- sdlc:auto:start adr -->
# ADR-0001: Use Next.js 15 for Frontend

Status: Accepted  
Date: 2026-11-04

## Context and Problem Statement

Which Frontend technology does the project use? Decided in architecture v1.

## Considered Options

- Next.js 15
- Remix
- plain React SPA

## Decision Outcome

Chosen option: Next.js 15, because Server-renders catalogue and product pages so content is present for search engines and loads fast on phones (NFR-001, NFR-002), and hosts the responsive storefront plus owner admin in one codebase.

## Consequences

Requires a Node server runtime rather than static hosting, and SSR adds caching considerations handled via Redis.
<!-- sdlc:auto:end adr -->