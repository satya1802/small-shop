// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
"use client";
// Generated screens hold state and handle events, which a server component
// cannot do. Next.js renders on the server unless a module says otherwise.
// The pragma above must precede the "use client" directive: TypeScript only
// honours @ts-nocheck when it is the first statement-level token in the file,
// and only leading comments (not other statements) may come before a directive.

import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

const { Button, Input, Label, Select, Badge, Table, THead, TBody, TR, TH, TD, Tabs, Empty } = UI;

const { Search, Check, X, ChevronRight, Package, Clock, AlertCircle, CheckCircle } = Icons;

const TAX_RATE_PERCENT = 20;
const CURRENCY = "GBP";
const CURRENCY_SYMBOL = "£";
const NOW_STAMP = "04 Nov 2026, 14:22";

const SHIPPING_OPTIONS = [
  { id: "so_std", name: "Royal Mail Tracked 48", cost_cents: 395, active: true },
  { id: "so_exp", name: "DPD Next Day", cost_cents: 750, active: true },
  { id: "so_col", name: "Collect from Peckham counter", cost_cents: 0, active: true },
];

const SYNC_TIMES = ["14:06", "14:21", "14:34", "14:48", "15:02"];

const RAW_ORDERS = [
  {
    id: "ord_7312",
    order_reference: "ORD-7312",
    customer_id: null,
    contact_email: "nadia.elsayed@fastmail.com",
    shipping_name: "Nadia Elsayed",
    shipping_address: "Flat 2, 14 Barrowgate Road\nChiswick\nLondon\nW4 4QS",
    shipping_option_id: "so_exp",
    status: "placed",
    stripe_payment_intent: "pi_3QW8xF2eZvKYlo2C1nUqA4bR",
    created_at: "2026-11-04T09:14:00",
    items: [
      {
        id: "oi_1",
        product_id: "p_kettle",
        product_name: "Fellow Stagg EKG Electric Kettle",
        unit_price_cents: 14900,
        quantity: 1,
      },
      {
        id: "oi_2",
        product_id: "p_guji",
        product_name: "Ethiopia Guji Washed — 250g",
        unit_price_cents: 1250,
        quantity: 2,
      },
    ],
  },
  {
    id: "ord_7311",
    order_reference: "ORD-7311",
    customer_id: "cus_8841",
    contact_email: "tomasz.wojcik@gmail.com",
    shipping_name: "Tomasz Wójcik",
    shipping_address: "88 Fitzwilliam Street\nSheffield\nS1 4JP",
    shipping_option_id: "so_std",
    status: "placed",
    stripe_payment_intent: "pi_3QW7tB2eZvKYlo2C0jLmP9xK",
    created_at: "2026-11-04T08:02:00",
    items: [
      {
        id: "oi_3",
        product_id: "p_v60",
        product_name: "Hario V60 02 Ceramic Dripper",
        unit_price_cents: 2400,
        quantity: 1,
      },
      {
        id: "oi_4",
        product_id: "p_filters",
        product_name: "V60 02 Paper Filters — 100 pack",
        unit_price_cents: 650,
        quantity: 3,
      },
    ],
  },
  {
    id: "ord_7310",
    order_reference: "ORD-7310",
    customer_id: null,
    contact_email: "p.raghunathan@outlook.com",
    shipping_name: "Priya Raghunathan",
    shipping_address: "3 Marchmont Terrace\nGlasgow\nG12 9LT",
    shipping_option_id: "so_std",
    status: "awaiting_payment",
    stripe_payment_intent: "pi_3QW6pQ2eZvKYlo2C7vDnR2wE",
    created_at: "2026-11-03T17:48:00",
    items: [
      {
        id: "oi_5",
        product_id: "p_c40",
        product_name: "Comandante C40 MK4 Hand Grinder",
        unit_price_cents: 24500,
        quantity: 1,
      },
    ],
  },
  {
    id: "ord_7309",
    order_reference: "ORD-7309",
    customer_id: "cus_8807",
    contact_email: "callum.fraser@proton.me",
    shipping_name: "Callum Fraser",
    shipping_address: "21 Gilmore Place\nEdinburgh\nEH3 9NE",
    shipping_option_id: "so_exp",
    status: "shipped",
    shipped_at: "04 Nov 2026, 09:31",
    stripe_payment_intent: "pi_3QW5mN2eZvKYlo2C4sTgH8yU",
    created_at: "2026-11-03T14:26:00",
    items: [
      {
        id: "oi_6",
        product_id: "p_pearl",
        product_name: "Acaia Pearl S Brewing Scale",
        unit_price_cents: 19500,
        quantity: 1,
      },
      {
        id: "oi_7",
        product_id: "p_nyeri",
        product_name: "Kenya Nyeri AA — 250g",
        unit_price_cents: 1450,
        quantity: 1,
      },
    ],
  },
  {
    id: "ord_7308",
    order_reference: "ORD-7308",
    customer_id: null,
    contact_email: "marie.lefevre@laposte.net",
    shipping_name: "Marie Lefèvre",
    shipping_address: "7 Cathedral Road\nCardiff\nCF11 9LJ",
    shipping_option_id: "so_std",
    status: "placed",
    stripe_payment_intent: "pi_3QW4kL2eZvKYlo2C9bFcN3qT",
    created_at: "2026-11-03T11:05:00",
    items: [
      {
        id: "oi_8",
        product_id: "p_guji",
        product_name: "Ethiopia Guji Washed — 250g",
        unit_price_cents: 1250,
        quantity: 4,
      },
      {
        id: "oi_9",
        product_id: "p_decaf",
        product_name: "Decaf Colombia Huila — 250g",
        unit_price_cents: 1150,
        quantity: 1,
      },
    ],
  },
  {
    id: "ord_7307",
    order_reference: "ORD-7307",
    customer_id: "cus_8762",
    contact_email: "idris.bello@me.com",
    shipping_name: "Idris Bello",
    shipping_address: "Collection — 42 Rye Lane\nPeckham\nLondon\nSE15 5BY",
    shipping_option_id: "so_col",
    status: "shipped",
    shipped_at: "03 Nov 2026, 10:02",
    stripe_payment_intent: "pi_3QW3jH2eZvKYlo2C6xRpV5mD",
    created_at: "2026-11-02T19:41:00",
    items: [
      {
        id: "oi_10",
        product_id: "p_atmos",
        product_name: "Fellow Atmos Vacuum Canister 1.2L",
        unit_price_cents: 3400,
        quantity: 1,
      },
    ],
  },
  {
    id: "ord_7306",
    order_reference: "ORD-7306",
    customer_id: null,
    contact_email: "hwhitfield@btinternet.com",
    shipping_name: "Hannah Whitfield",
    shipping_address: "12 Ashgrove Avenue\nAberdeen\nAB25 3BA",
    shipping_option_id: "so_std",
    status: "cancelled",
    cancelled_note: "Refunded in full on 02 Nov — customer ordered twice by mistake.",
    stripe_payment_intent: "pi_3QW2gF2eZvKYlo2C1nKdW7sA",
    created_at: "2026-11-02T10:12:00",
    items: [
      {
        id: "oi_11",
        product_id: "p_c40",
        product_name: "Comandante C40 MK4 Hand Grinder",
        unit_price_cents: 24500,
        quantity: 1,
      },
    ],
  },
  {
    id: "ord_7305",
    order_reference: "ORD-7305",
    customer_id: null,
    contact_email: "sofia.marchetti@libero.it",
    shipping_name: "Sofia Marchetti",
    shipping_address: "64 Jesmond Road\nNewcastle upon Tyne\nNE2 1LX",
    shipping_option_id: "so_exp",
    status: "shipped",
    shipped_at: "02 Nov 2026, 16:20",
    stripe_payment_intent: "pi_3QW1dC2eZvKYlo2C3hGmZ9pQ",
    created_at: "2026-11-02T09:03:00",
    items: [
      {
        id: "oi_12",
        product_id: "p_kalita",
        product_name: "Kalita Wave 185 Stainless Dripper",
        unit_price_cents: 2900,
        quantity: 1,
      },
      {
        id: "oi_13",
        product_id: "p_wavefilters",
        product_name: "Wave 185 Filters — 100 pack",
        unit_price_cents: 900,
        quantity: 2,
      },
    ],
  },
  {
    id: "ord_7304",
    order_reference: "ORD-7304",
    customer_id: "cus_8690",
    contact_email: "j.okonkwo@gmail.com",
    shipping_name: "Joy Okonkwo",
    shipping_address: "5 Hollybank Court\nSalford\nM7 4QT",
    shipping_option_id: "so_std",
    status: "placed",
    stripe_payment_intent: "pi_3QW0aZ2eZvKYlo2C8tWqL4nR",
    created_at: "2026-11-02T08:40:00",
    items: [
      {
        id: "oi_14",
        product_id: "p_guji",
        product_name: "Ethiopia Guji Washed — 250g",
        unit_price_cents: 1250,
        quantity: 1,
      },
      {
        id: "oi_15",
        product_id: "p_timemore",
        product_name: "Timemore Black Mirror Basic 2 Scale",
        unit_price_cents: 5900,
        quantity: 1,
      },
    ],
  },
  {
    id: "ord_7303",
    order_reference: "ORD-7303",
    customer_id: null,
    contact_email: "rachel.lim@hey.com",
    shipping_name: "Rachel Lim",
    shipping_address: "118 Mill Road\nCambridge\nCB1 3LP",
    shipping_option_id: "so_std",
    status: "shipped",
    shipped_at: "01 Nov 2026, 11:45",
    stripe_payment_intent: "pi_3QVzXy2eZvKYlo2C5kJbT6mF",
    created_at: "2026-10-31T18:27:00",
    items: [
      {
        id: "oi_16",
        product_id: "p_nyeri",
        product_name: "Kenya Nyeri AA — 250g",
        unit_price_cents: 1450,
        quantity: 3,
      },
    ],
  },
  {
    id: "ord_7302",
    order_reference: "ORD-7302",
    customer_id: "cus_8604",
    contact_email: "d.mcallister@sky.com",
    shipping_name: "Duncan McAllister",
    shipping_address: "9 Belmont Crescent\nBelfast\nBT4 3FG",
    shipping_option_id: "so_exp",
    status: "shipped",
    shipped_at: "31 Oct 2026, 15:08",
    stripe_payment_intent: "pi_3QVyWu2eZvKYlo2C2dNrX1gH",
    created_at: "2026-10-30T13:55:00",
    items: [
      {
        id: "oi_17",
        product_id: "p_v60",
        product_name: "Hario V60 02 Ceramic Dripper",
        unit_price_cents: 2400,
        quantity: 2,
      },
      {
        id: "oi_18",
        product_id: "p_atmos",
        product_name: "Fellow Atmos Vacuum Canister 1.2L",
        unit_price_cents: 3400,
        quantity: 1,
      },
    ],
  },
];

