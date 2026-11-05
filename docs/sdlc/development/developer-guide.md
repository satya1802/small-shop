# Developer Guide

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start status -->
_Up to date._
<!-- sdlc:auto:end status -->

<!-- sdlc:auto:start source -->
Generated from commit `4648cda` · model `claude-sonnet-5`
<!-- sdlc:auto:end source -->

<!-- sdlc:auto:start overview -->
small shop is a generated two-app repository from the Quorq AI SDLC platform: a Next.js 15 frontend exported as a static site and rendering only seeded sample data, paired with an Express 5 + TypeScript backend using Drizzle ORM over PostgreSQL. The backend's architecture was approved after the frontend screens, so most of its endpoints are still stub handlers (via a shared `notImplemented` helper) returning placeholders, except for the product catalogue, shipping options, tax settings and auth endpoints, which are implemented against the Drizzle schema. The two apps are not yet wired together: the frontend's `src/lib/api.ts` is the prepared seam for calling the real API, but screens currently use local seed data.
<!-- sdlc:auto:end overview -->

<!-- sdlc:auto:start prerequisites -->
- Node.js 22 (backend Dockerfile base image; required for backend's `type: module`/tsx tooling)
- Node.js 18+ (for the frontend Next.js 15 app)
- npm
- Docker and Docker Compose (optional, for the PostgreSQL and Redis services in docker-compose.yml)
<!-- sdlc:auto:end prerequisites -->

<!-- sdlc:auto:start setup -->
1. Clone the repository
2. cd frontend && npm install
3. cd ../backend && npm install
4. (Optional) From the repo root, run `docker compose up -d` to start PostgreSQL and Redis locally
5. (Optional) Set DATABASE_URL in the backend environment to point at a PostgreSQL instance; without it the backend falls back to an in-memory PostgreSQL (PGlite) that resets on every restart
6. (Optional) Set NEXT_PUBLIC_API_BASE_URL and NEXT_PUBLIC_API_SECRET_KEY for the frontend to point at a running backend; it otherwise defaults to http://localhost:8000 with no bearer token
7. Start the backend: cd backend && npm run dev
8. Start the frontend: cd frontend && npm run dev
<!-- sdlc:auto:end setup -->

<!-- sdlc:auto:start run -->
| Name | Command | Description |
|---|---|---|
| frontend dev | `cd frontend && npm run dev` | Runs the Next.js dev server for the static-export frontend |
| frontend build | `cd frontend && npm run build` | Bundles the app into out/ as static files (no typecheck/lint gate, per next.config.ts) |
| frontend preview | `cd frontend && npm run preview` | Serves the built out/ directory on 127.0.0.1:4173 via `serve` |
| frontend typecheck | `cd frontend && npm run typecheck` | Runs `tsc --noEmit` over the frontend |
| backend dev | `cd backend && npm run dev` | Runs the Express API with tsx in watch mode (src/main.ts) |
| backend build | `cd backend && npm run build` | Compiles TypeScript to dist/ via tsconfig.build.json |
| backend start | `cd backend && npm run start` | Runs the compiled backend from dist/main.js (used in the Docker image) |
<!-- sdlc:auto:end run -->

<!-- sdlc:auto:start structure -->
| Path | Purpose |
|---|---|
| `frontend/` | Next.js 15 static-export app; the approved, generated UI running on seeded sample data |
| `frontend/src/app` | App Router pages, one page.tsx per approved screen (catalogue, checkout, account, admin, privacy, etc.) plus the root layout/navigation shell |
| `frontend/src/lib` | Shared frontend utilities: API client (api.ts), brand tokens (brand.ts), UI/icon component vocabulary (ui.tsx, icons.tsx), navigation helper |
| `frontend/src/components` | Shared React components such as the cookie-consent banner |
| `frontend/e2e` | Playwright end-to-end specs run against a locally built app or a deployed URL (E2E_BASE_URL) |
| `backend/` | Express 5 + TypeScript API service generated from the approved architecture |
| `backend/src` | App entry (main.ts), Express app setup (app.ts), DB connection (db.ts), Drizzle schema (schema.ts), route handlers (routes/), domain services (services/), auth middleware |
| `backend/src/routes` | Express routers: api.ts (storefront-facing endpoints) and storefront.ts (owner/admin endpoints), each handler either implemented or a stub |
| `backend/src/services` | Implemented business logic for products, shipping, settings and auth, backed by the Drizzle schema |
| `backend/tests` | Vitest unit and integration tests, including auth/products/shipping/tax admin integration tests |
| `.devcontainer/` | VS Code devcontainer configuration |
| `docker-compose.yml` | Local PostgreSQL 16 and Redis 7 services for backend development |
<!-- sdlc:auto:end structure -->

<!-- sdlc:auto:start conventions -->
- Backend: one Express router per approved architecture component (routes/api.ts, routes/storefront.ts), with every endpoint from the API spec present, implemented ones calling a services/ module and unimplemented ones returning a stub via stubs.ts's notImplemented()
- Backend: Zod schemas validate request bodies and return 400 with `{error, detail}` on failure; not-found responses use `{error: "not_found", detail}`
- Backend: one Drizzle table per domain entity in schema.ts; IDs and timestamps use $defaultFn application-side instead of SQL defaults, because createStatements() in db.ts emits no DEFAULT clauses
- Backend: owner-only admin routes are protected by the requireOwner middleware (middleware/auth.ts)
- Frontend: one page.tsx per approved screen under src/app/, all as client components (`"use client"`) since output: "export" disables server components/route handlers
- Frontend: shared visual language centralized in src/lib/ui.tsx, src/lib/icons.tsx, and brand tokens in src/lib/brand.ts / src/index.css
- Frontend API access is centralized in src/lib/api.ts (apiFetch), which attaches a bearer token (session token or shared API secret) and is the intended integration seam, not yet used by the generated screens
- Strict TypeScript (`strict: true`) on both frontend and backend; backend also enables noUnusedLocals/noUnusedParameters
- Prettier and ESLint configs present in both apps for consistent formatting/linting
<!-- sdlc:auto:end conventions -->

<!-- sdlc:auto:start testing -->
| Name | Command | Description |
|---|---|---|
| backend test | `cd backend && npm test` | Runs Vitest unit and integration tests (vitest run --passWithNoTests) |
| backend lint | `cd backend && npm run lint` | Runs ESLint over the backend source |
| frontend test | `cd frontend && npm test` | Runs Vitest component tests colocated with components |
| frontend lint | `cd frontend && npm run lint` | Runs ESLint over the whole frontend app; used as a gate during development |
| frontend e2e install | `cd frontend && npm run test:e2e:install` | Installs the Chromium browser needed by Playwright |
| frontend e2e | `cd frontend && npm run test:e2e` | Runs Playwright acceptance tests from e2e/; without E2E_BASE_URL it boots the backend and a built+served frontend locally |
<!-- sdlc:auto:end testing -->

<!-- sdlc:auto:start troubleshooting -->
| Problem | Solution |
|---|---|
| Frontend screens don't reflect real backend data | This is expected: the generated screens render seeded sample data and have not been wired to src/lib/api.ts's apiFetch yet; connecting a screen to a live endpoint is pending work |
| Backend data disappears between restarts | No DATABASE_URL was set, so db.ts falls back to an in-memory PGlite database that keeps nothing across restarts; set DATABASE_URL (e.g. the docker-compose Postgres) to persist data |
| Browser calls to the API are blocked by CORS | Set ALLOWED_ORIGINS (comma-separated) in the backend environment to include the frontend's origin; otherwise only http://localhost:5173 and http://127.0.0.1:5173 are allowed by default |
| Playwright e2e tests fail to start | Run `npm run test:e2e:install` first to fetch Chromium, and ensure nothing else is bound to ports 8000 or 4173 since the suite boots the backend and a built frontend on those ports |
| `npm run build` in frontend doesn't catch type errors | next.config.ts sets typescript.ignoreBuildErrors and eslint.ignoreDuringBuilds, so build always succeeds; run `npm run typecheck` and `npm run lint` separately before relying on a build |
<!-- sdlc:auto:end troubleshooting -->
