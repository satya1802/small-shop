// @ts-nocheck -- hand-wired screen; loose JS patterns match the rest of the admin UI.
"use client";
// Next.js renders on the server unless a module says otherwise. This screen
// holds state and talks to the API, so it must be a client module.

import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";
import { apiFetch } from "@/lib/api";

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

const { Plus, ChevronRight, Trash, Edit, AlertCircle, CheckCircle } = Icons;

const BLANK_PRODUCT = {
  name: "",
  description: "",
  price: "",
  stock_quantity: "",
  image_url: "",
  published: true,
};

const BLANK_SHIP_FORM = { mode: "new", id: null, name: "", cost: "", errors: {}, saving: false };

const CURRENCY_OPTIONS = [
  { value: "GBP", label: "GBP — £" },
  { value: "USD", label: "USD — $" },
  { value: "EUR", label: "EUR — €" },
];

function symbolFor(currency) {
  return currency === "GBP"
    ? "£"
    : currency === "USD"
      ? "$"
      : currency === "EUR"
        ? "€"
        : `${currency} `;
}

function money(cents, currency) {
  return symbolFor(currency) + (Number(cents || 0) / 100).toFixed(2);
}

// Loading and error states look identical across the three tabs; this keeps
// that markup in one place instead of three near-duplicate copies.
function StatusBlock({ status, error, onRetry, loadingLabel, neutral, accent, ghostBtn, radius }) {
  if (status === "loading") {
    return (
      <p role="status" className="py-8 text-center text-[13px]" style={{ color: neutral }}>
        {loadingLabel}
      </p>
    );
  }
  if (status === "error") {
    return (
      <div
        role="alert"
        className="border-2 p-4 text-center"
        style={{ borderColor: accent, borderRadius: radius }}
      >
        <p className="text-[13px]" style={{ color: accent }}>
          {error}
        </p>
        <button
          type="button"
          onClick={onRetry}
          className="mt-3 h-9 px-4 text-[12px] font-bold uppercase tracking-[0.12em]"
          style={ghostBtn}
        >
          Retry
        </button>
      </div>
    );
  }
  return null;
}

