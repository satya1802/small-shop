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
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Label,
  Badge,
  Table,
  THead,
  TBody,
  TR,
  TH,
  TD,
  Empty,
} = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Check, X, ChevronRight, Clock, Trash, Filter, ArrowLeft, AlertCircle, CheckCircle } = Icons;

const CURRENCY_SYMBOL = "£";

const PRODUCTS = [
  {
    id: "p-204",
    lot: "24-118",
    name: "Guji Hambela — Washed Filter",
    region: "HAMBELA",
    country: "Ethiopia",
    kind: "Filter coffee",
    price_cents: 1850,
    stock_quantity: 23,
    published: true,
    roasted_on: "31 Oct 2026",
    weight: "250 g whole bean",
    notes: "White peach · Bergamot · Demerara",
    views: ["plate", "label", "cup"],
    description: [
      "Hambela Wamena sits in the forested highlands of Guji, where Haile Gebre’s washing station takes cherry from 340 neighbouring smallholders. The 2026 harvest came in slower and sweeter than last year, so we have kept the roast short to protect the florals.",
      "Brewed as filter at 60 g per litre it is peach and bergamot up front, settling into demerara and black tea as the cup cools. Rest it seven days after roasting; it drinks well for about six weeks.",
    ],
    specs: [
      ["Origin", "Hambela Wamena, Guji, Ethiopia"],
      ["Producer", "Hambela Estate — 340 smallholders"],
      ["Process", "Fully washed, 36 h fermentation"],
      ["Varietal", "Heirloom — Kurume, Wolisho"],
      ["Altitude", "1,950–2,100 m"],
      ["Roast profile", "Filter — 11:40, 1.2% development"],
      ["Roasted on", "31 October 2026"],
      ["Net weight", "250 g, valve bag"],
    ],
    cup: [
      ["Acidity", 4.4],
      ["Sweetness", 4.0],
      ["Body", 2.8],
      ["Clarity", 4.6],
    ],
    soldOutNote: null,
  },
  {
    id: "p-198",
    lot: "24-104",
    name: "Huila Pitalito — Honey Filter",
    region: "PITALITO",
    country: "Colombia",
    kind: "Filter coffee",
    price_cents: 1725,
    stock_quantity: 4,
    published: true,
    roasted_on: "27 Oct 2026",
    weight: "250 g whole bean",
    notes: "Red apple · Panela · Almond",
    views: ["plate", "label", "cup"],
    description: [
      "Marcela Ortiz dries this lot on raised beds at Finca El Mirador, turning the mucilage-coated cherry every two hours for the first four days. The result is heavier and rounder than the washed Huilas we usually stock.",
      "This is the last of the 2026 landing — four bags remain and we are not reordering until the February crop.",
    ],
    specs: [
      ["Origin", "Pitalito, Huila, Colombia"],
      ["Producer", "Marcela Ortiz — Finca El Mirador"],
      ["Process", "Yellow honey, 14 days raised bed"],
      ["Varietal", "Caturra, Castillo"],
      ["Altitude", "1,730 m"],
      ["Roast profile", "Filter — 12:05, 1.6% development"],
      ["Roasted on", "27 October 2026"],
      ["Net weight", "250 g, valve bag"],
    ],
    cup: [
      ["Acidity", 3.2],
      ["Sweetness", 4.5],
      ["Body", 3.8],
      ["Clarity", 3.4],
    ],
    soldOutNote: null,
  },
  {
    id: "p-211",
    lot: "24-121",
    name: "Gayo Highlands — Swiss Water Decaf",
    region: "GAYO",
    country: "Indonesia",
    kind: "Filter coffee",
    price_cents: 1690,
    stock_quantity: 12,
    published: true,
    roasted_on: "01 Nov 2026",
    weight: "250 g whole bean",
    notes: "Cocoa nib · Cedar · Dried fig",
    views: ["plate", "label", "cup"],
    description: [
      "Decaffeinated in British Columbia with the Swiss Water process — no solvents, 99.9% of the caffeine removed before the beans reach us.",
      "We roast it two notches darker than our other filters to give the cup some spine. It takes milk without falling apart, which is why half the bags leave the shop on a Sunday.",
    ],
    specs: [
      ["Origin", "Aceh Tengah, Gayo Highlands, Indonesia"],
      ["Producer", "Koperasi Ketiara"],
      ["Process", "Wet-hulled, Swiss Water decaffeinated"],
      ["Varietal", "Ateng, Tim Tim"],
      ["Altitude", "1,400–1,600 m"],
      ["Roast profile", "Filter — 12:50, 2.1% development"],
      ["Roasted on", "1 November 2026"],
      ["Net weight", "250 g, valve bag"],
    ],
    cup: [
      ["Acidity", 2.1],
      ["Sweetness", 3.9],
      ["Body", 4.4],
      ["Clarity", 3.0],
    ],
    soldOutNote: null,
  },
  {
    id: "p-187",
    lot: "24-092",
    name: "Monsoon Malabar — Espresso",
    region: "MALABAR",
    country: "India",
    kind: "Espresso coffee",
    price_cents: 1450,
    stock_quantity: 0,
    published: true,
    roasted_on: "09 Oct 2026",
    weight: "250 g whole bean",
    notes: "Toasted malt · Clove · Dark chocolate",
    views: ["plate", "label", "cup"],
    description: [
      "Green beans left open to the south-west monsoon for twelve weeks swell and lose their acidity entirely. What is left is malt, spice and a syrup body that holds up in a flat white.",
      "Our regulars clear this one fast. It sold out on 2 November.",
    ],
    specs: [
      ["Origin", "Malabar Coast, Karnataka, India"],
      ["Producer", "Aspinwall Estates"],
      ["Process", "Monsooned, 12 weeks"],
      ["Varietal", "Kent, S795"],
      ["Altitude", "1,100 m"],
      ["Roast profile", "Espresso — 13:30, 2.8% development"],
      ["Roasted on", "9 October 2026"],
      ["Net weight", "250 g, valve bag"],
    ],
    cup: [
      ["Acidity", 1.4],
      ["Sweetness", 3.6],
      ["Body", 4.8],
      ["Clarity", 2.2],
    ],
    soldOutNote:
      "Sold out on 2 November. The next container is booked to land on 18 November 2026.",
  },
  {
    id: "p-233",
    lot: "EQ-07",
    name: "Ceramic Dripper No.2 — Slate",
    region: "NO.2",
    country: "Stoke-on-Trent",
    kind: "Brewing equipment",
    price_cents: 3200,
    stock_quantity: 7,
    published: true,
    roasted_on: null,
    weight: "1–2 cup, 420 g",
    notes: "Stoneware · Ribbed cone · 60° wall",
    views: ["plate", "label"],
    description: [
      "Thrown and glazed by Nell Pryce in a three-person studio in Stoke-on-Trent, in batches of forty. The ribs run the full height of the cone so the paper never seals against the wall.",
      "Fits any 02-size filter paper. Dishwasher safe, though the matt slate glaze keeps its depth longer if you wash it by hand.",
    ],
    specs: [
      ["Maker", "Nell Pryce Ceramics, Stoke-on-Trent"],
      ["Material", "Stoneware, matt slate glaze"],
      ["Capacity", "1–2 cups, up to 500 ml"],
      ["Filter size", "02 cone papers"],
      ["Weight", "420 g"],
      ["Care", "Dishwasher safe"],
      ["Batch", "Batch 12 — fired 19 October 2026"],
      ["Packed", "Moulded pulp, no plastic"],
    ],
    cup: null,
    soldOutNote: null,
  },
  {
    id: "p-219",
    lot: "24-131",
    name: "Kirinyaga AA — Reserve Lot",
    region: "KIRINYAGA",
    country: "Kenya",
    kind: "Filter coffee",
    price_cents: 2250,
    stock_quantity: 6,
    published: true,
    roasted_on: "02 Nov 2026",
    weight: "200 g whole bean",
    notes: "Blackcurrant · Grapefruit · Cane sugar",
    views: ["plate", "label", "cup"],
    description: [
      "Forty-eight kilos of AA screen from the Kiangoi factory, bought at auction in September. This is the single most expensive green we have ever put in the shop and we only took two bags.",
      "Blackcurrant and grapefruit, with the cane sugar sweetness that makes Kirinyaga worth the money. Brew it light — 55 g per litre.",
    ],
    specs: [
      ["Origin", "Kiangoi Factory, Kirinyaga, Kenya"],
      ["Producer", "Rungeto Farmers Co-operative"],
      ["Process", "Washed, 72 h soak"],
      ["Varietal", "SL28, SL34, Ruiru 11"],
      ["Altitude", "1,800 m"],
      ["Roast profile", "Filter — 11:10, 1.0% development"],
      ["Roasted on", "2 November 2026"],
      ["Net weight", "200 g, valve bag"],
    ],
    cup: [
      ["Acidity", 4.8],
      ["Sweetness", 4.2],
      ["Body", 3.1],
      ["Clarity", 4.9],
    ],
    soldOutNote: null,
  },
];

