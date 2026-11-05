import request from "supertest";
import { describe, expect, it } from "vitest";

import { createApp } from "../../src/app.js";
import { asList, customerHeaders, field, ownerHeaders } from "../support/auth.js";

const app = createApp();
const owner = ownerHeaders();

function uniqueName(label: string): string {
  return `${label} ${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

describe("admin product CRUD (AC-024, AC-025, AC-026)", () => {
  it("[AC-024] a product the owner creates (published) is published to GET /products", async () => {
    const name = uniqueName("Owner Created Product");
    const create = await request(app).post("/admin/products").set(owner).send({
      name,
      description: "A product created by the owner",
      price: 1999,
      imageUrl: "https://example.com/image.jpg",
      stock: 5,
      published: true,
    });

    expect([200, 201]).toContain(create.status);
    const id = field<string>(create.body, "id");
    expect(id).toBeTruthy();

    const catalogue = await request(app).get("/products");
    expect(catalogue.status).toBe(200);
    const listed = asList(catalogue.body).find((product) => field(product, "id") === id);
    expect(listed).toBeTruthy();
    expect(field(listed, "name")).toBe(name);
  });

  it("[AC-025] editing a product and saving is reflected in the catalogue", async () => {
    const original = uniqueName("Editable Product");
    const create = await request(app)
      .post("/admin/products")
      .set(owner)
      .send({ name: original, description: "before", price: 500, stock: 3, published: true });
    const id = field<string>(create.body, "id");
    expect(id).toBeTruthy();

    const updatedName = `${original} (edited)`;
    const edit = await request(app)
      .patch(`/admin/products/${id}`)
      .set(owner)
      .send({ name: updatedName, price: 750 });
    expect([200, 204]).toContain(edit.status);

    const catalogue = await request(app).get("/products");
    const listed = asList(catalogue.body).find((product) => field(product, "id") === id);
    expect(listed).toBeTruthy();
    expect(field(listed, "name")).toBe(updatedName);
  });

  it("[AC-026] unpublishing a product removes it from the shopper catalogue", async () => {
    const name = uniqueName("Unpublish Me");
    const create = await request(app)
      .post("/admin/products")
      .set(owner)
      .send({ name, description: "x", price: 100, stock: 1, published: true });
    const id = field<string>(create.body, "id");

    const unpublish = await request(app)
      .patch(`/admin/products/${id}`)
      .set(owner)
      .send({ published: false });
    expect([200, 204]).toContain(unpublish.status);

    const catalogue = await request(app).get("/products");
    const listed = asList(catalogue.body).find((product) => field(product, "id") === id);
    expect(listed).toBeUndefined();
  });

  it("[AC-026] deleting a product removes it from the shopper catalogue", async () => {
    const name = uniqueName("Delete Me");
    const create = await request(app)
      .post("/admin/products")
      .set(owner)
      .send({ name, description: "x", price: 100, stock: 1, published: true });
    const id = field<string>(create.body, "id");

    const remove = await request(app).delete(`/admin/products/${id}`).set(owner);
    expect([200, 204]).toContain(remove.status);

    const catalogue = await request(app).get("/products");
    const listed = asList(catalogue.body).find((product) => field(product, "id") === id);
    expect(listed).toBeUndefined();
  });

  it("[validation] rejects a malformed product body with a 4xx", async () => {
    const response = await request(app)
      .post("/admin/products")
      .set(owner)
      .send({ description: "missing name, price and stock" });
    expect(response.status).toBeGreaterThanOrEqual(400);
    expect(response.status).toBeLessThan(500);
  });
});

describe("admin product routes require owner sign-in (NFR-005)", () => {
  it("[NFR-005] POST /admin/products returns 401 without a token", async () => {
    const response = await request(app)
      .post("/admin/products")
      .send({ name: "x", price: 1, stock: 1 });
    expect(response.status).toBe(401);
  });

  it("[NFR-005] PATCH /admin/products/:id returns 401 without a token", async () => {
    const response = await request(app)
      .patch("/admin/products/00000000-0000-0000-0000-000000000000")
      .send({});
    expect(response.status).toBe(401);
  });

  it("[NFR-005] DELETE /admin/products/:id returns 401 without a token", async () => {
    const response = await request(app).delete(
      "/admin/products/00000000-0000-0000-0000-000000000000",
    );
    expect(response.status).toBe(401);
  });

  it("[NFR-005] POST /admin/products returns 403 for a signed-in non-owner", async () => {
    const headers = await customerHeaders(app);
    const response = await request(app)
      .post("/admin/products")
      .set(headers)
      .send({ name: "x", price: 1, stock: 1, published: true });
    expect(response.status).toBe(403);
  });
});
