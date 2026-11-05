import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, beforeEach } from "vitest";

import ConsentBanner, { CONSENT_KEY } from "./ConsentBanner";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: () => {} }),
  usePathname: () => "/",
}));

beforeEach(() => {
  window.localStorage.clear();
});

describe("ConsentBanner", () => {
  it("[AC-036] shows the prompt on a first visit with explicit accept and decline actions", async () => {
    render(<ConsentBanner />);
    await waitFor(() =>
      expect(screen.getByRole("button", { name: /accept/i })).toBeInTheDocument(),
    );
    expect(screen.getByRole("button", { name: /decline/i })).toBeInTheDocument();
  });

  it("[AC-037/NFR-007] declining stores only the essential consent record and no other key is set", async () => {
    const user = userEvent.setup();
    render(<ConsentBanner />);
    await waitFor(() => screen.getByRole("button", { name: /decline/i }));
    await user.click(screen.getByRole("button", { name: /decline/i }));

    expect(window.localStorage.getItem(CONSENT_KEY)).toBe("declined");
    expect(window.localStorage.length).toBe(1);
    expect(screen.queryByRole("button", { name: /accept/i })).not.toBeInTheDocument();
  });

  it("[AC-037/NFR-007] once declined is stored, the prompt does not reappear on remount", async () => {
    window.localStorage.setItem(CONSENT_KEY, "declined");
    render(<ConsentBanner />);
    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
  });

  it("accepting stores the consent and dismisses the prompt", async () => {
    const user = userEvent.setup();
    render(<ConsentBanner />);
    await waitFor(() => screen.getByRole("button", { name: /accept/i }));
    await user.click(screen.getByRole("button", { name: /accept/i }));

    expect(window.localStorage.getItem(CONSENT_KEY)).toBe("accepted");
    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
  });

  it("accepting once means the prompt does not reappear on remount", async () => {
    window.localStorage.setItem(CONSENT_KEY, "accepted");
    render(<ConsentBanner />);
    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
  });
});
