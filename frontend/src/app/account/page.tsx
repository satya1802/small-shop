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

const {
  Button,
  Card,
  Input,
  Label,
  Select,
  Checkbox,
  Switch,
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

const {
  Search,
  Check,
  ChevronRight,
  ChevronDown,
  Package,
  Clock,
  Trash,
  Filter,
  AlertCircle,
  CheckCircle,
} = Icons;

const INK = brand.primaryColor;
const ACCENT = brand.accentColor;
const MUTED = brand.neutralColor;
const PAPER = brand.backgroundColor;
const HAIR = "rgba(17,17,17,0.14)";
const R = brand.radius;

const MONEY = new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR" });
const money = (cents) => MONEY.format(cents / 100);

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const longDate = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
};

const ACCOUNT_EMAIL = "mara.iversen@fastmail.de";
const ACCOUNT_CREATED = "2025-03-11";

const ORDERS = [
  {
    id: "ord_9f21",
    order_reference: "QM-2611-0421",
    created_at: "2026-11-03",
    created_time: "09:41",
    status: "placed",
    shipping_name: "Mara Iversen",
    shipping_address: "Oudegracht 214, 3511 NN Utrecht, Netherlands",
    contact_email: ACCOUNT_EMAIL,
    shipping_option: "Standard — PostNL, 2–4 working days",
    subtotal_cents: 9000,
    shipping_cents: 490,
    tax_cents: 1890,
    total_cents: 11380,
    stripe_payment_intent: "pi_3QmT7kL2xVb91Ra0",
    card: "Visa ending 4242",
    shipped_at: null,
    items: [
      { product_name: "Stoneware Serving Bowl — Ash", unit_price_cents: 4600, quantity: 1 },
      { product_name: "Hand-thrown Mug — Slate", unit_price_cents: 2200, quantity: 2 },
    ],
  },
  {
    id: "ord_9e08",
    order_reference: "QM-2611-0412",
    created_at: "2026-11-02",
    created_time: "14:06",
    status: "placed",
    shipping_name: "Mara Iversen",
    shipping_address: "Oudegracht 214, 3511 NN Utrecht, Netherlands",
    contact_email: ACCOUNT_EMAIL,
    shipping_option: "Standard — PostNL, 2–4 working days",
    subtotal_cents: 4700,
    shipping_cents: 490,
    tax_cents: 987,
    total_cents: 6177,
    stripe_payment_intent: "pi_3QmR1pD8wQe44Kb2",
    card: "Visa ending 4242",
    shipped_at: null,
    items: [
      { product_name: "Pour-Over Dripper — Ash", unit_price_cents: 3400, quantity: 1 },
      { product_name: "Filter Papers, Natural (100)", unit_price_cents: 650, quantity: 2 },
    ],
  },
  {
    id: "ord_8c77",
    order_reference: "QM-2610-0398",
    created_at: "2026-10-29",
    created_time: "20:18",
    status: "shipped",
    shipping_name: "Mara Iversen",
    shipping_address: "Oudegracht 214, 3511 NN Utrecht, Netherlands",
    contact_email: ACCOUNT_EMAIL,
    shipping_option: "Express — DHL next working day",
    subtotal_cents: 7350,
    shipping_cents: 1200,
    tax_cents: 1544,
    total_cents: 10094,
    stripe_payment_intent: "pi_3QlB6zH4tNm20Vc9",
    card: "Visa ending 4242",
    shipped_at: "2026-10-30",
    items: [
      { product_name: "Linen Apron — Flax", unit_price_cents: 5900, quantity: 1 },
      { product_name: "Beeswax Wood Balm 200 ml", unit_price_cents: 1450, quantity: 1 },
    ],
  },
  {
    id: "ord_8a31",
    order_reference: "QM-2610-0351",
    created_at: "2026-10-14",
    created_time: "11:52",
    status: "shipped",
    shipping_name: "Mara Iversen",
    shipping_address: "Oudegracht 214, 3511 NN Utrecht, Netherlands",
    contact_email: ACCOUNT_EMAIL,
    shipping_option: "Standard — PostNL, 2–4 working days",
    subtotal_cents: 8800,
    shipping_cents: 490,
    tax_cents: 1848,
    total_cents: 11138,
    stripe_payment_intent: "pi_3QkW9aR7uYp53Lf1",
    card: "Visa ending 4242",
    shipped_at: "2026-10-15",
    items: [{ product_name: "Hand-thrown Mug — Slate", unit_price_cents: 2200, quantity: 4 }],
  },
  {
    id: "ord_76b4",
    order_reference: "QM-2609-0288",
    created_at: "2026-09-22",
    created_time: "08:27",
    status: "shipped",
    shipping_name: "Mara Iversen (c/o Studio Veld)",
    shipping_address: "Vechtstraat 12b, 3515 EP Utrecht, Netherlands",
    contact_email: ACCOUNT_EMAIL,
    shipping_option: "Collect in store — Utrecht",
    subtotal_cents: 5350,
    shipping_cents: 0,
    tax_cents: 1124,
    total_cents: 6474,
    stripe_payment_intent: "pi_3QiL4nC1sTk88Jd6",
    card: "Mastercard ending 8710",
    shipped_at: "2026-09-23",
    items: [
      { product_name: "Cast Iron Trivet", unit_price_cents: 2900, quantity: 1 },
      { product_name: "Tea Towel Pair — Indigo", unit_price_cents: 1800, quantity: 1 },
      { product_name: "Filter Papers, Natural (100)", unit_price_cents: 650, quantity: 1 },
    ],
  },
  {
    id: "ord_6d02",
    order_reference: "QM-2608-0176",
    created_at: "2026-08-07",
    created_time: "17:03",
    status: "shipped",
    shipping_name: "Mara Iversen",
    shipping_address: "Oudegracht 214, 3511 NN Utrecht, Netherlands",
    contact_email: ACCOUNT_EMAIL,
    shipping_option: "Express — DHL next working day",
    subtotal_cents: 12900,
    shipping_cents: 1200,
    tax_cents: 2709,
    total_cents: 16809,
    stripe_payment_intent: "pi_3QfD2eB9rXz17Hs4",
    card: "Visa ending 4242",
    shipped_at: "2026-08-08",
    items: [{ product_name: "Copper Kettle 900 ml", unit_price_cents: 12900, quantity: 1 }],
  },
];

