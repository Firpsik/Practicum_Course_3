import { test, expect } from '@playwright/test';
import { Login } from '../pages/login_po';

test('login_with_empty_fields', async ({ page }) => {
  const loginPage = new Login(page);
  
  await page.goto('https://www.saucedemo.com/');
  await loginPage.login('', '');

  const errorMessage = await loginPage.getErrorMessage();
  expect(errorMessage).toContain('Epic sadface: Username is required');
});
