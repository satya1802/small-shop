/**
 * Flat-rate shipping option business logic.
 *
 * Reads and writes the `shipping_options` table through `db()` (see db.ts). Costs are
 * stored and returned as integer minor units (cost in cents), matching the convention
 * used for product prices.
 */
import { randomUUID } from "node:crypto";

import { eq } from "drizzle-orm";

import { db } from "../db.js";
import { shippingOptions } from "../schema.js";

export interface ShippingOptionApi {
  id: string;
  name: string;
  cost: number;
  active: boolean;
}

export interface ShippingOptionCreateInput {
  name: string;
  cost: number;
  active?: boolean;
}

export type ShippingOptionUpdateInput = Partial<ShippingOptionCreateInput>;

type ShippingOptionRow = typeof shippingOptions.$inferSelect;

function serialize(row: ShippingOptionRow): ShippingOptionApi {
  return {
    id: row.id,
    name: row.name,
    cost: row.costCents,
    active: row.active,
  };
}

/** Active shipping options, for GET /shipping-options at checkout. */
export async function listActiveShippingOptions(): Promise<ShippingOptionApi[]> {
  const conn = await db();
  const rows = await conn.select().from(shippingOptions).where(eq(shippingOptions.active, true));
  return rows.map(serialize);
}

export async function createShippingOption(
  input: ShippingOptionCreateInput,
): Promise<ShippingOptionApi> {
  const conn = await db();
  const [row] = await conn
    .insert(shippingOptions)
    .values({
      id: randomUUID(),
      name: input.name,
      costCents: input.cost,
      active: input.active ?? true,
    })
    .returning();
  return serialize(row);
}

export async function updateShippingOption(
  id: string,
  input: ShippingOptionUpdateInput,
): Promise<ShippingOptionApi | undefined> {
  const conn = await db();
  const values: Partial<typeof shippingOptions.$inferInsert> = {};
  if (input.name !== undefined) values.name = input.name;
  if (input.cost !== undefined) values.costCents = input.cost;
  if (input.active !== undefined) values.active = input.active;

  if (Object.keys(values).length === 0) {
    const [row] = await conn.select().from(shippingOptions).where(eq(shippingOptions.id, id));
    return row ? serialize(row) : undefined;
  }

  const [row] = await conn
    .update(shippingOptions)
    .set(values)
    .where(eq(shippingOptions.id, id))
    .returning();
  return row ? serialize(row) : undefined;
}
