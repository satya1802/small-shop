"use client";

import * as React from "react";

import { Button } from "@/lib/ui";
import { useNavigate } from "@/lib/navigate";

/**
 * Consent is recorded in a single essential, first-party localStorage key.
 * No non-essential cookie or storage is written before a choice is made, and
 * none is written at all if the shopper declines -- only the choice itself
 * is recorded so the prompt does not reappear.
 */
export const CONSENT_KEY = "cookie-consent";

type Consent = "accepted" | "declined";

function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(CONSENT_KEY);
  return value === "accepted" || value === "declined" ? value : null;
}

export default function ConsentBanner() {
  const navigate = useNavigate();
  // Start as null (no decision yet known) and only decide whether to show the
  // prompt after mount, since localStorage is unavailable on the server and
  // reading it during render would mismatch the server-rendered markup.
  const [consent, setConsent] = React.useState<Consent | null>(null);
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    setConsent(readConsent());
    setChecked(true);
  }, []);

  function choose(value: Consent) {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  }

  if (!checked || consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-heading"
      aria-describedby="consent-body"
      className="fixed inset-x-0 bottom-0 z-50 border-t bg-white p-4 shadow-lg"
      style={{ borderColor: "var(--brand-border)" }}
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p id="consent-heading" className="text-sm font-semibold">
            Cookies on this site
          </p>
          <p id="consent-body" className="mt-1 text-sm text-slate-600">
            We use essential cookies to run the shop. With your consent we'd also use non-essential
            cookies to understand how the shop is used. See our{" "}
            <button
              type="button"
              onClick={() => navigate("privacy")}
              className="underline underline-offset-2"
            >
              privacy notice
            </button>
            .
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <Button type="button" variant="secondary" size="sm" onClick={() => choose("declined")}>
            Decline
          </Button>
          <Button type="button" size="sm" onClick={() => choose("accepted")}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
