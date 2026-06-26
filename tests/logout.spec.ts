import { test, expect } from '@playwright/test';

test('User can logout successfully', async ({ page }) => {
  await page.goto('https://authorized-partner.vercel.app/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('urshottammaharjan98@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Urshottam@123');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByText('Urshottam').click();
  await page.getByText('Logout').click();
  await page.getByRole('button', { name: 'Logout' }).click();
  await expect(page).toHaveURL(/.*login/);
  await expect(page.getByRole('heading', { name: 'Log in to Authorized Partner' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Log In' })).toBeVisible();
});