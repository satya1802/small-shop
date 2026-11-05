import request from "supertest";
import { describe, expect, it } from "vitest";

import { createApp } from "../../src/app.js";
import { asList, customerHeaders, field, ownerHeaders } from "../support/auth.js";

const app = createApp();
const owner = ownerHeaders();

function uniqueName(label: string): string {
  return `${label} ${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

describe("admin shipping options (AC-029, AC-030)", () => {
  it("[AC-029] a shipping option the owner creates appears in GET /shipping-options", async () => {
    const name = uniqueName("Standard Delivery");
    const create = await request(app)
      .post("/admin/shipping-options")
      .set(owner)
      .send({ name, cost: 500 });
    expect([200, 201]).toContain(create.status);
    const id = field<string>(create.body, "id");
    expect(id).toBeTruthy();

    const list = await request(app).get("/shipping-options");
    expect(list.status).toBe(200);
    const listed = asList(list.body).find((option) => field(option, "id") === id);
    expect(listed).toBeTruthy();
    expect(field(listed, "name")).toBe(name);
  });

  it("[AC-030] editing a shipping option updates GET /shipping-options", async () => {
    const name = uniqueName("Express Delivery");
    const create = await request(app)
      .post("/admin/shipping-options")
      .set(owner)
      .send({ name, cost: 1000 });
    const id = field<string>(create.body, "id");

    const updatedName = `${name} (updated)`;
    const edit = await request(app)
      .patch(`/admin/shipping-options/${id}`)
      .set(owner)
      .send({ name: updatedName, cost: 1200 });
    expect([200, 204]).toContain(edit.status);

    const list = await request(app).get("/shipping-options");
    const listed = asList(list.body).find((option) => field(option, "id") === id);
    expect(listed).toBeTruthy();
    expect(field(listed, "name")).toBe(updatedName);
  });

  it("[AC-030] removing/deactivating a shipping option removes it from GET /shipping-options", async () => {
    const name = uniqueName("Removable Delivery");
    const create = await request(app)
      .post("/admin/shipping-options")
      .set(owner)
      .send({ name, cost: 300 });
    const id = field<string>(create.body, "id");

    const deactivate = await request(app)
      .patch(`/admin/shipping-options/${id}`)
      .set(owner)
      .send({ active: false });
    expect([200, 204]).toContain(deactivate.status);

    const list = await request(app).get("/shipping-options");
    const listed = asList(list.body).find((option) => field(option, "id") === id);
    expect(listed).toBeUndefined();
  });

  it("[validation] rejects a malformed shipping option body with a 4xx", async () => {
    const response = await request(app)
      .post("/admin/shipping-options")
      .set(owner)
      .send({ cost: "free" });
    expect(response.status).toBeGreaterThanOrEqual(400);
    expect(response.status).toBeLessThan(500);
  });
});

describe("admin shipping routes require owner sign-in (NFR-005)", () => {
  it("[NFR-005] POST /admin/shipping-options returns 401 without a token", async () => {
    const response = await request(app)
      .post("/admin/shipping-options")
      .send({ name: "x", cost: 1 });
    expect(response.status).toBe(401);
  });

  it("[NFR-005] PATCH /admin/shipping-options/:id returns 401 without a token", async () => {
    const response = await request(app)
      .patch("/admin/shipping-options/00000000-0000-0000-0000-000000000000")
      .send({});
    expect(response.status).toBe(401);
  });

  it("[NFR-005] POST /admin/shipping-options returns 403 for a signed-in non-owner", async () => {
    const headers = await customerHeaders(app);
    const response = await request(app)
      .post("/admin/shipping-options")
      .set(headers)
      .send({ name: "x", cost: 1 });
    expect(response.status).toBe(403);
  });
});
