import { expect, test } from "@playwright/test";

// The global consent dialog (ConsentBanner) is rendered in the root layout, so it
// appears on every first visit regardless of which page is loaded.
const DIALOG = (page: import("@playwright/test").Page) =>
  page.getByRole("dialog", { name: /cookies on this site/i });

test.describe("[AC-036][AC-037] cookie consent", () => {
  test("[AC-036] shows the consent prompt on first visit", async ({ page }) => {
    await page.goto("/");
    await expect(DIALOG(page)).toBeVisible();
  });

  test("[AC-036][NFR-007] declining the prompt sets no non-essential cookies", async ({
    page,
    context,
  }) => {
    await page.goto("/");
    await page.getByRole("button", { name: /^decline$/i }).click();
    await expect(DIALOG(page)).toHaveCount(0);

    // Consent is recorded in localStorage only; a decline must leave no cookie of
    // any kind (essential or non-essential) behind.
    const cookies = await context.cookies();
    expect(cookies).toHaveLength(0);
  });

  test("[AC-037] the prompt stays dismissed on reload after declining", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: /^decline$/i }).click();
    await expect(DIALOG(page)).toHaveCount(0);

    await page.reload();
    await expect(DIALOG(page)).toHaveCount(0);
  });

  test("[AC-037] the prompt stays dismissed on reload after accepting", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: /^accept$/i }).click();
    await expect(DIALOG(page)).toHaveCount(0);

    await page.reload();
    await expect(DIALOG(page)).toHaveCount(0);
  });
});
