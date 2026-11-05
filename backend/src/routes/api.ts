/**
 * Handlers for API.
 *
 * Endpoints the approved API spec declares without naming a component that owns them.
 *
 * Every handler is a stub returning a placeholder. The shape comes from the approved
 * API spec; the behaviour does not exist yet.
 */
import { Router } from "express";
import { z } from "zod";

import { getPublishedProduct, listPublishedProducts } from "../services/products.js";
import { listActiveShippingOptions } from "../services/shipping.js";
import { getTaxSettings } from "../services/settings.js";
import { loginCustomer, registerCustomer } from "../services/auth.js";
import { notImplemented } from "../stubs.js";

export const router = Router();

const credentialsSchema = z.object({
  email: z.string().trim().email("A valid email is required."),
  password: z.string().min(8, "Password must be at least 8 characters."),
});

/** List published products with image, name, price and stock flag */
router.get("/products", async (_req, res) => {
  const products = await listPublishedProducts();
  res.json(products);
});

/** Product detail page data */
router.get("/products/:id", async (req, res) => {
  const product = await getPublishedProduct(String(req.params.id));
  if (!product) {
    res.status(404).json({ error: "not_found", detail: "No published product with that id." });
    return;
  }
  res.json(product);
});

/** Create a cart (guest or signed-in) */
router.post("/carts", (_req, res) => {
  res.json(notImplemented("POST /carts"));
});

/** Add item to cart, quantity capped at stock */
router.post("/carts/:id/items", (_req, res) => {
  res.json(notImplemented("POST /carts/:id/items"));
});

/** Update quantity (capped) or remove item */
router.patch("/carts/:id/items/:itemId", (_req, res) => {
  res.json(notImplemented("PATCH /carts/:id/items/:itemId"));
});

/** Remove a cart line */
router.delete("/carts/:id/items/:itemId", (_req, res) => {
  res.json(notImplemented("DELETE /carts/:id/items/:itemId"));
});

/** Get cart with recalculated subtotal */
router.get("/carts/:id", (_req, res) => {
  res.json(notImplemented("GET /carts/:id"));
});

/** List active flat-rate shipping options for checkout */
router.get("/shipping-options", async (_req, res) => {
  const options = await listActiveShippingOptions();
  res.json(options);
});

/** Get single configured tax rate and currency */
router.get("/settings/tax", async (_req, res) => {
  const settings = await getTaxSettings();
  if (!settings) {
    res.json({ taxRatePercent: 0, currency: "USD" });
    return;
  }
  res.json(settings);
});

/** Validate cart, compute tax+shipping, create Stripe Checkout session */
router.post("/checkout/session", (_req, res) => {
  res.json(notImplemented("POST /checkout/session"));
});

/** Fetch order for on-screen confirmation */
router.get("/orders/:reference", (_req, res) => {
  res.json(notImplemented("GET /orders/:reference"));
});

/** Create a lightweight email account */
router.post("/auth/register", async (req, res) => {
  const parsed = credentialsSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid_request", detail: parsed.error.flatten() });
    return;
  }
  const result = await registerCustomer(parsed.data.email, parsed.data.password);
  if ("error" in result) {
    res.status(409).json({ error: result.error, detail: "That email is already registered." });
    return;
  }
  res.status(201).json(result);
});

/** Sign in and receive JWT */
router.post("/auth/login", async (req, res) => {
  const parsed = credentialsSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid_request", detail: parsed.error.flatten() });
    return;
  }
  const result = await loginCustomer(parsed.data.email, parsed.data.password);
  if ("error" in result) {
    res.status(401).json({ error: result.error, detail: "Incorrect email or password." });
    return;
  }
  res.json(result);
});

/** List the signed-in shopper's past orders */
router.get("/account/orders", (_req, res) => {
  res.json(notImplemented("GET /account/orders"));
});

/** Delete account and personal data (retain order records as legally required) */
router.delete("/account", (_req, res) => {
  res.json(notImplemented("DELETE /account"));
});
