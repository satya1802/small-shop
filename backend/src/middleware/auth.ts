/**
 * Owner authorization for /admin/* routes.
 *
 * NFR-005: every /admin/* route must return 401 without a valid JWT and 403 without an
 * owner role claim; a signed owner token passes. The token is verified fully (signature,
 * expiry) against JWT_SECRET_KEY -- never trusted from the request body -- and fails
 * closed on any verification error or missing signing key.
 */
import jwt from "jsonwebtoken";
import type { NextFunction, Request, RequestHandler, Response } from "express";

export interface OwnerClaims {
  role: string;
  sub?: string;
  [key: string]: unknown;
}

export interface OwnerRequest extends Request {
  owner?: OwnerClaims;
}

function bearerToken(req: Request): string | undefined {
  const header = req.header("authorization");
  if (!header?.startsWith("Bearer ")) return undefined;
  const token = header.slice("Bearer ".length).trim();
  return token.length > 0 ? token : undefined;
}

/** Requires a JWT signed with JWT_SECRET_KEY carrying an owner role claim. */
export const requireOwner: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  const token = bearerToken(req);
  if (!token) {
    res.status(401).json({ error: "unauthorized", detail: "Missing bearer token." });
    return;
  }

  const secret = process.env.JWT_SECRET_KEY;
  if (!secret) {
    res.status(401).json({ error: "unauthorized", detail: "No signing key configured." });
    return;
  }

  let decoded: unknown;
  try {
    decoded = jwt.verify(token, secret, { algorithms: ["HS256"] });
  } catch {
    res.status(401).json({ error: "unauthorized", detail: "Invalid or expired token." });
    return;
  }

  if (typeof decoded !== "object" || decoded === null || (decoded as OwnerClaims).role !== "owner") {
    res.status(403).json({ error: "forbidden", detail: "Owner role required." });
    return;
  }

  (req as OwnerRequest).owner = decoded as OwnerClaims;
  next();
};
