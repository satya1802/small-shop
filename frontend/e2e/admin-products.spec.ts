import { expect, test, type Page } from "@playwright/test";

// The consent banner is global and fixed to the bottom of the viewport; dismiss it so
// it cannot cover a control the test needs to click.
async function dismissConsent(page: Page) {
  const dialog = page.getByRole("dialog", { name: /cookies on this site/i });
  if (await dialog.isVisible().catch(() => false)) {
    await page.getByRole("button", { name: /^accept$/i }).click();
  }
}

test.describe("[AC-024][AC-025][AC-026] admin products", () => {
  test("owner creates a product, edits it, then unpublishes it", async ({ page }) => {
    const stamp = Date.now();
    const name = `E2E Product ${stamp}`;
    const renamed = `${name} Updated`;

    await page.goto("/admin-products/");
    await dismissConsent(page);

    // AC-024: creating a product publishes it (published defaults to checked).
    await page.getByRole("button", { name: /new product/i }).click();
    await page.getByLabel(/^name$/i).fill(name);
    await page.getByLabel(/^price$/i).fill("12.00");
    await page.getByLabel(/^stock$/i).fill("5");
    await page.getByLabel(/^image url$/i).fill("https://cdn.example.com/e2e.jpg");
    await page.getByRole("button", { name: /save product/i }).click();

    const row = page.getByRole("row", { name: new RegExp(name) });
    await expect(row).toBeVisible();
    await expect(row.getByText(/^live$/i)).toBeVisible();

    // AC-025: editing the product updates its details in place.
    await row.getByRole("button", { name: `Edit ${name}` }).click();
    const nameField = page.getByLabel(/^name$/i);
    await nameField.fill("");
    await nameField.fill(renamed);
    await page.getByRole("button", { name: /save product/i }).click();

    const updatedRow = page.getByRole("row", { name: new RegExp(renamed) });
    await expect(updatedRow).toBeVisible();

    // AC-026: unpublishing takes it out of the published catalogue listing
    // (GET /products), which this screen re-reads from the API on reload.
    await updatedRow.getByRole("button", { name: /unpublish/i }).click();
    await expect(updatedRow.getByText(/draft/i)).toBeVisible();

    await page.reload();
    await expect(page.getByText(renamed)).toHaveCount(0);
  });
});
