"use client";
// Generated screens hold state and handle events, which a server component
// cannot do. Next.js renders on the server unless a module says otherwise.

// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Card, Input, Label, Select, Checkbox, Badge, Table, THead, TBody, TR, TH, TD, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Check, X, Clock, Trash, ArrowLeft, AlertCircle } = Icons;

const TAX_RATE_PERCENT = 20;
const CURRENCY = "GBP";

const INITIAL_LINES = [
  {
    id: "p-1041",
    sku: "KF-1041",
    mark: "AG",
    name: "Ash Glaze Pour-Over Dripper",
    variant: "Stoneware, 1–2 cup",
    unit_price_cents: 4200,
    stock_quantity: 6,
    quantity: 1,
  },
  {
    id: "p-1088",
    sku: "KF-1088",
    mark: "KM",
    name: "Kiyomi Mug 280ml",
    variant: "Oatmeal, hand-thrown",
    unit_price_cents: 2400,
    stock_quantity: 3,
    quantity: 2,
  },
  {
    id: "p-1163",
    sku: "KF-1163",
    mark: "LA",
    name: "Linen Apron",
    variant: "Indigo, cross-back",
    unit_price_cents: 5800,
    stock_quantity: 4,
    quantity: 1,
  },
  {
    id: "p-1205",
    sku: "KF-1205",
    mark: "BS",
    name: "Brass Coffee Scoop No.4",
    variant: "Unlacquered, 10g",
    unit_price_cents: 1600,
    stock_quantity: 12,
    quantity: 1,
  },
];

const SHIPPING_OPTIONS = [
  { id: "ship-48", name: "Royal Mail Tracked 48", note: "2–3 working days", cost_cents: 395, active: true },
  { id: "ship-24", name: "Royal Mail Tracked 24", note: "Next working day if ordered before 14:00", cost_cents: 650, active: true },
  { id: "ship-dpd", name: "DPD Next Day, signed for", note: "Signature on delivery", cost_cents: 895, active: true },
  { id: "ship-collect", name: "Collect from the Hackney workshop", note: "Mon–Fri, 10:00–17:00, E8 4QN", cost_cents: 0, active: true },
  { id: "ship-eu", name: "Europe economy", note: "Retired 12 Sep", cost_cents: 1450, active: false },
];

const FIELD_ORDER = [
  "contact_email",
  "shipping_name",
  "address1",
  "city",
  "postcode",
  "card_name",
  "card_number",
  "card_expiry",
  "card_cvc",
  "billing_postcode",
];

const FIELD_LABELS = {
  contact_email: "Email for your order",
  shipping_name: "Full name",
  address1: "Address line 1",
  city: "Town or city",
  postcode: "Postcode",
  card_name: "Name on card",
  card_number: "Card number",
  card_expiry: "Expiry",
  card_cvc: "Security code",
  billing_postcode: "Billing postcode",
};

const money = (cents) => {
  const sign = cents < 0 ? "-" : "";
  const v = (Math.abs(cents) / 100).toFixed(2);
  const parts = v.split(".");
  return sign + "£" + parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "." + parts[1];
};

const SectionHead = ({ num, id, title, aside }) => (
  <div
    className="flex items-baseline gap-3 border-b-2 pb-2"
    style={{ borderColor: brand.primaryColor }}
  >
    <span
      className="text-[11px] font-bold leading-none"
      style={{ color: brand.neutralColor, fontVariantNumeric: "tabular-nums" }}
    >
      {num}
    </span>
    <h2
      id={id}
      className="text-[13px] font-bold uppercase leading-none"
      style={{ letterSpacing: "0.18em", color: brand.primaryColor }}
    >
      {title}
    </h2>
    {aside ? (
      <span
        className="ml-auto text-[11px] uppercase leading-none"
        style={{ letterSpacing: "0.12em", color: brand.neutralColor }}
      >
        {aside}
      </span>
    ) : null}
  </div>
);

const Field = ({
  id,
  label,
  value,
  onChange,
  error,
  hint,
  type = "text",
  autoComplete,
  inputMode,
  maxLength,
  optional,
  className,
  placeholder,
}) => (
  <div className={className}>
    <Label
      htmlFor={id}
      className="block text-[11px] font-semibold uppercase"
      style={{ letterSpacing: "0.12em", color: brand.primaryColor }}
    >
      {label}
      {optional ? (
        <span className="font-normal normal-case" style={{ color: brand.neutralColor, letterSpacing: "0" }}>
          {" "}
          — optional
        </span>
      ) : null}
    </Label>
    <Input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
      inputMode={inputMode}
      maxLength={maxLength}
      placeholder={placeholder}
      aria-invalid={error ? "true" : undefined}
      aria-describedby={error ? id + "-error" : hint ? id + "-hint" : undefined}
      className="mt-1.5 h-10 w-full rounded-none border-2 bg-white px-3 text-sm"
      style={{
        borderColor: error ? brand.accentColor : brand.primaryColor,
        color: brand.primaryColor,
        borderRadius: brand.radius,
        fontVariantNumeric: "tabular-nums",
      }}
    />
    {error ? (
      <p
        id={id + "-error"}
        className="mt-1 flex items-start gap-1.5 text-[12px] leading-snug"
        style={{ color: brand.accentColor }}
      >
        <AlertCircle className="mt-[1px] h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        <span>{error}</span>
      </p>
    ) : hint ? (
      <p id={id + "-hint"} className="mt-1 text-[12px] leading-snug" style={{ color: brand.neutralColor }}>
        {hint}
      </p>
    ) : null}
  </div>
);

