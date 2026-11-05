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
const {
  Button,
  Input,
  Textarea,
  Label,
  Select,
  Checkbox,
  Table,
  THead,
  TBody,
  TR,
  TH,
  TD,
  Tabs,
  Stat,
  Empty,
} = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Plus, Search, Check, X, ChevronRight, Trash, Edit, Filter, AlertCircle, CheckCircle } =
  Icons;

const INITIAL_PRODUCTS = [
  {
    id: "PRD-0142",
    name: "Ethiopia Guji Natural, 250g",
    description:
      "Anaerobic natural from Shakiso. Blueberry, jasmine, cane sugar. Roasted for filter on 28 Oct.",
    price_cents: 1450,
    image_url: "https://cdn.shop/img/guji-250.jpg",
    stock_quantity: 42,
    published: true,
    created_at: "2026-09-12",
    open_orders: 2,
  },
  {
    id: "PRD-0138",
    name: "Colombia Huila Washed, 250g",
    description: "Caturra and Castillo from the Pitalito co-op. Red apple, toffee, clean finish.",
    price_cents: 1300,
    image_url: "https://cdn.shop/img/huila-250.jpg",
    stock_quantity: 0,
    published: true,
    created_at: "2026-08-30",
    open_orders: 0,
  },
  {
    id: "PRD-0151",
    name: "Decaf Brazil Fazenda Rainha, 250g",
    description: "Sugarcane EA decaf. Hazelnut, milk chocolate, low acidity.",
    price_cents: 1250,
    image_url: "https://cdn.shop/img/decaf-250.jpg",
    stock_quantity: 18,
    published: true,
    created_at: "2026-09-29",
    open_orders: 1,
  },
  {
    id: "PRD-0127",
    name: "Stoneware Pour-Over Cone, Ash Glaze",
    description: "Thrown in Deptford by Rhona Vale. Takes a size 02 paper. Dishwasher safe.",
    price_cents: 3200,
    image_url: "https://cdn.shop/img/cone-ash.jpg",
    stock_quantity: 7,
    published: true,
    created_at: "2026-07-14",
    open_orders: 0,
  },
  {
    id: "PRD-0119",
    name: "V60 Filter Papers, pack of 100",
    description: "Tabbed, oxygen-bleached, size 02. Fits the stoneware cone.",
    price_cents: 600,
    image_url: "https://cdn.shop/img/papers-100.jpg",
    stock_quantity: 134,
    published: true,
    created_at: "2026-05-02",
    open_orders: 0,
  },
  {
    id: "PRD-0160",
    name: "Cold Brew Carafe, 1 litre",
    description: "Borosilicate carafe with a stainless steel brew basket and silicone seal.",
    price_cents: 1800,
    image_url: "https://cdn.shop/img/carafe-1l.jpg",
    stock_quantity: 3,
    published: true,
    created_at: "2026-10-08",
    open_orders: 0,
  },
  {
    id: "PRD-0133",
    name: "Espresso Tamper, 58mm Walnut",
    description: "Flat base, oiled walnut handle. Weighted at 420g.",
    price_cents: 2600,
    image_url: "https://cdn.shop/img/tamper-58.jpg",
    stock_quantity: 11,
    published: false,
    created_at: "2026-06-21",
    open_orders: 0,
  },
  {
    id: "PRD-0166",
    name: "Roaster's Choice, three-month box",
    description: "Three 250g bags, one a month. Draft — pricing still under review with Nadia.",
    price_cents: 4800,
    image_url: "https://cdn.shop/img/box-3m.jpg",
    stock_quantity: 25,
    published: false,
    created_at: "2026-11-02",
    open_orders: 0,
  },
  {
    id: "PRD-0108",
    name: "Linen Brew Apron, Charcoal",
    description: "Heavyweight Irish linen, cross-back straps, one size. Stonewashed.",
    price_cents: 3800,
    image_url: "https://cdn.shop/img/apron-charcoal.jpg",
    stock_quantity: 12,
    published: true,
    created_at: "2026-04-18",
    open_orders: 0,
  },
  {
    id: "PRD-0171",
    name: "Deptford Tumbler, pair",
    description: "Two 200ml handleless tumblers, speckled clay body, clear glaze.",
    price_cents: 2400,
    image_url: "https://cdn.shop/img/tumbler-pair.jpg",
    stock_quantity: 0,
    published: true,
    created_at: "2026-10-26",
    open_orders: 0,
  },
  {
    id: "PRD-0115",
    name: "Brew Scale & Timer, 2kg",
    description: "0.1g resolution, USB-C, auto-timer on first drip. Two-year warranty.",
    price_cents: 5900,
    image_url: "https://cdn.shop/img/scale-2kg.jpg",
    stock_quantity: 6,
    published: true,
    created_at: "2026-05-30",
    open_orders: 0,
  },
];

const INITIAL_SHIPPING = [
  { id: "SHP-01", name: "Royal Mail Tracked 48", cost_cents: 395, active: true },
  { id: "SHP-02", name: "Royal Mail Tracked 24", cost_cents: 595, active: true },
  { id: "SHP-03", name: "DPD Next Day, order by 2pm", cost_cents: 795, active: true },
  { id: "SHP-04", name: "Collect from the Deptford counter", cost_cents: 0, active: true },
  { id: "SHP-05", name: "Saturday guaranteed", cost_cents: 1095, active: false },
];

const INITIAL_SETTINGS = { id: "set_1", tax_rate_percent: 20, currency: "GBP" };

const STATUS_FILTERS = [
  { key: "all", label: "All statuses" },
  { key: "live", label: "Live" },
  { key: "low", label: "Low stock" },
  { key: "out", label: "Out of stock" },
  { key: "draft", label: "Draft" },
];

const BLANK_PRODUCT = {
  name: "",
  description: "",
  price: "",
  stock_quantity: "",
  image_url: "",
  published: true,
};

