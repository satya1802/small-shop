/**
 * Product catalogue business logic.
 *
 * Reads and writes the `products` table through `db()` (see db.ts) and maps between the
 * table's camelCase columns and the API's snake_case shape (matching the approved
 * `products` schema in the OpenAPI spec and the field names the admin screen sends).
 * Prices are stored and returned as integer minor units (price_cents).
 */
import { desc, eq } from "drizzle-orm";

import { db } from "../db.js";
import { products } from "../schema.js";

export interface ProductApi {
  id: string;
  name: string;
  description: string | null;
  price_cents: number;
  image_url: string | null;
  stock_quantity: number;
  published: boolean;
  created_at: string;
}

export interface ProductCreateInput {
  name: string;
  description?: string | null;
  price_cents: number;
  image_url?: string | null;
  stock_quantity: number;
  published?: boolean;
}

export type ProductUpdateInput = Partial<ProductCreateInput>;

type ProductRow = typeof products.$inferSelect;

function serialize(row: ProductRow): ProductApi {
  return {
    id: row.id,
    name: row.name,
    description: row.description,
    price_cents: row.priceCents,
    image_url: row.imageUrl,
    stock_quantity: row.stockQuantity,
    published: row.published,
    created_at: row.createdAt,
  };
}

/** Published products, newest first -- what shoppers see on GET /products. */
export async function listPublishedProducts(): Promise<ProductApi[]> {
  const conn = await db();
  const rows = await conn
    .select()
    .from(products)
    .where(eq(products.published, true))
    .orderBy(desc(products.createdAt));
  return rows.map(serialize);
}

/** A single published product, or undefined if it does not exist or is unpublished. */
export async function getPublishedProduct(id: string): Promise<ProductApi | undefined> {
  const conn = await db();
  const [row] = await conn.select().from(products).where(eq(products.id, id));
  if (!row || !row.published) return undefined;
  return serialize(row);
}

/** Every product regardless of publish state, for the admin dashboard. */
export async function listAllProducts(): Promise<ProductApi[]> {
  const conn = await db();
  const rows = await conn.select().from(products).orderBy(desc(products.createdAt));
  return rows.map(serialize);
}

export async function createProduct(input: ProductCreateInput): Promise<ProductApi> {
  const conn = await db();
  const [row] = await conn
    .insert(products)
    .values({
      name: input.name,
      description: input.description ?? null,
      priceCents: input.price_cents,
      imageUrl: input.image_url ?? null,
      stockQuantity: input.stock_quantity,
      published: input.published ?? false,
    })
    .returning();
  return serialize(row);
}

export async function updateProduct(
  id: string,
  input: ProductUpdateInput,
): Promise<ProductApi | undefined> {
  const conn = await db();
  const values: Partial<typeof products.$inferInsert> = {};
  if (input.name !== undefined) values.name = input.name;
  if (input.description !== undefined) values.description = input.description;
  if (input.price_cents !== undefined) values.priceCents = input.price_cents;
  if (input.image_url !== undefined) values.imageUrl = input.image_url;
  if (input.stock_quantity !== undefined) values.stockQuantity = input.stock_quantity;
  if (input.published !== undefined) values.published = input.published;

  if (Object.keys(values).length === 0) {
    const [row] = await conn.select().from(products).where(eq(products.id, id));
    return row ? serialize(row) : undefined;
  }

  const [row] = await conn.update(products).set(values).where(eq(products.id, id)).returning();
  return row ? serialize(row) : undefined;
}

/** Deletes a product outright; returns whether a row was removed. */
export async function deleteProduct(id: string): Promise<boolean> {
  const conn = await db();
  const removed = await conn
    .delete(products)
    .where(eq(products.id, id))
    .returning({ id: products.id });
  return removed.length > 0;
}
