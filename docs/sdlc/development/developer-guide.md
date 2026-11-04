# Developer Guide

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start status -->
_Up to date._
<!-- sdlc:auto:end status -->

<!-- sdlc:auto:start source -->
Generated from commit `86a177c` · model `claude-sonnet-5`
<!-- sdlc:auto:end source -->

<!-- sdlc:auto:start overview -->
small shop is a Quorq-generated monorepo with two independently run apps: a Next.js 15 frontend that renders an approved, static-exported UI against seeded sample data, and an Express 5 + TypeScript backend that currently only exposes a health check (no approved architecture/data model existed yet, so it ships as stubs). The backend uses Drizzle ORM against PostgreSQL (with an in-memory PGlite fallback when no database is configured), and docker-compose provides local Postgres 16 and Redis services for development.
<!-- sdlc:auto:end overview -->

<!-- sdlc:auto:start prerequisites -->
- Node.js 22+ (matches backend/Dockerfile's node:22-slim base)
- npm
- Docker and Docker Compose (for local Postgres/Redis via docker-compose.yml)
<!-- sdlc:auto:end prerequisites -->

<!-- sdlc:auto:start setup -->
1. Clone the repository
2. Copy .env.example to .env and fill in required values
3. (Optional, for a real database) From the repo root run: docker compose up -d
4. cd frontend && npm install
5. cd ../backend && npm install
<!-- sdlc:auto:end setup -->

<!-- sdlc:auto:start run -->
| Name | Command | Description |
|---|---|---|
| frontend dev | `cd frontend && npm run dev` | Starts the Next.js dev server for the approved static-export frontend (runs on seeded sample data) |
| frontend build | `cd frontend && npm run build` | Bundles the app into out/ as a static export (no typecheck or lint, per next.config.ts) |
| frontend preview | `cd frontend && npm run preview` | Serves the built out/ directory at http://127.0.0.1:4173 |
| backend dev | `cd backend && npm run dev` | Runs the Express API with tsx watch (src/main.ts), listening on PORT (default 8000) |
| backend start | `cd backend && npm run start` | Runs the built backend (node dist/main.js); requires npm run build first |
| backend build | `cd backend && npm run build` | Compiles TypeScript to dist/ via tsc -p tsconfig.build.json |
| local services | `docker compose up -d` | Starts Postgres 16 and Redis 7 containers defined in docker-compose.yml |
<!-- sdlc:auto:end run -->

<!-- sdlc:auto:start structure -->
| Path | Purpose |
|---|---|
| `frontend/` | Next.js 15 static-export app: approved UI screens running on seeded sample data |
| `frontend/src/lib/` | Shared frontend utilities: API client (api.ts), UI/icon component vocabulary, navigation helpers |
| `frontend/e2e/` | Playwright end-to-end acceptance tests |
| `backend/` | Express 5 + TypeScript API service, generated from the approved architecture (currently stub handlers plus /health) |
| `backend/src/` | App source: app.ts (Express app/routes), main.ts (entrypoint), db.ts (Drizzle/Postgres connection with in-memory fallback), schema.ts (Drizzle table definitions), services.ts, stubs.ts |
| `backend/tests/` | Vitest tests for the backend (health check, database) |
| `.devcontainer/` | VS Code devcontainer configuration |
| `.quorq/` | Quorq platform metadata (handoff.json) |
| `docker-compose.yml` | Local Postgres and Redis services for development |
<!-- sdlc:auto:end structure -->

<!-- sdlc:auto:start conventions -->
- Backend: one Express router per component owning endpoints, one handler per spec'd endpoint; generated handlers are stubs returning placeholders until implemented
- Backend database tables are declared with Drizzle's pgTable in schema.ts; db() creates any missing table on first connection (CREATE TABLE IF NOT EXISTS), never alters/drops — no migration tooling is set up yet
- Backend connects to the database lazily (on first use) and falls back to an in-memory PGlite Postgres when DATABASE_URL is unset (used by the e2e suite and local runs without a DB)
- Frontend is a fully static export (output: 'export' in next.config.ts): every page is a client component, no server components/route handlers/server actions
- Frontend build intentionally skips typecheck/lint (next.config.ts ignoreBuildErrors/ignoreDuringBuilds); npm run typecheck and npm run lint are the separate gates to keep green
- Frontend API access is centralized in src/lib/api.ts (apiFetch), using NEXT_PUBLIC_API_BASE_URL and a bearer token (session token from localStorage, falling back to a shared API secret) — screens do not yet call it, they render seeded data
- Both apps use ESLint + Prettier with config files (eslint.config.js, .prettierrc) for linting/formatting
<!-- sdlc:auto:end conventions -->

<!-- sdlc:auto:start testing -->
| Name | Command | Description |
|---|---|---|
| frontend unit tests | `cd frontend && npm test` | Runs Vitest component tests located beside the components they cover |
| frontend e2e tests | `cd frontend && npm run test:e2e` | Runs Playwright acceptance tests from e2e/; builds the backend and frontend and serves them locally unless E2E_BASE_URL is set |
| frontend e2e browser install | `cd frontend && npm run test:e2e:install` | Installs the Chromium browser Playwright needs before running test:e2e |
| frontend lint | `cd frontend && npm run lint` | Runs ESLint over the whole frontend app (used as a development gate) |
| frontend typecheck | `cd frontend && npm run typecheck` | Runs tsc --noEmit, since the build itself skips typechecking |
| backend unit tests | `cd backend && npm test` | Runs Vitest tests for health and database behavior (backend/tests/) |
| backend lint | `cd backend && npm run lint` | Runs ESLint over the backend source |
| backend typecheck | `cd backend && npm run typecheck` | Runs tsc --noEmit against the backend TypeScript config |
<!-- sdlc:auto:end testing -->

<!-- sdlc:auto:start troubleshooting -->
| Problem | Solution |
|---|---|
| Backend starts but every DB-backed request fails or DATABASE_URL is missing | db() falls back to an in-memory PGlite Postgres with no DATABASE_URL set, which loses all data on restart; set DATABASE_URL (e.g. from docker-compose's db service) for a persistent database |
| Frontend's fetch calls to the backend are blocked by CORS | Set ALLOWED_ORIGINS on the backend to a comma-separated list including the frontend's origin; in development it defaults to http://localhost:5173 and http://127.0.0.1:5173 |
| `npm run build` in frontend doesn't catch type errors that break a later deploy | Run `npm run typecheck` and `npm run lint` explicitly, since next.config.ts disables both checks during build |
| Playwright e2e tests fail to start or can't find a browser | Run `npm run test:e2e:install` first to fetch Chromium; without E2E_BASE_URL, Playwright also builds and serves the frontend on port 4173 and boots the backend on port 8000, so ensure those ports are free |
<!-- sdlc:auto:end troubleshooting -->
