import { expect, test, type Page } from "@playwright/test";

async function dismissConsent(page: Page) {
  const dialog = page.getByRole("dialog", { name: /cookies on this site/i });
  if (await dialog.isVisible().catch(() => false)) {
    await page.getByRole("button", { name: /^accept$/i }).click();
  }
}

test.describe("[AC-029][AC-030][AC-031] shipping options and tax rate", () => {
  test("[AC-029][AC-030][AC-031] owner creates and edits a shipping option, values persist across reload", async ({
    page,
  }) => {
    const stamp = Date.now();
    const name = `E2E Shipping ${stamp}`;
    const renamed = `${name} Updated`;

    await page.goto("/admin-products/");
    await dismissConsent(page);
    await page.getByRole("button", { name: /shipping options/i }).click();

    // AC-029: creating a shipping option.
    await page.getByLabel(/^name$/i).fill(name);
    await page.getByLabel(/^cost$/i).fill("4.50");
    await page.getByRole("button", { name: /add option/i }).click();

    const row = page.getByRole("row", { name: new RegExp(name) });
    await expect(row).toBeVisible();
    await expect(row.getByText(/active/i)).toBeVisible();

    // AC-030: editing the option updates its name and cost.
    await row.getByRole("button", { name: `Edit ${name}` }).click();
    const nameField = page.getByLabel(/^name$/i);
    await nameField.fill("");
    await nameField.fill(renamed);
    const costField = page.getByLabel(/^cost$/i);
    await costField.fill("");
    await costField.fill("6.25");
    await page.getByRole("button", { name: /save option/i }).click();

    const updatedRow = page.getByRole("row", { name: new RegExp(renamed) });
    await expect(updatedRow).toBeVisible();
    await expect(updatedRow.getByText("£6.25")).toBeVisible();

    // AC-031: the saved values persist across reload.
    await page.reload();
    await page.getByRole("button", { name: /shipping options/i }).click();
    const reloadedRow = page.getByRole("row", { name: new RegExp(renamed) });
    await expect(reloadedRow).toBeVisible();
    await expect(reloadedRow.getByText("£6.25")).toBeVisible();
  });

  test("[AC-031] owner sets the tax rate and it persists across reload", async ({ page }) => {
    await page.goto("/admin-products/");
    await dismissConsent(page);
    await page.getByRole("button", { name: /tax & vat/i }).click();

    const rateField = page.getByLabel(/rate \(%\)/i);
    await rateField.fill("");
    await rateField.fill("17.5");
    await page.getByRole("button", { name: /save rate/i }).click();

    await expect(page.getByText(/current rate: 17\.5% \(GBP\)/i)).toBeVisible();

    await page.reload();
    await page.getByRole("button", { name: /tax & vat/i }).click();
    await expect(page.getByText(/current rate: 17\.5% \(GBP\)/i)).toBeVisible();
  });
});
