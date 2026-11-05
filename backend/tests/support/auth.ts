/**
 * Shared helpers for admin/auth tests.
 *
 * The approved API spec marks every /admin/* route `security: bearerAuth` but does not
 * say how an owner session is minted (no admin-register endpoint, no documented
 * ADMIN_EMAIL/JWT_SECRET env var). Until the auth middleware lands we cover the two cases
 * we CAN pin down from the contract without guessing its internals:
 *   - no Authorization header at all -> must be 401
 *   - a real, valid, non-owner token (from the public /auth/register + /auth/login
 *     flow) -> must be 403
 * For the owner-authorized positive-path tests we also sign a best-effort "owner" token
 * so those scenarios aren't left entirely untested; if the real implementation uses a
 * different secret or claim shape, those specific assertions will fail and that is a
 * finding for the implementer, not evidence the behaviour is wrong.
 */
import jwt from "jsonwebtoken";
import request from "supertest";
import type { Express } from "express";

// Set before any module reads it, so a middleware that reads JWT_SECRET from
// process.env at verify-time (not at import-time) will validate a token signed here.
process.env.JWT_SECRET ??= "test-jwt-secret";

export function ownerHeaders(): Record<string, string> {
  const token = jwt.sign(
    { sub: "owner", role: "owner", isOwner: true, isAdmin: true, email: "owner@example.com" },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" },
  );
  return { Authorization: `Bearer ${token}` };
}

/** Registers a fresh shopper account and returns a bearer header for it (never an owner). */
export async function customerHeaders(app: Express): Promise<Record<string, string>> {
  const email = `shopper-${Date.now()}-${Math.random().toString(36).slice(2)}@example.com`;
  const response = await request(app)
    .post("/auth/register")
    .send({ email, password: "correct horse battery staple" });
  const token = (response.body as { token?: string }).token;
  return token ? { Authorization: `Bearer ${token}` } : {};
}

/** Reads a field under either the camelCase or snake_case name a handler might use. */
export function field<T = unknown>(body: unknown, ...names: string[]): T | undefined {
  if (!body || typeof body !== "object") return undefined;
  for (const name of names) {
    const value = (body as Record<string, unknown>)[name];
    if (value !== undefined) return value as T;
  }
  return undefined;
}

/** Normalizes a products listing response to an array regardless of envelope shape. */
export function asList(body: unknown): unknown[] {
  if (Array.isArray(body)) return body;
  const wrapped = field<unknown[]>(body, "products", "data", "items", "shippingOptions");
  return Array.isArray(wrapped) ? wrapped : [];
}
