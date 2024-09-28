import { test, expect } from '@playwright/test';
import { Login } from '../pages/login_po';
import { Product } from '../pages/product_po';

test('add_item_to_cart', async ({ page }) => {
  const loginPage = new Login(page);
  const productPage = new Product(page);
  
  await page.goto('https://www.saucedemo.com/');
  await loginPage.login('standard_user', 'secret_sauce');
  await productPage.addItemToCart();

  const cartCount = await productPage.getCartItemCount();
  expect(cartCount).toBe('1');
});