function priceOf(cents) {
  return (
    CURRENCY_SYMBOL +
    (cents / 100).toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  );
}

function withTotals(order) {
  const subtotal = order.items.reduce((sum, it) => sum + it.unit_price_cents * it.quantity, 0);
  const option = SHIPPING_OPTIONS.find((s) => s.id === order.shipping_option_id);
  const shipping = option ? option.cost_cents : 0;
  const tax = Math.round(((subtotal + shipping) * TAX_RATE_PERCENT) / 100);
  return {
    ...order,
    subtotal_cents: subtotal,
    shipping_cents: shipping,
    tax_cents: tax,
    total_cents: subtotal + shipping + tax,
    currency: CURRENCY,
  };
}

const ORDERS = RAW_ORDERS.map(withTotals);

const STATUS_META = {
  placed: { label: "Awaiting shipment", tone: "outline", Icon: null },
  shipped: { label: "Shipped", tone: "solid", Icon: null },
  awaiting_payment: { label: "Payment pending", tone: "accent", Icon: null },
  cancelled: { label: "Cancelled", tone: "muted", Icon: null },
};

function fmtShort(iso) {
  const d = new Date(iso);
  return (
    d.toLocaleDateString("en-GB", { day: "2-digit", month: "short" }) +
    ", " +
    d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })
  );
}

