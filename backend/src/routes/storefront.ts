/**
 * Handlers for Storefront & Admin (Next.js).
 *
 * Server-renders catalogue and product detail pages for SEO and fast mobile load, renders the responsive cart, guest checkout flow, optional account pages, privacy notice and cookie consent, and the owner admin dashboard. Redirects to Stripe-hosted payment.
 *
 * Every handler is a stub returning a placeholder. The shape comes from the approved
 * API spec; the behaviour does not exist yet.
 */
import { Router } from "express";
import { z } from "zod";

import { requireOwner } from "../middleware/auth.js";
import { createProduct, deleteProduct, updateProduct } from "../services/products.js";
import { notImplemented } from "../stubs.js";

export const router = Router();

const createProductSchema = z.object({
  name: z.string().trim().min(1, "Name is required."),
  description: z.string().nullable().optional(),
  price_cents: z.number().int().nonnegative(),
  image_url: z.string().nullable().optional(),
  stock_quantity: z.number().int().nonnegative(),
  published: z.boolean().optional(),
});

const updateProductSchema = createProductSchema.partial();

/** Owner creates a product */
router.post("/admin/products", requireOwner, async (req, res) => {
  const parsed = createProductSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid_request", detail: parsed.error.flatten() });
    return;
  }
  const product = await createProduct(parsed.data);
  res.status(201).json(product);
});

/** Owner edits product, stock or publish state */
router.patch("/admin/products/:id", requireOwner, async (req, res) => {
  const parsed = updateProductSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid_request", detail: parsed.error.flatten() });
    return;
  }
  const product = await updateProduct(String(req.params.id), parsed.data);
  if (!product) {
    res.status(404).json({ error: "not_found", detail: "No product with that id." });
    return;
  }
  res.json(product);
});

/** Owner removes/unpublishes a product */
router.delete("/admin/products/:id", requireOwner, async (req, res) => {
  const removed = await deleteProduct(String(req.params.id));
  if (!removed) {
    res.status(404).json({ error: "not_found", detail: "No product with that id." });
    return;
  }
  res.status(204).send();
});

/** Owner creates a flat-rate shipping option */
router.post("/admin/shipping-options", (_req, res) => {
  res.json(notImplemented("POST /admin/shipping-options"));
});

/** Owner edits or deactivates a shipping option */
router.patch("/admin/shipping-options/:id", (_req, res) => {
  res.json(notImplemented("PATCH /admin/shipping-options/:id"));
});

/** Owner sets the single tax/VAT rate and currency */
router.put("/admin/settings/tax", (_req, res) => {
  res.json(notImplemented("PUT /admin/settings/tax"));
});

/** Owner dashboard: recent orders and those awaiting shipment */
router.get("/admin/orders", (_req, res) => {
  res.json(notImplemented("GET /admin/orders"));
});

/** Owner views full order details */
router.get("/admin/orders/:id", (_req, res) => {
  res.json(notImplemented("GET /admin/orders/:id"));
});

/** Owner marks an order shipped */
router.patch("/admin/orders/:id/ship", (_req, res) => {
  res.json(notImplemented("PATCH /admin/orders/:id/ship"));
});
