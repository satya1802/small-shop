/**
 * Drizzle tables.
 *
 * One table per entity in the approved data model. `db()` in db.ts creates each of
 * these the first time it connects (`CREATE TABLE IF NOT EXISTS`) -- there are no
 * migrations yet (see the note there), so a column added here lands at the next
 * connection and nothing is ever altered or dropped automatically.
 */
import { randomUUID } from "node:crypto";

import {
  boolean,
  integer,
  jsonb,
  numeric,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

/** Catalogue items a shopper can browse and the owner manages. */
export const products = pgTable("products", {
  // `createStatements()` in db.ts (read-only here) builds `CREATE TABLE` from this
  // schema without emitting a SQL-level `DEFAULT` clause, so `.defaultRandom()` -- which
  // relies on the column's SQL default -- inserts NULL and fails the not-null primary
  // key. Generating the id in application code with `$defaultFn` sidesteps that: Drizzle
  // supplies the value itself instead of asking Postgres for one.
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  name: text("name").notNull(),
  description: text("description"),
  priceCents: integer("price_cents").notNull(),
  imageUrl: text("image_url"),
  stockQuantity: integer("stock_quantity").notNull(),
  published: boolean("published").notNull(),
  // Same reasoning as the id column above: no SQL-level DEFAULT exists on this table,
  // so `.defaultNow()` alone would insert NULL.
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .notNull()
    .$defaultFn(() => new Date().toISOString()),
});

/** Optional shopper accounts (email + password), used to view past orders. */
export const customers = pgTable("customers", {
  // Same reasoning as products.id above: `createStatements()` emits no SQL-level
  // DEFAULT, so `.defaultRandom()`/`.defaultNow()` would insert NULL.
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  email: text("email").notNull(),
  passwordHash: text("password_hash").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .notNull()
    .$defaultFn(() => new Date().toISOString()),
});

/** A guest or signed-in shopper's in-progress or completed cart. */
export const carts = pgTable("carts", {
  id: uuid("id").primaryKey().defaultRandom(),
  customerId: uuid("customer_id").references(() => customers.id),
  status: text("status").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).notNull().defaultNow(),
});

/** One product line within a cart. */
export const cartItems = pgTable("cart_items", {
  id: uuid("id").primaryKey().defaultRandom(),
  cartId: uuid("cart_id")
    .notNull()
    .references(() => carts.id),
  productId: uuid("product_id")
    .notNull()
    .references(() => products.id),
  quantity: integer("quantity").notNull(),
});

/** Owner-defined flat-rate delivery choices offered at checkout. */
export const shippingOptions = pgTable("shipping_options", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  costCents: integer("cost_cents").notNull(),
  active: boolean("active").notNull(),
});

/** The single store-wide tax rate and currency; expected to hold exactly one row. */
export const storeSettings = pgTable("store_settings", {
  id: integer("id").primaryKey(),
  taxRatePercent: numeric("tax_rate_percent").notNull(),
  currency: text("currency").notNull(),
});

/** A placed, paid order: created by the Stripe webhook, never by the client directly. */
export const orders = pgTable("orders", {
  id: uuid("id").primaryKey().defaultRandom(),
  orderReference: text("order_reference").notNull(),
  customerId: uuid("customer_id").references(() => customers.id),
  contactEmail: text("contact_email").notNull(),
  shippingName: text("shipping_name").notNull(),
  shippingAddress: jsonb("shipping_address").notNull(),
  shippingOptionId: uuid("shipping_option_id").references(() => shippingOptions.id),
  subtotalCents: integer("subtotal_cents").notNull(),
  shippingCents: integer("shipping_cents").notNull(),
  taxCents: integer("tax_cents").notNull(),
  totalCents: integer("total_cents").notNull(),
  currency: text("currency").notNull(),
  status: text("status").notNull(),
  stripePaymentIntent: text("stripe_payment_intent"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).notNull().defaultNow(),
});

/** A line item captured on an order at the price it was sold for. */
export const orderItems = pgTable("order_items", {
  id: uuid("id").primaryKey().defaultRandom(),
  orderId: uuid("order_id")
    .notNull()
    .references(() => orders.id),
  productId: uuid("product_id").references(() => products.id),
  productName: text("product_name").notNull(),
  unitPriceCents: integer("unit_price_cents").notNull(),
  quantity: integer("quantity").notNull(),
});