export default function Screen() {
  const navigate = useNavigate();
  const ink = brand.primaryColor;
  const accent = brand.accentColor;
  const neutral = brand.neutralColor;
  const paper = brand.backgroundColor;
  const radius = brand.radius;

  const rgba = (hex, a) => {
    const h = hex.replace("#", "");
    const f =
      h.length === 3
        ? h
            .split("")
            .map((c) => c + c)
            .join("")
        : h;
    const n = parseInt(f, 16);
    return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
  };
  const hair = rgba(ink, 0.14);

  const [tab, setTab] = React.useState("products");
  const [products, setProducts] = React.useState(INITIAL_PRODUCTS);
  const [shipping, setShipping] = React.useState(INITIAL_SHIPPING);
  const [settings, setSettings] = React.useState(INITIAL_SETTINGS);

  const [query, setQuery] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [editor, setEditor] = React.useState(null);
  const [confirmId, setConfirmId] = React.useState(null);
  const [blockedId, setBlockedId] = React.useState(null);
  const [justAdded, setJustAdded] = React.useState(null);
  const [stockSaved, setStockSaved] = React.useState(null);
  const [banner, setBanner] = React.useState(null);

  const [syncStale, setSyncStale] = React.useState(true);
  const [syncLabel, setSyncLabel] = React.useState("09:41");
  const [refreshing, setRefreshing] = React.useState(false);

  const [shipForm, setShipForm] = React.useState({
    mode: "new",
    id: null,
    name: "",
    cost: "",
    errors: {},
    saving: false,
  });
  const [shipConfirmId, setShipConfirmId] = React.useState(null);

  const [taxForm, setTaxForm] = React.useState({
    rate: String(INITIAL_SETTINGS.tax_rate_percent),
    error: "",
    saving: false,
    savedAt: null,
  });

  const timers = React.useRef([]);
  React.useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const later = (fn, ms) => {
    timers.current.push(setTimeout(fn, ms));
  };
  const clock = () =>
    new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

  const symbol = settings.currency === "GBP" ? "£" : settings.currency + " ";
  const money = (cents) => symbol + (cents / 100).toFixed(2);

  const statusOf = (p) => {
    if (!p.published) return "draft";
    if (p.stock_quantity === 0) return "out";
    if (p.stock_quantity <= 5) return "low";
    return "live";
  };
  const statusCopy = { live: "Live", low: "Low stock", out: "Out of stock", draft: "Draft" };

  const visible = products.filter((p) => {
    const q = query.trim().toLowerCase();
    const matchQ = !q || p.name.toLowerCase().includes(q) || p.id.toLowerCase().includes(q);
    const matchS = statusFilter === "all" || statusOf(p) === statusFilter;
    return matchQ && matchS;
  });

  const liveCount = products.filter((p) => statusOf(p) === "live").length;
  const outCount = products.filter((p) => statusOf(p) === "out").length;
  const lowCount = products.filter((p) => statusOf(p) === "low").length;
  const stockValue = products.reduce((s, p) => s + p.price_cents * p.stock_quantity, 0);
  const activeShipping = shipping.filter((s) => s.active).length;

  const css = `
.ob-row-in { animation: obRowIn 280ms ease-out both; }
.ob-panel-in { animation: obPanelIn 180ms ease-out both; }
@keyframes obRowIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
@keyframes obPanelIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
@keyframes obSweep { 0% { transform: translateX(-100%); } 100% { transform: translateX(300%); } }
.ob-sweep { position: relative; overflow: hidden; }
.ob-sweep::after { content: ''; position: absolute; top: 0; bottom: 0; left: 0; width: 34%; background: ${ink}; animation: obSweep 900ms linear infinite; }
.ob-focus:focus-visible { outline: 2px solid ${accent}; outline-offset: 2px; }
.ob-focus { transition: opacity 120ms ease, background-color 120ms ease, color 120ms ease; }
@media (prefers-reduced-motion: reduce) { .ob-row-in, .ob-panel-in, .ob-sweep::after { animation: none !important; } }
`;

  const label = "text-[11px] font-bold uppercase tracking-[0.16em]";
  const fieldCls = "ob-focus w-full border-2 px-2.5 py-2 text-[14px] bg-transparent";
  const fieldStyle = { borderColor: ink, borderRadius: radius, color: ink, backgroundColor: paper };
  const thCls =
    "text-left py-2 px-3 text-[11px] font-bold uppercase tracking-[0.14em] whitespace-nowrap";
  const tdCls = "py-2.5 px-3 text-[13px] align-middle";

  const primaryBtn = {
    backgroundColor: ink,
    color: paper,
    borderRadius: radius,
    border: `2px solid ${ink}`,
  };
  const ghostBtn = {
    backgroundColor: "transparent",
    color: ink,
    borderRadius: radius,
    border: `2px solid ${ink}`,
  };
  const quietBtn = {
    backgroundColor: "transparent",
    color: neutral,
    borderRadius: radius,
    border: `2px solid transparent`,
  };

  function flash(kind, text) {
    setBanner({ kind, text });
  }

  function refresh() {
    setRefreshing(true);
    later(() => {
      setRefreshing(false);
      setSyncStale(false);
      setSyncLabel(clock());
    }, 900);
  }

  function openNew() {
    setTab("products");
    setConfirmId(null);
    setEditor({ mode: "new", id: null, values: { ...BLANK_PRODUCT }, errors: {}, saving: false });
  }

  function openEdit(p) {
    setConfirmId(null);
    setEditor({
      mode: "edit",
      id: p.id,
      saving: false,
      errors: {},
      values: {
        name: p.name,
        description: p.description,
        price: (p.price_cents / 100).toFixed(2),
        stock_quantity: String(p.stock_quantity),
        image_url: p.image_url,
        published: p.published,
      },
    });
  }

  function setValue(key, val) {
    setEditor((e) => ({
      ...e,
      values: { ...e.values, [key]: val },
      errors: { ...e.errors, [key]: undefined },
    }));
  }

  function submitProduct(ev) {
    ev.preventDefault();
    const v = editor.values;
    const errors = {};
    if (!v.name.trim()) errors.name = "Give the product a name shoppers will recognise.";
    const price = Number(v.price);
    if (!String(v.price).trim()) errors.price = "Enter a price.";
    else if (Number.isNaN(price) || price <= 0)
      errors.price = `“${v.price}” isn’t a price. Use digits, like 14.50.`;
    const stock = Number(v.stock_quantity);
    if (!String(v.stock_quantity).trim())
      errors.stock_quantity = "Enter the stock you hold. Use 0 if none.";
    else if (!Number.isInteger(stock) || stock < 0)
      errors.stock_quantity = "Stock must be a whole number, 0 or more.";
    if (!v.image_url.trim()) errors.image_url = "The catalogue card needs an image URL.";

    if (Object.keys(errors).length) {
      setEditor((e) => ({ ...e, errors }));
      flash(
        "error",
        "Nothing was saved — check the highlighted fields below. Your entries are still here.",
      );
      return;
    }

    setEditor((e) => ({ ...e, saving: true }));
    later(() => {
      if (editor.mode === "new") {
        const nextNum = 172 + products.filter((p) => p.id.startsWith("PRD-02")).length;
        const id = "PRD-0" + nextNum;
        const row = {
          id,
          name: v.name.trim(),
          description: v.description.trim(),
          price_cents: Math.round(price * 100),
          image_url: v.image_url.trim(),
          stock_quantity: stock,
          published: v.published,
          created_at: "2026-11-04",
          open_orders: 0,
        };
        setProducts((list) => [row, ...list]);
        setJustAdded(id);
        setQuery("");
        setStatusFilter("all");
        flash(
          "success",
          `${row.name} saved as ${id} — ${row.published ? "live in the catalogue now" : "kept as a draft, not shown to shoppers"}.`,
        );
      } else {
        setProducts((list) =>
          list.map((p) =>
            p.id === editor.id
              ? {
                  ...p,
                  name: v.name.trim(),
                  description: v.description.trim(),
                  price_cents: Math.round(price * 100),
                  image_url: v.image_url.trim(),
                  stock_quantity: stock,
                  published: v.published,
                }
              : p,
          ),
        );
        flash("success", `${v.name.trim()} updated — the catalogue shows the new details.`);
      }
      setEditor(null);
      setSyncLabel(clock());
      setSyncStale(false);
    }, 650);
  }

  function togglePublish(p) {
    setProducts((list) => list.map((x) => (x.id === p.id ? { ...x, published: !x.published } : x)));
    flash(
      "success",
      p.published
        ? `${p.name} unpublished — it has been removed from the shopper-facing catalogue.`
        : `${p.name} published — shoppers can see it now.`,
    );
  }

  function changeStock(p, raw) {
    const n = raw === "" ? 0 : Math.max(0, Math.floor(Number(raw) || 0));
    setProducts((list) => list.map((x) => (x.id === p.id ? { ...x, stock_quantity: n } : x)));
    setStockSaved(p.id);
    later(() => setStockSaved((cur) => (cur === p.id ? null : cur)), 1800);
  }

  function removeProduct(p) {
    if (p.open_orders > 0) {
      setConfirmId(null);
      setBlockedId(p.id);
      flash(
        "error",
        `${p.name} can’t be removed — it is on ${p.open_orders} order${p.open_orders > 1 ? "s" : ""} awaiting shipment. Unpublish it instead and remove it once those orders ship.`,
      );
      return;
    }
    setProducts((list) => list.filter((x) => x.id !== p.id));
    setConfirmId(null);
    flash("success", `${p.name} removed. It no longer appears in the catalogue.`);
  }

  function submitShipping(ev) {
    ev.preventDefault();
    const errors = {};
    if (!shipForm.name.trim()) errors.name = "Name the option as shoppers will see it at checkout.";
    const cost = Number(shipForm.cost);
    if (!String(shipForm.cost).trim()) errors.cost = "Enter a flat cost. Use 0 for free.";
    else if (Number.isNaN(cost) || cost < 0)
      errors.cost = `“${shipForm.cost}” isn’t a cost. Use digits, like 3.95.`;
    if (Object.keys(errors).length) {
      setShipForm((f) => ({ ...f, errors }));
      return;
    }

    setShipForm((f) => ({ ...f, saving: true, errors: {} }));
    later(() => {
      if (shipForm.mode === "edit") {
        setShipping((list) =>
          list.map((s) =>
            s.id === shipForm.id
              ? { ...s, name: shipForm.name.trim(), cost_cents: Math.round(cost * 100) }
              : s,
          ),
        );
        flash("success", `${shipForm.name.trim()} updated — checkout shows the new rate.`);
      } else {
        const id = "SHP-" + String(shipping.length + 1).padStart(2, "0");
        setShipping((list) => [
          ...list,
          { id, name: shipForm.name.trim(), cost_cents: Math.round(cost * 100), active: true },
        ]);
        flash("success", `${shipForm.name.trim()} added — shoppers can choose it at checkout.`);
      }
      setShipForm({ mode: "new", id: null, name: "", cost: "", errors: {}, saving: false });
    }, 550);
  }

  function submitTax(ev) {
    ev.preventDefault();
    const n = Number(taxForm.rate);
    if (!String(taxForm.rate).trim() || Number.isNaN(n)) {
      setTaxForm((f) => ({
        ...f,
        error: `“${taxForm.rate}” isn’t a number. Enter the rate as a percentage, like 20.`,
      }));
      return;
    }
    if (n < 0 || n > 40) {
      setTaxForm((f) => ({ ...f, error: "Enter a rate between 0 and 40 percent." }));
      return;
    }
    setTaxForm((f) => ({ ...f, error: "", saving: true }));
    later(() => {
      setSettings((s) => ({ ...s, tax_rate_percent: n }));
      setTaxForm((f) => ({ ...f, saving: false, savedAt: clock() }));
    }, 600);
  }

  function renderStockMeter(stock) {
    const thresholds = [1, 5, 15, 40, 100];
    return (
      <span className="inline-flex items-center gap-[2px]" aria-hidden="true">
        {thresholds.map((t, i) => (
          <span
            key={i}
            className="block h-3 w-[5px]"
            style={{
              border: `1px solid ${stock === 0 ? accent : ink}`,
              backgroundColor: stock >= t ? ink : "transparent",
            }}
          />
        ))}
      </span>
    );
  }

  function statusBadge(s) {
    const isOut = s === "out";
    const isDraft = s === "draft";
    return (
      <span
        className="inline-flex items-center gap-1 px-1.5 py-[2px] text-[11px] font-bold uppercase tracking-[0.1em]"
        style={{
          border: `${isDraft ? "1px dashed" : "2px solid"} ${isOut ? accent : isDraft ? neutral : ink}`,
          color: isOut ? accent : isDraft ? neutral : ink,
          borderRadius: radius,
        }}
      >
        {isOut ? <AlertCircle className="h-3 w-3" aria-hidden="true" /> : null}
        {statusCopy[s]}
      </span>
    );
  }

  const exampleSubtotal = 3500;
  const exampleShipping = 395;
  const rateNum = Number(taxForm.rate);
  const previewRate = Number.isNaN(rateNum) ? settings.tax_rate_percent : rateNum;
  const exampleTax = Math.round((exampleSubtotal + exampleShipping) * (previewRate / 100));

  const tabs = [
    { key: "products", label: `Catalogue (${products.length})` },
    { key: "shipping", label: `Shipping options (${shipping.length})` },
    { key: "tax", label: "Tax & VAT" },
  ];

  return (
    <div
      className="min-h-full px-4 py-6 sm:px-8 sm:py-8"
      style={{ backgroundColor: paper, color: ink, fontFamily: brand.fontBody }}
    >
      <style>{css}</style>
      <div className="mx-auto w-full max-w-[1180px]">
        <header
          className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4 border-b-2 pb-5"
          style={{ borderColor: ink }}
        >
          <div className="min-w-[280px]">
            <p className={label} style={{ color: neutral }}>
              Owner admin · Store
            </p>
            <h1
              className="mt-2 text-[34px] font-bold leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: brand.fontHeading }}
            >
              Products &amp; store settings
            </h1>
            <p className="mt-2 max-w-[62ch] text-[13px] leading-[1.6]" style={{ color: neutral }}>
              {products.length} products, {liveCount} live. Edits to price, stock and publication
              reach the shop catalogue the moment you save.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => navigate("admin-orders")}
              className="ob-focus inline-flex h-9 items-center gap-1.5 px-3 text-[12px] font-bold uppercase tracking-[0.12em] hover:opacity-70"
              style={quietBtn}
            >
              Orders <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <Button
              type="button"
              onClick={openNew}
              className="ob-focus inline-flex h-11 items-center gap-2 px-4 text-[13px] font-bold uppercase tracking-[0.12em] hover:opacity-85"
              style={primaryBtn}
            >
              <Plus className="h-4 w-4" aria-hidden="true" /> New product
            </Button>
          </div>
        </header>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p
            className="flex items-center gap-2 text-[12px]"
            style={{ color: syncStale ? ink : neutral }}
          >
            <span
              className="inline-block h-2 w-2"
              aria-hidden="true"
              style={{
                backgroundColor: syncStale ? "transparent" : ink,
                border: `2px solid ${syncStale ? neutral : ink}`,
              }}
            />
            {refreshing
              ? "Pulling the latest catalogue…"
              : syncStale
                ? `Showing catalogue data from ${syncLabel}. Stock may have moved since.`
                : `Catalogue in sync · ${syncLabel}`}
          </p>
          <button
            type="button"
            onClick={refresh}
            disabled={refreshing}
            className="ob-focus h-9 px-3 text-[12px] font-bold uppercase tracking-[0.12em] hover:opacity-80 disabled:opacity-40"
            style={ghostBtn}
          >
            {refreshing ? "Refreshing…" : "Refresh data"}
          </button>
        </div>

        <div
          className="mt-4 h-[3px] w-full overflow-hidden"
          style={{ backgroundColor: refreshing ? rgba(ink, 0.12) : "transparent" }}
        >
          {refreshing ? <div className="ob-sweep h-full w-full" /> : null}
        </div>

        <section
          aria-label="Catalogue summary"
          className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4"
        >
          {[
            {
              l: "Live products",
              v: String(liveCount),
              h: `of ${products.length} in the catalogue`,
            },
            { l: "Low stock", v: String(lowCount), h: "5 or fewer units left" },
            { l: "Out of stock", v: String(outCount), h: "cannot be added to a cart" },
            { l: "Stock on hand", v: money(stockValue), h: "retail value, VAT inclusive" },
          ].map((s) => (
            <div
              key={s.l}
              className="border-2 px-3 py-2.5"
              style={{ borderColor: ink, borderRadius: radius, fontVariantNumeric: "tabular-nums" }}
            >
              <Stat label={s.l} value={s.v} hint={s.h} />
            </div>
          ))}
        </section>

        {banner ? (
          <div
            role={banner.kind === "error" ? "alert" : "status"}
            className="ob-panel-in mt-5 flex items-start gap-3 border-2 px-3 py-2.5"
            style={{ borderColor: banner.kind === "error" ? accent : ink, borderRadius: radius }}
          >
            {banner.kind === "error" ? (
              <AlertCircle
                className="mt-[2px] h-4 w-4 shrink-0"
                aria-hidden="true"
                style={{ color: accent }}
              />
            ) : (
              <CheckCircle
                className="mt-[2px] h-4 w-4 shrink-0"
                aria-hidden="true"
                style={{ color: ink }}
              />
            )}
            <p
              className="flex-1 text-[13px] leading-[1.5]"
              style={{ color: banner.kind === "error" ? accent : ink }}
            >
              {banner.text}
            </p>
            <button
              type="button"
              aria-label="Dismiss message"
              onClick={() => setBanner(null)}
              className="ob-focus p-1 hover:opacity-70"
              style={{ color: banner.kind === "error" ? accent : ink }}
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        ) : null}

        <div className="mt-6">
          <Tabs tabs={tabs} active={tab} onChange={setTab} />
        </div>

        {tab === "products" ? (
          <section className="mt-6" aria-label="Catalogue">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2
                className="text-[20px] font-bold tracking-[-0.01em]"
                style={{ fontFamily: brand.fontHeading }}
              >
                Catalogue
              </h2>
              <div className="flex flex-wrap items-end gap-3">
                <div>
                  <Label htmlFor="cat-search" className={label} style={{ color: neutral }}>
                    Search
                  </Label>
                  <div className="relative mt-1">
                    <Search
                      className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2"
                      aria-hidden="true"
                      style={{ color: neutral }}
                    />
                    <Input
                      id="cat-search"
                      type="search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Name or product ID"
                      className={fieldCls + " pl-8 sm:w-[260px]"}
                      style={fieldStyle}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="cat-status" className={label} style={{ color: neutral }}>
                    Status
                  </Label>
                  <Select
                    id="cat-status"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className={fieldCls + " mt-1 sm:w-[170px]"}
                    style={fieldStyle}
                  >
                    {STATUS_FILTERS.map((f) => (
                      <option key={f.key} value={f.key}>
                        {f.label}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>

            {editor ? (
              <form
                onSubmit={submitProduct}
                className="ob-panel-in mt-5 border-2 p-4 sm:p-5"
                style={{ borderColor: ink, borderRadius: radius }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3
                      className="text-[16px] font-bold tracking-[-0.01em]"
                      style={{ fontFamily: brand.fontHeading }}
                    >
                      {editor.mode === "new"
                        ? "New product"
                        : `Edit ${editor.values.name || editor.id}`}
                    </h3>
                    <p className="mt-1 text-[12px]" style={{ color: neutral }}>
                      {editor.mode === "new"
                        ? "Saved products appear in the catalogue as soon as they are published."
                        : `Product ${editor.id} · added ${editor.values.created_at || ""}`}
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label="Close the product form"
                    onClick={() => setEditor(null)}
                    className="ob-focus p-1 hover:opacity-70"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <Label htmlFor="p-name" className={label} style={{ color: neutral }}>
                      Product name
                    </Label>
                    <Input
                      id="p-name"
                      value={editor.values.name}
                      onChange={(e) => setValue("name", e.target.value)}
                      aria-invalid={editor.errors.name ? "true" : undefined}
                      aria-describedby={editor.errors.name ? "p-name-err" : undefined}
                      className={fieldCls + " mt-1"}
                      style={{ ...fieldStyle, borderColor: editor.errors.name ? accent : ink }}
                    />
                    {editor.errors.name ? (
                      <p id="p-name-err" className="mt-1 text-[12px]" style={{ color: accent }}>
                        {editor.errors.name}
                      </p>
                    ) : null}
                  </div>
                  <div className="sm:col-span-1">
                    <Label htmlFor="p-price" className={label} style={{ color: neutral }}>
                      Price ({settings.currency})
                    </Label>
                    <Input
                      id="p-price"
                      inputMode="decimal"
                      value={editor.values.price}
                      onChange={(e) => setValue("price", e.target.value)}
                      aria-invalid={editor.errors.price ? "true" : undefined}
                      aria-describedby={editor.errors.price ? "p-price-err" : undefined}
                      className={fieldCls + " mt-1"}
                      style={{
                        ...fieldStyle,
                        borderColor: editor.errors.price ? accent : ink,
                        fontVariantNumeric: "tabular-nums",
                      }}
                    />
                    {editor.errors.price ? (
                      <p id="p-price-err" className="mt-1 text-[12px]" style={{ color: accent }}>
                        {editor.errors.price}
                      </p>
                    ) : null}
                  </div>
                  <div className="sm:col-span-1">
                    <Label htmlFor="p-stock" className={label} style={{ color: neutral }}>
                      Stock
                    </Label>
                    <Input
                      id="p-stock"
                      inputMode="numeric"
                      value={editor.values.stock_quantity}
                      onChange={(e) => setValue("stock_quantity", e.target.value)}
                      aria-invalid={editor.errors.stock_quantity ? "true" : undefined}
                      aria-describedby={editor.errors.stock_quantity ? "p-stock-err" : undefined}
                      className={fieldCls + " mt-1"}
                      style={{
                        ...fieldStyle,
                        borderColor: editor.errors.stock_quantity ? accent : ink,
                        fontVariantNumeric: "tabular-nums",
                      }}
                    />
                    {editor.errors.stock_quantity ? (
                      <p id="p-stock-err" className="mt-1 text-[12px]" style={{ color: accent }}>
                        {editor.errors.stock_quantity}
                      </p>
                    ) : null}
                  </div>
                  <div className="sm:col-span-6">
                    <Label htmlFor="p-image" className={label} style={{ color: neutral }}>
                      Image URL
                    </Label>
                    <Input
                      id="p-image"
                      value={editor.values.image_url}
                      onChange={(e) => setValue("image_url", e.target.value)}
                      aria-invalid={editor.errors.image_url ? "true" : undefined}
                      aria-describedby={editor.errors.image_url ? "p-image-err" : undefined}
                      className={fieldCls + " mt-1"}
                      style={{ ...fieldStyle, borderColor: editor.errors.image_url ? accent : ink }}
                    />
                    {editor.errors.image_url ? (
                      <p id="p-image-err" className="mt-1 text-[12px]" style={{ color: accent }}>
                        {editor.errors.image_url}
                      </p>
                    ) : null}
                  </div>
                  <div className="sm:col-span-6">
                    <Label htmlFor="p-desc" className={label} style={{ color: neutral }}>
                      Description
                    </Label>
                    <Textarea
                      id="p-desc"
                      rows={3}
                      value={editor.values.description}
                      onChange={(e) => setValue("description", e.target.value)}
                      className={fieldCls + " mt-1 leading-[1.6]"}
                      style={fieldStyle}
                    />
                    <p className="mt-1 text-[12px]" style={{ color: neutral }}>
                      Shown on the product detail page. Roast notes, materials, dimensions.
                    </p>
                  </div>
                </div>

                <div
                  className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t-2 pt-4"
                  style={{ borderColor: ink }}
                >
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="p-published"
                      checked={editor.values.published}
                      onChange={(e) =>
                        setValue(
                          "published",
                          e && e.target ? e.target.checked : !editor.values.published,
                        )
                      }
                      className="ob-focus h-4 w-4"
                      style={{ accentColor: ink }}
                    />
                    <Label htmlFor="p-published" className="text-[13px]">
                      Publish to the shop catalogue
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      onClick={() => setEditor(null)}
                      className="ob-focus h-10 px-4 text-[12px] font-bold uppercase tracking-[0.12em] hover:opacity-80"
                      style={ghostBtn}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={editor.saving}
                      className="ob-focus inline-flex h-10 items-center gap-2 px-4 text-[12px] font-bold uppercase tracking-[0.12em] hover:opacity-85 disabled:opacity-60"
                      style={primaryBtn}
                    >
                      {editor.saving ? (
                        "Saving…"
                      ) : (
                        <>
                          <Check className="h-4 w-4" aria-hidden="true" />
                          {editor.mode === "new" ? "Save product" : "Save changes"}
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            ) : null}

            {products.length === 0 ? (
              <div className="mt-6 border-2 p-6" style={{ borderColor: ink, borderRadius: radius }}>
                <Empty
                  title="Your catalogue is empty"
                  description="Nothing is listed for sale yet. Add your first product — a name, a price, a photo and the stock you hold — and it goes live the moment you publish it."
                  action={
                    <Button
                      type="button"
                      onClick={openNew}
                      className="ob-focus inline-flex h-10 items-center gap-2 px-4 text-[12px] font-bold uppercase tracking-[0.12em]"
                      style={primaryBtn}
                    >
                      <Plus className="h-4 w-4" aria-hidden="true" /> New product
                    </Button>
                  }
                />
              </div>
            ) : visible.length === 0 ? (
              <div className="mt-6 border-2 p-6" style={{ borderColor: ink, borderRadius: radius }}>
                <Empty
                  title={
                    query
                      ? `No product matches “${query}”`
                      : `No product is currently ${statusCopy[statusFilter].toLowerCase()}`
                  }
                  description="Try a different product ID, or clear the filters to see the full catalogue of eleven items."
                  action={
                    <Button
                      type="button"
                      onClick={() => {
                        setQuery("");
                        setStatusFilter("all");
                      }}
                      className="ob-focus h-10 px-4 text-[12px] font-bold uppercase tracking-[0.12em]"
                      style={ghostBtn}
                    >
                      Clear filters
                    </Button>
                  }
                />
              </div>
            ) : (
              <div
                className="mt-5 overflow-x-auto border-2"
                style={{
                  borderColor: ink,
                  borderRadius: radius,
                  opacity: refreshing ? 0.55 : 1,
                  transition: "opacity 150ms ease",
                }}
              >
                <Table
                  className="w-full min-w-[900px] border-collapse"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  <THead>
                    <TR style={{ borderBottom: `2px solid ${ink}` }}>
                      <TH scope="col" className={thCls}>
                        ID
                      </TH>
                      <TH scope="col" className={thCls}>
                        Product
                      </TH>
                      <TH scope="col" className={thCls + " text-right"}>
                        Price
                      </TH>
                      <TH scope="col" className={thCls}>
                        Stock
                      </TH>
                      <TH scope="col" className={thCls}>
                        Status
                      </TH>
                      <TH scope="col" className={thCls + " text-right"}>
                        Actions
                      </TH>
                    </TR>
                  </THead>
                  <TBody>
                    {visible.map((p) => {
                      const s = statusOf(p);
                      const blocked = blockedId === p.id;
                      return (
                        <TR
                          key={p.id}
                          className={justAdded === p.id ? "ob-row-in" : ""}
                          style={{
                            borderBottom: `1px solid ${hair}`,
                            borderLeft: blocked ? `3px solid ${accent}` : "3px solid transparent",
                          }}
                        >
                          <TD className={tdCls} style={{ color: neutral, letterSpacing: "0.04em" }}>
                            {p.id}
                          </TD>
                          <TD className={tdCls}>
                            <span className="block font-bold leading-tight">{p.name}</span>
                            <span
                              className="mt-0.5 block max-w-[46ch] truncate text-[12px]"
                              style={{ color: neutral }}
                            >
                              {p.description}
                            </span>
                          </TD>
                          <TD className={tdCls + " text-right font-bold"}>
                            {money(p.price_cents)}
                          </TD>
                          <TD className={tdCls}>
                            <span className="flex items-center gap-2">
                              <Input
                                aria-label={`Stock quantity for ${p.name}`}
                                inputMode="numeric"
                                value={String(p.stock_quantity)}
                                onChange={(e) => changeStock(p, e.target.value)}
                                className="ob-focus w-[64px] border-2 px-2 py-1 text-[13px] font-bold"
                                style={{
                                  ...fieldStyle,
                                  borderColor: p.stock_quantity === 0 ? accent : ink,
                                  color: p.stock_quantity === 0 ? accent : ink,
                                  fontVariantNumeric: "tabular-nums",
                                }}
                              />
                              {renderStockMeter(p.stock_quantity)}
                              <span
                                className="w-[54px] text-[11px] font-bold uppercase tracking-[0.1em]"
                                style={{
                                  color: neutral,
                                  opacity: stockSaved === p.id ? 1 : 0,
                                  transition: "opacity 160ms ease",
                                }}
                              >
                                Saved
                              </span>
                            </span>
                          </TD>
                          <TD className={tdCls}>{statusBadge(s)}</TD>
                          <TD className={tdCls}>
                            {confirmId === p.id ? (
                              <span className="ob-panel-in flex items-center justify-end gap-2">
                                <span className="text-[12px]" style={{ color: accent }}>
                                  Remove {p.id}?
                                </span>
                                <button
                                  type="button"
                                  onClick={() => removeProduct(p)}
                                  className="ob-focus h-8 px-2.5 text-[11px] font-bold uppercase tracking-[0.1em] hover:opacity-85"
                                  style={{
                                    backgroundColor: accent,
                                    color: paper,
                                    border: `2px solid ${accent}`,
                                    borderRadius: radius,
                                  }}
                                >
                                  Yes, remove
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setConfirmId(null)}
                                  className="ob-focus h-8 px-2.5 text-[11px] font-bold uppercase tracking-[0.1em] hover:opacity-80"
                                  style={ghostBtn}
                                >
                                  Keep
                                </button>
                              </span>
                            ) : (
                              <span className="flex items-center justify-end gap-1.5">
                                <button
                                  type="button"
                                  onClick={() => togglePublish(p)}
                                  className="ob-focus h-8 px-2.5 text-[11px] font-bold uppercase tracking-[0.1em] hover:opacity-80"
                                  style={ghostBtn}
                                >
                                  {p.published ? "Unpublish" : "Publish"}
                                </button>
                                <button
                                  type="button"
                                  onClick={() => openEdit(p)}
                                  className="ob-focus inline-flex h-8 items-center gap-1 px-2.5 text-[11px] font-bold uppercase tracking-[0.1em] hover:opacity-70"
                                  style={quietBtn}
                                >
                                  <Edit className="h-3.5 w-3.5" aria-hidden="true" /> Edit
                                </button>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setBlockedId(null);
                                    setConfirmId(p.id);
                                  }}
                                  className="ob-focus inline-flex h-8 items-center gap-1 px-2.5 text-[11px] font-bold uppercase tracking-[0.1em] hover:opacity-70"
                                  style={quietBtn}
                                >
                                  <Trash className="h-3.5 w-3.5" aria-hidden="true" /> Remove
                                </button>
                              </span>
                            )}
                          </TD>
                        </TR>
                      );
                    })}
                  </TBody>
                </Table>
              </div>
            )}

            {visible.length > 0 ? (
              <p className="mt-3 text-[12px]" style={{ color: neutral }}>
                Showing {visible.length} of {products.length} products. Stock edits save as you
                type; a product at zero stock stays listed but cannot be bought.
              </p>
            ) : null}
          </section>
        ) : null}

        {tab === "shipping" ? (
          <section className="mt-6" aria-label="Shipping options">
            <div className="max-w-[70ch]">
              <h2
                className="text-[20px] font-bold tracking-[-0.01em]"
                style={{ fontFamily: brand.fontHeading }}
              >
                Shipping options
              </h2>
              <p className="mt-2 text-[13px] leading-[1.6]" style={{ color: neutral }}>
                Flat rates you set yourself — no carrier accounts, no live quotes. Shoppers pick one
                option at checkout and the cost is added to their total.
              </p>
            </div>

            {activeShipping === 0 ? (
              <div
                role="alert"
                className="ob-panel-in mt-4 flex items-start gap-3 border-2 px-3 py-2.5"
                style={{ borderColor: accent, borderRadius: radius }}
              >
                <AlertCircle
                  className="mt-[2px] h-4 w-4 shrink-0"
                  aria-hidden="true"
                  style={{ color: accent }}
                />
                <p className="text-[13px] leading-[1.5]" style={{ color: accent }}>
                  No active shipping option. Checkout is blocked for every shopper until at least
                  one option is active.
                </p>
              </div>
            ) : null}

            <form
              onSubmit={submitShipping}
              className="mt-5 border-2 p-4"
              style={{ borderColor: ink, borderRadius: radius }}
            >
              <h3 className="text-[13px] font-bold uppercase tracking-[0.14em]">
                {shipForm.mode === "edit" ? `Edit ${shipForm.id}` : "Add a shipping option"}
              </h3>
              <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-12">
                <div className="sm:col-span-7">
                  <Label htmlFor="s-name" className={label} style={{ color: neutral }}>
                    Option name
                  </Label>
                  <Input
                    id="s-name"
                    value={shipForm.name}
                    onChange={(e) =>
                      setShipForm((f) => ({
                        ...f,
                        name: e.target.value,
                        errors: { ...f.errors, name: undefined },
                      }))
                    }
                    placeholder="Royal Mail Tracked 48"
                    aria-invalid={shipForm.errors.name ? "true" : undefined}
                    aria-describedby={shipForm.errors.name ? "s-name-err" : undefined}
                    className={fieldCls + " mt-1"}
                    style={{ ...fieldStyle, borderColor: shipForm.errors.name ? accent : ink }}
                  />
                  {shipForm.errors.name ? (
                    <p id="s-name-err" className="mt-1 text-[12px]" style={{ color: accent }}>
                      {shipForm.errors.name}
                    </p>
                  ) : null}
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="s-cost" className={label} style={{ color: neutral }}>
                    Flat cost ({settings.currency})
                  </Label>
                  <Input
                    id="s-cost"
                    inputMode="decimal"
                    value={shipForm.cost}
                    onChange={(e) =>
                      setShipForm((f) => ({
                        ...f,
                        cost: e.target.value,
                        errors: { ...f.errors, cost: undefined },
                      }))
                    }
                    placeholder="3.95"
                    aria-invalid={shipForm.errors.cost ? "true" : undefined}
                    aria-describedby={shipForm.errors.cost ? "s-cost-err" : undefined}
                    className={fieldCls + " mt-1"}
                    style={{
                      ...fieldStyle,
                      borderColor: shipForm.errors.cost ? accent : ink,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  />
                  {shipForm.errors.cost ? (
                    <p id="s-cost-err" className="mt-1 text-[12px]" style={{ color: accent }}>
                      {shipForm.errors.cost}
                    </p>
                  ) : null}
                </div>
                <div className="flex items-end gap-2 sm:col-span-3">
                  <Button
                    type="submit"
                    disabled={shipForm.saving}
                    className="ob-focus inline-flex h-10 items-center gap-2 px-3 text-[12px] font-bold uppercase tracking-[0.12em] hover:opacity-85 disabled:opacity-60"
                    style={primaryBtn}
                  >
                    {shipForm.saving
                      ? "Saving…"
                      : shipForm.mode === "edit"
                        ? "Save changes"
                        : "Add option"}
                  </Button>
                  {shipForm.mode === "edit" ? (
                    <Button
                      type="button"
                      onClick={() =>
                        setShipForm({
                          mode: "new",
                          id: null,
                          name: "",
                          cost: "",
                          errors: {},
                          saving: false,
                        })
                      }
                      className="ob-focus h-10 px-3 text-[12px] font-bold uppercase tracking-[0.12em] hover:opacity-80"
                      style={ghostBtn}
                    >
                      Cancel
                    </Button>
                  ) : null}
                </div>
              </div>
            </form>

            {shipping.length === 0 ? (
              <div
                className="mt-5 border-2 p-6"
                style={{ borderColor: accent, borderRadius: radius }}
              >
                <Empty
                  title="No shipping options defined"
                  description="Shoppers cannot complete checkout until at least one flat-rate option exists. Add one above — most shops start with a tracked 48-hour service and a collect-in-store option at zero cost."
                />
              </div>
            ) : (
              <div
                className="mt-5 overflow-x-auto border-2"
                style={{ borderColor: ink, borderRadius: radius }}
              >
                <Table
                  className="w-full min-w-[720px] border-collapse"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  <THead>
                    <TR style={{ borderBottom: `2px solid ${ink}` }}>
                      <TH scope="col" className={thCls}>
                        ID
                      </TH>
                      <TH scope="col" className={thCls}>
                        Option
                      </TH>
                      <TH scope="col" className={thCls + " text-right"}>
                        Flat cost
                      </TH>
                      <TH scope="col" className={thCls}>
                        Shown at checkout
                      </TH>
                      <TH scope="col" className={thCls + " text-right"}>
                        Actions
                      </TH>
                    </TR>
                  </THead>
                  <TBody>
                    {shipping.map((s) => (
                      <TR key={s.id} style={{ borderBottom: `1px solid ${hair}` }}>
                        <TD className={tdCls} style={{ color: neutral, letterSpacing: "0.04em" }}>
                          {s.id}
                        </TD>
                        <TD className={tdCls + " font-bold"}>{s.name}</TD>
                        <TD className={tdCls + " text-right font-bold"}>
                          {s.cost_cents === 0 ? "Free" : money(s.cost_cents)}
                        </TD>
                        <TD className={tdCls}>
                          <span
                            className="inline-flex items-center gap-1 px-1.5 py-[2px] text-[11px] font-bold uppercase tracking-[0.1em]"
                            style={{
                              border: s.active ? `2px solid ${ink}` : `1px dashed ${neutral}`,
                              color: s.active ? ink : neutral,
                              borderRadius: radius,
                            }}
                          >
                            {s.active ? <Check className="h-3 w-3" aria-hidden="true" /> : null}
                            {s.active ? "Active" : "Hidden"}
                          </span>
                        </TD>
                        <TD className={tdCls}>
                          {shipConfirmId === s.id ? (
                            <span className="ob-panel-in flex items-center justify-end gap-2">
                              <span className="text-[12px]" style={{ color: accent }}>
                                Remove {s.id}?
                              </span>
                              <button
                                type="button"
                                onClick={() => {
                                  setShipping((list) => list.filter((x) => x.id !== s.id));
                                  setShipConfirmId(null);
                                  flash("success", `${s.name} removed from checkout.`);
                                }}
                                className="ob-focus h-8 px-2.5 text-[11px] font-bold uppercase tracking-[0.1em] hover:opacity-85"
                                style={{
                                  backgroundColor: accent,
                                  color: paper,
                                  border: `2px solid ${accent}`,
                                  borderRadius: radius,
                                }}
                              >
                                Yes, remove
                              </button>
                              <button
                                type="button"
                                onClick={() => setShipConfirmId(null)}
                                className="ob-focus h-8 px-2.5 text-[11px] font-bold uppercase tracking-[0.1em] hover:opacity-80"
                                style={ghostBtn}
                              >
                                Keep
                              </button>
                            </span>
                          ) : (
                            <span className="flex items-center justify-end gap-1.5">
                              <button
                                type="button"
                                onClick={() => {
                                  setShipping((list) =>
                                    list.map((x) =>
                                      x.id === s.id ? { ...x, active: !x.active } : x,
                                    ),
                                  );
                                  flash(
                                    "success",
                                    s.active
                                      ? `${s.name} hidden — shoppers no longer see it at checkout.`
                                      : `${s.name} is active at checkout.`,
                                  );
                                }}
                                className="ob-focus h-8 px-2.5 text-[11px] font-bold uppercase tracking-[0.1em] hover:opacity-80"
                                style={ghostBtn}
                              >
                                {s.active ? "Hide" : "Activate"}
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  setShipForm({
                                    mode: "edit",
                                    id: s.id,
                                    name: s.name,
                                    cost: (s.cost_cents / 100).toFixed(2),
                                    errors: {},
                                    saving: false,
                                  })
                                }
                                className="ob-focus inline-flex h-8 items-center gap-1 px-2.5 text-[11px] font-bold uppercase tracking-[0.1em] hover:opacity-70"
                                style={quietBtn}
                              >
                                <Edit className="h-3.5 w-3.5" aria-hidden="true" /> Edit
                              </button>
                              <button
                                type="button"
                                onClick={() => setShipConfirmId(s.id)}
                                className="ob-focus inline-flex h-8 items-center gap-1 px-2.5 text-[11px] font-bold uppercase tracking-[0.1em] hover:opacity-70"
                                style={quietBtn}
                              >
                                <Trash className="h-3.5 w-3.5" aria-hidden="true" /> Remove
                              </button>
                            </span>
                          )}
                        </TD>
                      </TR>
                    ))}
                  </TBody>
                </Table>
              </div>
            )}
          </section>
        ) : null}

        {tab === "tax" ? (
          <section className="mt-6" aria-label="Tax and VAT">
            <div className="max-w-[70ch]">
              <h2
                className="text-[20px] font-bold tracking-[-0.01em]"
                style={{ fontFamily: brand.fontHeading }}
              >
                Tax &amp; VAT
              </h2>
              <p className="mt-2 text-[13px] leading-[1.6]" style={{ color: neutral }}>
                One rate for the whole shop. It is applied to the order subtotal plus shipping and
                shown as its own line in the checkout summary. This is a single rate, not a
                multi-jurisdiction engine.
              </p>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <form
                onSubmit={submitTax}
                className="border-2 p-4 sm:p-5"
                style={{ borderColor: ink, borderRadius: radius }}
              >
                <h3 className="text-[13px] font-bold uppercase tracking-[0.14em]">Store rate</h3>

                <div className="mt-4">
                  <Label htmlFor="tax-rate" className={label} style={{ color: neutral }}>
                    VAT rate (percent)
                  </Label>
                  <div className="mt-1 flex items-center gap-2">
                    <Input
                      id="tax-rate"
                      inputMode="decimal"
                      value={taxForm.rate}
                      onChange={(e) =>
                        setTaxForm((f) => ({
                          ...f,
                          rate: e.target.value,
                          error: "",
                          savedAt: null,
                        }))
                      }
                      aria-invalid={taxForm.error ? "true" : undefined}
                      aria-describedby={taxForm.error ? "tax-rate-err" : "tax-rate-hint"}
                      className="ob-focus w-[110px] border-2 px-2.5 py-2 text-[18px] font-bold"
                      style={{
                        ...fieldStyle,
                        borderColor: taxForm.error ? accent : ink,
                        fontVariantNumeric: "tabular-nums",
                      }}
                    />
                    <span className="text-[18px] font-bold" aria-hidden="true">
                      %
                    </span>
                  </div>
                  {taxForm.error ? (
                    <p
                      id="tax-rate-err"
                      role="alert"
                      className="mt-2 flex items-start gap-1.5 text-[12px]"
                      style={{ color: accent }}
                    >
                      <AlertCircle className="mt-[1px] h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      {taxForm.error}
                    </p>
                  ) : (
                    <p id="tax-rate-hint" className="mt-2 text-[12px]" style={{ color: neutral }}>
                      Standard UK VAT is 20%. Orders already placed keep the rate they were charged.
                    </p>
                  )}
                </div>

                <div className="mt-4">
                  <Label htmlFor="tax-currency" className={label} style={{ color: neutral }}>
                    Currency
                  </Label>
                  <Select
                    id="tax-currency"
                    value={settings.currency}
                    disabled
                    aria-describedby="tax-currency-hint"
                    className={fieldCls + " mt-1 sm:w-[220px]"}
                    style={{
                      ...fieldStyle,
                      color: neutral,
                      borderColor: neutral,
                      cursor: "not-allowed",
                    }}
                  >
                    <option value="GBP">GBP — Pound sterling (£)</option>
                  </Select>
                  <p
                    id="tax-currency-hint"
                    className="mt-2 max-w-[48ch] text-[12px] leading-[1.5]"
                    style={{ color: neutral }}
                  >
                    Locked since your first paid order on 14 Apr 2026. Only the account owner can
                    change currency, and only by contacting support — it would restate every
                    historic order total.
                  </p>
                </div>

                <div
                  className="mt-5 flex flex-wrap items-center gap-3 border-t-2 pt-4"
                  style={{ borderColor: ink }}
                >
                  <Button
                    type="submit"
                    disabled={taxForm.saving}
                    className="ob-focus inline-flex h-11 items-center gap-2 px-4 text-[13px] font-bold uppercase tracking-[0.12em] hover:opacity-85 disabled:opacity-60"
                    style={primaryBtn}
                  >
                    {taxForm.saving ? (
                      "Saving…"
                    ) : (
                      <>
                        <Check className="h-4 w-4" aria-hidden="true" /> Save VAT rate
                      </>
                    )}
                  </Button>
                  {taxForm.savedAt ? (
                    <p role="status" className="ob-panel-in flex items-center gap-1.5 text-[12px]">
                      <CheckCircle className="h-4 w-4" aria-hidden="true" />
                      Saved at {taxForm.savedAt} — checkouts from now on calculate VAT at{" "}
                      {settings.tax_rate_percent}%.
                    </p>
                  ) : null}
                </div>
              </form>

              <div
                className="border-2 p-4 sm:p-5"
                style={{ borderColor: ink, borderRadius: radius }}
              >
                <h3 className="text-[13px] font-bold uppercase tracking-[0.14em]">
                  Worked example
                </h3>
                <p className="mt-2 text-[12px] leading-[1.5]" style={{ color: neutral }}>
                  How a basket of 2 × Ethiopia Guji and 1 × V60 papers, shipped Royal Mail Tracked
                  48, prices up at {previewRate}%.
                </p>
                <Table
                  className="mt-4 w-full border-collapse"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  <THead>
                    <TR style={{ borderBottom: `2px solid ${ink}` }}>
                      <TH scope="col" className={thCls}>
                        Line
                      </TH>
                      <TH scope="col" className={thCls + " text-right"}>
                        Amount
                      </TH>
                    </TR>
                  </THead>
                  <TBody>
                    <TR style={{ borderBottom: `1px solid ${hair}` }}>
                      <TD className={tdCls}>Subtotal</TD>
                      <TD className={tdCls + " text-right"}>{money(exampleSubtotal)}</TD>
                    </TR>
                    <TR style={{ borderBottom: `1px solid ${hair}` }}>
                      <TD className={tdCls}>Shipping — Royal Mail Tracked 48</TD>
                      <TD className={tdCls + " text-right"}>{money(exampleShipping)}</TD>
                    </TR>
                    <TR style={{ borderBottom: `1px solid ${hair}` }}>
                      <TD className={tdCls}>VAT at {previewRate}%</TD>
                      <TD className={tdCls + " text-right"}>{money(exampleTax)}</TD>
                    </TR>
                    <TR style={{ borderTop: `2px solid ${ink}` }}>
                      <TD className={tdCls + " font-bold uppercase tracking-[0.1em] text-[12px]"}>
                        Order total
                      </TD>
                      <TD className={tdCls + " text-right text-[18px] font-bold"}>
                        {money(exampleSubtotal + exampleShipping + exampleTax)}
                      </TD>
                    </TR>
                  </TBody>
                </Table>
                <p className="mt-3 text-[12px] leading-[1.5]" style={{ color: neutral }}>
                  Rounded to the nearest penny per order, not per line.
                </p>
              </div>
            </div>
          </section>
        ) : null}

        <footer className="mt-10 border-t-2 pt-4" style={{ borderColor: ink }}>
          <p className="text-[12px]" style={{ color: neutral }}>
            Owner tools · signed in as satya.ganaraju@quorq.ai. Fulfilment and order records live
            under{" "}
            <button
              type="button"
              onClick={() => navigate("admin-orders")}
              className="ob-focus font-bold underline underline-offset-2 hover:opacity-70"
              style={{ color: ink }}
            >
              Admin orders
            </button>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}
