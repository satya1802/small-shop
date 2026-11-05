import { expect, test } from "@playwright/test";

test("[AC-035] the privacy notice is reachable from a storefront page and describes data collection and use", async ({
  page,
}) => {
  await page.goto("/catalogue/");

  // Reached via the persistent site navigation that every storefront page carries,
  // not by navigating to /privacy directly.
  await page.getByRole("link", { name: /privacy notice/i }).click();
  await expect(page).toHaveURL(/\/privacy\/?$/);

  await expect(page.getByRole("heading", { name: /privacy notice/i })).toBeVisible();
  await expect(page.getByText(/what we collect/i)).toBeVisible();
  await expect(page.getByText(/how we use it/i)).toBeVisible();
  await expect(
    page.getByText(/collect your contact email, shipping name and address/i),
  ).toBeVisible();
});
