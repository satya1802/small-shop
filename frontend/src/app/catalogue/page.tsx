// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
"use client";
// Generated screens hold state and handle events, which a server component
// cannot do. Next.js renders on the server unless a module says otherwise.
// The pragma above must precede the "use client" directive: TypeScript only
// honours @ts-nocheck when it is the first statement-level token in the file,
// and only leading comments (not other statements) may come before a directive.

/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Card, Select, Switch } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Search } = Icons;

const PRODUCT = "small shop";
const SCREEN = "Shop catalogue";
const mix = (colour, percent) => `color-mix(in srgb, ${colour} ${percent}%, transparent)`;

const GLYPHS = {
  mug: ["M5 7h10v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3Z", "M15 9h1.5a3 3 0 0 1 0 6H15"],
  towel: ["M5 4h14v16H5z", "M9 4v16"],
  candle: ["M10 10h4v11h-4z", "M12 10c-1.6-1.4-1-2.8 0-3.9 1 1.1 1.7 2.5 0 3.9Z"],
  board: [
    "M6 3h12v13a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5Z",
    "M12 6.2a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z",
  ],
  jar: ["M9 3h6v3H9z", "M7 6h10v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2Z", "M7 12h10"],
  soap: ["M4 9h16v8H4z", "M4 12h16"],
  bowl: ["M3 11h18a9 9 0 0 1-18 0Z", "M3 11h18"],
  tote: ["M6 8h12l-1.2 13H7.2z", "M9 8a3 3 0 0 1 6 0"],
  brush: ["M9 3h6v9H9z", "M10 12v9", "M14 12v9"],
};

const PRODUCTS = [
  {
    sku: "SKU-1042",
    name: "Speckled stoneware mug",
    blurb: "Hand-thrown, matte oatmeal glaze",
    size: "350 ml",
    stock: 24,
    price_cents: 2800,
    glyph: "mug",
  },
  {
    sku: "SKU-1043",
    name: "Stonewashed linen tea towel",
    blurb: "Belgian flax, hand-hemmed edge",
    size: "50 × 70 cm",
    stock: 9,
    price_cents: 1600,
    glyph: "towel",
  },
  {
    sku: "SKU-1044",
    name: "Beeswax dinner candles",
    blurb: "Pure beeswax, nine-hour burn",
    size: "Pack of 4",
    stock: 0,
    price_cents: 2200,
    glyph: "candle",
  },
  {
    sku: "SKU-1045",
    name: "Olive wood chopping board",
    blurb: "Single plank, oiled finish",
    size: "38 × 22 cm",
    stock: 6,
    price_cents: 5400,
    glyph: "board",
  },
  {
    sku: "SKU-1046",
    name: "Sumatra filter coffee",
    blurb: "Washed Gayo, roasted 28 Oct",
    size: "250 g bag",
    stock: 42,
    price_cents: 1450,
    glyph: "jar",
  },
  {
    sku: "SKU-1047",
    name: "Cedar & bergamot soap",
    blurb: "Cold-pressed, palm-oil free",
    size: "120 g bar",
    stock: 0,
    price_cents: 900,
    glyph: "soap",
  },
  {
    sku: "SKU-1048",
    name: "Enamel serving bowl",
    blurb: "Steel core, charcoal rim",
    size: "1.2 L",
    stock: 11,
    price_cents: 3200,
    glyph: "bowl",
  },
  {
    sku: "SKU-1049",
    name: "Waxed canvas tote",
    blurb: "12 oz canvas, leather handles",
    size: "40 × 36 cm",
    stock: 3,
    price_cents: 6800,
    glyph: "tote",
  },
  {
    sku: "SKU-1050",
    name: "Brass-handled dish brush",
    blurb: "Replaceable tampico head",
    size: "26 cm",
    stock: 17,
    price_cents: 1900,
    glyph: "brush",
  },
];
const VIEWS = ["All", "In stock", "Low stock", "Out of stock"];
const CART_COUNT = 2;
const availability = (stock) =>
  stock === 0 ? "Out of stock" : stock <= 10 ? "Low stock" : "In stock";
const money = (cents) => `$${(cents / 100).toFixed(2)}`;

