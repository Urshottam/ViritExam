import { test, expect } from '@playwright/test';

test('User can log in successfully', async ({ page }) => {
  await page.goto('https://authorized-partner.vercel.app/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('urshottammaharjan98@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Urshottam@123');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.getByRole('heading', { name: 'My Profile' })).toBeVisible();
  await expect(page.getByText('Urshottam Maharjan')).toBeVisible();
});