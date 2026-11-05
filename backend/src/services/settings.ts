/**
 * The single store-wide tax/VAT rate and currency.
 *
 * `store_settings` is expected to hold exactly one row (id = 1); PUT /admin/settings/tax
 * upserts it rather than inserting a second row.
 */
import { eq } from "drizzle-orm";

import { db } from "../db.js";
import { storeSettings } from "../schema.js";

export interface TaxSettingsApi {
  taxRatePercent: number;
  currency: string;
}

const SETTINGS_ID = 1;

/** The current tax rate and currency, or undefined if none has been set yet. */
export async function getTaxSettings(): Promise<TaxSettingsApi | undefined> {
  const conn = await db();
  const [row] = await conn
    .select()
    .from(storeSettings)
    .where(eq(storeSettings.id, SETTINGS_ID));
  if (!row) return undefined;
  return { taxRatePercent: Number(row.taxRatePercent), currency: row.currency };
}

/** Upserts the single tax settings row. */
export async function setTaxSettings(input: TaxSettingsApi): Promise<TaxSettingsApi> {
  const conn = await db();
  const [row] = await conn
    .insert(storeSettings)
    .values({
      id: SETTINGS_ID,
      taxRatePercent: String(input.taxRatePercent),
      currency: input.currency,
    })
    .onConflictDoUpdate({
      target: storeSettings.id,
      set: { taxRatePercent: String(input.taxRatePercent), currency: input.currency },
    })
    .returning();
  return { taxRatePercent: Number(row.taxRatePercent), currency: row.currency };
}
