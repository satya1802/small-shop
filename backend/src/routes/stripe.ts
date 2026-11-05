/**
 * Handlers for Stripe Payments.
 *
 * Hosts the card payment step, charges the order total in the single configured currency, and confirms payment via webhook. The application never stores card numbers.
 *
 * Every handler is a stub returning a placeholder. The shape comes from the approved
 * API spec; the behaviour does not exist yet.
 */
import { Router } from "express";

import { notImplemented } from "../stubs.js";

export const router = Router();

/** Stripe webhook: on payment success create order and decrement stock atomically */
router.post("/webhooks/stripe", (_req, res) => {
  res.json(notImplemented("POST /webhooks/stripe"));
});
