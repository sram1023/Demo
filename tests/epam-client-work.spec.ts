import { test, expect } from '@playwright/test';

test.describe('EPAM client work navigation', () => {
  test('opens Client Work from the Services menu', async ({ page }) => {
    await page.goto('https://www.epam.com/');
    await expect(page).toHaveTitle(/EPAM/i);

    await page.getByRole('link', { name: 'Services', exact: true }).first().click();
    await expect(page).toHaveURL(/\/services$/);

    await page.getByRole('link', { name: 'Explore Our Client Work', exact: true }).click();
    await expect(page).toHaveURL(/\/services\/client-work$/);
    await expect(page.getByText('Client Work', { exact: true }).first()).toBeVisible();
  });
});
