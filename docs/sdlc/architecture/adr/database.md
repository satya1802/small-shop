<!-- sdlc:auto:start adr -->
# ADR-0003: Use PostgreSQL 16 for Database

Status: Accepted  
Date: 2026-11-04

## Context and Problem Statement

Which Database technology does the project use? Decided in architecture v1.

## Considered Options

- PostgreSQL 16
- MySQL
- MongoDB

## Decision Outcome

Chosen option: PostgreSQL 16, because ACID transactions guarantee stock is decremented safely under concurrent last-unit purchases (NFR-006), and a single relational store holds catalogue, carts, orders, accounts, shipping and tax settings.

## Consequences

A relational schema requires migrations as the model evolves; JSONB covers the flexible shipping-address shape without a separate store.
<!-- sdlc:auto:end adr -->