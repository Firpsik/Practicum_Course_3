import { test, expect } from '@playwright/test';
import { Login } from '../pages/login_po';
import { Product } from '../pages/product_po';
import { Cart } from '../pages/cart_po';

test('complete_order_with_valid_data', async ({ page }) => {
  const loginPage = new Login(page);
  const productPage = new Product(page);
  const cartPage = new Cart(page);
  
  await page.goto('https://www.saucedemo.com/');
  await loginPage.login('standard_user', 'secret_sauce');
  await productPage.addItemToCart();
  await cartPage.goToCart();
  await cartPage.checkout('Dmitry', 'Kozlov', '1337');

  const confirmationMessage = await cartPage.getConfirmationMessage();
  expect(confirmationMessage).toBe('Thank you for your order!');
});
