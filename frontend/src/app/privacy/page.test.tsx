import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Page from "./page";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: () => {} }),
  usePathname: () => "/",
}));

describe("Privacy notice page", () => {
  it("[AC-035] describes what data is collected and how it is used", () => {
    render(<Page />);
    expect(screen.getByRole("heading", { name: /privacy notice/i })).toBeInTheDocument();
    expect(screen.getByText(/what we collect/i)).toBeInTheDocument();
    expect(screen.getByText(/how we use it/i)).toBeInTheDocument();
  });
});