export default function Screen() {
  const navigate = useNavigate();
  const P = brand.primaryColor;
  const N = brand.neutralColor;
  const A = brand.accentColor;
  const HAIR = "rgba(17,17,17,0.14)";

  const [lines, setLines] = React.useState(INITIAL_LINES);
  const [removed, setRemoved] = React.useState(null);
  const [capNotice, setCapNotice] = React.useState(null);
  const [shippingId, setShippingId] = React.useState("ship-48");
  const [sameBilling, setSameBilling] = React.useState(true);
  const [status, setStatus] = React.useState("idle"); // idle | paying | confirmed
  const [payError, setPayError] = React.useState(null);
  const [errors, setErrors] = React.useState({});
  const [order, setOrder] = React.useState(null);
  const [checking, setChecking] = React.useState(false);
  const [checkedLabel, setCheckedLabel] = React.useState("2 minutes ago");
  const [form, setForm] = React.useState({
    contact_email: "",
    shipping_name: "",
    address1: "",
    address2: "",
    city: "",
    postcode: "",
    country: "GB",
    card_name: "",
    card_number: "",
    card_expiry: "",
    card_cvc: "",
    billing_postcode: "",
  });

  const timers = React.useRef([]);
  React.useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const later = (fn, ms) => {
    const t = setTimeout(fn, ms);
    timers.current.push(t);
  };

  const set = (key) => (e) => {
    const v = e.target.value;
    setForm((f) => ({ ...f, [key]: v }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  const activeOptions = SHIPPING_OPTIONS.filter((o) => o.active);
  const shipping = activeOptions.find((o) => o.id === shippingId) || activeOptions[0];
  const itemCount = lines.reduce((n, l) => n + l.quantity, 0);
  const subtotal = lines.reduce((n, l) => n + l.quantity * l.unit_price_cents, 0);
  const shippingCents = lines.length ? shipping.cost_cents : 0;
  const taxCents = Math.round(((subtotal + shippingCents) * TAX_RATE_PERCENT) / 100);
  const total = subtotal + shippingCents + taxCents;

  const setQuantity = (id, next) => {
    setLines((ls) =>
      ls.map((l) => {
        if (l.id !== id) return l;
        const wanted = Math.max(1, Math.min(99, next));
        if (wanted > l.stock_quantity) {
          setCapNotice({
            id,
            text: "Only " + l.stock_quantity + " left on the shelf — quantity capped at " + l.stock_quantity + ".",
          });
          return { ...l, quantity: l.stock_quantity };
        }
        setCapNotice(null);
        return { ...l, quantity: wanted };
      })
    );
    setPayError(null);
  };

  const removeLine = (id) => {
    const idx = lines.findIndex((l) => l.id === id);
    if (idx < 0) return;
    setRemoved({ line: lines[idx], index: idx });
    setLines((ls) => ls.filter((l) => l.id !== id));
    setCapNotice(null);
    setPayError(null);
  };

  const undoRemove = () => {
    if (!removed) return;
    setLines((ls) => {
      const next = ls.slice();
      next.splice(removed.index, 0, removed.line);
      return next;
    });
    setRemoved(null);
  };

  const recheckStock = () => {
    setChecking(true);
    later(() => {
      setChecking(false);
      setCheckedLabel("just now");
    }, 850);
  };

  const validate = () => {
    const e = {};
    const email = form.contact_email.trim();
    if (!email) e.contact_email = "We need an email to send your order reference to.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) e.contact_email = "That email is missing an @ or a domain.";
    if (!form.shipping_name.trim()) e.shipping_name = "Who should we address the parcel to?";
    if (!form.address1.trim()) e.address1 = "Add a street and house or flat number.";
    if (!form.city.trim()) e.city = "Add a town or city.";
    const pc = form.postcode.trim();
    if (!pc) e.postcode = "Add a UK postcode, e.g. E8 4QN.";
    else if (!/^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i.test(pc)) e.postcode = "That doesn't look like a UK postcode.";
    if (!form.card_name.trim()) e.card_name = "Enter the name printed on the card.";
    const digits = form.card_number.replace(/\s/g, "");
    if (!digits) e.card_number = "Enter the 16 digits on the front of your card.";
    else if (digits.length !== 16) e.card_number = "A card number is 16 digits — you have " + digits.length + ".";
    if (!/^\d{2}\/\d{2}$/.test(form.card_expiry)) e.card_expiry = "Use MM/YY.";
    if (!/^\d{3,4}$/.test(form.card_cvc)) e.card_cvc = "3 digits from the back of the card.";
    if (!sameBilling && !form.billing_postcode.trim()) e.billing_postcode = "Stripe needs the postcode your card is registered to.";
    return e;
  };

  const handlePay = (e) => {
    e.preventDefault();
    if (!lines.length || status === "paying") return;
    const errs = validate();
    const keys = Object.keys(errs).filter((k) => errs[k]);
    setErrors(errs);
    if (keys.length) {
      setPayError(null);
      const first = FIELD_ORDER.find((f) => errs[f]);
      const el = first && document.getElementById(first);
      if (el && el.focus) el.focus();
      return;
    }
    setPayError(null);
    setStatus("paying");
    later(() => {
      const digits = form.card_number.replace(/\s/g, "");
      const apron = lines.find((l) => l.id === "p-1163");
      if (digits.endsWith("0002")) {
        setStatus("idle");
        setPayError({ kind: "declined" });
        return;
      }
      if (apron && apron.quantity >= 3) {
        const available = apron.quantity - 1;
        setStatus("idle");
        setLines((ls) => ls.map((l) => (l.id === "p-1163" ? { ...l, stock_quantity: available } : l)));
        setPayError({ kind: "stock", lineId: "p-1163", name: apron.name, available });
        return;
      }
      const now = new Date();
      const ref =
        "KF-" +
        String(now.getFullYear()).slice(2) +
        String(now.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(4000 + Math.floor(Math.random() * 5000));
      setOrder({
        order_reference: ref,
        placed_at:
          now.getDate() +
          " " +
          now.toLocaleString("en-GB", { month: "long" }) +
          " " +
          now.getFullYear() +
          ", " +
          String(now.getHours()).padStart(2, "0") +
          ":" +
          String(now.getMinutes()).padStart(2, "0"),
        items: lines.map((l) => ({ ...l, remaining: l.stock_quantity - l.quantity })),
        shipping_option: shipping,
        subtotal_cents: subtotal,
        shipping_cents: shippingCents,
        tax_cents: taxCents,
        total_cents: total,
        contact_email: form.contact_email.trim(),
        shipping_name: form.shipping_name.trim(),
        shipping_address: [form.address1, form.address2, form.city, form.postcode.toUpperCase(), "United Kingdom"]
          .filter(Boolean)
          .map((s) => String(s).trim()),
        card_last4: digits.slice(-4),
        stripe_payment_intent: "pi_3Q" + Math.random().toString(36).slice(2, 12),
        status: "paid",
      });
      setLines((ls) => ls.map((l) => ({ ...l, stock_quantity: l.stock_quantity - l.quantity, quantity: l.quantity })));
      setStatus("confirmed");
    }, 1400);
  };

  const errorKeys = Object.keys(errors).filter((k) => errors[k]);

  const styleBlock = (
    <style>{`
      .ob-scope :focus-visible { outline: 2px solid ${A}; outline-offset: 2px; }
      .ob-scope button, .ob-scope input, .ob-scope select, .ob-scope label { transition: background-color .14s ease, color .14s ease, border-color .14s ease; }
      @keyframes ob-in { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }
      @keyframes ob-sweep { 0% { transform: translateX(-100%); } 100% { transform: translateX(320%); } }
      .ob-in { animation: ob-in .18s ease-out both; }
      .ob-sweep { animation: ob-sweep 1.1s linear infinite; }
      @media (prefers-reduced-motion: reduce) {
        .ob-scope *, .ob-in, .ob-sweep { animation: none !important; transition: none !important; }
      }
    `}</style>
  );

  /* ---------------------------------------------------------------- CONFIRMED */
  if (status === "confirmed" && order) {
    return (
      <div
        className="ob-scope mx-auto w-full max-w-5xl px-4 py-8 sm:px-6"
        style={{ backgroundColor: brand.backgroundColor, fontFamily: brand.fontBody, color: P }}
      >
        {styleBlock}
        <p className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.2em", color: N }}>
          Guest order · paid
        </p>
        <h1
          className="mt-2 text-[34px] font-bold leading-[1.1] sm:text-[40px]"
          style={{ fontFamily: brand.fontHeading, letterSpacing: "-0.02em" }}
        >
          Order confirmed
        </h1>
        <p className="mt-3 max-w-[62ch] text-sm leading-6" style={{ color: N }}>
          Your card was charged {money(order.total_cents)} and the stock has been deducted. We don't send receipt emails
          yet — keep the reference below, it's how we find your order.
        </p>

        <div className="ob-in mt-6 border-2" style={{ borderColor: P }}>
          <div
            className="flex flex-wrap items-center justify-between gap-4 border-b-2 px-5 py-4"
            style={{ borderColor: P }}
          >
            <div>
              <p className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.16em", color: N }}>
                Order reference
              </p>
              <p
                className="mt-1 text-[26px] font-bold leading-none"
                style={{ fontVariantNumeric: "tabular-nums", letterSpacing: "0.02em" }}
              >
                {order.order_reference}
              </p>
            </div>
            <div className="text-right">
              <Badge
                className="rounded-none border-2 px-2.5 py-1 text-[11px] font-semibold uppercase"
                style={{ borderColor: P, backgroundColor: P, color: brand.backgroundColor, letterSpacing: "0.12em" }}
              >
                <Check className="mr-1 inline h-3.5 w-3.5 align-[-2px]" aria-hidden="true" />
                Paid · awaiting shipment
              </Badge>
              <p className="mt-2 text-[12px]" style={{ color: N, fontVariantNumeric: "tabular-nums" }}>
                Placed {order.placed_at}
              </p>
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[1fr_320px]">
            <div className="px-5 py-5">
              <h2 className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.16em", color: N }}>
                Items
              </h2>
              <Table className="mt-3 w-full text-sm" style={{ fontVariantNumeric: "tabular-nums" }}>
                <THead>
                  <TR style={{ borderBottom: "2px solid " + P }}>
                    <TH className="py-2 text-left text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.12em", color: N }}>
                      Product
                    </TH>
                    <TH className="py-2 text-right text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.12em", color: N }}>
                      Unit
                    </TH>
                    <TH className="py-2 text-right text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.12em", color: N }}>
                      Qty
                    </TH>
                    <TH className="py-2 text-right text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.12em", color: N }}>
                      Line
                    </TH>
                  </TR>
                </THead>
                <TBody>
                  {order.items.map((l) => (
                    <TR key={l.id} style={{ borderBottom: "1px solid " + HAIR }}>
                      <TD className="py-2.5 pr-3 align-top">
                        <span className="font-medium">{l.name}</span>
                        <span className="block text-[12px]" style={{ color: N }}>
                          {l.sku} · {l.variant} · {l.remaining} left in stock
                        </span>
                      </TD>
                      <TD className="py-2.5 text-right align-top">{money(l.unit_price_cents)}</TD>
                      <TD className="py-2.5 text-right align-top">{l.quantity}</TD>
                      <TD className="py-2.5 text-right align-top font-medium">{money(l.unit_price_cents * l.quantity)}</TD>
                    </TR>
                  ))}
                </TBody>
              </Table>

              <dl className="mt-4 w-full max-w-[320px] text-sm" style={{ fontVariantNumeric: "tabular-nums" }}>
                {[
                  ["Subtotal", money(order.subtotal_cents)],
                  [order.shipping_option.name, order.shipping_cents === 0 ? "Free" : money(order.shipping_cents)],
                  ["VAT " + TAX_RATE_PERCENT + "%", money(order.tax_cents)],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between py-1.5" style={{ borderBottom: "1px solid " + HAIR }}>
                    <dt style={{ color: N }}>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
                <div className="flex items-baseline justify-between pt-2.5">
                  <dt className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.14em" }}>
                    Charged
                  </dt>
                  <dd className="text-[22px] font-bold leading-none">{money(order.total_cents)}</dd>
                </div>
              </dl>
            </div>

            <div className="border-t-2 px-5 py-5 lg:border-l-2 lg:border-t-0" style={{ borderColor: P }}>
              <h2 className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.16em", color: N }}>
                Shipping to
              </h2>
              <address className="mt-2 text-sm not-italic leading-6">
                <span className="font-medium">{order.shipping_name}</span>
                <br />
                {order.shipping_address.map((l, i) => (
                  <span key={i}>
                    {l}
                    <br />
                  </span>
                ))}
              </address>
              <div className="my-4" style={{ borderTop: "1px solid " + HAIR }} />
              <h3 className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.16em", color: N }}>
                Delivery
              </h3>
              <p className="mt-1.5 text-sm leading-6">
                {order.shipping_option.name}
                <span className="block text-[12px]" style={{ color: N }}>
                  {order.shipping_option.note}
                </span>
              </p>
              <div className="my-4" style={{ borderTop: "1px solid " + HAIR }} />
              <h3 className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.16em", color: N }}>
                Payment
              </h3>
              <p className="mt-1.5 text-sm leading-6" style={{ fontVariantNumeric: "tabular-nums" }}>
                Card ending {order.card_last4}
                <span className="block text-[12px]" style={{ color: N }}>
                  Stripe · {order.stripe_payment_intent}
                </span>
                <span className="block text-[12px]" style={{ color: N }}>
                  Confirmation sent to {order.contact_email} on screen only
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            onClick={() => navigate("catalogue")}
            className="h-11 rounded-none border-2 px-5 text-[12px] font-bold uppercase"
            style={{ backgroundColor: P, color: brand.backgroundColor, borderColor: P, letterSpacing: "0.14em", borderRadius: brand.radius }}
          >
            Keep shopping
          </Button>
          <Button
            onClick={() => navigate("account")}
            className="h-11 rounded-none border-2 bg-transparent px-5 text-[12px] font-bold uppercase"
            style={{ color: P, borderColor: P, letterSpacing: "0.14em", borderRadius: brand.radius }}
          >
            Create an account to track it
          </Button>
        </div>
      </div>
    );
  }

  /* ---------------------------------------------------------------- CHECKOUT */
  return (
    <div
      className="ob-scope mx-auto w-full max-w-6xl px-4 py-8 sm:px-6"
      style={{ backgroundColor: brand.backgroundColor, fontFamily: brand.fontBody, color: P }}
    >
      {styleBlock}

      <header className="flex flex-wrap items-end justify-between gap-4 border-b-2 pb-5" style={{ borderColor: P }}>
        <div>
          <p className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.2em", color: N }}>
            Guest checkout · no account needed
          </p>
          <h1
            className="mt-2 text-[34px] font-bold leading-[1.05] sm:text-[40px]"
            style={{ fontFamily: brand.fontHeading, letterSpacing: "-0.02em" }}
          >
            Bag &amp; checkout
          </h1>
          <p className="mt-2 text-sm" style={{ color: N, fontVariantNumeric: "tabular-nums" }}>
            Prices in {CURRENCY}. VAT {TAX_RATE_PERCENT}% added at the total. We ship within the United Kingdom only.
          </p>
        </div>
        <div className="flex items-center gap-2 border-2 px-3 py-2" style={{ borderColor: HAIR, borderRadius: brand.radius }}>
          <Clock className="h-4 w-4" aria-hidden="true" style={{ color: N }} />
          <span className="text-[12px]" style={{ color: N }} aria-live="polite">
            {checking ? (
              <span className="animate-pulse">Checking the shelf…</span>
            ) : (
              <>Stock checked {checkedLabel}</>
            )}
          </span>
          <Button
            type="button"
            onClick={recheckStock}
            disabled={checking}
            className="h-8 rounded-none border-2 bg-transparent px-2.5 text-[11px] font-bold uppercase disabled:opacity-50"
            style={{ color: P, borderColor: P, letterSpacing: "0.1em", borderRadius: brand.radius }}
          >
            Recheck
          </Button>
        </div>
      </header>

      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-8">
        {/* ------------------------------------------------ LEFT COLUMN */}
        <div className="min-w-0">
          {/* 01 BAG */}
          <section aria-labelledby="sec-bag">
            <SectionHead
              num="01"
              id="sec-bag"
              title="Your bag"
              aside={lines.length ? itemCount + (itemCount === 1 ? " item" : " items") : "empty"}
            />

            {lines.length === 0 ? (
              <div className="mt-6">
                <Empty
                  title="Your bag is empty"
                  description="Nothing to check out yet. There are 41 pieces on the shelf right now — mugs, aprons and brewing kit, all made in the Hackney workshop."
                  action={
                    <Button
                      onClick={() => navigate("catalogue")}
                      className="h-11 rounded-none border-2 px-5 text-[12px] font-bold uppercase"
                      style={{
                        backgroundColor: P,
                        color: brand.backgroundColor,
                        borderColor: P,
                        letterSpacing: "0.14em",
                        borderRadius: brand.radius,
                      }}
                    >
                      Browse the catalogue
                    </Button>
                  }
                />
              </div>
            ) : (
              <Table className="mt-1 w-full text-sm" style={{ fontVariantNumeric: "tabular-nums" }}>
                <THead>
                  <TR style={{ borderBottom: "2px solid " + P }}>
                    <TH className="py-2.5 text-left text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.12em", color: N }}>
                      Product
                    </TH>
                    <TH className="hidden py-2.5 text-right text-[11px] font-semibold uppercase sm:table-cell" style={{ letterSpacing: "0.12em", color: N }}>
                      Unit
                    </TH>
                    <TH className="py-2.5 text-center text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.12em", color: N }}>
                      Qty
                    </TH>
                    <TH className="py-2.5 text-right text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.12em", color: N }}>
                      Line total
                    </TH>
                    <TH className="w-10 py-2.5">
                      <span className="sr-only">Remove</span>
                    </TH>
                  </TR>
                </THead>
                <TBody>
                  {lines.map((l) => {
                    const capped = capNotice && capNotice.id === l.id;
                    const blocked = payError && payError.kind === "stock" && payError.lineId === l.id;
                    return (
                      <TR key={l.id} className="ob-in" style={{ borderBottom: "1px solid " + HAIR }}>
                        <TD className="py-3 pr-3 align-top">
                          <div className="flex gap-3">
                            <span
                              aria-hidden="true"
                              className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border-2 text-[11px] font-bold"
                              style={{ borderColor: blocked ? A : P, color: blocked ? A : P, letterSpacing: "0.04em" }}
                            >
                              {l.mark}
                            </span>
                            <div className="min-w-0">
                              <button
                                type="button"
                                onClick={() => navigate("product-detail")}
                                className="text-left text-sm font-medium underline-offset-2 hover:underline"
                                style={{ color: P }}
                              >
                                {l.name}
                              </button>
                              <span className="block text-[12px]" style={{ color: N }}>
                                {l.sku} · {l.variant} · {l.stock_quantity} in stock
                              </span>
                              <span className="block text-[12px] sm:hidden" style={{ color: N }}>
                                {money(l.unit_price_cents)} each
                              </span>
                              {capped ? (
                                <span role="status" className="mt-1 flex items-start gap-1.5 text-[12px]" style={{ color: A }}>
                                  <AlertCircle className="mt-[1px] h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                                  {capNotice.text}
                                </span>
                              ) : null}
                              {blocked ? (
                                <span role="status" className="mt-1 flex items-start gap-1.5 text-[12px]" style={{ color: A }}>
                                  <AlertCircle className="mt-[1px] h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                                  Sold out to {l.stock_quantity} while you were checking out.
                                </span>
                              ) : null}
                            </div>
                          </div>
                        </TD>
                        <TD className="hidden py-3 text-right align-top sm:table-cell">{money(l.unit_price_cents)}</TD>
                        <TD className="py-3 align-top">
                          <div className="flex justify-center">
                            <div className="inline-flex items-center border-2" style={{ borderColor: P, borderRadius: brand.radius }}>
                              <button
                                type="button"
                                aria-label={"Decrease quantity of " + l.name}
                                onClick={() => setQuantity(l.id, l.quantity - 1)}
                                disabled={l.quantity <= 1}
                                className="h-10 w-10 text-base font-bold leading-none disabled:opacity-30"
                                style={{ color: P }}
                              >
                                −
                              </button>
                              <Label htmlFor={"qty-" + l.id} className="sr-only">
                                Quantity for {l.name}
                              </Label>
                              <input
                                id={"qty-" + l.id}
                                inputMode="numeric"
                                value={l.quantity}
                                onChange={(e) => {
                                  const n = parseInt(e.target.value.replace(/\D/g, ""), 10);
                                  setQuantity(l.id, isNaN(n) ? 1 : n);
                                }}
                                className="h-10 w-11 border-x-2 bg-white text-center text-sm font-medium outline-none"
                                style={{ borderColor: P, color: P, fontVariantNumeric: "tabular-nums" }}
                              />
                              <button
                                type="button"
                                aria-label={"Increase quantity of " + l.name}
                                onClick={() => setQuantity(l.id, l.quantity + 1)}
                                className="h-10 w-10 text-base font-bold leading-none"
                                style={{ color: P }}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </TD>
                        <TD className="py-3 text-right align-top font-medium">{money(l.unit_price_cents * l.quantity)}</TD>
                        <TD className="py-3 align-top">
                          <button
                            type="button"
                            aria-label={"Remove " + l.name + " from your bag"}
                            onClick={() => removeLine(l.id)}
                            className="flex h-10 w-10 items-center justify-center"
                            style={{ color: N }}
                          >
                            <Trash className="h-4 w-4" aria-hidden="true" />
                          </button>
                        </TD>
                      </TR>
                    );
                  })}
                </TBody>
              </Table>
            )}

            {removed ? (
              <div
                className="ob-in mt-3 flex flex-wrap items-center justify-between gap-3 border-2 px-3 py-2.5"
                style={{ borderColor: HAIR, borderRadius: brand.radius }}
                role="status"
              >
                <p className="text-[13px]" style={{ color: N }}>
                  Removed <span style={{ color: P }}>{removed.line.name}</span> ({money(removed.line.unit_price_cents * removed.line.quantity)}).
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    onClick={undoRemove}
                    className="h-9 rounded-none border-2 bg-transparent px-3 text-[11px] font-bold uppercase"
                    style={{ color: P, borderColor: P, letterSpacing: "0.1em", borderRadius: brand.radius }}
                  >
                    Put it back
                  </Button>
                  <button
                    type="button"
                    aria-label="Dismiss removal notice"
                    onClick={() => setRemoved(null)}
                    className="flex h-9 w-9 items-center justify-center"
                    style={{ color: N }}
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            ) : null}
          </section>

          {lines.length > 0 ? (
            <form id="checkout-form" onSubmit={handlePay} noValidate>
              {errorKeys.length > 0 ? (
                <div
                  className="ob-in mt-8 border-2 px-4 py-3"
                  style={{ borderColor: A, borderRadius: brand.radius }}
                  role="alert"
                >
                  <p className="flex items-center gap-2 text-[13px] font-bold uppercase" style={{ color: A, letterSpacing: "0.1em" }}>
                    <AlertCircle className="h-4 w-4" aria-hidden="true" />
                    {errorKeys.length} {errorKeys.length === 1 ? "detail needs" : "details need"} fixing before we can take payment
                  </p>
                  <ul className="mt-2 space-y-1">
                    {FIELD_ORDER.filter((k) => errors[k]).map((k) => (
                      <li key={k} className="text-[13px]">
                        <button
                          type="button"
                          onClick={() => {
                            const el = document.getElementById(k);
                            if (el && el.focus) el.focus();
                          }}
                          className="underline underline-offset-2"
                          style={{ color: P }}
                        >
                          {FIELD_LABELS[k]}
                        </button>
                        <span style={{ color: N }}> — {errors[k]}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 text-[12px]" style={{ color: N }}>
                    Everything you typed has been kept.
                  </p>
                </div>
              ) : null}

              {/* 02 CONTACT + ADDRESS */}
              <section aria-labelledby="sec-address" className="mt-9">
                <SectionHead num="02" id="sec-address" title="Contact & shipping address" aside="United Kingdom only" />
                <p className="mt-3 max-w-[62ch] text-[13px] leading-6" style={{ color: N }}>
                  Buying as a guest. We use your email for the order reference and nothing else — you'll never be asked
                  to make an account to finish a purchase.
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Field
                    id="contact_email"
                    label={FIELD_LABELS.contact_email}
                    value={form.contact_email}
                    onChange={set("contact_email")}
                    error={errors.contact_email}
                    type="email"
                    autoComplete="email"
                    className="sm:col-span-2"
                  />
                  <Field
                    id="shipping_name"
                    label={FIELD_LABELS.shipping_name}
                    value={form.shipping_name}
                    onChange={set("shipping_name")}
                    error={errors.shipping_name}
                    autoComplete="name"
                    className="sm:col-span-2"
                  />
                  <Field
                    id="address1"
                    label={FIELD_LABELS.address1}
                    value={form.address1}
                    onChange={set("address1")}
                    error={errors.address1}
                    autoComplete="address-line1"
                    className="sm:col-span-2"
                  />
                  <Field
                    id="address2"
                    label="Address line 2"
                    value={form.address2}
                    onChange={set("address2")}
                    autoComplete="address-line2"
                    optional
                    className="sm:col-span-2"
                  />
                  <Field
                    id="city"
                    label={FIELD_LABELS.city}
                    value={form.city}
                    onChange={set("city")}
                    error={errors.city}
                    autoComplete="address-level2"
                  />
                  <Field
                    id="postcode"
                    label={FIELD_LABELS.postcode}
                    value={form.postcode}
                    onChange={set("postcode")}
                    error={errors.postcode}
                    autoComplete="postal-code"
                    hint="e.g. E8 4QN"
                  />
                  <div className="sm:col-span-2">
                    <Label
                      htmlFor="country"
                      className="block text-[11px] font-semibold uppercase"
                      style={{ letterSpacing: "0.12em", color: P }}
                    >
                      Country
                    </Label>
                    <Select
                      id="country"
                      value={form.country}
                      onChange={set("country")}
                      aria-describedby="country-hint"
                      className="mt-1.5 h-10 w-full rounded-none border-2 bg-white px-3 text-sm"
                      style={{ borderColor: P, color: P, borderRadius: brand.radius }}
                    >
                      <option value="GB">United Kingdom</option>
                    </Select>
                    <p id="country-hint" className="mt-1 text-[12px]" style={{ color: N }}>
                      We only post within the UK for now.
                    </p>
                  </div>
                </div>
              </section>

              {/* 03 DELIVERY */}
              <section aria-labelledby="sec-delivery" className="mt-9">
                <SectionHead num="03" id="sec-delivery" title="Delivery" aside="flat rate" />
                <fieldset className="mt-4 space-y-2">
                  <legend className="sr-only">Choose a delivery option</legend>
                  {activeOptions.map((o) => {
                    const selected = o.id === shippingId;
                    return (
                      <label
                        key={o.id}
                        className="flex cursor-pointer items-center gap-3 border-2 px-3 py-3"
                        style={{
                          borderColor: selected ? P : HAIR,
                          backgroundColor: brand.backgroundColor,
                          borderRadius: brand.radius,
                        }}
                      >
                        <input
                          type="radio"
                          name="shipping_option_id"
                          value={o.id}
                          checked={selected}
                          onChange={() => setShippingId(o.id)}
                          className="h-4 w-4"
                          style={{ accentColor: P }}
                        />
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-medium">{o.name}</span>
                          <span className="block text-[12px]" style={{ color: N }}>
                            {o.note}
                          </span>
                        </span>
                        <span className="text-sm font-medium" style={{ fontVariantNumeric: "tabular-nums" }}>
                          {o.cost_cents === 0 ? "Free" : money(o.cost_cents)}
                        </span>
                      </label>
                    );
                  })}
                </fieldset>
              </section>

              {/* 04 PAYMENT */}
              <section aria-labelledby="sec-payment" className="mt-9">
                <SectionHead num="04" id="sec-payment" title="Card payment" aside="Stripe · test mode" />

                {payError && payError.kind === "declined" ? (
                  <div
                    className="ob-in mt-4 border-2 px-4 py-3"
                    style={{ borderColor: A, borderRadius: brand.radius }}
                    role="alert"
                  >
                    <p className="flex items-center gap-2 text-[13px] font-bold uppercase" style={{ color: A, letterSpacing: "0.1em" }}>
                      <AlertCircle className="h-4 w-4" aria-hidden="true" />
                      Your bank declined the card
                    </p>
                    <p className="mt-1.5 max-w-[62ch] text-[13px] leading-6" style={{ color: N }}>
                      Stripe returned <span style={{ color: P }}>card_declined</span>. Nothing was charged and no order
                      was placed — your bag and address are exactly as you left them. Try another card, or check with
                      your bank and pay again.
                    </p>
                  </div>
                ) : null}

                {payError && payError.kind === "stock" ? (
                  <div
                    className="ob-in mt-4 border-2 px-4 py-3"
                    style={{ borderColor: A, borderRadius: brand.radius }}
                    role="alert"
                  >
                    <p className="flex items-center gap-2 text-[13px] font-bold uppercase" style={{ color: A, letterSpacing: "0.1em" }}>
                      <AlertCircle className="h-4 w-4" aria-hidden="true" />
                      One line sold out mid-checkout
                    </p>
                    <p className="mt-1.5 max-w-[62ch] text-[13px] leading-6" style={{ color: N }}>
                      Only {payError.available} × {payError.name} {payError.available === 1 ? "is" : "are"} left. We
                      stopped before charging anything — no payment was taken. Reduce that line and pay again.
                    </p>
                    <Button
                      type="button"
                      onClick={() => {
                        setQuantity(payError.lineId, payError.available);
                        setPayError(null);
                      }}
                      className="mt-3 h-9 rounded-none border-2 bg-transparent px-3 text-[11px] font-bold uppercase"
                      style={{ color: A, borderColor: A, letterSpacing: "0.1em", borderRadius: brand.radius }}
                    >
                      Set quantity to {payError.available}
                    </Button>
                  </div>
                ) : null}

                <p className="mt-4 max-w-[62ch] text-[13px] leading-6" style={{ color: N }}>
                  Card details go straight to Stripe; we never store them. For this preview, any 16-digit number
                  succeeds — end it with 0002 to see a decline.
                </p>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Field
                    id="card_name"
                    label={FIELD_LABELS.card_name}
                    value={form.card_name}
                    onChange={set("card_name")}
                    error={errors.card_name}
                    autoComplete="cc-name"
                    className="sm:col-span-2"
                  />
                  <Field
                    id="card_number"
                    label={FIELD_LABELS.card_number}
                    value={form.card_number}
                    onChange={(e) => {
                      const d = e.target.value.replace(/\D/g, "").slice(0, 16);
                      const grouped = d.replace(/(.{4})/g, "$1 ").trim();
                      setForm((f) => ({ ...f, card_number: grouped }));
                      setErrors((p) => (p.card_number ? { ...p, card_number: undefined } : p));
                    }}
                    error={errors.card_number}
                    inputMode="numeric"
                    autoComplete="cc-number"
                    placeholder="4242 4242 4242 4242"
                    className="sm:col-span-2"
                  />
                  <Field
                    id="card_expiry"
                    label={FIELD_LABELS.card_expiry}
                    value={form.card_expiry}
                    onChange={(e) => {
                      const d = e.target.value.replace(/\D/g, "").slice(0, 4);
                      const v = d.length > 2 ? d.slice(0, 2) + "/" + d.slice(2) : d;
                      setForm((f) => ({ ...f, card_expiry: v }));
                      setErrors((p) => (p.card_expiry ? { ...p, card_expiry: undefined } : p));
                    }}
                    error={errors.card_expiry}
                    inputMode="numeric"
                    autoComplete="cc-exp"
                    placeholder="MM/YY"
                  />
                  <Field
                    id="card_cvc"
                    label={FIELD_LABELS.card_cvc}
                    value={form.card_cvc}
                    onChange={(e) => {
                      const d = e.target.value.replace(/\D/g, "").slice(0, 4);
                      setForm((f) => ({ ...f, card_cvc: d }));
                      setErrors((p) => (p.card_cvc ? { ...p, card_cvc: undefined } : p));
                    }}
                    error={errors.card_cvc}
                    inputMode="numeric"
                    autoComplete="cc-csc"
                    placeholder="123"
                  />
                </div>

                <div className="mt-4 flex items-start gap-2.5">
                  <Checkbox
                    id="same_billing"
                    checked={sameBilling}
                    onChange={(e) => setSameBilling(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded-none"
                    style={{ accentColor: P }}
                  />
                  <Label htmlFor="same_billing" className="text-[13px] leading-5" style={{ color: P }}>
                    Billing address is the same as my shipping address
                  </Label>
                </div>
                {!sameBilling ? (
                  <div className="ob-in mt-3 max-w-[240px]">
                    <Field
                      id="billing_postcode"
                      label={FIELD_LABELS.billing_postcode}
                      value={form.billing_postcode}
                      onChange={set("billing_postcode")}
                      error={errors.billing_postcode}
                      autoComplete="billing postal-code"
                      hint="The postcode your card is registered to."
                    />
                  </div>
                ) : null}
              </section>
            </form>
          ) : null}
        </div>

        {/* ------------------------------------------------ SUMMARY */}
        <aside aria-labelledby="sec-summary" className="lg:sticky lg:top-6 lg:self-start">
          <div className="border-2" style={{ borderColor: P, borderRadius: brand.radius }}>
            <div className="border-b-2 px-4 py-3" style={{ borderColor: P }}>
              <h2
                id="sec-summary"
                className="text-[11px] font-bold uppercase leading-none"
                style={{ letterSpacing: "0.18em" }}
              >
                Order ledger
              </h2>
            </div>

            <div className="px-4 py-4" aria-live="polite">
              <dl className="text-sm" style={{ fontVariantNumeric: "tabular-nums" }}>
                <div className="flex items-baseline justify-between py-1.5" style={{ borderBottom: "1px solid " + HAIR }}>
                  <dt style={{ color: N }}>
                    Subtotal
                    <span className="block text-[12px]">{itemCount} {itemCount === 1 ? "item" : "items"}</span>
                  </dt>
                  <dd>{money(subtotal)}</dd>
                </div>
                <div className="flex items-baseline justify-between py-1.5" style={{ borderBottom: "1px solid " + HAIR }}>
                  <dt style={{ color: N }}>
                    Delivery
                    <span className="block max-w-[11rem] text-[12px]">{lines.length ? shipping.name : "Select at checkout"}</span>
                  </dt>
                  <dd>{lines.length ? (shippingCents === 0 ? "Free" : money(shippingCents)) : "—"}</dd>
                </div>
                <div className="flex items-baseline justify-between py-1.5" style={{ borderBottom: "1px solid " + HAIR }}>
                  <dt style={{ color: N }}>VAT {TAX_RATE_PERCENT}%</dt>
                  <dd>{money(taxCents)}</dd>
                </div>
                <div className="flex items-baseline justify-between pt-3">
                  <dt className="text-[11px] font-bold uppercase" style={{ letterSpacing: "0.14em" }}>
                    Total
                  </dt>
                  <dd className="text-[28px] font-bold leading-none" style={{ letterSpacing: "-0.01em" }}>
                    {money(total)}
                  </dd>
                </div>
              </dl>

              {lines.length === 0 ? (
                <>
                  <Button
                    type="button"
                    disabled
                    className="mt-5 h-12 w-full cursor-not-allowed rounded-none border-2 text-[12px] font-bold uppercase opacity-40"
                    style={{ backgroundColor: P, color: brand.backgroundColor, borderColor: P, letterSpacing: "0.16em", borderRadius: brand.radius }}
                  >
                    Pay {money(0)}
                  </Button>
                  <p className="mt-2 text-[12px] leading-5" style={{ color: N }}>
                    Add at least one item to your bag before you can check out.
                  </p>
                </>
              ) : (
                <>
                  <Button
                    type="submit"
                    form="checkout-form"
                    disabled={status === "paying"}
                    className="mt-5 flex h-12 w-full items-center justify-center rounded-none border-2 text-[12px] font-bold uppercase disabled:opacity-80"
                    style={{
                      backgroundColor: P,
                      color: brand.backgroundColor,
                      borderColor: P,
                      letterSpacing: "0.16em",
                      borderRadius: brand.radius,
                    }}
                  >
                    {status === "paying" ? "Authorising with Stripe…" : "Pay " + money(total)}
                  </Button>
                  {status === "paying" ? (
                    <div className="mt-2 h-[2px] w-full overflow-hidden" style={{ backgroundColor: HAIR }} role="status" aria-label="Authorising your card with Stripe">
                      <div className="ob-sweep h-full w-1/3" style={{ backgroundColor: P }} />
                    </div>
                  ) : null}
                  <p className="mt-3 text-[12px] leading-5" style={{ color: N }}>
                    Charged once in {CURRENCY}. Your order reference appears on this screen straight away — we don't
                    send receipt emails yet.
                  </p>
                </>
              )}

              <div className="my-4" style={{ borderTop: "1px solid " + HAIR }} />

              <Button
                type="button"
                onClick={() => navigate("catalogue")}
                className="flex h-10 w-full items-center justify-center gap-2 rounded-none border-2 bg-transparent text-[11px] font-bold uppercase"
                style={{ color: P, borderColor: P, letterSpacing: "0.12em", borderRadius: brand.radius }}
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to the catalogue
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
