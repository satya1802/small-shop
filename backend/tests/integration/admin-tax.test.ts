import request from "supertest";
import { describe, expect, it } from "vitest";

import { createApp } from "../../src/app.js";
import { customerHeaders, field, ownerHeaders } from "../support/auth.js";

const app = createApp();
const owner = ownerHeaders();

describe("admin tax settings (AC-031)", () => {
  it("[AC-031] PUT /admin/settings/tax persists a single percentage returned by GET /settings/tax", async () => {
    const first = await request(app)
      .put("/admin/settings/tax")
      .set(owner)
      .send({ taxRatePercent: 7.5, currency: "USD" });
    expect([200, 204]).toContain(first.status);

    const readBack = await request(app).get("/settings/tax");
    expect(readBack.status).toBe(200);
    expect(Number(field(readBack.body, "taxRatePercent", "tax_rate_percent"))).toBeCloseTo(7.5);
    expect(field(readBack.body, "currency")).toBe("USD");

    // Setting it again replaces the single rate rather than adding another row.
    const second = await request(app)
      .put("/admin/settings/tax")
      .set(owner)
      .send({ taxRatePercent: 12, currency: "USD" });
    expect([200, 204]).toContain(second.status);

    const readAgain = await request(app).get("/settings/tax");
    expect(Number(field(readAgain.body, "taxRatePercent", "tax_rate_percent"))).toBeCloseTo(12);
  });

  it("[validation] rejects a malformed tax body with a 4xx", async () => {
    const response = await request(app)
      .put("/admin/settings/tax")
      .set(owner)
      .send({ taxRatePercent: "a lot", currency: "USD" });
    expect(response.status).toBeGreaterThanOrEqual(400);
    expect(response.status).toBeLessThan(500);
  });
});

describe("admin tax route requires owner sign-in (NFR-005)", () => {
  it("[NFR-005] PUT /admin/settings/tax returns 401 without a token", async () => {
    const response = await request(app)
      .put("/admin/settings/tax")
      .send({ taxRatePercent: 5, currency: "USD" });
    expect(response.status).toBe(401);
  });

  it("[NFR-005] PUT /admin/settings/tax returns 403 for a signed-in non-owner", async () => {
    const headers = await customerHeaders(app);
    const response = await request(app)
      .put("/admin/settings/tax")
      .set(headers)
      .send({ taxRatePercent: 5, currency: "USD" });
    expect(response.status).toBe(403);
  });
});
