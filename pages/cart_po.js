export class Cart {
    constructor(page) {
      this.page = page;
      this.cartLink = page.locator('.shopping_cart_link');
      this.checkoutButton = page.locator('[data-test="checkout"]');
      this.firstNameField = page.locator('[data-test="firstName"]');
      this.lastNameField = page.locator('[data-test="lastName"]');
      this.postalCodeField = page.locator('[data-test="postalCode"]');
      this.continueButton = page.locator('[data-test="continue"]');
      this.finishButton = page.locator('[data-test="finish"]');
      this.confirmationMessage = page.locator('.complete-header');
    }
  
    async goToCart() {
      await this.cartLink.click();
    }
  
    async checkout(firstName, lastName, postalCode) {
      await this.checkoutButton.click();
      await this.firstNameField.fill(firstName);
      await this.lastNameField.fill(lastName);
      await this.postalCodeField.fill(postalCode);
      await this.continueButton.click();
      await this.finishButton.click();
    }
  
    async getConfirmationMessage() {
      return await this.confirmationMessage.textContent();
    }
  }
  