export default function Screen() {
  const navigate = useNavigate();
  const ink = brand.primaryColor;
  const accent = brand.accentColor;
  const neutral = brand.neutralColor;
  const paper = brand.backgroundColor;
  const radius = brand.radius;

  const [tab, setTab] = React.useState("products");

  const [products, setProducts] = React.useState([]);
  const [productsStatus, setProductsStatus] = React.useState("loading");
  const [productsError, setProductsError] = React.useState("");

  const [shipping, setShipping] = React.useState([]);
  const [shippingStatus, setShippingStatus] = React.useState("loading");
  const [shippingError, setShippingError] = React.useState("");

  const [tax, setTax] = React.useState(null);
  const [taxStatus, setTaxStatus] = React.useState("loading");
  const [taxError, setTaxError] = React.useState("");

  const [editor, setEditor] = React.useState(null);
  const [confirmId, setConfirmId] = React.useState(null);
  const [banner, setBanner] = React.useState(null);

  const [shipForm, setShipForm] = React.useState({ ...BLANK_SHIP_FORM });
  const [shipConfirmId, setShipConfirmId] = React.useState(null);

  const [taxForm, setTaxForm] = React.useState({
    rate: "",
    currency: "GBP",
    error: "",
    saving: false,
    savedAt: null,
  });

  const currency = tax?.currency ?? taxForm.currency ?? "GBP";

  function flash(kind, text) {
    setBanner({ kind, text });
  }

  const loadProducts = React.useCallback(() => {
    setProductsStatus("loading");
    setProductsError("");
    apiFetch("/products")
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
        setProductsStatus("ready");
      })
      .catch((err) => {
        setProductsError(err?.message || "Could not load the catalogue.");
        setProductsStatus("error");
      });
  }, []);

  const loadShipping = React.useCallback(() => {
    setShippingStatus("loading");
    setShippingError("");
    apiFetch("/shipping-options")
      .then((data) => {
        setShipping(Array.isArray(data) ? data : []);
        setShippingStatus("ready");
      })
      .catch((err) => {
        setShippingError(err?.message || "Could not load shipping options.");
        setShippingStatus("error");
      });
  }, []);

  const loadTax = React.useCallback(() => {
    setTaxStatus("loading");
    setTaxError("");
    apiFetch("/settings/tax")
      .then((data) => {
        setTax(data ?? null);
        setTaxForm((f) => ({
          ...f,
          rate: data?.tax_rate_percent != null ? String(data.tax_rate_percent) : "",
          currency: data?.currency ?? "GBP",
        }));
        setTaxStatus("ready");
      })
      .catch((err) => {
        setTaxError(err?.message || "Could not load the tax rate.");
        setTaxStatus("error");
      });
  }, []);

  React.useEffect(() => {
    loadProducts();
    loadShipping();
    loadTax();
  }, [loadProducts, loadShipping, loadTax]);

  const liveCount = products.filter((p) => p.published).length;
  const draftCount = products.filter((p) => !p.published).length;
  const activeShipping = shipping.filter((s) => s.active !== false).length;

  function openNew() {
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
        name: p.name ?? "",
        description: p.description ?? "",
        price: p.price_cents != null ? (p.price_cents / 100).toFixed(2) : "",
        stock_quantity: p.stock_quantity != null ? String(p.stock_quantity) : "",
        image_url: p.image_url ?? "",
        published: !!p.published,
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

  async function submitProduct(ev) {
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
    const body = {
      name: v.name.trim(),
      description: v.description.trim(),
      price_cents: Math.round(price * 100),
      image_url: v.image_url.trim(),
      stock_quantity: stock,
      published: v.published,
    };

    try {
      if (editor.mode === "new") {
        const saved = await apiFetch("/admin/products", {
          method: "POST",
          body: JSON.stringify(body),
        });
        const row = { ...body, id: saved?.id ?? String(Date.now()), ...saved };
        setProducts((list) => [row, ...list]);
        flash(
          "success",
          `${row.name} saved — ${row.published ? "live in the catalogue now" : "kept as a draft, not shown to shoppers"}.`,
        );
      } else {
        const saved = await apiFetch(`/admin/products/${editor.id}`, {
          method: "PATCH",
          body: JSON.stringify(body),
        });
        setProducts((list) =>
          list.map((p) => (p.id === editor.id ? { ...p, ...body, ...saved } : p)),
        );
        flash("success", `${body.name} updated — the catalogue shows the new details.`);
      }
      setEditor(null);
    } catch (err) {
      setEditor((e) => ({ ...e, saving: false }));
      flash("error", err?.message || "Could not save the product. Try again.");
    }
  }

  async function togglePublish(p) {
    try {
      const saved = await apiFetch(`/admin/products/${p.id}`, {
        method: "PATCH",
        body: JSON.stringify({ published: !p.published }),
      });
      setProducts((list) =>
        list.map((x) => (x.id === p.id ? { ...x, published: !p.published, ...saved } : x)),
      );
      flash(
        "success",
        p.published
          ? `${p.name} unpublished — it has been removed from the shopper-facing catalogue.`
          : `${p.name} published — shoppers can see it now.`,
      );
    } catch (err) {
      flash("error", err?.message || "Could not update the product.");
    }
  }

  async function removeProduct(p) {
    try {
      await apiFetch(`/admin/products/${p.id}`, { method: "DELETE" });
      setProducts((list) => list.filter((x) => x.id !== p.id));
      setConfirmId(null);
      flash("success", `${p.name} removed. It no longer appears in the catalogue.`);
    } catch (err) {
      setConfirmId(null);
      flash("error", err?.message || "Could not remove the product.");
    }
  }

  function openNewShipping() {
    setShipForm({ ...BLANK_SHIP_FORM });
  }

  function openEditShipping(s) {
    setShipConfirmId(null);
    setShipForm({
      mode: "edit",
      id: s.id,
      name: s.name ?? "",
      cost: s.cost_cents != null ? (s.cost_cents / 100).toFixed(2) : "",
      errors: {},
      saving: false,
    });
  }

  async function submitShipping(ev) {
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
    const body = { name: shipForm.name.trim(), cost_cents: Math.round(cost * 100) };

    try {
      if (shipForm.mode === "edit") {
        const saved = await apiFetch(`/admin/shipping-options/${shipForm.id}`, {
          method: "PATCH",
          body: JSON.stringify(body),
        });
        setShipping((list) =>
          list.map((s) => (s.id === shipForm.id ? { ...s, ...body, ...saved } : s)),
        );
        flash("success", `${body.name} updated — checkout shows the new rate.`);
      } else {
        const saved = await apiFetch("/admin/shipping-options", {
          method: "POST",
          body: JSON.stringify(body),
        });
        const row = { ...body, active: true, id: saved?.id ?? String(Date.now()), ...saved };
        setShipping((list) => [...list, row]);
        flash("success", `${body.name} added — shoppers can choose it at checkout.`);
      }
      setShipForm({ ...BLANK_SHIP_FORM });
    } catch (err) {
      setShipForm((f) => ({ ...f, saving: false }));
      flash("error", err?.message || "Could not save the shipping option.");
    }
  }

  async function removeShipping(s) {
    try {
      const saved = await apiFetch(`/admin/shipping-options/${s.id}`, {
        method: "PATCH",
        body: JSON.stringify({ active: false }),
      });
      setShipping((list) =>
        list.map((x) => (x.id === s.id ? { ...x, active: false, ...saved } : x)),
      );
      setShipConfirmId(null);
      flash("success", `${s.name} removed — it no longer appears at checkout.`);
    } catch (err) {
      setShipConfirmId(null);
      flash("error", err?.message || "Could not remove the shipping option.");
    }
  }

  async function submitTax(ev) {
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
    try {
      const saved = await apiFetch("/admin/settings/tax", {
        method: "PUT",
        body: JSON.stringify({ tax_rate_percent: n, currency: taxForm.currency }),
      });
      setTax(saved ?? { tax_rate_percent: n, currency: taxForm.currency });
      setTaxForm((f) => ({
        ...f,
        saving: false,
        rate: String(saved?.tax_rate_percent ?? n),
        currency: saved?.currency ?? f.currency,
        savedAt: new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
      }));
      flash("success", "Tax rate saved.");
    } catch (err) {
      setTaxForm((f) => ({
        ...f,
        saving: false,
        error: err?.message || "Could not save the tax rate.",
      }));
    }
  }

  const label = "text-[11px] font-bold uppercase tracking-[0.16em]";
  const fieldCls = "w-full border-2 px-2.5 py-2 text-[14px] bg-transparent";
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
              {products.length} products, {liveCount} live, {draftCount} draft. Edits to price,
              stock and publication reach the shop catalogue the moment you save.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => navigate("admin-orders")}
              className="inline-flex h-9 items-center gap-1.5 px-3 text-[12px] font-bold uppercase tracking-[0.12em] hover:opacity-70"
              style={quietBtn}
            >
              Orders <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <Button
              type="button"
              onClick={openNew}
              className="inline-flex h-11 items-center gap-2 px-4 text-[13px] font-bold uppercase tracking-[0.12em] hover:opacity-85"
              style={primaryBtn}
            >
              <Plus className="h-4 w-4" aria-hidden="true" /> New product
            </Button>
          </div>
        </header>

        {banner ? (
          <div
            role={banner.kind === "error" ? "alert" : "status"}
            className="mt-5 flex items-start gap-3 border-2 px-3 py-2.5"
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
            <p className="text-[13px] leading-[1.5]">{banner.text}</p>
            <button
              type="button"
              onClick={() => setBanner(null)}
              className="ml-auto text-[11px] font-bold uppercase tracking-[0.1em] hover:opacity-70"
              style={{ color: neutral }}
            >
              Dismiss
            </button>
          </div>
        ) : null}

        <div className="mt-6">
          <Tabs tabs={tabs} active={tab} onChange={setTab} />
        </div>

        {tab === "products" ? (
          <section aria-label="Catalogue" className="mt-5">
            <section
              aria-label="Catalogue summary"
              className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-3"
            >
              {[
                {
                  l: "Live products",
                  v: String(liveCount),
                  h: `of ${products.length} in the catalogue`,
                },
                { l: "Draft products", v: String(draftCount), h: "not shown to shoppers" },
                {
                  l: "Active shipping options",
                  v: String(activeShipping),
                  h: "available at checkout",
                },
              ].map((s) => (
                <div
                  key={s.l}
                  className="border-2 px-3 py-2.5"
                  style={{
                    borderColor: ink,
                    borderRadius: radius,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  <Stat label={s.l} value={s.v} hint={s.h} />
                </div>
              ))}
            </section>

            {editor ? (
              <form
                onSubmit={submitProduct}
                aria-label={editor.mode === "new" ? "New product" : "Edit product"}
                className="mb-6 border-2 p-4"
                style={{ borderColor: ink, borderRadius: radius }}
              >
                <h2 className="text-[15px] font-bold" style={{ fontFamily: brand.fontHeading }}>
                  {editor.mode === "new" ? "New product" : `Edit ${editor.id}`}
                </h2>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="pf-name" className={label} style={{ color: ink }}>
                      Name
                    </Label>
                    <Input
                      id="pf-name"
                      className={fieldCls}
                      style={fieldStyle}
                      value={editor.values.name}
                      onChange={(e) => setValue("name", e.target.value)}
                      aria-invalid={!!editor.errors.name}
                    />
                    {editor.errors.name ? (
                      <p className="mt-1 text-[12px]" style={{ color: accent }} role="alert">
                        {editor.errors.name}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <Label htmlFor="pf-price" className={label} style={{ color: ink }}>
                      Price
                    </Label>
                    <Input
                      id="pf-price"
                      className={fieldCls}
                      style={fieldStyle}
                      value={editor.values.price}
                      onChange={(e) => setValue("price", e.target.value)}
                      aria-invalid={!!editor.errors.price}
                    />
                    {editor.errors.price ? (
                      <p className="mt-1 text-[12px]" style={{ color: accent }} role="alert">
                        {editor.errors.price}
                      </p>
                    ) : null}
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="pf-desc" className={label} style={{ color: ink }}>
                      Description
                    </Label>
                    <Textarea
                      id="pf-desc"
                      className={fieldCls}
                      style={fieldStyle}
                      value={editor.values.description}
                      onChange={(e) => setValue("description", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="pf-stock" className={label} style={{ color: ink }}>
                      Stock
                    </Label>
                    <Input
                      id="pf-stock"
                      className={fieldCls}
                      style={fieldStyle}
                      value={editor.values.stock_quantity}
                      onChange={(e) => setValue("stock_quantity", e.target.value)}
                      aria-invalid={!!editor.errors.stock_quantity}
                    />
                    {editor.errors.stock_quantity ? (
                      <p className="mt-1 text-[12px]" style={{ color: accent }} role="alert">
                        {editor.errors.stock_quantity}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <Label htmlFor="pf-image" className={label} style={{ color: ink }}>
                      Image URL
                    </Label>
                    <Input
                      id="pf-image"
                      className={fieldCls}
                      style={fieldStyle}
                      value={editor.values.image_url}
                      onChange={(e) => setValue("image_url", e.target.value)}
                      aria-invalid={!!editor.errors.image_url}
                    />
                    {editor.errors.image_url ? (
                      <p className="mt-1 text-[12px]" style={{ color: accent }} role="alert">
                        {editor.errors.image_url}
                      </p>
                    ) : null}
                  </div>
                  <label className="flex items-center gap-2 sm:col-span-2">
                    <Checkbox
                      checked={editor.values.published}
                      onChange={(e) => setValue("published", e.target.checked)}
                    />
                    <span className="text-[13px]">Published — visible to shoppers</span>
                  </label>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Button
                    type="submit"
                    disabled={editor.saving}
                    style={primaryBtn}
                    className="h-10 px-4 text-[12px] font-bold uppercase tracking-[0.12em]"
                  >
                    {editor.saving ? "Saving…" : "Save product"}
                  </Button>
                  <button
                    type="button"
                    onClick={() => setEditor(null)}
                    className="h-10 px-4 text-[12px] font-bold uppercase tracking-[0.12em]"
                    style={ghostBtn}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : null}

            {productsStatus === "loading" || productsStatus === "error" ? (
              <StatusBlock
                status={productsStatus}
                error={productsError}
                onRetry={loadProducts}
                loadingLabel="Loading products…"
                neutral={neutral}
                accent={accent}
                ghostBtn={ghostBtn}
                radius={radius}
              />
            ) : products.length === 0 ? (
              <Empty
                title="No products yet"
                description="Add your first product to start building the catalogue."
                action={
                  <Button
                    type="button"
                    onClick={openNew}
                    style={primaryBtn}
                    className="h-9 px-4 text-[12px] font-bold uppercase tracking-[0.12em]"
                  >
                    New product
                  </Button>
                }
              />
            ) : (
              <Table>
                <THead>
                  <TR>
                    <TH className={thCls} style={{ color: neutral }}>
                      Product
                    </TH>
                    <TH className={thCls} style={{ color: neutral }}>
                      Price
                    </TH>
                    <TH className={thCls} style={{ color: neutral }}>
                      Stock
                    </TH>
                    <TH className={thCls} style={{ color: neutral }}>
                      Status
                    </TH>
                    <TH className={thCls} style={{ color: neutral }}>
                      Actions
                    </TH>
                  </TR>
                </THead>
                <TBody>
                  {products.map((p) => (
                    <TR key={p.id}>
                      <TD className={tdCls}>
                        <p className="font-semibold">{p.name}</p>
                        <p className="text-[12px]" style={{ color: neutral }}>
                          {p.id}
                        </p>
                      </TD>
                      <TD className={tdCls}>{money(p.price_cents, currency)}</TD>
                      <TD className={tdCls}>{p.stock_quantity}</TD>
                      <TD className={tdCls}>
                        <span
                          className="inline-flex px-1.5 py-[2px] text-[11px] font-bold uppercase tracking-[0.1em]"
                          style={{
                            border: `${p.published ? "2px solid" : "1px dashed"} ${p.published ? ink : neutral}`,
                            color: p.published ? ink : neutral,
                            borderRadius: radius,
                          }}
                        >
                          {p.published ? "Live" : "Draft"}
                        </span>
                      </TD>
                      <TD className={tdCls}>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => openEdit(p)}
                            aria-label={`Edit ${p.name}`}
                            className="inline-flex h-8 w-8 items-center justify-center"
                            style={ghostBtn}
                          >
                            <Edit className="h-4 w-4" aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            onClick={() => togglePublish(p)}
                            className="h-8 px-2 text-[11px] font-bold uppercase tracking-[0.1em]"
                            style={ghostBtn}
                          >
                            {p.published ? "Unpublish" : "Publish"}
                          </button>
                          {confirmId === p.id ? (
                            <>
                              <button
                                type="button"
                                onClick={() => removeProduct(p)}
                                className="h-8 px-2 text-[11px] font-bold uppercase tracking-[0.1em]"
                                style={{ ...ghostBtn, borderColor: accent, color: accent }}
                              >
                                Confirm remove
                              </button>
                              <button
                                type="button"
                                onClick={() => setConfirmId(null)}
                                className="h-8 px-2 text-[11px] font-bold uppercase tracking-[0.1em]"
                                style={quietBtn}
                              >
                                Cancel
                              </button>
                            </>
                          ) : (
                            <button
                              type="button"
                              onClick={() => setConfirmId(p.id)}
                              aria-label={`Remove ${p.name}`}
                              className="inline-flex h-8 w-8 items-center justify-center"
                              style={ghostBtn}
                            >
                              <Trash className="h-4 w-4" aria-hidden="true" />
                            </button>
                          )}
                        </div>
                      </TD>
                    </TR>
                  ))}
                </TBody>
              </Table>
            )}
          </section>
        ) : null}

        {tab === "shipping" ? (
          <section aria-label="Shipping options" className="mt-5">
            <form
              onSubmit={submitShipping}
              aria-label={shipForm.mode === "new" ? "New shipping option" : "Edit shipping option"}
              className="mb-6 border-2 p-4"
              style={{ borderColor: ink, borderRadius: radius }}
            >
              <h2 className="text-[15px] font-bold" style={{ fontFamily: brand.fontHeading }}>
                {shipForm.mode === "new" ? "New shipping option" : `Edit ${shipForm.id}`}
              </h2>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div>
                  <Label htmlFor="sf-name" className={label} style={{ color: ink }}>
                    Name
                  </Label>
                  <Input
                    id="sf-name"
                    className={fieldCls}
                    style={fieldStyle}
                    value={shipForm.name}
                    onChange={(e) =>
                      setShipForm((f) => ({
                        ...f,
                        name: e.target.value,
                        errors: { ...f.errors, name: undefined },
                      }))
                    }
                    aria-invalid={!!shipForm.errors.name}
                  />
                  {shipForm.errors.name ? (
                    <p className="mt-1 text-[12px]" style={{ color: accent }} role="alert">
                      {shipForm.errors.name}
                    </p>
                  ) : null}
                </div>
                <div>
                  <Label htmlFor="sf-cost" className={label} style={{ color: ink }}>
                    Cost
                  </Label>
                  <Input
                    id="sf-cost"
                    className={fieldCls}
                    style={fieldStyle}
                    value={shipForm.cost}
                    onChange={(e) =>
                      setShipForm((f) => ({
                        ...f,
                        cost: e.target.value,
                        errors: { ...f.errors, cost: undefined },
                      }))
                    }
                    aria-invalid={!!shipForm.errors.cost}
                  />
                  {shipForm.errors.cost ? (
                    <p className="mt-1 text-[12px]" style={{ color: accent }} role="alert">
                      {shipForm.errors.cost}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <Button
                  type="submit"
                  disabled={shipForm.saving}
                  style={primaryBtn}
                  className="h-10 px-4 text-[12px] font-bold uppercase tracking-[0.12em]"
                >
                  {shipForm.saving
                    ? "Saving…"
                    : shipForm.mode === "new"
                      ? "Add option"
                      : "Save option"}
                </Button>
                {shipForm.mode === "edit" ? (
                  <button
                    type="button"
                    onClick={openNewShipping}
                    className="h-10 px-4 text-[12px] font-bold uppercase tracking-[0.12em]"
                    style={ghostBtn}
                  >
                    Cancel
                  </button>
                ) : null}
              </div>
            </form>

            {shippingStatus === "loading" || shippingStatus === "error" ? (
              <StatusBlock
                status={shippingStatus}
                error={shippingError}
                onRetry={loadShipping}
                loadingLabel="Loading shipping options…"
                neutral={neutral}
                accent={accent}
                ghostBtn={ghostBtn}
                radius={radius}
              />
            ) : shipping.length === 0 ? (
              <Empty
                title="No shipping options yet"
                description="Add a flat-rate option so shoppers can check out."
              />
            ) : (
              <Table>
                <THead>
                  <TR>
                    <TH className={thCls} style={{ color: neutral }}>
                      Option
                    </TH>
                    <TH className={thCls} style={{ color: neutral }}>
                      Cost
                    </TH>
                    <TH className={thCls} style={{ color: neutral }}>
                      Status
                    </TH>
                    <TH className={thCls} style={{ color: neutral }}>
                      Actions
                    </TH>
                  </TR>
                </THead>
                <TBody>
                  {shipping.map((s) => (
                    <TR key={s.id}>
                      <TD className={tdCls}>{s.name}</TD>
                      <TD className={tdCls}>{money(s.cost_cents, currency)}</TD>
                      <TD className={tdCls}>
                        <span
                          className="inline-flex px-1.5 py-[2px] text-[11px] font-bold uppercase tracking-[0.1em]"
                          style={{
                            border: `${s.active !== false ? "2px solid" : "1px dashed"} ${s.active !== false ? ink : neutral}`,
                            color: s.active !== false ? ink : neutral,
                            borderRadius: radius,
                          }}
                        >
                          {s.active !== false ? "Active" : "Removed"}
                        </span>
                      </TD>
                      <TD className={tdCls}>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => openEditShipping(s)}
                            aria-label={`Edit ${s.name}`}
                            className="inline-flex h-8 w-8 items-center justify-center"
                            style={ghostBtn}
                          >
                            <Edit className="h-4 w-4" aria-hidden="true" />
                          </button>
                          {s.active !== false ? (
                            shipConfirmId === s.id ? (
                              <>
                                <button
                                  type="button"
                                  onClick={() => removeShipping(s)}
                                  className="h-8 px-2 text-[11px] font-bold uppercase tracking-[0.1em]"
                                  style={{ ...ghostBtn, borderColor: accent, color: accent }}
                                >
                                  Confirm remove
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setShipConfirmId(null)}
                                  className="h-8 px-2 text-[11px] font-bold uppercase tracking-[0.1em]"
                                  style={quietBtn}
                                >
                                  Cancel
                                </button>
                              </>
                            ) : (
                              <button
                                type="button"
                                onClick={() => setShipConfirmId(s.id)}
                                aria-label={`Remove ${s.name}`}
                                className="inline-flex h-8 w-8 items-center justify-center"
                                style={ghostBtn}
                              >
                                <Trash className="h-4 w-4" aria-hidden="true" />
                              </button>
                            )
                          ) : null}
                        </div>
                      </TD>
                    </TR>
                  ))}
                </TBody>
              </Table>
            )}
          </section>
        ) : null}

        {tab === "tax" ? (
          <section aria-label="Tax and VAT" className="mt-5 max-w-[480px]">
            {taxStatus === "loading" || taxStatus === "error" ? (
              <StatusBlock
                status={taxStatus}
                error={taxError}
                onRetry={loadTax}
                loadingLabel="Loading the tax rate…"
                neutral={neutral}
                accent={accent}
                ghostBtn={ghostBtn}
                radius={radius}
              />
            ) : (
              <form
                onSubmit={submitTax}
                aria-label="Tax settings"
                className="border-2 p-4"
                style={{ borderColor: ink, borderRadius: radius }}
              >
                <h2 className="text-[15px] font-bold" style={{ fontFamily: brand.fontHeading }}>
                  Tax &amp; VAT
                </h2>
                <p className="mt-1 text-[13px]" style={{ color: neutral }}>
                  Current rate: {tax?.tax_rate_percent ?? "—"}% ({currency})
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="tax-rate" className={label} style={{ color: ink }}>
                      Rate (%)
                    </Label>
                    <Input
                      id="tax-rate"
                      className={fieldCls}
                      style={fieldStyle}
                      value={taxForm.rate}
                      onChange={(e) =>
                        setTaxForm((f) => ({ ...f, rate: e.target.value, error: "" }))
                      }
                      aria-invalid={!!taxForm.error}
                    />
                  </div>
                  <div>
                    <Label htmlFor="tax-currency" className={label} style={{ color: ink }}>
                      Currency
                    </Label>
                    <Select
                      id="tax-currency"
                      className={fieldCls}
                      style={fieldStyle}
                      value={taxForm.currency}
                      onChange={(e) => setTaxForm((f) => ({ ...f, currency: e.target.value }))}
                      options={CURRENCY_OPTIONS}
                    />
                  </div>
                </div>
                {taxForm.error ? (
                  <p className="mt-2 text-[12px]" style={{ color: accent }} role="alert">
                    {taxForm.error}
                  </p>
                ) : null}
                <div className="mt-4 flex items-center gap-3">
                  <Button
                    type="submit"
                    disabled={taxForm.saving}
                    style={primaryBtn}
                    className="h-10 px-4 text-[12px] font-bold uppercase tracking-[0.12em]"
                  >
                    {taxForm.saving ? "Saving…" : "Save rate"}
                  </Button>
                  {taxForm.savedAt ? (
                    <p className="text-[12px]" style={{ color: neutral }}>
                      Saved at {taxForm.savedAt}
                    </p>
                  ) : null}
                </div>
              </form>
            )}
          </section>
        ) : null}
      </div>
    </div>
  );
}
