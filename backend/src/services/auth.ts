/**
 * Shopper account business logic (register/login).
 *
 * A lightweight email+password account, used only to let a shopper view past orders.
 * Not the owner/admin role: tokens issued here never carry `role: "owner"`, so
 * `requireOwner` (see middleware/auth.ts) correctly rejects them with 403.
 */
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { eq } from "drizzle-orm";

import { db } from "../db.js";
import { customers } from "../schema.js";

const SALT_ROUNDS = 10;

function signingKey(): string {
  const secret = process.env.JWT_SECRET_KEY ?? process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET_KEY is not set, so no shopper token can be signed.");
  }
  return secret;
}

function issueToken(customerId: string, email: string): string {
  return jwt.sign({ sub: customerId, email, role: "customer" }, signingKey(), {
    expiresIn: "7d",
    algorithm: "HS256",
  });
}

export async function registerCustomer(
  email: string,
  password: string,
): Promise<{ token: string } | { error: "email_taken" }> {
  const conn = await db();
  const [existing] = await conn.select().from(customers).where(eq(customers.email, email));
  if (existing) {
    return { error: "email_taken" };
  }
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
  const [row] = await conn.insert(customers).values({ email, passwordHash }).returning();
  return { token: issueToken(row.id, row.email) };
}

export async function loginCustomer(
  email: string,
  password: string,
): Promise<{ token: string } | { error: "invalid_credentials" }> {
  const conn = await db();
  const [row] = await conn.select().from(customers).where(eq(customers.email, email));
  if (!row) {
    return { error: "invalid_credentials" };
  }
  const matches = await bcrypt.compare(password, row.passwordHash);
  if (!matches) {
    return { error: "invalid_credentials" };
  }
  return { token: issueToken(row.id, row.email) };
}
