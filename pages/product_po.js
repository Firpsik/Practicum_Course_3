export class Product {
    constructor(page) {
      this.page = page;
      this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
      this.cartBadge = page.locator('.shopping_cart_badge');
    }
  
    async addItemToCart() {
      await this.addToCartButton.click();
    }
  
    async getCartItemCount() {
      return await this.cartBadge.textContent();
    }
  }
  