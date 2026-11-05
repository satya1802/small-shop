/**
 * The Express app for small shop.
 *
 * Generated from the approved architecture: one router per component that owns
 * endpoints, one handler per endpoint the API spec declares. Every generated handler is a
 * stub that returns a placeholder, so the service starts and passes its tests before a
 * single handler is implemented.
 */
import cors from "cors";
import express, { type Express } from "express";

import { router as apiRouter } from "./routes/api.js";
import { router as storefrontRouter } from "./routes/storefront.js";
import { router as stripeRouter } from "./routes/stripe.js";
import { configuredServices } from "./services.js";

export function createApp(): Express {
  const app = express();

  // The SPA runs on a different origin than the API, so the browser refuses its calls
  // unless that origin is allowed here. In development that is the Vite dev server;
  // when deployed, the platform injects the frontend's real URL as ALLOWED_ORIGINS.
  const devOrigins = ["http://localhost:5173", "http://127.0.0.1:5173"];
  const allowed = (process.env.ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
  app.use(cors({ origin: allowed.length ? allowed : devOrigins, credentials: true }));

  // Stripe verifies its webhook signature against the exact bytes it sent, so that one
  // route needs the raw request body, not the parsed object every other route gets. A body
  // parser that runs first marks the body as already parsed, so mounting this ahead of the
  // general express.json() below keeps the two from fighting over the same stream.
  app.use("/webhooks/stripe", express.raw({ type: "application/json" }));
  app.use(express.json());

  /** Liveness probe, and the only handler here that is not a stub. */
  app.get("/health", (_req, res) => {
    res.json({ status: "ok", services: configuredServices() });
  });

  // One router per architecture component that owns endpoints (see routes/); every
  // handler in them is still the generated stub until a ticket implements it.
  app.use(apiRouter);
  app.use(storefrontRouter);
  app.use(stripeRouter);

  return app;
}
