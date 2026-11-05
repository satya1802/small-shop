import request from "supertest";
import { describe, expect, it } from "vitest";

import { createApp } from "../../src/app.js";
import { customerHeaders } from "../support/auth.js";

const app = createApp();

const ZERO_UUID = "00000000-0000-0000-0000-000000000000";

// Every /admin/* route the approved spec declares, exercised with the method and a
// minimal body it would accept if authorized.
const adminRoutes: {
  method: "get" | "post" | "patch" | "delete" | "put";
  path: string;
  body?: object;
}[] = [
    { method: "post", path: "/admin/products", body: { name: "x", price: 1, stock: 1 } },
    { method: "patch", path: `/admin/products/${ZERO_UUID}`, body: {} },
    { method: "delete", path: `/admin/products/${ZERO_UUID}` },
    { method: "post", path: "/admin/shipping-options", body: { name: "x", cost: 1 } },
    { method: "patch", path: `/admin/shipping-options/${ZERO_UUID}`, body: {} },
    {
      method: "put",
      path: "/admin/settings/tax",
      body: { taxRatePercent: 1, currency: "USD" },
    },
    { method: "get", path: "/admin/orders" },
    { method: "get", path: `/admin/orders/${ZERO_UUID}` },
    { method: "patch", path: `/admin/orders/${ZERO_UUID}/ship`, body: {} },
  ];

describe("every /admin/* route requires owner sign-in (NFR-005)", () => {
  for (const route of adminRoutes) {
    it(`[NFR-005] ${route.method.toUpperCase()} ${route.path} returns 401 without a token`, async () => {
      // supertest's method typings don't know "put" came in dynamically; call generically.
      const req = (request(app) as unknown as Record<string, (p: string) => request.Test>)[
        route.method
      ](route.path);
      const response = route.body ? await req.send(route.body) : await req;
      expect(response.status).toBe(401);
    });

    it(`[NFR-005] ${route.method.toUpperCase()} ${route.path} returns 403 for a signed-in non-owner`, async () => {
      const headers = await customerHeaders(app);
      const req = (request(app) as unknown as Record<string, (p: string) => request.Test>)
        [route.method](route.path)
        .set(headers);
      const response = route.body ? await req.send(route.body) : await req;
      expect(response.status).toBe(403);
    });
  }
});
