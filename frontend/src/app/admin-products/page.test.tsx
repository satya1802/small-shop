import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi, beforeEach } from "vitest";
import type { Mock } from "vitest";

import Page from "./page";
import { apiFetch as apiFetchImport } from "@/lib/api";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: () => {} }),
  usePathname: () => "/",
}));

vi.mock("@/lib/api", () => ({
  apiFetch: vi.fn(),
}));

const apiFetch = apiFetchImport as unknown as Mock;

const PRODUCT = {
  id: "p1",
  name: "Ethiopia Guji Natural, 250g",
  description: "Blueberry, jasmine, cane sugar.",
  price_cents: 1450,
  image_url: "https://cdn.shop/img/guji.jpg",
  stock_quantity: 42,
  published: true,
};

const SHIPPING = { id: "s1", name: "Royal Mail Tracked 48", cost_cents: 395, active: true };
const TAX = { tax_rate_percent: 20, currency: "GBP" };

function mockApi(overrides = {}) {
  const impl = (path, init) => {
    if (overrides[path + (init?.method ?? "GET")]) {
      return overrides[path + (init?.method ?? "GET")](init);
    }
    if (path === "/products") return Promise.resolve([PRODUCT]);
    if (path === "/shipping-options") return Promise.resolve([SHIPPING]);
    if (path === "/settings/tax") return Promise.resolve(TAX);
    return Promise.resolve({});
  };
  apiFetch.mockImplementation(impl);
}

beforeEach(() => {
  apiFetch.mockReset();
});