const CSS = `
@keyframes obsIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }
@keyframes obsBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0.25; } }
.obs-in { animation: obsIn 170ms ease-out both; }
.obs-blink { animation: obsBlink 900ms steps(2, end) infinite; }
@media (prefers-reduced-motion: reduce) {
  .obs-in, .obs-blink { animation: none !important; }
}
`;

export default function Screen() {
  const navigate = useNavigate();
  const FOCUS =
    "focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const focusStyle = { outlineColor: ACCENT };

  const [session, setSession] = React.useState(null);
  const [authTab, setAuthTab] = React.useState("signin");
  const [deletedNotice, setDeletedNotice] = React.useState(null);

  // sign in form
  const [siEmail, setSiEmail] = React.useState("");
  const [siPass, setSiPass] = React.useState("");
  const [siErr, setSiErr] = React.useState(null);
  const [siFieldErr, setSiFieldErr] = React.useState({});
  const [siBusy, setSiBusy] = React.useState(false);

  // register form
  const [rgEmail, setRgEmail] = React.useState("");
  const [rgPass, setRgPass] = React.useState("");
  const [rgConsent, setRgConsent] = React.useState(false);
  const [rgErr, setRgErr] = React.useState(null);
  const [rgFieldErr, setRgFieldErr] = React.useState({});
  const [rgBusy, setRgBusy] = React.useState(false);

  // order history controls
  const [tab, setTab] = React.useState("all");
  const [query, setQuery] = React.useState("");
  const [sort, setSort] = React.useState("newest");
  const [openRow, setOpenRow] = React.useState(null);
  const [sync, setSync] = React.useState({ state: "stale", label: "Synced 09:12" });

  // deletion
  const [deletePanel, setDeletePanel] = React.useState(false);
  const [deleteWord, setDeleteWord] = React.useState("");
  const [deleteErr, setDeleteErr] = React.useState(null);
  const [deleteBusy, setDeleteBusy] = React.useState(false);

  const timers = React.useRef([]);
  React.useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const later = (fn, ms) => timers.current.push(setTimeout(fn, ms));

  const orders = session ? session.orders : [];

  const counts = {
    all: orders.length,
    placed: orders.filter((o) => o.status === "placed").length,
    shipped: orders.filter((o) => o.status === "shipped").length,
  };

  const visible = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = orders.filter((o) => (tab === "all" ? true : o.status === tab));
    if (q) {
      list = list.filter(
        (o) =>
          o.order_reference.toLowerCase().includes(q) ||
          o.items.some((i) => i.product_name.toLowerCase().includes(q)),
      );
    }
    const sorted = [...list];
    if (sort === "newest") sorted.sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
    if (sort === "oldest") sorted.sort((a, b) => (a.created_at > b.created_at ? 1 : -1));
    if (sort === "total") sorted.sort((a, b) => b.total_cents - a.total_cents);
    return sorted;
  }, [orders, tab, query, sort]);

  const spent = orders.reduce((s, o) => s + o.total_cents, 0);

  const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  function submitSignIn(e) {
    e.preventDefault();
    const fe = {};
    if (!siEmail.trim()) fe.email = "Enter the email you signed up with.";
    else if (!emailOk(siEmail)) fe.email = "That doesn't look like an email address.";
    if (!siPass) fe.password = "Enter your password.";
    setSiFieldErr(fe);
    setSiErr(null);
    if (Object.keys(fe).length) return;
    setSiBusy(true);
    later(() => {
      setSiBusy(false);
      if (siEmail.trim().toLowerCase() !== ACCOUNT_EMAIL) {
        setSiErr(
          `No account is registered to ${siEmail.trim()}. Orders placed as a guest aren't linked to an account — check the email, or create an account.`,
        );
        return;
      }
      if (siPass.length < 8) {
        setSiErr("That password doesn't match this account. Passwords are at least 8 characters.");
        return;
      }
      setDeletedNotice(null);
      setSession({ email: ACCOUNT_EMAIL, created_at: ACCOUNT_CREATED, orders: ORDERS });
    }, 650);
  }

  function submitRegister(e) {
    e.preventDefault();
    const fe = {};
    if (!rgEmail.trim()) fe.email = "We need an email to sign you in later.";
    else if (!emailOk(rgEmail)) fe.email = "That doesn't look like an email address.";
    if (rgPass.length < 8) fe.password = "Use at least 8 characters.";
    if (!rgConsent) fe.consent = "Please confirm you've read how we use your data.";
    setRgFieldErr(fe);
    setRgErr(null);
    if (Object.keys(fe).length) return;
    setRgBusy(true);
    later(() => {
      setRgBusy(false);
      if (rgEmail.trim().toLowerCase() === ACCOUNT_EMAIL) {
        setRgErr(
          "That email already has an account. Sign in instead — your orders are waiting there.",
        );
        return;
      }
      setDeletedNotice(null);
      setSession({ email: rgEmail.trim(), created_at: "2026-11-04", orders: [] });
    }, 750);
  }

  function signOut() {
    setSession(null);
    setAuthTab("signin");
    setSiPass("");
    setSiErr(null);
    setOpenRow(null);
    setDeletePanel(false);
    setDeleteWord("");
    setDeleteErr(null);
  }

  function refresh() {
    setSync({ state: "busy", label: "Checking with the shop" });
    later(() => setSync({ state: "fresh", label: "Synced just now" }), 800);
  }

  function confirmDelete(e) {
    e.preventDefault();
    if (deleteWord.trim().toUpperCase() !== "DELETE") {
      setDeleteErr("Type DELETE in capitals to confirm. Nothing has been removed.");
      return;
    }
    setDeleteErr(null);
    setDeleteBusy(true);
    later(() => {
      setDeleteBusy(false);
      const email = session.email;
      setSession(null);
      setDeletePanel(false);
      setDeleteWord("");
      setAuthTab("register");
      setDeletedNotice(email);
    }, 900);
  }

  const labelCls = "block text-[11px] uppercase tracking-[0.14em] font-bold";
  const inputStyle = {
    border: `2px solid ${INK}`,
    borderRadius: R,
    backgroundColor: PAPER,
    color: INK,
  };
  const errInputStyle = {
    border: `2px solid ${ACCENT}`,
    borderRadius: R,
    backgroundColor: PAPER,
    color: INK,
  };

  const primaryBtn = {
    backgroundColor: INK,
    color: PAPER,
    border: `2px solid ${INK}`,
    borderRadius: R,
    outlineColor: ACCENT,
  };
  const ghostBtn = {
    backgroundColor: "transparent",
    color: INK,
    border: `2px solid ${INK}`,
    borderRadius: R,
    outlineColor: ACCENT,
  };
  const quietBtn = {
    backgroundColor: "transparent",
    color: INK,
    border: `2px solid transparent`,
    borderRadius: R,
    outlineColor: ACCENT,
  };

  const btnType = "text-[11px] uppercase tracking-[0.14em] font-bold";

  function FieldNote({ children }) {
    if (!children) return null;
    return (
      <p className="mt-1 text-[12px] leading-snug flex items-start gap-1" style={{ color: ACCENT }}>
        <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-[2px]" aria-hidden="true" />
        <span>{children}</span>
      </p>
    );
  }

  function Banner({ children, tone }) {
    const c = tone === "accent" ? ACCENT : INK;
    return (
      <div
        className="obs-in flex items-start gap-3 px-4 py-3"
        style={{ border: `2px solid ${c}`, borderRadius: R }}
        role={tone === "accent" ? "alert" : undefined}
      >
        {tone === "accent" ? (
          <AlertCircle
            className="w-4 h-4 shrink-0 mt-[2px]"
            style={{ color: c }}
            aria-hidden="true"
          />
        ) : (
          <CheckCircle
            className="w-4 h-4 shrink-0 mt-[2px]"
            style={{ color: c }}
            aria-hidden="true"
          />
        )}
        <div className="text-[13px] leading-relaxed" style={{ color: INK }}>
          {children}
        </div>
      </div>
    );
  }

  function StatusTag({ status }) {
    const isPlaced = status === "placed";
    const c = isPlaced ? ACCENT : INK;
    return (
      <span
        className="inline-flex items-center gap-1.5 px-2 py-[3px] text-[11px] uppercase tracking-[0.12em] font-bold whitespace-nowrap"
        style={{
          border: `2px solid ${c}`,
          color: c,
          borderRadius: R,
          backgroundColor: "transparent",
        }}
      >
        {isPlaced ? (
          <Clock className="w-3 h-3" aria-hidden="true" />
        ) : (
          <Check className="w-3 h-3" aria-hidden="true" />
        )}
        {isPlaced ? "Awaiting shipment" : "Shipped"}
      </span>
    );
  }

  function Leader({ label, value, strong }) {
    return (
      <div className="flex items-baseline gap-2 py-[5px]">
        <span className={strong ? "text-[13px] font-bold" : "text-[13px]"} style={{ color: INK }}>
          {label}
        </span>
        <span
          className="flex-1 border-b border-dotted"
          style={{ borderColor: HAIR }}
          aria-hidden="true"
        />
        <span
          className={strong ? "text-[13px] font-bold" : "text-[13px]"}
          style={{ color: INK, fontVariantNumeric: "tabular-nums" }}
        >
          {value}
        </span>
      </div>
    );
  }

  /* ------------------------------- SIGNED OUT ------------------------------- */
  if (!session) {
    const signingInTab = authTab === "signin";
    return (
      <div
        className="w-full px-6 py-8 md:px-10 md:py-10"
        style={{ backgroundColor: PAPER, color: INK, fontFamily: brand.fontBody }}
      >
        <style>{CSS}</style>
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-[0.2em] font-bold" style={{ color: MUTED }}>
            Quorq Ceramics & Coffee · Utrecht
          </p>
          <h1
            className="mt-2 text-[34px] md:text-[38px] font-bold tracking-[-0.02em] leading-none"
            style={{ fontFamily: brand.fontHeading }}
          >
            My account
          </h1>
          <p className="mt-3 text-[14px] leading-relaxed max-w-[62ch]" style={{ color: MUTED }}>
            An account is only for looking back: your past orders, their references and whether they
            have left the workshop. You never need one to buy.
          </p>

          {deletedNotice && (
            <div className="mt-6">
              <Banner>
                <strong className="font-bold">Account deleted.</strong> The account for{" "}
                {deletedNotice} and its personal data were removed on 4 Nov 2026. Order records stay
                on file for seven years as Dutch tax law requires, with your name and address
                stripped out. You can register again at any time.
              </Banner>
            </div>
          )}

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div style={{ border: `2px solid ${INK}`, borderRadius: R }}>
                <Tabs
                  tabs={[
                    { key: "signin", label: "Sign in" },
                    { key: "register", label: "Create account" },
                  ]}
                  active={authTab}
                  onChange={(k) => setAuthTab(k)}
                  className="px-4 pt-3"
                />
                <div style={{ borderTop: `2px solid ${INK}` }} className="p-5 md:p-6">
                  {signingInTab ? (
                    <form onSubmit={submitSignIn} noValidate>
                      <h2
                        className="text-[20px] font-bold tracking-[-0.01em]"
                        style={{ fontFamily: brand.fontHeading }}
                      >
                        Sign in to see your orders
                      </h2>
                      <p className="mt-1 text-[13px]" style={{ color: MUTED }}>
                        Your email is your login. We never ask for card details here.
                      </p>

                      {siErr && (
                        <div className="mt-4">
                          <Banner tone="accent">{siErr}</Banner>
                        </div>
                      )}

                      <div className="mt-5 space-y-4">
                        <div>
                          <Label htmlFor="signin-email" className={labelCls}>
                            Email address
                          </Label>
                          <Input
                            id="signin-email"
                            type="email"
                            autoComplete="email"
                            value={siEmail}
                            onChange={(e) => setSiEmail(e.target.value)}
                            aria-invalid={siFieldErr.email ? "true" : undefined}
                            aria-describedby={siFieldErr.email ? "signin-email-err" : undefined}
                            className={`mt-1.5 w-full h-11 px-3 text-[14px] ${FOCUS}`}
                            style={{
                              ...(siFieldErr.email ? errInputStyle : inputStyle),
                              outlineColor: ACCENT,
                            }}
                          />
                          <span id="signin-email-err">
                            <FieldNote>{siFieldErr.email}</FieldNote>
                          </span>
                        </div>

                        <div>
                          <Label htmlFor="signin-password" className={labelCls}>
                            Password
                          </Label>
                          <Input
                            id="signin-password"
                            type="password"
                            autoComplete="current-password"
                            value={siPass}
                            onChange={(e) => setSiPass(e.target.value)}
                            aria-invalid={siFieldErr.password ? "true" : undefined}
                            aria-describedby={
                              siFieldErr.password ? "signin-password-err" : undefined
                            }
                            className={`mt-1.5 w-full h-11 px-3 text-[14px] ${FOCUS}`}
                            style={{
                              ...(siFieldErr.password ? errInputStyle : inputStyle),
                              outlineColor: ACCENT,
                            }}
                          />
                          <span id="signin-password-err">
                            <FieldNote>{siFieldErr.password}</FieldNote>
                          </span>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <Button
                          type="submit"
                          disabled={siBusy}
                          className={`h-11 px-6 ${btnType} ${FOCUS}`}
                          style={{ ...primaryBtn, opacity: siBusy ? 0.65 : 1 }}
                        >
                          {siBusy ? (
                            <span className="inline-flex items-center gap-2">
                              <span
                                className="obs-blink inline-block w-2 h-2"
                                style={{ backgroundColor: PAPER }}
                                aria-hidden="true"
                              />
                              Signing in
                            </span>
                          ) : (
                            "Sign in"
                          )}
                        </Button>
                        <Button
                          type="button"
                          onClick={() => setAuthTab("register")}
                          className={`h-11 px-4 ${btnType} ${FOCUS}`}
                          style={quietBtn}
                        >
                          No account yet?
                        </Button>
                      </div>
                      <p className="mt-4 text-[12px]" style={{ color: MUTED }}>
                        Demo account: {ACCOUNT_EMAIL} with any password of 8 characters or more.
                      </p>
                    </form>
                  ) : (
                    <form onSubmit={submitRegister} noValidate>
                      <h2
                        className="text-[20px] font-bold tracking-[-0.01em]"
                        style={{ fontFamily: brand.fontHeading }}
                      >
                        Create an account
                      </h2>
                      <p className="mt-1 text-[13px]" style={{ color: MUTED }}>
                        Email and password only. Orders you place while signed in are kept here.
                      </p>

                      {rgErr && (
                        <div className="mt-4">
                          <Banner tone="accent">{rgErr}</Banner>
                        </div>
                      )}

                      <div className="mt-5 space-y-4">
                        <div>
                          <Label htmlFor="reg-email" className={labelCls}>
                            Email address
                          </Label>
                          <Input
                            id="reg-email"
                            type="email"
                            autoComplete="email"
                            value={rgEmail}
                            onChange={(e) => setRgEmail(e.target.value)}
                            aria-invalid={rgFieldErr.email ? "true" : undefined}
                            aria-describedby={rgFieldErr.email ? "reg-email-err" : undefined}
                            className={`mt-1.5 w-full h-11 px-3 text-[14px] ${FOCUS}`}
                            style={{
                              ...(rgFieldErr.email ? errInputStyle : inputStyle),
                              outlineColor: ACCENT,
                            }}
                          />
                          <span id="reg-email-err">
                            <FieldNote>{rgFieldErr.email}</FieldNote>
                          </span>
                        </div>

                        <div>
                          <Label htmlFor="reg-password" className={labelCls}>
                            Choose a password
                          </Label>
                          <Input
                            id="reg-password"
                            type="password"
                            autoComplete="new-password"
                            value={rgPass}
                            onChange={(e) => setRgPass(e.target.value)}
                            aria-invalid={rgFieldErr.password ? "true" : undefined}
                            aria-describedby={
                              rgFieldErr.password ? "reg-password-err" : "reg-password-hint"
                            }
                            className={`mt-1.5 w-full h-11 px-3 text-[14px] ${FOCUS}`}
                            style={{
                              ...(rgFieldErr.password ? errInputStyle : inputStyle),
                              outlineColor: ACCENT,
                            }}
                          />
                          {rgFieldErr.password ? (
                            <span id="reg-password-err">
                              <FieldNote>{rgFieldErr.password}</FieldNote>
                            </span>
                          ) : (
                            <p
                              id="reg-password-hint"
                              className="mt-1 text-[12px]"
                              style={{ color: MUTED }}
                            >
                              At least 8 characters.
                            </p>
                          )}
                        </div>

                        <div className="pt-1">
                          <div className="flex items-start gap-2.5">
                            <Checkbox
                              id="reg-consent"
                              checked={rgConsent}
                              onChange={(e) =>
                                setRgConsent(e && e.target ? e.target.checked : !rgConsent)
                              }
                              className={`mt-[3px] ${FOCUS}`}
                              style={{ accentColor: INK, outlineColor: ACCENT }}
                            />
                            <Label
                              htmlFor="reg-consent"
                              className="text-[13px] leading-snug font-normal"
                            >
                              I have read how Quorq uses my data: email for sign-in, order records
                              for seven years. No marketing without a separate opt-in.
                            </Label>
                          </div>
                          <FieldNote>{rgFieldErr.consent}</FieldNote>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <Button
                          type="submit"
                          disabled={rgBusy}
                          className={`h-11 px-6 ${btnType} ${FOCUS}`}
                          style={{ ...primaryBtn, opacity: rgBusy ? 0.65 : 1 }}
                        >
                          {rgBusy ? (
                            <span className="inline-flex items-center gap-2">
                              <span
                                className="obs-blink inline-block w-2 h-2"
                                style={{ backgroundColor: PAPER }}
                                aria-hidden="true"
                              />
                              Creating account
                            </span>
                          ) : (
                            "Create account"
                          )}
                        </Button>
                        <Button
                          type="button"
                          onClick={() => setAuthTab("signin")}
                          className={`h-11 px-4 ${btnType} ${FOCUS}`}
                          style={quietBtn}
                        >
                          I already have one
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="p-5" style={{ border: `2px solid ${INK}`, borderRadius: R }}>
                <h2
                  className="text-[16px] font-bold tracking-[-0.01em]"
                  style={{ fontFamily: brand.fontHeading }}
                >
                  You don't need an account to buy
                </h2>
                <ul className="mt-3 space-y-2.5">
                  {[
                    "Guest checkout is the normal way to order. Card, address, done.",
                    "Your order reference arrives on the confirmation screen — keep it.",
                    "An account only adds a list of what you've already bought.",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-2 text-[13px] leading-relaxed">
                      <ChevronRight
                        className="w-3.5 h-3.5 mt-[3px] shrink-0"
                        style={{ color: ACCENT }}
                        aria-hidden="true"
                      />
                      <span style={{ color: INK }}>{line}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Button
                    type="button"
                    onClick={() => navigate("catalogue")}
                    className={`h-10 px-4 ${btnType} ${FOCUS}`}
                    style={ghostBtn}
                  >
                    Browse the shop
                  </Button>
                  <Button
                    type="button"
                    onClick={() => navigate("checkout")}
                    className={`h-10 px-4 ${btnType} ${FOCUS}`}
                    style={quietBtn}
                  >
                    Go to cart
                  </Button>
                </div>
              </div>

              <div className="mt-4 p-5" style={{ border: `1px solid ${HAIR}`, borderRadius: R }}>
                <h3
                  className="text-[11px] uppercase tracking-[0.16em] font-bold"
                  style={{ color: MUTED }}
                >
                  Who can see an order
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed" style={{ color: INK }}>
                  Order history is visible only to the signed-in account that placed the order.
                  Orders placed as a guest are not shown here — the shop can look one up by
                  reference and the email you used.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    );
  }

  /* -------------------------------- SIGNED IN ------------------------------- */
  const isNewAccount = orders.length === 0;

  return (
    <div
      className="w-full px-6 py-8 md:px-10 md:py-10"
      style={{ backgroundColor: PAPER, color: INK, fontFamily: brand.fontBody }}
    >
      <style>{CSS}</style>
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p
              className="text-[11px] uppercase tracking-[0.2em] font-bold"
              style={{ color: MUTED }}
            >
              Signed in · {session.email}
            </p>
            <h1
              className="mt-2 text-[34px] md:text-[38px] font-bold tracking-[-0.02em] leading-none"
              style={{ fontFamily: brand.fontHeading }}
            >
              My account
            </h1>
            <p className="mt-2 text-[13px]" style={{ color: MUTED }}>
              Account created {longDate(session.created_at)} · Orders placed as a guest aren't
              listed here.
            </p>
          </div>
          <Button
            type="button"
            onClick={signOut}
            className={`h-10 px-4 ${btnType} ${FOCUS}`}
            style={ghostBtn}
          >
            Sign out
          </Button>
        </div>

        {isNewAccount ? (
          <div className="mt-6">
            <Banner>
              <strong className="font-bold">Account created.</strong> You're signed in as{" "}
              {session.email}. Next order you place while signed in will appear below.
            </Banner>
          </div>
        ) : null}

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div style={{ border: `2px solid ${INK}`, borderRadius: R }}>
            <Stat
              label="Orders placed"
              value={String(counts.all)}
              hint={isNewAccount ? "Nothing yet" : `Since ${longDate(session.created_at)}`}
              className="p-4"
            />
          </div>
          <div style={{ border: `2px solid ${INK}`, borderRadius: R }}>
            <Stat
              label="Total spent"
              value={money(spent)}
              hint="Incl. 21% VAT and shipping"
              className="p-4"
            />
          </div>
          <div style={{ border: `2px solid ${counts.placed ? ACCENT : INK}`, borderRadius: R }}>
            <Stat
              label="Awaiting shipment"
              value={String(counts.placed)}
              hint={
                counts.placed
                  ? "Dispatched Mon–Fri from Utrecht"
                  : "Everything has left the workshop"
              }
              className="p-4"
            />
          </div>
        </div>

        <section className="mt-10" aria-labelledby="orders-heading">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2
                id="orders-heading"
                className="text-[24px] font-bold tracking-[-0.015em]"
                style={{ fontFamily: brand.fontHeading }}
              >
                Order history
              </h2>
              <p className="mt-1 text-[13px]" style={{ color: MUTED }}>
                Reference, date, items, total and current status. Open a row for the full receipt.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 text-[12px]"
                style={{ color: sync.state === "stale" ? MUTED : INK }}
              >
                {sync.state === "busy" ? (
                  <span
                    className="obs-blink inline-block w-2 h-2"
                    style={{ backgroundColor: INK }}
                    aria-hidden="true"
                  />
                ) : (
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                )}
                <span aria-live="polite">
                  {sync.label}
                  {sync.state === "stale" ? " · statuses may have changed" : ""}
                </span>
              </span>
              <Button
                type="button"
                onClick={refresh}
                disabled={sync.state === "busy"}
                className={`h-9 px-3 ${btnType} ${FOCUS}`}
                style={{ ...ghostBtn, opacity: sync.state === "busy" ? 0.6 : 1 }}
              >
                Refresh
              </Button>
            </div>
          </div>

          <div className="mt-5" style={{ border: `2px solid ${INK}`, borderRadius: R }}>
            <div className="p-4 flex flex-col lg:flex-row lg:items-end gap-4">
              <div className="lg:w-[300px]">
                <Label htmlFor="order-search" className={labelCls}>
                  Search orders
                </Label>
                <div className="relative mt-1.5">
                  <Search
                    className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2"
                    style={{ color: MUTED }}
                    aria-hidden="true"
                  />
                  <Input
                    id="order-search"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="QM-2610-0398 or “mug”"
                    className={`w-full h-10 pl-9 pr-3 text-[13px] ${FOCUS}`}
                    style={{ ...inputStyle, outlineColor: ACCENT }}
                  />
                </div>
              </div>

              <div className="lg:w-[220px]">
                <Label htmlFor="order-sort" className={labelCls}>
                  Sort by
                </Label>
                <Select
                  id="order-sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className={`mt-1.5 w-full h-10 px-2 text-[13px] ${FOCUS}`}
                  style={{ ...inputStyle, outlineColor: ACCENT }}
                >
                  <option value="newest">Newest first</option>
                  <option value="oldest">Oldest first</option>
                  <option value="total">Highest total</option>
                </Select>
              </div>

              <div className="flex-1 min-w-0">
                <span className={labelCls} style={{ color: INK }} id="status-filter-label">
                  Status
                </span>
                <div className="mt-1" role="group" aria-labelledby="status-filter-label">
                  <Tabs
                    tabs={[
                      { key: "all", label: `All · ${counts.all}` },
                      { key: "placed", label: `Awaiting shipment · ${counts.placed}` },
                      { key: "shipped", label: `Shipped · ${counts.shipped}` },
                    ]}
                    active={tab}
                    onChange={(k) => {
                      setTab(k);
                      setOpenRow(null);
                    }}
                  />
                </div>
              </div>
            </div>

            {orders.length === 0 ? (
              <div style={{ borderTop: `2px solid ${INK}` }}>
                <Empty
                  title="No orders yet"
                  description="Orders you place while signed in with this email show up here with their reference, items and shipping status. Guest orders stay with the confirmation screen."
                  action={
                    <Button
                      type="button"
                      onClick={() => navigate("catalogue")}
                      className={`h-10 px-5 ${btnType} ${FOCUS}`}
                      style={primaryBtn}
                    >
                      Browse the shop
                    </Button>
                  }
                  className="py-12"
                />
              </div>
            ) : visible.length === 0 ? (
              <div style={{ borderTop: `2px solid ${INK}` }}>
                <Empty
                  title={query ? `Nothing matches “${query.trim()}”` : "No orders with that status"}
                  description={
                    query
                      ? "No order reference or product name in your history matches that. Try part of a reference, like 0398."
                      : "Switch to All to see every order on this account."
                  }
                  action={
                    <Button
                      type="button"
                      onClick={() => {
                        setQuery("");
                        setTab("all");
                      }}
                      className={`h-10 px-5 ${btnType} ${FOCUS}`}
                      style={ghostBtn}
                    >
                      Clear filters
                    </Button>
                  }
                  className="py-12"
                />
              </div>
            ) : (
              <div className="overflow-x-auto" style={{ borderTop: `2px solid ${INK}` }}>
                <Table
                  className="w-full min-w-[720px] text-[13px]"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  <caption className="sr-only">
                    Your orders: reference, date, items, total and status
                  </caption>
                  <THead>
                    <TR style={{ borderBottom: `2px solid ${INK}` }}>
                      <TH
                        scope="col"
                        className="text-left px-4 py-2.5 text-[11px] uppercase tracking-[0.14em]"
                      >
                        Reference
                      </TH>
                      <TH
                        scope="col"
                        className="text-left px-4 py-2.5 text-[11px] uppercase tracking-[0.14em]"
                      >
                        Date
                      </TH>
                      <TH
                        scope="col"
                        className="text-left px-4 py-2.5 text-[11px] uppercase tracking-[0.14em]"
                      >
                        Items
                      </TH>
                      <TH
                        scope="col"
                        className="text-right px-4 py-2.5 text-[11px] uppercase tracking-[0.14em]"
                      >
                        Total
                      </TH>
                      <TH
                        scope="col"
                        className="text-left px-4 py-2.5 text-[11px] uppercase tracking-[0.14em]"
                      >
                        Status
                      </TH>
                      <TH
                        scope="col"
                        className="px-4 py-2.5 text-right text-[11px] uppercase tracking-[0.14em]"
                      >
                        Receipt
                      </TH>
                    </TR>
                  </THead>
                  <TBody>
                    {visible.map((o) => {
                      const open = openRow === o.id;
                      const units = o.items.reduce((s, i) => s + i.quantity, 0);
                      const first = o.items[0].product_name;
                      const rest = o.items.length - 1;
                      return (
                        <React.Fragment key={o.id}>
                          <TR style={{ borderBottom: open ? "none" : `1px solid ${HAIR}` }}>
                            <TH
                              scope="row"
                              className="text-left px-4 py-3 font-bold tracking-[0.06em] whitespace-nowrap align-top"
                              style={{
                                borderLeft: `3px solid ${o.status === "placed" ? ACCENT : "transparent"}`,
                              }}
                            >
                              {o.order_reference}
                            </TH>
                            <TD
                              className="px-4 py-3 align-top whitespace-nowrap"
                              style={{ color: MUTED }}
                            >
                              {longDate(o.created_at)}
                            </TD>
                            <TD className="px-4 py-3 align-top">
                              <span className="font-medium">{first}</span>
                              {rest > 0 && <span style={{ color: MUTED }}> + {rest} more</span>}
                              <span className="block text-[12px]" style={{ color: MUTED }}>
                                {units} {units === 1 ? "unit" : "units"}
                              </span>
                            </TD>
                            <TD className="px-4 py-3 align-top text-right font-bold whitespace-nowrap">
                              {money(o.total_cents)}
                            </TD>
                            <TD className="px-4 py-3 align-top">
                              <StatusTag status={o.status} />
                            </TD>
                            <TD className="px-4 py-3 align-top text-right">
                              <Button
                                type="button"
                                onClick={() => setOpenRow(open ? null : o.id)}
                                aria-expanded={open}
                                aria-controls={`detail-${o.id}`}
                                className={`h-9 px-3 ${btnType} ${FOCUS} inline-flex items-center gap-1.5`}
                                style={open ? primaryBtn : ghostBtn}
                              >
                                {open ? (
                                  <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
                                ) : (
                                  <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                                )}
                                {open ? "Hide" : "Open"}
                                <span className="sr-only">
                                  {" "}
                                  receipt for order {o.order_reference}
                                </span>
                              </Button>
                            </TD>
                          </TR>

                          {open && (
                            <TR id={`detail-${o.id}`} style={{ borderBottom: `1px solid ${HAIR}` }}>
                              <TD colSpan={6} className="px-4 pb-6 pt-0">
                                <div
                                  className="obs-in grid grid-cols-1 md:grid-cols-12 gap-6 p-5"
                                  style={{ border: `2px solid ${INK}`, borderRadius: R }}
                                >
                                  <div className="md:col-span-7">
                                    <h3
                                      className="text-[11px] uppercase tracking-[0.16em] font-bold"
                                      style={{ color: MUTED }}
                                    >
                                      Receipt · {o.order_reference}
                                    </h3>
                                    <div className="mt-3">
                                      {o.items.map((i) => (
                                        <Leader
                                          key={i.product_name}
                                          label={`${i.product_name} · ${i.quantity} × ${money(i.unit_price_cents)}`}
                                          value={money(i.unit_price_cents * i.quantity)}
                                        />
                                      ))}
                                    </div>
                                    <div
                                      className="my-3"
                                      style={{ borderTop: `1px solid ${HAIR}` }}
                                    />
                                    <Leader label="Subtotal" value={money(o.subtotal_cents)} />
                                    <Leader
                                      label={o.shipping_option}
                                      value={
                                        o.shipping_cents === 0 ? "Free" : money(o.shipping_cents)
                                      }
                                    />
                                    <Leader label="VAT at 21%" value={money(o.tax_cents)} />
                                    <div
                                      className="my-2"
                                      style={{ borderTop: `2px solid ${INK}` }}
                                    />
                                    <Leader
                                      label="Total paid (EUR)"
                                      value={money(o.total_cents)}
                                      strong
                                    />
                                  </div>

                                  <div className="md:col-span-5">
                                    <h3
                                      className="text-[11px] uppercase tracking-[0.16em] font-bold"
                                      style={{ color: MUTED }}
                                    >
                                      Delivery & payment
                                    </h3>
                                    <dl className="mt-3 space-y-3 text-[13px]">
                                      <div>
                                        <dt
                                          className="text-[11px] uppercase tracking-[0.12em]"
                                          style={{ color: MUTED }}
                                        >
                                          Shipping to
                                        </dt>
                                        <dd className="mt-0.5 leading-relaxed">
                                          {o.shipping_name}
                                          <br />
                                          {o.shipping_address}
                                        </dd>
                                      </div>
                                      <div>
                                        <dt
                                          className="text-[11px] uppercase tracking-[0.12em]"
                                          style={{ color: MUTED }}
                                        >
                                          Contact email
                                        </dt>
                                        <dd className="mt-0.5">{o.contact_email}</dd>
                                      </div>
                                      <div>
                                        <dt
                                          className="text-[11px] uppercase tracking-[0.12em]"
                                          style={{ color: MUTED }}
                                        >
                                          Payment
                                        </dt>
                                        <dd
                                          className="mt-0.5"
                                          style={{ fontVariantNumeric: "tabular-nums" }}
                                        >
                                          {o.card} · {o.stripe_payment_intent}
                                        </dd>
                                      </div>
                                      <div>
                                        <dt
                                          className="text-[11px] uppercase tracking-[0.12em]"
                                          style={{ color: MUTED }}
                                        >
                                          Progress
                                        </dt>
                                        <dd className="mt-1 space-y-1">
                                          <p className="flex items-center gap-1.5">
                                            <Check className="w-3.5 h-3.5" aria-hidden="true" />
                                            Placed {longDate(o.created_at)}, {o.created_time}
                                          </p>
                                          {o.shipped_at ? (
                                            <p className="flex items-center gap-1.5">
                                              <Package className="w-3.5 h-3.5" aria-hidden="true" />
                                              Shipped {longDate(o.shipped_at)}
                                            </p>
                                          ) : (
                                            <p
                                              className="flex items-center gap-1.5"
                                              style={{ color: ACCENT }}
                                            >
                                              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                                              Awaiting shipment from Utrecht
                                            </p>
                                          )}
                                        </dd>
                                      </div>
                                    </dl>
                                  </div>
                                </div>
                              </TD>
                            </TR>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </TBody>
                </Table>
              </div>
            )}
          </div>

          {visible.length > 0 && (
            <p
              className="mt-2 text-[12px]"
              style={{ color: MUTED, fontVariantNumeric: "tabular-nums" }}
            >
              Showing {visible.length} of {orders.length} orders · all amounts in EUR, VAT included
            </p>
          )}
        </section>

        <div className="mt-12" style={{ borderTop: `2px solid ${INK}` }} />

        <section
          className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8"
          aria-labelledby="data-heading"
        >
          <div className="lg:col-span-7">
            <h2
              id="data-heading"
              className="text-[24px] font-bold tracking-[-0.015em]"
              style={{ fontFamily: brand.fontHeading }}
            >
              Account &amp; data
            </h2>
            <p className="mt-2 text-[13px] leading-relaxed max-w-[62ch]" style={{ color: MUTED }}>
              What this account holds, and how to have it removed.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                `Your email address — ${session.email} — used only to sign in.`,
                "Your order history: items, totals, and the addresses you shipped to.",
                "No card details. Stripe holds those; we only keep a payment reference.",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2 text-[13px] leading-relaxed">
                  <Check className="w-3.5 h-3.5 mt-[3px] shrink-0" aria-hidden="true" />
                  <span style={{ color: INK }}>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="p-5" style={{ border: `2px solid ${ACCENT}`, borderRadius: R }}>
              <h3
                className="text-[16px] font-bold tracking-[-0.01em]"
                style={{ fontFamily: brand.fontHeading, color: INK }}
              >
                Delete this account
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed" style={{ color: INK }}>
                Your sign-in and personal details are removed straight away and you'll be signed
                out. The order records themselves are kept for seven years as Dutch tax law
                requires, with your name and address stripped out. This can't be undone.
              </p>

              {!deletePanel ? (
                <Button
                  type="button"
                  onClick={() => {
                    setDeletePanel(true);
                    setDeleteErr(null);
                  }}
                  className={`mt-4 h-10 px-4 ${btnType} ${FOCUS} inline-flex items-center gap-2`}
                  style={{
                    backgroundColor: "transparent",
                    color: ACCENT,
                    border: `2px solid ${ACCENT}`,
                    borderRadius: R,
                    outlineColor: ACCENT,
                  }}
                >
                  <Trash className="w-3.5 h-3.5" aria-hidden="true" />
                  Request account deletion
                </Button>
              ) : (
                <form onSubmit={confirmDelete} className="obs-in mt-4" noValidate>
                  <Label htmlFor="delete-confirm" className={labelCls}>
                    Type DELETE to confirm
                  </Label>
                  <Input
                    id="delete-confirm"
                    value={deleteWord}
                    onChange={(e) => setDeleteWord(e.target.value)}
                    autoComplete="off"
                    aria-invalid={deleteErr ? "true" : undefined}
                    aria-describedby={deleteErr ? "delete-err" : undefined}
                    className={`mt-1.5 w-full h-11 px-3 text-[14px] tracking-[0.18em] ${FOCUS}`}
                    style={{ ...(deleteErr ? errInputStyle : inputStyle), outlineColor: ACCENT }}
                  />
                  <span id="delete-err">
                    <FieldNote>{deleteErr}</FieldNote>
                  </span>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button
                      type="submit"
                      disabled={deleteBusy}
                      className={`h-10 px-4 ${btnType} ${FOCUS}`}
                      style={{
                        backgroundColor: ACCENT,
                        color: PAPER,
                        border: `2px solid ${ACCENT}`,
                        borderRadius: R,
                        outlineColor: INK,
                        opacity: deleteBusy ? 0.7 : 1,
                      }}
                    >
                      {deleteBusy ? (
                        <span className="inline-flex items-center gap-2">
                          <span
                            className="obs-blink inline-block w-2 h-2"
                            style={{ backgroundColor: PAPER }}
                            aria-hidden="true"
                          />
                          Deleting account
                        </span>
                      ) : (
                        "Delete my account"
                      )}
                    </Button>
                    <Button
                      type="button"
                      onClick={() => {
                        setDeletePanel(false);
                        setDeleteWord("");
                        setDeleteErr(null);
                      }}
                      className={`h-10 px-4 ${btnType} ${FOCUS}`}
                      style={ghostBtn}
                    >
                      Keep my account
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