function fmtLong(iso) {
  const d = new Date(iso);
  return (
    d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) +
    ", " +
    d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })
  );
}

export default function Screen() {
  const navigate = useNavigate();
  const ink = brand.primaryColor;
  const accent = brand.accentColor;
  const neutral = brand.neutralColor;
  const surface = brand.backgroundColor;
  const hair = ink + "1f";
  const faint = ink + "08";

  const [orders, setOrders] = React.useState(ORDERS);
  const [tab, setTab] = React.useState("awaiting");
  const [query, setQuery] = React.useState("");
  const [sort, setSort] = React.useState("newest");
  const [selectedId, setSelectedId] = React.useState("ord_7312");
  const [confirming, setConfirming] = React.useState(false);
  const [shipBusy, setShipBusy] = React.useState(false);
  const [notice, setNotice] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [syncError, setSyncError] = React.useState(false);
  const [syncIndex, setSyncIndex] = React.useState(0);

  const timers = React.useRef([]);
  const panelRef = React.useRef(null);
  const interacted = React.useRef(false);

  React.useEffect(() => {
    return () => timers.current.forEach((t) => clearTimeout(t));
  }, []);

  const later = (fn, ms) => {
    const id = setTimeout(fn, ms);
    timers.current.push(id);
  };

  const attempt = React.useRef(0);
  function refresh() {
    setLoading(true);
    setSyncError(false);
    later(() => {
      attempt.current += 1;
      if (attempt.current % 2 === 0) {
        setSyncError(true);
      } else {
        setSyncIndex((i) => Math.min(i + 1, SYNC_TIMES.length - 1));
      }
      setLoading(false);
    }, 900);
  }

  const counts = React.useMemo(() => {
    return {
      all: orders.length,
      awaiting: orders.filter((o) => o.status === "placed").length,
      shipped: orders.filter((o) => o.status === "shipped").length,
      exceptions: orders.filter((o) => o.status === "awaiting_payment" || o.status === "cancelled")
        .length,
    };
  }, [orders]);

  const weekRevenue = orders
    .filter((o) => o.status === "placed" || o.status === "shipped")
    .reduce((s, o) => s + o.total_cents, 0);

  const oldestUnshipped = orders
    .filter((o) => o.status === "placed")
    .slice()
    .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))[0];

  const visible = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = orders.filter((o) => {
      if (tab === "awaiting" && o.status !== "placed") return false;
      if (tab === "shipped" && o.status !== "shipped") return false;
      if (tab === "exceptions" && o.status !== "awaiting_payment" && o.status !== "cancelled")
        return false;
      if (!q) return true;
      return (
        o.order_reference.toLowerCase().includes(q) ||
        o.shipping_name.toLowerCase().includes(q) ||
        o.contact_email.toLowerCase().includes(q)
      );
    });
    list = list.slice().sort((a, b) => {
      const d = new Date(a.created_at) - new Date(b.created_at);
      return sort === "newest" ? -d : d;
    });
    return list;
  }, [orders, tab, query, sort]);

  const selected = orders.find((o) => o.id === selectedId) || null;

  React.useEffect(() => {
    if (!interacted.current) return;
    if (panelRef.current) panelRef.current.focus();
  }, [selectedId]);

  function openOrder(id) {
    interacted.current = true;
    setSelectedId(id);
    setConfirming(false);
    setShipBusy(false);
  }

  function confirmShip() {
    if (!selected) return;
    setShipBusy(true);
    later(() => {
      const ref = selected.order_reference;
      setOrders((prev) =>
        prev.map((o) =>
          o.id === selected.id ? { ...o, status: "shipped", shipped_at: NOW_STAMP } : o,
        ),
      );
      setShipBusy(false);
      setConfirming(false);
      setNotice(ref + " marked shipped · " + NOW_STAMP);
    }, 850);
  }

  const labelCls = "text-[11px] font-bold uppercase tracking-[0.14em]";
  const cellPad = "px-3 py-2.5 align-middle";

  function StatusTag({ status, size }) {
    const meta = STATUS_META[status];
    const base =
      "inline-flex items-center gap-1.5 rounded-none border-2 font-bold uppercase tracking-[0.1em] " +
      (size === "lg" ? "px-2.5 py-1 text-[11px]" : "px-2 py-0.5 text-[10px]");
    let style = { borderColor: ink, color: ink, backgroundColor: "transparent" };
    if (meta.tone === "solid") style = { borderColor: ink, backgroundColor: ink, color: surface };
    if (meta.tone === "accent")
      style = { borderColor: accent, color: accent, backgroundColor: "transparent" };
    if (meta.tone === "muted")
      style = { borderColor: hair, color: neutral, backgroundColor: "transparent" };
    const Glyph =
      status === "shipped"
        ? Check
        : status === "awaiting_payment"
          ? AlertCircle
          : status === "cancelled"
            ? X
            : Clock;
    return (
      <Badge className={base} style={style}>
        <Glyph className={size === "lg" ? "h-3.5 w-3.5" : "h-3 w-3"} aria-hidden="true" />
        {meta.label}
      </Badge>
    );
  }

  const metrics = [
    {
      label: "Awaiting shipment",
      value: String(counts.awaiting),
      hint: oldestUnshipped ? "Oldest " + oldestUnshipped.order_reference : "Desk clear",
    },
    { label: "Shipped this week", value: String(counts.shipped), hint: "Manual dispatch" },
    { label: "Orders, 7 days", value: String(counts.all), hint: "29 Oct – 04 Nov" },
    {
      label: "Taken, 7 days",
      value: priceOf(weekRevenue),
      hint: "Incl. VAT " + TAX_RATE_PERCENT + "%",
    },
  ];

  return (
    <div
      className="ao-root w-full"
      style={{
        backgroundColor: surface,
        color: ink,
        fontFamily: brand.fontBody,
        ["--ao-ink"]: ink,
        ["--ao-accent"]: accent,
        ["--ao-hair"]: hair,
      }}
    >
      <style>{`
        .ao-root :focus-visible { outline: 2px solid var(--ao-accent); outline-offset: 2px; }
        .ao-row { animation: ao-rise .2s ease-out both; }
        .ao-panel { animation: ao-rise .22s ease-out both; }
        @keyframes ao-rise { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }
        .ao-skel { background: var(--ao-hair); animation: ao-pulse 1.1s ease-in-out infinite; }
        @keyframes ao-pulse { 0%,100% { opacity: .4 } 50% { opacity: 1 } }
        .ao-bar { background: var(--ao-ink); animation: ao-slide 1s linear infinite; }
        @keyframes ao-slide { 0% { transform: translateX(-100%) } 100% { transform: translateX(300%) } }
        .ao-hit:hover { background: var(--ao-hair); }
        @media (prefers-reduced-motion: reduce) {
          .ao-row, .ao-panel, .ao-skel, .ao-bar { animation: none !important; }
        }
      `}</style>

      {/* Header */}
      <header className="flex flex-col gap-4 pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className={labelCls} style={{ color: accent }}>
            Fulfilment desk
          </p>
          <h1
            className="mt-2 text-[34px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[40px]"
            style={{ fontFamily: brand.fontHeading }}
          >
            Orders
          </h1>
          <p className="mt-2 max-w-[62ch] text-[14px] leading-[1.5]" style={{ color: neutral }}>
            {counts.awaiting === 0
              ? "Nothing is waiting to go out. Every paid order has been dispatched."
              : counts.awaiting +
                " orders are packed and paid for, waiting on you. Open a reference to check the address, then record the dispatch."}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <p className="text-[12px]" style={{ color: neutral }} aria-live="polite">
            {loading
              ? "Syncing with Stripe…"
              : syncError
                ? "Showing orders as of " + SYNC_TIMES[syncIndex] + " — may be out of date"
                : "Synced " + SYNC_TIMES[syncIndex] + " · Stripe webhooks live"}
          </p>
          <Button
            type="button"
            onClick={refresh}
            disabled={loading}
            className={
              "rounded-none border-2 px-3 py-2 text-[12px] font-bold uppercase tracking-[0.12em] " +
              (loading ? "opacity-60" : "")
            }
            style={{ borderColor: ink, backgroundColor: "transparent", color: ink }}
          >
            {loading ? "Refreshing…" : "Refresh"}
          </Button>
          <Button
            type="button"
            onClick={() => navigate("admin-products")}
            className="inline-flex items-center gap-2 rounded-none border-2 px-3 py-2 text-[12px] font-bold uppercase tracking-[0.12em]"
            style={{ borderColor: "transparent", backgroundColor: "transparent", color: neutral }}
          >
            <Package className="h-4 w-4" aria-hidden="true" />
            Products &amp; stock
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </header>

      {/* Ledger strip */}
      <div className="grid grid-cols-2 border-2 lg:grid-cols-4" style={{ borderColor: ink }}>
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className="px-4 py-4"
            style={{
              borderLeft: i % 2 !== 0 || i === 0 ? undefined : undefined,
              boxShadow: i === 0 ? "none" : "inset 2px 0 0 " + ink,
              borderTop: i > 1 ? "2px solid " + ink : undefined,
            }}
          >
            <p className={labelCls} style={{ color: neutral }}>
              {m.label}
            </p>
            <p
              className="mt-2 text-[28px] font-bold leading-none tracking-[-0.02em]"
              style={{ fontVariantNumeric: "tabular-nums", fontFamily: brand.fontHeading }}
            >
              {m.value}
            </p>
            <p
              className="mt-2 text-[12px]"
              style={{ color: neutral, fontVariantNumeric: "tabular-nums" }}
            >
              {m.hint}
            </p>
          </div>
        ))}
      </div>
      <div className="lg:hidden" />

      {notice && (
        <div
          role="status"
          className="ao-row mt-6 flex items-start gap-3 border-2 px-4 py-3"
          style={{ borderColor: ink, backgroundColor: faint }}
        >
          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p
            className="flex-1 text-[13px] font-medium"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {notice}
          </p>
          <button
            type="button"
            onClick={() => setNotice(null)}
            aria-label="Dismiss dispatch confirmation"
            className="rounded-none p-1"
            style={{ color: neutral }}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      )}

      <div className="mt-6 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_400px]">
        {/* Ledger */}
        <section className="border-2" style={{ borderColor: ink }} aria-labelledby="ledger-heading">
          <div
            className="flex flex-col gap-4 px-4 py-4"
            style={{ borderBottom: "2px solid " + ink }}
          >
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2
                id="ledger-heading"
                className="text-[18px] font-bold tracking-[-0.01em]"
                style={{ fontFamily: brand.fontHeading }}
              >
                Order ledger
              </h2>
              <p
                className="text-[12px]"
                style={{ color: neutral, fontVariantNumeric: "tabular-nums" }}
              >
                {visible.length} of {orders.length} shown
              </p>
            </div>

            <Tabs
              tabs={[
                { key: "awaiting", label: "Awaiting shipment · " + counts.awaiting },
                { key: "all", label: "All · " + counts.all },
                { key: "shipped", label: "Shipped · " + counts.shipped },
                { key: "exceptions", label: "Exceptions · " + counts.exceptions },
              ]}
              active={tab}
              onChange={setTab}
              className="w-full"
            />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
              <div className="flex-1">
                <Label htmlFor="order-search" className={labelCls} style={{ color: neutral }}>
                  Find order
                </Label>
                <div className="relative mt-1.5">
                  <Search
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
                    aria-hidden="true"
                    style={{ color: neutral }}
                  />
                  <Input
                    id="order-search"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="ORD-7311, name or email"
                    className="w-full rounded-none border-2 py-2 pl-9 pr-3 text-[13px]"
                    style={{ borderColor: ink, backgroundColor: surface, color: ink }}
                  />
                </div>
              </div>
              <div className="sm:w-[188px]">
                <Label htmlFor="order-sort" className={labelCls} style={{ color: neutral }}>
                  Order by
                </Label>
                <Select
                  id="order-sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="mt-1.5 w-full rounded-none border-2 px-3 py-2 text-[13px]"
                  style={{ borderColor: ink, backgroundColor: surface, color: ink }}
                >
                  <option value="newest">Newest placed first</option>
                  <option value="oldest">Oldest placed first</option>
                </Select>
              </div>
            </div>
          </div>

          {syncError && (
            <div
              className="ao-row flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-start"
              style={{ borderBottom: "2px solid " + ink }}
            >
              <AlertCircle
                className="h-5 w-5 shrink-0"
                aria-hidden="true"
                style={{ color: accent }}
              />
              <div className="flex-1">
                <h3 className="text-[14px] font-bold">Couldn’t reach the order service</h3>
                <p
                  className="mt-1 max-w-[60ch] text-[13px] leading-[1.5]"
                  style={{ color: neutral }}
                >
                  The sync at {SYNC_TIMES[syncIndex]} timed out, so anything placed since then is
                  missing from this list. Your filter and search are still set — try again.
                </p>
              </div>
              <Button
                type="button"
                onClick={refresh}
                className="shrink-0 rounded-none border-2 px-3 py-2 text-[12px] font-bold uppercase tracking-[0.12em]"
                style={{ borderColor: accent, backgroundColor: "transparent", color: accent }}
              >
                Try sync again
              </Button>
            </div>
          )}

          <div className="overflow-x-auto">
            <Table
              className="w-full border-collapse text-[13px]"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              <THead>
                <TR style={{ borderBottom: "2px solid " + ink }}>
                  <TH
                    scope="col"
                    className={cellPad + " text-left " + labelCls}
                    style={{ color: neutral }}
                  >
                    Reference
                  </TH>
                  <TH
                    scope="col"
                    className={cellPad + " text-left " + labelCls}
                    style={{ color: neutral }}
                  >
                    Placed
                  </TH>
                  <TH
                    scope="col"
                    className={cellPad + " text-left " + labelCls}
                    style={{ color: neutral }}
                  >
                    Customer
                  </TH>
                  <TH
                    scope="col"
                    className={cellPad + " text-right " + labelCls}
                    style={{ color: neutral }}
                  >
                    Items
                  </TH>
                  <TH
                    scope="col"
                    className={cellPad + " text-left " + labelCls}
                    style={{ color: neutral }}
                  >
                    Status
                  </TH>
                  <TH
                    scope="col"
                    className={cellPad + " text-right " + labelCls}
                    style={{ color: neutral }}
                  >
                    Total
                  </TH>
                </TR>
              </THead>
              <TBody>
                {loading &&
                  [0, 1, 2, 3, 4, 5].map((i) => (
                    <TR key={"skel-" + i} style={{ borderBottom: "1px solid " + hair }}>
                      <TD className={cellPad}>
                        <span className="ao-skel block h-3 w-20" />
                      </TD>
                      <TD className={cellPad}>
                        <span className="ao-skel block h-3 w-24" />
                      </TD>
                      <TD className={cellPad}>
                        <span className="ao-skel block h-3 w-32" />
                      </TD>
                      <TD className={cellPad}>
                        <span className="ao-skel ml-auto block h-3 w-6" />
                      </TD>
                      <TD className={cellPad}>
                        <span className="ao-skel block h-3 w-28" />
                      </TD>
                      <TD className={cellPad}>
                        <span className="ao-skel ml-auto block h-3 w-16" />
                      </TD>
                    </TR>
                  ))}

                {!loading &&
                  visible.map((o) => {
                    const isSelected = selected && selected.id === o.id;
                    const isException = o.status === "awaiting_payment" || o.status === "cancelled";
                    const qty = o.items.reduce((s, it) => s + it.quantity, 0);
                    return (
                      <TR
                        key={o.id}
                        className="ao-row ao-hit"
                        style={{
                          borderBottom: "1px solid " + hair,
                          backgroundColor: isSelected ? faint : "transparent",
                        }}
                      >
                        <TD
                          className={cellPad}
                          style={{
                            boxShadow: isException
                              ? "inset 3px 0 0 " + accent
                              : isSelected
                                ? "inset 3px 0 0 " + ink
                                : "none",
                          }}
                        >
                          <button
                            type="button"
                            onClick={() => openOrder(o.id)}
                            aria-current={isSelected ? "true" : undefined}
                            aria-label={
                              "Open order " + o.order_reference + ", " + STATUS_META[o.status].label
                            }
                            className="rounded-none text-[13px] font-bold tracking-[-0.01em] underline-offset-[3px] hover:underline"
                            style={{ color: ink }}
                          >
                            {o.order_reference}
                          </button>
                        </TD>
                        <TD className={cellPad} style={{ color: neutral }}>
                          {fmtShort(o.created_at)}
                        </TD>
                        <TD className={cellPad}>
                          <span className="block font-medium">{o.shipping_name}</span>
                          <span className="block text-[12px]" style={{ color: neutral }}>
                            {o.customer_id ? "Account" : "Guest checkout"}
                          </span>
                        </TD>
                        <TD className={cellPad + " text-right"} style={{ color: neutral }}>
                          {qty}
                        </TD>
                        <TD className={cellPad}>
                          <StatusTag status={o.status} />
                        </TD>
                        <TD className={cellPad + " text-right font-bold"}>
                          {priceOf(o.total_cents)}
                        </TD>
                      </TR>
                    );
                  })}
              </TBody>
            </Table>
          </div>

          {!loading && visible.length === 0 && orders.length > 0 && (
            <div className="px-4 py-10">
              <Empty
                title={query ? "No order matches “" + query + "”" : "Nothing in this tab"}
                description={
                  query
                    ? "References look like ORD-7311. You can also search by the shipping name or the contact email on the order."
                    : tab === "awaiting"
                      ? "Every paid order has been dispatched. New orders land here the moment Stripe confirms payment."
                      : tab === "exceptions"
                        ? "No payments are stuck and nothing has been cancelled this week."
                        : "No orders carry this status yet."
                }
                action={
                  query ? (
                    <Button
                      type="button"
                      onClick={() => setQuery("")}
                      className="rounded-none border-2 px-3 py-2 text-[12px] font-bold uppercase tracking-[0.12em]"
                      style={{ borderColor: ink, backgroundColor: ink, color: surface }}
                    >
                      Clear search
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={() => setTab("all")}
                      className="rounded-none border-2 px-3 py-2 text-[12px] font-bold uppercase tracking-[0.12em]"
                      style={{ borderColor: ink, backgroundColor: "transparent", color: ink }}
                    >
                      Show all orders
                    </Button>
                  )
                }
              />
            </div>
          )}

          {!loading && orders.length === 0 && (
            <div className="px-4 py-10">
              <Empty
                title="No orders yet"
                description="The ledger fills as soon as the first checkout completes. Until then, check the catalogue is published and stock is set."
                action={
                  <Button
                    type="button"
                    onClick={() => navigate("admin-products")}
                    className="rounded-none border-2 px-3 py-2 text-[12px] font-bold uppercase tracking-[0.12em]"
                    style={{ borderColor: ink, backgroundColor: ink, color: surface }}
                  >
                    Open products &amp; stock
                  </Button>
                }
              />
            </div>
          )}
        </section>

        {/* Detail panel */}
        <section
          aria-labelledby="detail-heading"
          className="border-2 lg:sticky lg:top-6"
          style={{ borderColor: ink }}
          ref={panelRef}
          tabIndex={-1}
        >
          {!selected && (
            <div className="px-4 py-10">
              <Empty
                title="No order open"
                description="Pick a reference from the ledger to see its items, shipping address and dispatch controls."
              />
            </div>
          )}

          {selected && (
            <div key={selected.id} className="ao-panel">
              <div className="px-4 py-4" style={{ borderBottom: "2px solid " + ink }}>
                <p className={labelCls} style={{ color: neutral }}>
                  Order
                </p>
                <div className="mt-1.5 flex items-end justify-between gap-3">
                  <h2
                    id="detail-heading"
                    className="text-[26px] font-bold leading-none tracking-[-0.03em]"
                    style={{ fontFamily: brand.fontHeading, fontVariantNumeric: "tabular-nums" }}
                  >
                    {selected.order_reference}
                  </h2>
                  <StatusTag status={selected.status} size="lg" />
                </div>
              </div>

              <dl
                className="grid grid-cols-2 gap-x-4 gap-y-3 px-4 py-4"
                style={{ borderBottom: "1px solid " + hair }}
              >
                <div>
                  <dt className={labelCls} style={{ color: neutral }}>
                    Placed
                  </dt>
                  <dd className="mt-1 text-[13px]" style={{ fontVariantNumeric: "tabular-nums" }}>
                    {fmtLong(selected.created_at)}
                  </dd>
                </div>
                <div>
                  <dt className={labelCls} style={{ color: neutral }}>
                    Channel
                  </dt>
                  <dd className="mt-1 text-[13px]">
                    {selected.customer_id ? "Account " + selected.customer_id : "Guest checkout"}
                  </dd>
                </div>
                <div className="col-span-2">
                  <dt className={labelCls} style={{ color: neutral }}>
                    Contact email
                  </dt>
                  <dd className="mt-1 break-all text-[13px]">{selected.contact_email}</dd>
                </div>
                <div className="col-span-2">
                  <dt className={labelCls} style={{ color: neutral }}>
                    Stripe payment intent
                  </dt>
                  <dd
                    className="mt-1 break-all text-[12px]"
                    style={{ color: neutral, fontVariantNumeric: "tabular-nums" }}
                  >
                    {selected.stripe_payment_intent}
                  </dd>
                </div>
              </dl>

              <div className="px-4 py-4" style={{ borderBottom: "1px solid " + hair }}>
                <h3 className={labelCls} style={{ color: neutral }}>
                  Ship to
                </h3>
                <p className="mt-2 text-[14px] font-bold">{selected.shipping_name}</p>
                <address
                  className="mt-1 whitespace-pre-line text-[13px] not-italic leading-[1.5]"
                  style={{ color: neutral }}
                >
                  {selected.shipping_address}
                </address>
                <p className="mt-3 text-[13px]">
                  <span className="font-bold">
                    {
                      (SHIPPING_OPTIONS.find((s) => s.id === selected.shipping_option_id) || {})
                        .name
                    }
                  </span>
                  <span style={{ color: neutral, fontVariantNumeric: "tabular-nums" }}>
                    {" — " + priceOf(selected.shipping_cents) + " flat rate"}
                  </span>
                </p>
              </div>

              <div className="px-4 py-4" style={{ borderBottom: "1px solid " + hair }}>
                <h3 className={labelCls + " mb-2"} style={{ color: neutral }}>
                  Items to pick
                </h3>
                <Table
                  className="w-full border-collapse text-[13px]"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  <THead>
                    <TR style={{ borderBottom: "2px solid " + ink }}>
                      <TH
                        scope="col"
                        className={"py-2 pr-2 text-left " + labelCls}
                        style={{ color: neutral }}
                      >
                        Product
                      </TH>
                      <TH
                        scope="col"
                        className={"py-2 px-2 text-right " + labelCls}
                        style={{ color: neutral }}
                      >
                        Qty
                      </TH>
                      <TH
                        scope="col"
                        className={"py-2 pl-2 text-right " + labelCls}
                        style={{ color: neutral }}
                      >
                        Line
                      </TH>
                    </TR>
                  </THead>
                  <TBody>
                    {selected.items.map((it) => (
                      <TR key={it.id} style={{ borderBottom: "1px solid " + hair }}>
                        <TD className="py-2 pr-2">
                          <span className="block font-medium leading-[1.35]">
                            {it.product_name}
                          </span>
                          <span className="block text-[12px]" style={{ color: neutral }}>
                            {priceOf(it.unit_price_cents)} each
                          </span>
                        </TD>
                        <TD className="py-2 px-2 text-right font-bold">{it.quantity}</TD>
                        <TD className="py-2 pl-2 text-right">
                          {priceOf(it.unit_price_cents * it.quantity)}
                        </TD>
                      </TR>
                    ))}
                  </TBody>
                </Table>
              </div>

              <dl
                className="px-4 py-4 text-[13px]"
                style={{ borderBottom: "2px solid " + ink, fontVariantNumeric: "tabular-nums" }}
              >
                <div className="flex justify-between py-1">
                  <dt style={{ color: neutral }}>Subtotal</dt>
                  <dd>{priceOf(selected.subtotal_cents)}</dd>
                </div>
                <div className="flex justify-between py-1">
                  <dt style={{ color: neutral }}>Shipping</dt>
                  <dd>{priceOf(selected.shipping_cents)}</dd>
                </div>
                <div className="flex justify-between py-1">
                  <dt style={{ color: neutral }}>VAT at {TAX_RATE_PERCENT}%</dt>
                  <dd>{priceOf(selected.tax_cents)}</dd>
                </div>
                <div
                  className="mt-2 flex items-end justify-between pt-2"
                  style={{ borderTop: "2px solid " + ink }}
                >
                  <dt className={labelCls}>Total {selected.currency}</dt>
                  <dd className="text-[22px] font-bold leading-none tracking-[-0.02em]">
                    {priceOf(selected.total_cents)}
                  </dd>
                </div>
              </dl>

              <div className="px-4 py-4">
                {selected.status === "placed" && !confirming && (
                  <>
                    <Button
                      type="button"
                      onClick={() => setConfirming(true)}
                      className="w-full rounded-none border-2 px-4 py-3 text-[13px] font-bold uppercase tracking-[0.14em]"
                      style={{
                        borderColor: ink,
                        backgroundColor: ink,
                        color: surface,
                        minHeight: 44,
                      }}
                    >
                      Mark as shipped
                    </Button>
                    <p className="mt-2 text-[12px] leading-[1.5]" style={{ color: neutral }}>
                      Records dispatch against {selected.order_reference}. No carrier label or
                      tracking is created.
                    </p>
                  </>
                )}

                {selected.status === "placed" && confirming && !shipBusy && (
                  <div className="ao-row">
                    <p className="text-[13px] font-bold">
                      Dispatch {selected.items.reduce((s, it) => s + it.quantity, 0)} items to{" "}
                      {selected.shipping_name}?
                    </p>
                    <p className="mt-1 text-[12px] leading-[1.5]" style={{ color: neutral }}>
                      The status changes to Shipped straight away and, if the order sits under an
                      account, the shopper sees it in their order history.
                    </p>
                    <div className="mt-3 flex gap-2">
                      <Button
                        type="button"
                        onClick={confirmShip}
                        className="flex-1 rounded-none border-2 px-3 py-3 text-[12px] font-bold uppercase tracking-[0.12em]"
                        style={{
                          borderColor: ink,
                          backgroundColor: ink,
                          color: surface,
                          minHeight: 44,
                        }}
                      >
                        Confirm dispatch
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setConfirming(false)}
                        className="rounded-none border-2 px-3 py-3 text-[12px] font-bold uppercase tracking-[0.12em]"
                        style={{
                          borderColor: ink,
                          backgroundColor: "transparent",
                          color: ink,
                          minHeight: 44,
                        }}
                      >
                        Keep waiting
                      </Button>
                    </div>
                  </div>
                )}

                {shipBusy && (
                  <div aria-live="polite">
                    <Button
                      type="button"
                      disabled
                      className="w-full rounded-none border-2 px-4 py-3 text-[13px] font-bold uppercase tracking-[0.14em] opacity-70"
                      style={{
                        borderColor: ink,
                        backgroundColor: ink,
                        color: surface,
                        minHeight: 44,
                      }}
                    >
                      Recording dispatch…
                    </Button>
                    <div
                      className="mt-2 h-[2px] w-full overflow-hidden"
                      style={{ backgroundColor: hair }}
                    >
                      <div className="ao-bar h-full w-1/3" />
                    </div>
                  </div>
                )}

                {selected.status === "shipped" && (
                  <div className="ao-row">
                    <div
                      className="flex items-center justify-between border-2 px-3 py-3"
                      style={{ borderColor: ink }}
                    >
                      <span className={labelCls}>Dispatched</span>
                      <span
                        className="text-[13px] font-bold"
                        style={{ fontVariantNumeric: "tabular-nums" }}
                      >
                        {selected.shipped_at}
                      </span>
                    </div>
                    <p className="mt-2 text-[12px] leading-[1.5]" style={{ color: neutral }}>
                      Nothing left to do on this one. The shopper can see the status if the order is
                      under an account.
                    </p>
                  </div>
                )}

                {selected.status === "awaiting_payment" && (
                  <div>
                    <Button
                      type="button"
                      disabled
                      aria-describedby="ship-blocked"
                      className="w-full cursor-not-allowed rounded-none border-2 px-4 py-3 text-[13px] font-bold uppercase tracking-[0.14em] opacity-50"
                      style={{
                        borderColor: neutral,
                        backgroundColor: "transparent",
                        color: neutral,
                        minHeight: 44,
                      }}
                    >
                      Mark as shipped
                    </Button>
                    <p
                      id="ship-blocked"
                      className="mt-2 flex gap-2 text-[12px] leading-[1.5]"
                      style={{ color: accent }}
                    >
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>
                        Stripe hasn’t confirmed this payment yet. Dispatch unlocks when the webhook
                        marks {selected.stripe_payment_intent} as succeeded — don’t send the goods
                        before then.
                      </span>
                    </p>
                  </div>
                )}

                {selected.status === "cancelled" && (
                  <div>
                    <Button
                      type="button"
                      disabled
                      aria-describedby="ship-cancelled"
                      className="w-full cursor-not-allowed rounded-none border-2 px-4 py-3 text-[13px] font-bold uppercase tracking-[0.14em] opacity-50"
                      style={{
                        borderColor: neutral,
                        backgroundColor: "transparent",
                        color: neutral,
                        minHeight: 44,
                      }}
                    >
                      Mark as shipped
                    </Button>
                    <p
                      id="ship-cancelled"
                      className="mt-2 text-[12px] leading-[1.5]"
                      style={{ color: neutral }}
                    >
                      {selected.cancelled_note}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </section>
      </div>

      <div className="mt-6" style={{ borderTop: "1px solid " + hair }}>
        <p className="pt-3 text-[12px]" style={{ color: neutral }}>
          Fulfilment is manual: statuses recorded here are the only record of dispatch. Shipping
          rates and the VAT rate are set in{" "}
          <button
            type="button"
            onClick={() => navigate("admin-products")}
            className="rounded-none font-bold underline underline-offset-[3px]"
            style={{ color: ink }}
          >
            Products &amp; store settings
          </button>
          .
        </p>
      </div>
    </div>
  );
}