describe("Products & store settings admin screen", () => {
  it("[AC-024] renders the saved product list fetched from the API, replacing seeded data", async () => {
    mockApi();
    render(<Page />);
    expect(screen.getByText(/loading products/i)).toBeInTheDocument();
    await waitFor(() => expect(screen.getByText(PRODUCT.name)).toBeInTheDocument());
    expect(screen.queryByText("Colombia Huila Washed, 250g")).not.toBeInTheDocument();
  });

  it("[AC-024] submits the new product form via POST /admin/products and shows it in the list", async () => {
    const created = { ...PRODUCT, id: "p2", name: "New Blend", published: true };
    mockApi({
      "/admin/productsPOST": () => Promise.resolve(created),
    });
    const user = userEvent.setup();
    render(<Page />);
    await waitFor(() => expect(screen.getByText(PRODUCT.name)).toBeInTheDocument());

    await user.click(screen.getByRole("button", { name: /new product/i }));
    await user.type(screen.getByLabelText(/^name$/i), "New Blend");
    await user.type(screen.getByLabelText(/^price$/i), "12.00");
    await user.type(screen.getByLabelText(/^stock$/i), "5");
    await user.type(screen.getByLabelText(/^image url$/i), "https://cdn.shop/img/x.jpg");
    await user.click(screen.getByRole("button", { name: /save product/i }));

    await waitFor(() =>
      expect(apiFetch).toHaveBeenCalledWith(
        "/admin/products",
        expect.objectContaining({ method: "POST" }),
      ),
    );
    await waitFor(() => expect(screen.getByText("New Blend")).toBeInTheDocument());
  });

  it("[AC-025] edits an existing product via PATCH and reflects the updated details", async () => {
    const updated = { ...PRODUCT, name: "Ethiopia Guji Natural, 350g" };
    mockApi({
      "/admin/products/p1PATCH": () => Promise.resolve(updated),
    });
    const user = userEvent.setup();
    render(<Page />);
    await waitFor(() => expect(screen.getByText(PRODUCT.name)).toBeInTheDocument());

    await user.click(screen.getByRole("button", { name: `Edit ${PRODUCT.name}` }));
    const nameField = screen.getByLabelText(/^name$/i);
    await user.clear(nameField);
    await user.type(nameField, "Ethiopia Guji Natural, 350g");
    await user.click(screen.getByRole("button", { name: /save product/i }));

    await waitFor(() =>
      expect(apiFetch).toHaveBeenCalledWith(
        "/admin/products/p1",
        expect.objectContaining({ method: "PATCH" }),
      ),
    );
    await waitFor(() =>
      expect(screen.getByText("Ethiopia Guji Natural, 350g")).toBeInTheDocument(),
    );
  });

  it("[AC-026] unpublishing a product PATCHes published:false and the row leaves the live set", async () => {
    mockApi({
      "/admin/products/p1PATCH": () => Promise.resolve({ ...PRODUCT, published: false }),
    });
    const user = userEvent.setup();
    render(<Page />);
    await waitFor(() => expect(screen.getByText(PRODUCT.name)).toBeInTheDocument());

    await user.click(screen.getByRole("button", { name: /unpublish/i }));

    await waitFor(() =>
      expect(apiFetch).toHaveBeenCalledWith(
        "/admin/products/p1",
        expect.objectContaining({ method: "PATCH", body: JSON.stringify({ published: false }) }),
      ),
    );
    await waitFor(() => expect(screen.getByText("Draft")).toBeInTheDocument());
  });

  it("[AC-026] removing a product calls DELETE and the row leaves the list", async () => {
    mockApi({
      "/admin/products/p1DELETE": () => Promise.resolve(undefined),
    });
    const user = userEvent.setup();
    render(<Page />);
    await waitFor(() => expect(screen.getByText(PRODUCT.name)).toBeInTheDocument());

    await user.click(screen.getByRole("button", { name: `Remove ${PRODUCT.name}` }));
    await user.click(screen.getByRole("button", { name: /confirm remove/i }));

    await waitFor(() =>
      expect(apiFetch).toHaveBeenCalledWith(
        "/admin/products/p1",
        expect.objectContaining({ method: "DELETE" }),
      ),
    );
    await waitFor(() => expect(screen.queryByText(PRODUCT.name)).not.toBeInTheDocument());
  });

  it("[AC-029] shows an error state and retry when products fail to load", async () => {
    apiFetch.mockImplementation((path) => {
      if (path === "/products") return Promise.reject(new Error("GET /products failed: 500"));
      if (path === "/shipping-options") return Promise.resolve([SHIPPING]);
      if (path === "/settings/tax") return Promise.resolve(TAX);
      return Promise.resolve({});
    });
    render(<Page />);
    await waitFor(() => expect(screen.getByRole("alert")).toBeInTheDocument());
    expect(screen.getByRole("button", { name: /retry/i })).toBeInTheDocument();
  });

  it("[AC-029/AC-030] creates a shipping option via POST /admin/shipping-options", async () => {
    const created = { id: "s2", name: "DPD Next Day", cost_cents: 750, active: true };
    mockApi({
      "/admin/shipping-optionsPOST": () => Promise.resolve(created),
    });
    const user = userEvent.setup();
    render(<Page />);
    await waitFor(() => expect(screen.getByText(PRODUCT.name)).toBeInTheDocument());

    await user.click(screen.getByRole("button", { name: /shipping options/i }));
    await waitFor(() => expect(screen.getByText(SHIPPING.name)).toBeInTheDocument());

    await user.type(screen.getByLabelText(/^name$/i), "DPD Next Day");
    await user.type(screen.getByLabelText(/^cost$/i), "7.50");
    await user.click(screen.getByRole("button", { name: /add option/i }));

    await waitFor(() =>
      expect(apiFetch).toHaveBeenCalledWith(
        "/admin/shipping-options",
        expect.objectContaining({ method: "POST" }),
      ),
    );
    await waitFor(() => expect(screen.getByText("DPD Next Day")).toBeInTheDocument());
  });

  it("[AC-029/AC-030] edits a shipping option via PATCH and removes it via PATCH active:false", async () => {
    mockApi({
      "/admin/shipping-options/s1PATCH": (init) => {
        const body = JSON.parse(init.body);
        return Promise.resolve({ ...SHIPPING, ...body });
      },
    });
    const user = userEvent.setup();
    render(<Page />);
    await waitFor(() => expect(screen.getByText(PRODUCT.name)).toBeInTheDocument());
    await user.click(screen.getByRole("button", { name: /shipping options/i }));
    await waitFor(() => expect(screen.getByText(SHIPPING.name)).toBeInTheDocument());

    await user.click(screen.getByRole("button", { name: `Edit ${SHIPPING.name}` }));
    const nameField = screen.getByLabelText(/^name$/i);
    await user.clear(nameField);
    await user.type(nameField, "Royal Mail Tracked 24");
    await user.click(screen.getByRole("button", { name: /save option/i }));

    await waitFor(() => expect(screen.getByText("Royal Mail Tracked 24")).toBeInTheDocument());

    await user.click(screen.getByRole("button", { name: `Remove Royal Mail Tracked 24` }));
    await user.click(screen.getByRole("button", { name: /confirm remove/i }));

    await waitFor(() =>
      expect(apiFetch).toHaveBeenCalledWith(
        "/admin/shipping-options/s1",
        expect.objectContaining({ method: "PATCH", body: JSON.stringify({ active: false }) }),
      ),
    );
    await waitFor(() => expect(screen.getByText("Removed")).toBeInTheDocument());
  });

  it("[AC-031] saves the tax rate via PUT /admin/settings/tax and shows the saved value", async () => {
    mockApi({
      "/admin/settings/taxPUT": (init) => {
        const body = JSON.parse(init.body);
        return Promise.resolve(body);
      },
    });
    const user = userEvent.setup();
    render(<Page />);
    await waitFor(() => expect(screen.getByText(PRODUCT.name)).toBeInTheDocument());

    await user.click(screen.getByRole("button", { name: /tax & vat/i }));
    await waitFor(() => expect(screen.getByText(/current rate: 20%/i)).toBeInTheDocument());

    const rateField = screen.getByLabelText(/rate \(%\)/i);
    await user.clear(rateField);
    await user.type(rateField, "17.5");
    await user.click(screen.getByRole("button", { name: /save rate/i }));

    await waitFor(() =>
      expect(apiFetch).toHaveBeenCalledWith(
        "/admin/settings/tax",
        expect.objectContaining({ method: "PUT" }),
      ),
    );
    await waitFor(() => expect(screen.getByText(/current rate: 17.5%/i)).toBeInTheDocument());
  });

  it("[AC-031] shows an empty state when there are no products", async () => {
    apiFetch.mockImplementation((path) => {
      if (path === "/products") return Promise.resolve([]);
      if (path === "/shipping-options") return Promise.resolve([]);
      if (path === "/settings/tax") return Promise.resolve(TAX);
      return Promise.resolve({});
    });
    render(<Page />);
    await waitFor(() => expect(screen.getByText(/no products yet/i)).toBeInTheDocument());
  });
});