export default function Screen() {
  const navigate = useNavigate();
  const [view, setView] = React.useState("All");
  const [query, setQuery] = React.useState("");
  const [picked, setPicked] = React.useState([]);
  const [consent, setConsent] = React.useState(null);
  const [noticeOpen, setNoticeOpen] = React.useState(false);
  const rule = `2px solid ${brand.primaryColor}`;
  const hair = `1px solid ${mix(brand.primaryColor, 16)}`;
  const rows = PRODUCTS.filter(
    (r) =>
      (view === "All" || availability(r.stock) === view) &&
      `${r.sku} ${r.name} ${r.blurb}`.toLowerCase().includes(query.toLowerCase()),
  );
  const toggle = (id) =>
    setPicked(picked.includes(id) ? picked.filter((p) => p !== id) : [...picked, id]);

  return (
    <div className="bg-white" style={{ color: brand.primaryColor, fontFamily: brand.fontBody }}>
      <style>{`@keyframes obsReveal{from{opacity:0;transform:translateY(-2px)}to{opacity:1;transform:none}}.obs-reveal{animation:obsReveal .18s ease-out both}@media (prefers-reduced-motion: reduce){.obs-reveal{animation:none}}`}</style>
      <div className="flex items-end justify-between pb-4" style={{ borderBottom: rule }}>
        <div>
          <p
            className="text-[11px] font-bold uppercase tracking-[0.18em]"
            style={{ color: brand.neutralColor }}
          >
            {PRODUCT}
          </p>
          <h1
            className="mt-1 text-3xl font-bold tracking-tight"
            style={{ fontFamily: brand.fontHeading }}
          >
            {SCREEN}
          </h1>
        </div>
        <button
          type="button"
          onClick={() => navigate("checkout")}
          className="h-9 px-4 text-xs font-bold uppercase tracking-[0.14em] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          style={{ backgroundColor: brand.primaryColor, borderRadius: brand.radius }}
        >
          View cart ({CART_COUNT})
        </button>
      </div>

      <div className="flex items-center gap-4 py-4">
        <div
          role="group"
          aria-label="Stock filter"
          className="flex"
          style={{ border: rule, borderRadius: brand.radius }}
        >
          {VIEWS.map((v, i) => (
            <button
              key={v}
              type="button"
              aria-pressed={view === v}
              onClick={() => setView(v)}
              className="h-9 px-4 text-xs font-bold uppercase tracking-[0.14em]"
              style={{
                borderLeft: i ? rule : "none",
                backgroundColor: view === v ? brand.primaryColor : "#fff",
                color: view === v ? "#fff" : brand.primaryColor,
              }}
            >
              {v}
            </button>
          ))}
        </div>
        <label htmlFor="corp-search" className="sr-only">
          Search the catalogue
        </label>
        <input
          id="corp-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search SKU, product or detail"
          className="h-9 w-72 bg-white px-3 text-sm outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          style={{ border: rule, borderRadius: brand.radius }}
        />
        <p className="ml-auto text-xs font-semibold tabular-nums">
          {picked.length ? `${picked.length} selected` : `${rows.length} products`}
        </p>
        <button
          type="button"
          disabled={!picked.length}
          onClick={() => navigate("checkout")}
          className="h-9 px-4 text-xs font-bold uppercase tracking-[0.14em] disabled:opacity-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          style={{ border: rule, borderRadius: brand.radius }}
        >
          {picked.length ? `Add ${picked.length} to cart` : "Add to cart"}
        </button>
      </div>

      <table className="w-full text-[13px]" style={{ borderTop: rule }}>
        <thead>
          <tr
            className="text-left text-[11px] uppercase tracking-[0.14em]"
            style={{ borderBottom: rule, color: brand.neutralColor }}
          >
            <th scope="col" className="w-8 py-2">
              <span className="sr-only">Select</span>
            </th>
            <th scope="col" className="py-2 font-bold">
              SKU
            </th>
            <th scope="col" className="py-2 font-bold">
              Product
            </th>
            <th scope="col" className="py-2 font-bold">
              Detail
            </th>
            <th scope="col" className="py-2 font-bold">
              Availability
            </th>
            <th scope="col" className="py-2 font-bold">
              Size
            </th>
            <th scope="col" className="py-2 font-bold">
              Stock
            </th>
            <th scope="col" className="py-2 text-right font-bold">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => {
            const state = availability(r.stock);
            return (
              <tr
                key={r.sku}
                className="hover:bg-black/[0.03]"
                style={{
                  borderBottom: hair,
                  backgroundColor: picked.includes(r.sku) ? mix(brand.primaryColor, 6) : undefined,
                }}
              >
                <td className="py-2">
                  <input
                    type="checkbox"
                    aria-label={
                      r.stock === 0
                        ? `${r.name} is out of stock and cannot be added to the cart`
                        : `Select ${r.name}`
                    }
                    disabled={r.stock === 0}
                    checked={picked.includes(r.sku)}
                    onChange={() => toggle(r.sku)}
                    style={{ accentColor: brand.primaryColor }}
                  />
                </td>
                <td className="py-2 tabular-nums" style={{ color: brand.neutralColor }}>
                  {r.sku}
                </td>
                <td className="py-2 font-semibold">
                  <span className="flex items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                      className="shrink-0"
                    >
                      {GLYPHS[r.glyph].map((d, i) => (
                        <path key={i} d={d} />
                      ))}
                    </svg>
                    <button
                      type="button"
                      onClick={() => navigate("product-detail")}
                      className="text-left font-semibold underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                    >
                      {r.name}
                    </button>
                  </span>
                </td>
                <td className="py-2">{r.blurb}</td>
                <td
                  className="py-2 text-[11px] font-bold uppercase tracking-wider"
                  style={{ color: state === "Out of stock" ? brand.accentColor : undefined }}
                >
                  {state}
                </td>
                <td className="py-2">{r.size}</td>
                <td className="py-2 tabular-nums">{r.stock}</td>
                <td className="py-2 text-right font-semibold tabular-nums">
                  {money(r.price_cents)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {rows.length === 0 ? (
        <p className="py-10 text-center text-sm font-semibold" style={{ borderBottom: hair }}>
          {query
            ? `Nothing in the catalogue matches “${query}”. Try a shorter word, or clear the search.`
            : `No products are ${view.toLowerCase()} right now. Switch the filter to All to see the other ${PRODUCTS.length} items.`}
        </p>
      ) : null}
      <div className="flex items-center justify-between pt-3 text-xs font-semibold tabular-nums">
        <span>
          Page 1 of 1 · {rows.length} of {PRODUCTS.length} products
        </span>
        <span className="flex gap-2">
          <button
            type="button"
            disabled
            className="h-8 px-3 font-bold uppercase disabled:opacity-30"
            style={{ border: rule, borderRadius: brand.radius }}
            aria-label="Previous page"
          >
            Prev
          </button>
          <button
            type="button"
            disabled
            className="h-8 px-3 font-bold uppercase disabled:opacity-30"
            style={{ border: rule, borderRadius: brand.radius }}
            aria-label="Next page"
          >
            Next
          </button>
        </span>
      </div>

      <section
        aria-labelledby="cookie-h"
        className="mt-6 p-4"
        style={{ border: rule, borderRadius: brand.radius }}
      >
        <h2
          id="cookie-h"
          className="text-[11px] font-bold uppercase tracking-[0.18em]"
          style={{ color: brand.neutralColor }}
        >
          Cookies &amp; privacy
        </h2>
        {consent === null ? (
          <div>
            <p className="mt-2 max-w-[70ch] text-[13px] leading-relaxed">
              Essential cookies keep your cart and checkout working — we cannot switch those off.
              Non-essential cookies only tell us which products get looked at. Nothing extra is
              stored until you say yes.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setConsent("accepted")}
                className="h-9 px-4 text-xs font-bold uppercase tracking-[0.14em] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                style={{ backgroundColor: brand.primaryColor, borderRadius: brand.radius }}
              >
                Accept non-essential
              </button>
              <button
                type="button"
                onClick={() => setConsent("declined")}
                className="h-9 px-4 text-xs font-bold uppercase tracking-[0.14em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                style={{ border: rule, borderRadius: brand.radius }}
              >
                Decline non-essential
              </button>
              <button
                type="button"
                aria-expanded={noticeOpen}
                onClick={() => setNoticeOpen(!noticeOpen)}
                className="h-9 px-4 text-xs font-bold uppercase tracking-[0.14em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                style={{ border: rule, borderRadius: brand.radius }}
              >
                {noticeOpen ? "Hide privacy notice" : "Read the privacy notice"}
              </button>
            </div>
          </div>
        ) : (
          <div className="obs-reveal">
            <p role="status" className="mt-2 text-[13px] font-semibold">
              {consent === "accepted"
                ? "Non-essential cookies accepted on 4 Nov 2026."
                : "Non-essential cookies declined on 4 Nov 2026 — none are set."}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setConsent(null)}
                className="h-9 px-4 text-xs font-bold uppercase tracking-[0.14em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                style={{ border: rule, borderRadius: brand.radius }}
              >
                Change cookie choice
              </button>
              <button
                type="button"
                aria-expanded={noticeOpen}
                onClick={() => setNoticeOpen(!noticeOpen)}
                className="h-9 px-4 text-xs font-bold uppercase tracking-[0.14em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                style={{ border: rule, borderRadius: brand.radius }}
              >
                {noticeOpen ? "Hide privacy notice" : "Read the privacy notice"}
              </button>
            </div>
          </div>
        )}
        {noticeOpen ? (
          <div className="obs-reveal mt-4 pt-4" style={{ borderTop: hair }}>
            <h3
              className="text-sm font-bold tracking-tight"
              style={{ fontFamily: brand.fontHeading }}
            >
              Privacy notice
            </h3>
            <dl className="mt-2 max-w-[70ch] text-[13px] leading-relaxed">
              <dt className="mt-2 font-semibold">What we collect</dt>
              <dd>
                Your contact email, shipping name and address, and the items on your order. Browsing
                the catalogue on its own collects nothing about you.
              </dd>
              <dt className="mt-2 font-semibold">Card details</dt>
              <dd>
                Card numbers go straight to Stripe and are never stored on our side. We keep only
                Stripe's payment reference against the order.
              </dd>
              <dt className="mt-2 font-semibold">How long we keep it</dt>
              <dd>
                Order records are held for six years for tax purposes. An optional account can be
                deleted at any time from My account, and the personal data goes with it.
              </dd>
              <dt className="mt-2 font-semibold">Who to ask</dt>
              <dd>
                Write to the shop owner at hello@smallshop.example and we will answer within five
                working days.
              </dd>
            </dl>
          </div>
        ) : null}
      </section>
    </div>
  );
}