const VIEW_LABELS = { plate: "Lot plate", label: "Spec card", cup: "Cup profile" };

const INITIAL_CART = [
  {
    id: "ci-8812",
    product_id: "p-198",
    product_name: "Huila Pitalito — Honey Filter",
    unit_price_cents: 1725,
    quantity: 1,
  },
];

export default function Screen() {
  const navigate = useNavigate();
  const ink = brand.primaryColor;
  const muted = brand.neutralColor;
  const accent = brand.accentColor;
  const paper = brand.backgroundColor;
  const hair = `color-mix(in srgb, ${ink} 16%, transparent)`;

  const money = (cents) => CURRENCY_SYMBOL + (cents / 100).toFixed(2);
  const clockLabel = () =>
    new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

  const [selectedId, setSelectedId] = React.useState("p-204");
  const [status, setStatus] = React.useState("loading");
  const [loadToken, setLoadToken] = React.useState(0);
  const [view, setView] = React.useState("plate");
  const [qtyInput, setQtyInput] = React.useState("1");
  const [cart, setCart] = React.useState(INITIAL_CART);
  const [notice, setNotice] = React.useState(null);
  const [adding, setAdding] = React.useState(false);
  const [checkedAt, setCheckedAt] = React.useState(clockLabel());
  const [refreshing, setRefreshing] = React.useState(false);

  const retriedRef = React.useRef(false);
  const flashRef = React.useRef(null);
  const addRef = React.useRef(null);
  const refreshRef = React.useRef(null);

  const product = PRODUCTS.find((x) => x.id === selectedId) || PRODUCTS[0];

  React.useEffect(() => {
    setStatus("loading");
    setView("plate");
    setQtyInput("1");
    const t = window.setTimeout(() => {
      if (selectedId === "p-219" && !retriedRef.current) setStatus("error");
      else setStatus("ready");
    }, 420);
    return () => window.clearTimeout(t);
  }, [selectedId, loadToken]);

  React.useEffect(
    () => () => {
      window.clearTimeout(flashRef.current);
      window.clearTimeout(addRef.current);
      window.clearTimeout(refreshRef.current);
    },
    [],
  );

  const flash = (kind, text) => {
    window.clearTimeout(flashRef.current);
    setNotice({ kind, text });
    flashRef.current = window.setTimeout(() => setNotice(null), 6000);
  };

  const inCart = (pid) => {
    const line = cart.find((l) => l.product_id === pid);
    return line ? line.quantity : 0;
  };

  const cartCount = cart.reduce((n, l) => n + l.quantity, 0);
  const subtotal = cart.reduce((n, l) => n + l.quantity * l.unit_price_cents, 0);

  const reserved = inCart(product.id);
  const maxAddable = Math.max(0, product.stock_quantity - reserved);
  const parsed = parseInt(qtyInput, 10);
  const qty = Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
  const addQty = Math.min(qty, Math.max(1, maxAddable));
  const canBuy = product.stock_quantity > 0 && maxAddable > 0 && status === "ready";

  const setQty = (next) => {
    if (next > maxAddable && maxAddable > 0) {
      setQtyInput(String(maxAddable));
      flash(
        "cap",
        `Only ${product.stock_quantity} in stock${reserved > 0 ? ` and ${reserved} already in your cart` : ""} — quantity capped at ${maxAddable}.`,
      );
      return;
    }
    setQtyInput(String(Math.max(1, next)));
  };

  const addToCart = () => {
    if (!canBuy || adding) return;
    setAdding(true);
    window.clearTimeout(addRef.current);
    addRef.current = window.setTimeout(() => {
      setCart((prev) => {
        const existing = prev.find((l) => l.product_id === product.id);
        if (existing) {
          return prev.map((l) =>
            l.product_id === product.id ? { ...l, quantity: l.quantity + addQty } : l,
          );
        }
        return [
          ...prev,
          {
            id: "ci-" + Math.floor(Math.random() * 9000 + 1000),
            product_id: product.id,
            product_name: product.name,
            unit_price_cents: product.price_cents,
            quantity: addQty,
          },
        ];
      });
      setAdding(false);
      setQtyInput("1");
      flash("added", `${addQty} × ${product.name} added to your cart.`);
    }, 480);
  };

  const changeLine = (lineId, nextQty) => {
    const line = cart.find((l) => l.id === lineId);
    if (!line) return;
    const prod = PRODUCTS.find((p) => p.id === line.product_id);
    const stock = prod ? prod.stock_quantity : nextQty;
    if (nextQty < 1) return;
    if (nextQty > stock) {
      setCart((prev) => prev.map((l) => (l.id === lineId ? { ...l, quantity: stock } : l)));
      flash("cap", `Only ${stock} of ${line.product_name} in stock — quantity capped at ${stock}.`);
      return;
    }
    setCart((prev) => prev.map((l) => (l.id === lineId ? { ...l, quantity: nextQty } : l)));
  };

  const removeLine = (lineId) => {
    const line = cart.find((l) => l.id === lineId);
    setCart((prev) => prev.filter((l) => l.id !== lineId));
    if (line) flash("removed", `${line.product_name} removed from your cart.`);
  };

  const refreshStock = () => {
    if (refreshing) return;
    setRefreshing(true);
    window.clearTimeout(refreshRef.current);
    refreshRef.current = window.setTimeout(() => {
      setCheckedAt(clockLabel());
      setRefreshing(false);
    }, 700);
  };

  const label = "text-[11px] uppercase tracking-[0.14em] font-medium";
  const boxBorder = { border: `2px solid ${ink}`, borderRadius: brand.radius };

  const stockState =
    product.stock_quantity === 0
      ? { word: "Out of stock", tone: "accent", detail: "Cannot be added to the cart" }
      : product.stock_quantity <= 5
        ? {
            word: `Low stock — ${product.stock_quantity} left`,
            tone: "accent",
            detail:
              reserved > 0 ? `${reserved} already in your cart` : "Ships within 1 working day",
          }
        : {
            word: `In stock — ${product.stock_quantity} available`,
            tone: "ink",
            detail:
              reserved > 0 ? `${reserved} already in your cart` : "Ships within 1 working day",
          };

  /* ---------- plate renderers (signature element) ---------- */

  const renderPlate = () => (
    <div className="flex h-full flex-col justify-between p-6">
      <div className="flex items-start justify-between">
        <span className={label} style={{ color: muted }}>
          Lot {product.lot}
        </span>
        <span className={label} style={{ color: muted }}>
          {product.kind}
        </span>
      </div>
      <div>
        <div className={label} style={{ color: muted }}>
          {product.country}
        </div>
        <div
          className="mt-1 font-bold tracking-tight"
          style={{
            fontSize: "clamp(34px, 6vw, 52px)",
            lineHeight: 0.95,
            fontFamily: brand.fontHeading,
          }}
        >
          {product.region}
        </div>
        <div className="mt-4 h-[2px] w-full" style={{ backgroundColor: ink }} />
        <p className="mt-3 text-[13px] leading-6" style={{ color: muted }}>
          {product.notes}
        </p>
      </div>
      <div
        className="-mx-6 -mb-6 flex items-center justify-between px-6 py-3"
        style={{ backgroundColor: ink, color: paper }}
      >
        <span className={label}>{product.weight}</span>
        <span className={label + " tabular-nums"}>
          {product.roasted_on ? "Roasted " + product.roasted_on : "Batch 12"}
        </span>
      </div>
    </div>
  );

  const renderLabelCard = () => {
    const four = product.specs.slice(0, 4);
    return (
      <div className="grid h-full grid-cols-2 grid-rows-2">
        {four.map((s, i) => (
          <div
            key={s[0]}
            className="flex flex-col justify-between gap-6 p-5"
            style={{
              borderRight: i % 2 === 0 ? `2px solid ${ink}` : undefined,
              borderBottom: i < 2 ? `2px solid ${ink}` : undefined,
            }}
          >
            <span className={label} style={{ color: muted }}>
              {s[0]}
            </span>
            <span className="text-[15px] font-bold leading-snug tracking-tight">{s[1]}</span>
          </div>
        ))}
      </div>
    );
  };

  const renderCup = () => (
    <div className="flex h-full flex-col p-6">
      <span className={label} style={{ color: muted }}>
        Cup profile — scored 1 to 5
      </span>
      <div className="mt-6 flex-1 space-y-5">
        {(product.cup || []).map(([k, v]) => (
          <div key={k}>
            <div className="flex items-baseline justify-between">
              <span className={label}>{k}</span>
              <span className="text-[13px] font-bold tabular-nums">{v.toFixed(1)}</span>
            </div>
            <div className="mt-2 h-4" style={{ border: `2px solid ${ink}` }}>
              <div
                className="h-full transition-[width] duration-500 ease-out"
                style={{ width: (v / 5) * 100 + "%", backgroundColor: ink }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-[12px] leading-5" style={{ color: muted }}>
        Scored blind by the roastery QC table on 28 Oct 2026, brewed at 60 g per litre.
      </p>
    </div>
  );

  const renderView = () =>
    view === "label"
      ? renderLabelCard()
      : view === "cup" && product.cup
        ? renderCup()
        : renderPlate();

  /* ---------- states ---------- */

  const loadingPanel = (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)]">
      <div>
        <div
          className="ob-skel aspect-square w-full"
          style={{ ...boxBorder, backgroundColor: hair }}
        />
        <div className="mt-3 flex gap-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="ob-skel h-16 w-16"
              style={{ ...boxBorder, backgroundColor: hair }}
            />
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <div className="ob-skel h-4 w-28" style={{ backgroundColor: hair }} />
        <div className="ob-skel h-9 w-4/5" style={{ backgroundColor: hair }} />
        <div className="ob-skel h-9 w-32" style={{ backgroundColor: hair }} />
        <div className="ob-skel h-[2px] w-full" style={{ backgroundColor: hair }} />
        <div className="ob-skel h-12 w-full" style={{ backgroundColor: hair }} />
        <div className="ob-skel h-12 w-full" style={{ backgroundColor: hair }} />
        <p className={label} style={{ color: muted }}>
          Fetching lot {product.lot} and live stock…
        </p>
      </div>
    </div>
  );

  const errorPanel = (
    <div
      className="ob-in p-7"
      style={{ border: `2px solid ${accent}`, borderRadius: brand.radius }}
    >
      <div className="flex items-start gap-3">
        <AlertCircle
          className="mt-0.5 h-5 w-5 shrink-0"
          style={{ color: accent }}
          aria-hidden="true"
        />
        <div className="max-w-[60ch]">
          <h2 className="text-[20px] font-bold tracking-tight">
            We couldn’t load lot {product.lot}
          </h2>
          <p className="mt-2 text-[14px] leading-6" style={{ color: muted }}>
            The shop asked the catalogue for <strong style={{ color: ink }}>{product.name}</strong>{" "}
            and got no answer. Nothing has changed — your cart still holds {cartCount}{" "}
            {cartCount === 1 ? "item" : "items"}.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              type="button"
              className="ob-focus h-11 px-5 text-[12px] uppercase tracking-[0.14em] font-bold"
              style={{ backgroundColor: ink, color: paper, borderRadius: brand.radius }}
              onClick={() => {
                retriedRef.current = true;
                setLoadToken((n) => n + 1);
              }}
            >
              Try loading it again
            </Button>
            <Button
              type="button"
              className="ob-focus h-11 bg-transparent px-5 text-[12px] uppercase tracking-[0.14em] font-bold"
              style={{ border: `2px solid ${ink}`, color: ink, borderRadius: brand.radius }}
              onClick={() => navigate("catalogue")}
            >
              Back to all lots
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  const detailPanel = (
    <div className="ob-in grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)]">
      {/* images */}
      <div>
        <div className="aspect-square w-full overflow-hidden" style={boxBorder}>
          {renderView()}
        </div>
        <ul className="mt-3 flex list-none gap-3 p-0">
          {product.views.map((v) => {
            const on = v === view;
            return (
              <li key={v}>
                <button
                  type="button"
                  onClick={() => setView(v)}
                  aria-pressed={on}
                  className="ob-focus flex h-16 w-20 flex-col items-center justify-center gap-1 text-[10px] uppercase tracking-[0.12em] font-bold transition-colors duration-150"
                  style={{
                    border: `2px solid ${ink}`,
                    borderRadius: brand.radius,
                    backgroundColor: on ? ink : paper,
                    color: on ? paper : muted,
                  }}
                >
                  {on ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : null}
                  {VIEW_LABELS[v]}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* buy column */}
      <div>
        <p className={label} style={{ color: muted }}>
          Lot {product.lot} · {product.kind}
        </p>
        <h1
          className="mt-2 font-bold tracking-tight"
          style={{
            fontSize: "clamp(26px, 3.4vw, 34px)",
            lineHeight: 1.08,
            fontFamily: brand.fontHeading,
          }}
        >
          {product.name}
        </h1>

        <div className="mt-5 flex items-end gap-3">
          <span className="text-[34px] font-bold leading-none tabular-nums tracking-tight">
            {money(product.price_cents)}
          </span>
          <span className="pb-1 text-[12px]" style={{ color: muted }}>
            GBP · {product.weight}
          </span>
        </div>

        <div className="mt-4 flex items-center gap-2">
          {stockState.tone === "accent" ? (
            <AlertCircle className="h-4 w-4" style={{ color: accent }} aria-hidden="true" />
          ) : (
            <CheckCircle className="h-4 w-4" aria-hidden="true" />
          )}
          <Badge
            className="rounded-none bg-transparent px-2 py-0.5 text-[11px] uppercase tracking-[0.14em] font-bold"
            style={{
              border: `2px solid ${stockState.tone === "accent" ? accent : ink}`,
              color: stockState.tone === "accent" ? accent : ink,
              borderRadius: brand.radius,
            }}
          >
            {stockState.word}
          </Badge>
          <span className="text-[12px]" style={{ color: muted }}>
            {stockState.detail}
          </span>
        </div>

        <div className="my-6 h-[2px] w-full" style={{ backgroundColor: ink }} />

        {product.stock_quantity === 0 ? (
          <div
            className="p-5"
            style={{ border: `2px solid ${accent}`, borderRadius: brand.radius }}
          >
            <h2 className={label} style={{ color: accent }}>
              Sold out
            </h2>
            <p className="mt-2 max-w-[48ch] text-[14px] leading-6">{product.soldOutNote}</p>
            <Button
              type="button"
              disabled
              className="ob-focus mt-5 h-12 w-full cursor-not-allowed bg-transparent text-[12px] uppercase tracking-[0.16em] font-bold opacity-100"
              style={{ border: `2px solid ${hair}`, color: muted, borderRadius: brand.radius }}
            >
              Add to cart — unavailable
            </Button>
            <button
              type="button"
              onClick={() => navigate("catalogue")}
              className="ob-focus mt-3 inline-flex items-center gap-1 text-[12px] underline underline-offset-4"
              style={{ color: ink }}
            >
              See what else is in stock
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addToCart();
            }}
          >
            <div className="flex flex-wrap items-end gap-5">
              <div>
                <Label htmlFor="qty" className={label + " block"} style={{ color: muted }}>
                  Quantity
                </Label>
                <div className="mt-2 flex items-stretch" style={boxBorder}>
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQty(qty - 1)}
                    disabled={qty <= 1}
                    className="ob-focus h-11 w-11 text-[18px] font-bold leading-none transition-colors duration-150 disabled:opacity-30 enabled:hover:text-white"
                    style={{ borderRight: `2px solid ${ink}` }}
                    onMouseEnter={(e) => {
                      if (qty > 1) e.currentTarget.style.backgroundColor = ink;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    –
                  </button>
                  <input
                    id="qty"
                    name="quantity"
                    inputMode="numeric"
                    autoComplete="off"
                    value={qtyInput}
                    onChange={(e) => {
                      const digits = e.target.value.replace(/[^0-9]/g, "");
                      if (digits === "") {
                        setQtyInput("");
                        return;
                      }
                      setQty(parseInt(digits, 10));
                    }}
                    onBlur={() => {
                      if (qtyInput === "") setQtyInput("1");
                    }}
                    className="ob-focus h-11 w-14 bg-transparent text-center text-[15px] font-bold tabular-nums outline-none"
                    aria-describedby="qty-help"
                  />
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQty(qty + 1)}
                    disabled={qty >= maxAddable}
                    className="ob-focus h-11 w-11 text-[18px] font-bold leading-none transition-colors duration-150 disabled:opacity-30"
                    style={{ borderLeft: `2px solid ${ink}` }}
                    onMouseEnter={(e) => {
                      if (qty < maxAddable) e.currentTarget.style.backgroundColor = ink;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <p
                id="qty-help"
                className="pb-1 max-w-[26ch] text-[12px] leading-5"
                style={{ color: muted }}
              >
                {maxAddable === 0
                  ? `All ${product.stock_quantity} bags in stock are already in your cart.`
                  : `Up to ${maxAddable} per order while stock lasts.`}
              </p>
            </div>

            <Button
              type="submit"
              disabled={!canBuy || adding}
              className="ob-focus mt-6 h-12 w-full text-[12px] uppercase tracking-[0.16em] font-bold transition-opacity duration-150 disabled:cursor-not-allowed"
              style={{
                backgroundColor: canBuy ? ink : "transparent",
                color: canBuy ? paper : muted,
                border: `2px solid ${canBuy ? ink : hair}`,
                borderRadius: brand.radius,
                opacity: adding ? 0.72 : 1,
              }}
            >
              {adding ? (
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Adding to cart…
                </span>
              ) : maxAddable === 0 ? (
                "Stock already in your cart"
              ) : (
                <span className="tabular-nums">
                  Add {addQty} to cart — {money(product.price_cents * addQty)}
                </span>
              )}
            </Button>

            <p className="mt-3 text-[12px] leading-5" style={{ color: muted }}>
              Nothing is reserved until you pay. VAT and shipping are added at checkout.
            </p>
          </form>
        )}

        <div aria-live="polite" className="mt-4 min-h-[44px]">
          {notice ? (
            <div
              className="ob-in flex items-start gap-2 p-3 text-[13px] leading-5"
              style={{
                border: `2px solid ${notice.kind === "cap" ? accent : ink}`,
                color: notice.kind === "cap" ? accent : ink,
                borderRadius: brand.radius,
              }}
            >
              {notice.kind === "added" ? (
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              ) : notice.kind === "cap" ? (
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              ) : (
                <Trash className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              )}
              <span className="flex-1">{notice.text}</span>
              {notice.kind === "added" ? (
                <button
                  type="button"
                  onClick={() => navigate("checkout")}
                  className="ob-focus shrink-0 underline underline-offset-4"
                >
                  View cart
                </button>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );

  /* ---------- render ---------- */

  return (
    <div
      className="min-h-full px-4 py-6 sm:px-6 lg:px-8"
      style={{ backgroundColor: paper, color: ink, fontFamily: brand.fontBody }}
    >
      <style>{`
        .ob-focus:focus-visible { outline: 2px solid ${accent}; outline-offset: 2px; }
        @keyframes ob-in { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: none; } }
        .ob-in { animation: ob-in .22s ease-out both; }
        @keyframes ob-pulse { 0%, 100% { opacity: .5 } 50% { opacity: .2 } }
        .ob-skel { animation: ob-pulse 1.2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ob-in, .ob-skel, .animate-spin { animation: none !important; }
          * { transition: none !important; }
        }
      `}</style>

      <div className="mx-auto max-w-[1200px]">
        {/* top bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex list-none items-center gap-2 p-0 text-[11px] uppercase tracking-[0.14em]">
              <li>
                <button
                  type="button"
                  onClick={() => navigate("catalogue")}
                  className="ob-focus inline-flex items-center gap-1.5 font-bold underline-offset-4 hover:underline"
                >
                  <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                  All lots
                </button>
              </li>
              <li aria-hidden="true" style={{ color: muted }}>
                /
              </li>
              <li style={{ color: muted }}>{product.kind}</li>
              <li aria-hidden="true" style={{ color: muted }}>
                /
              </li>
              <li aria-current="page" className="font-bold">
                Lot {product.lot}
              </li>
            </ol>
          </nav>

          <div
            className="flex items-center gap-3 text-[11px] uppercase tracking-[0.14em]"
            style={{ color: muted }}
          >
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="tabular-nums">Stock checked {checkedAt}</span>
            <button
              type="button"
              onClick={refreshStock}
              className="ob-focus font-bold underline underline-offset-4 disabled:opacity-50"
              style={{ color: ink }}
              disabled={refreshing}
            >
              {refreshing ? "Checking…" : "Refresh"}
            </button>
          </div>
        </div>

        <div className="h-[2px] w-full" style={{ backgroundColor: ink }} />

        <div className="grid gap-10 pt-7 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* main */}
          <div>
            {status === "loading" ? loadingPanel : status === "error" ? errorPanel : detailPanel}

            {status === "ready" ? (
              <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)]">
                <section>
                  <h2 className={label} style={{ color: muted }}>
                    About this lot
                  </h2>
                  <div className="mt-3 h-[2px] w-full" style={{ backgroundColor: ink }} />
                  {product.description.map((para, i) => (
                    <p key={i} className="mt-4 max-w-[68ch] text-[14px] leading-7">
                      {para}
                    </p>
                  ))}
                </section>

                <section>
                  <h2 className={label} style={{ color: muted }}>
                    Specification
                  </h2>
                  <Table className="mt-3 w-full border-collapse text-[13px]">
                    <TBody>
                      {product.specs.map((s, i) => (
                        <TR
                          key={s[0]}
                          style={{
                            borderTop: i === 0 ? `2px solid ${ink}` : `1px solid ${hair}`,
                            borderBottom:
                              i === product.specs.length - 1 ? `2px solid ${ink}` : undefined,
                          }}
                        >
                          <TH
                            scope="row"
                            className="w-[42%] py-2.5 pr-4 text-left align-top text-[11px] uppercase tracking-[0.12em] font-medium"
                            style={{ color: muted }}
                          >
                            {s[0]}
                          </TH>
                          <TD className="py-2.5 text-left align-top tabular-nums">{s[1]}</TD>
                        </TR>
                      ))}
                    </TBody>
                  </Table>
                </section>
              </div>
            ) : null}

            {/* other lots */}
            <section className="mt-12">
              <div className="flex items-baseline justify-between">
                <h2 className={label} style={{ color: muted }}>
                  Other lots in the shop
                </h2>
                <button
                  type="button"
                  onClick={() => navigate("catalogue")}
                  className="ob-focus inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.14em] font-bold underline-offset-4 hover:underline"
                >
                  Full catalogue
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>

              <Table className="mt-3 w-full border-collapse text-[13px]">
                <THead>
                  <TR style={{ borderBottom: `2px solid ${ink}` }}>
                    <TH
                      className="py-2 pr-4 text-left text-[11px] uppercase tracking-[0.12em] font-medium"
                      style={{ color: muted }}
                    >
                      Lot
                    </TH>
                    <TH
                      className="py-2 pr-4 text-left text-[11px] uppercase tracking-[0.12em] font-medium"
                      style={{ color: muted }}
                    >
                      Product
                    </TH>
                    <TH
                      className="py-2 pr-4 text-left text-[11px] uppercase tracking-[0.12em] font-medium"
                      style={{ color: muted }}
                    >
                      Origin
                    </TH>
                    <TH
                      className="py-2 pr-4 text-right text-[11px] uppercase tracking-[0.12em] font-medium"
                      style={{ color: muted }}
                    >
                      Price
                    </TH>
                    <TH
                      className="py-2 pr-4 text-right text-[11px] uppercase tracking-[0.12em] font-medium"
                      style={{ color: muted }}
                    >
                      Stock
                    </TH>
                    <TH
                      className="py-2 text-right text-[11px] uppercase tracking-[0.12em] font-medium"
                      style={{ color: muted }}
                    >
                      In cart
                    </TH>
                  </TR>
                </THead>
                <TBody>
                  {PRODUCTS.filter((p) => p.published).map((p) => {
                    const current = p.id === selectedId;
                    const out = p.stock_quantity === 0;
                    return (
                      <TR
                        key={p.id}
                        style={{
                          borderBottom: `1px solid ${hair}`,
                          backgroundColor: current
                            ? `color-mix(in srgb, ${ink} 5%, transparent)`
                            : undefined,
                        }}
                      >
                        <TD className="py-2.5 pr-4 tabular-nums" style={{ color: muted }}>
                          {p.lot}
                        </TD>
                        <TD className="py-2.5 pr-4 font-medium">
                          {current ? (
                            <span className="inline-flex items-center gap-2">
                              {p.name}
                              <span
                                className="text-[10px] uppercase tracking-[0.12em] font-bold"
                                style={{ color: muted }}
                              >
                                Viewing
                              </span>
                            </span>
                          ) : (
                            <button
                              type="button"
                              onClick={() => setSelectedId(p.id)}
                              className="ob-focus text-left underline-offset-4 hover:underline"
                            >
                              {p.name}
                            </button>
                          )}
                        </TD>
                        <TD className="py-2.5 pr-4" style={{ color: muted }}>
                          {p.country}
                        </TD>
                        <TD className="py-2.5 pr-4 text-right tabular-nums">
                          {money(p.price_cents)}
                        </TD>
                        <TD
                          className="py-2.5 pr-4 text-right tabular-nums"
                          style={{ color: out ? accent : p.stock_quantity <= 5 ? accent : ink }}
                        >
                          {out
                            ? "Sold out"
                            : p.stock_quantity + (p.stock_quantity <= 5 ? " — low" : "")}
                        </TD>
                        <TD
                          className="py-2.5 text-right tabular-nums"
                          style={{ color: inCart(p.id) ? ink : muted }}
                        >
                          {inCart(p.id) || "—"}
                        </TD>
                      </TR>
                    );
                  })}
                </TBody>
              </Table>
            </section>
          </div>

          {/* cart rail */}
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <Card
              className="rounded-none border-0 bg-transparent p-0 shadow-none"
              style={{ border: `2px solid ${ink}`, borderRadius: brand.radius }}
            >
              <CardHeader className="space-y-0 p-4 pb-3">
                <div className="flex items-baseline justify-between">
                  <CardTitle className="text-[11px] uppercase tracking-[0.14em] font-bold">
                    Your cart
                  </CardTitle>
                  <span
                    className="text-[11px] uppercase tracking-[0.14em] tabular-nums"
                    style={{ color: muted }}
                  >
                    {cartCount} {cartCount === 1 ? "item" : "items"}
                  </span>
                </div>
              </CardHeader>
              <div className="h-[2px] w-full" style={{ backgroundColor: ink }} />
              <CardContent className="p-0">
                {cart.length === 0 ? (
                  <div className="p-4">
                    <Empty
                      title="Nothing in the cart yet"
                      description="Pick a lot and add it here. We keep the cart on this device — nothing is reserved until you pay."
                      action={
                        <Button
                          type="button"
                          onClick={() => navigate("catalogue")}
                          className="ob-focus h-10 bg-transparent px-4 text-[11px] uppercase tracking-[0.14em] font-bold"
                          style={{
                            border: `2px solid ${ink}`,
                            color: ink,
                            borderRadius: brand.radius,
                          }}
                        >
                          Browse all lots
                        </Button>
                      }
                    />
                  </div>
                ) : (
                  <ul className="list-none p-0">
                    {cart.map((line, i) => {
                      const prod = PRODUCTS.find((p) => p.id === line.product_id);
                      const stock = prod ? prod.stock_quantity : line.quantity;
                      return (
                        <li
                          key={line.id}
                          className="ob-in p-4"
                          style={{ borderTop: i === 0 ? "none" : `1px solid ${hair}` }}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0">
                              <p className="truncate text-[13px] font-bold leading-snug">
                                {line.product_name}
                              </p>
                              <p
                                className="mt-0.5 text-[11px] tabular-nums"
                                style={{ color: muted }}
                              >
                                {money(line.unit_price_cents)} each · lot {prod ? prod.lot : "—"}
                              </p>
                            </div>
                            <button
                              type="button"
                              aria-label={"Remove " + line.product_name + " from cart"}
                              onClick={() => removeLine(line.id)}
                              className="ob-focus -mr-1 -mt-1 flex h-8 w-8 shrink-0 items-center justify-center transition-colors duration-150"
                              style={{ color: muted }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = accent;
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = muted;
                              }}
                            >
                              <X className="h-4 w-4" aria-hidden="true" />
                            </button>
                          </div>
                          <div className="mt-3 flex items-center justify-between">
                            <div
                              className="flex items-stretch"
                              style={{ border: `2px solid ${ink}`, borderRadius: brand.radius }}
                            >
                              <button
                                type="button"
                                aria-label={"Decrease quantity of " + line.product_name}
                                onClick={() => changeLine(line.id, line.quantity - 1)}
                                disabled={line.quantity <= 1}
                                className="ob-focus h-9 w-9 text-[16px] font-bold leading-none disabled:opacity-30"
                                style={{ borderRight: `2px solid ${ink}` }}
                              >
                                –
                              </button>
                              <span className="flex h-9 w-9 items-center justify-center text-[13px] font-bold tabular-nums">
                                {line.quantity}
                              </span>
                              <button
                                type="button"
                                aria-label={"Increase quantity of " + line.product_name}
                                onClick={() => changeLine(line.id, line.quantity + 1)}
                                disabled={line.quantity >= stock}
                                className="ob-focus h-9 w-9 text-[16px] font-bold leading-none disabled:opacity-30"
                                style={{ borderLeft: `2px solid ${ink}` }}
                              >
                                +
                              </button>
                            </div>
                            <span className="text-[14px] font-bold tabular-nums">
                              {money(line.quantity * line.unit_price_cents)}
                            </span>
                          </div>
                          {line.quantity >= stock ? (
                            <p className="mt-2 text-[11px] leading-4" style={{ color: accent }}>
                              That is all {stock} we have of this lot.
                            </p>
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </CardContent>

              {cart.length > 0 ? (
                <CardFooter className="block p-0">
                  <div className="h-[2px] w-full" style={{ backgroundColor: ink }} />
                  <div className="p-4">
                    <div className="flex items-baseline justify-between">
                      <span className={label} style={{ color: muted }}>
                        Subtotal
                      </span>
                      <span className="text-[20px] font-bold tabular-nums">{money(subtotal)}</span>
                    </div>
                    <p className="mt-2 text-[11px] leading-4" style={{ color: muted }}>
                      VAT and flat-rate shipping are added at checkout. Guest checkout — no account
                      needed.
                    </p>
                    <Button
                      type="button"
                      onClick={() => navigate("checkout")}
                      className="ob-focus mt-4 h-11 w-full text-[11px] uppercase tracking-[0.16em] font-bold"
                      style={{ backgroundColor: ink, color: paper, borderRadius: brand.radius }}
                    >
                      Go to checkout
                    </Button>
                  </div>
                </CardFooter>
              ) : null}
            </Card>

            <p className="mt-4 text-[11px] leading-5" style={{ color: muted }}>
              Orders placed before 14:00 are roasted and posted the same working day from the shop
              in Peckham.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
