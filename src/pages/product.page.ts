// src/pages/product.page.ts
import { expect, Page, Locator } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  // === Locators ===

  /** Main image inside figure/card wrapper */
  primaryImage(): Locator {
    return this.page.locator('.card-img-wrapper img, figure img.figure-img').first();
  }

  /** H1 product name */
  title(): Locator {
    return this.page.locator('[data-test="product-name"]').first();
  }

  /** Badges: category / brand */
  categoryBadge(): Locator {
    return this.page.locator('[aria-label="category"]').first();
  }
  brandBadge(): Locator {
    return this.page.locator('[aria-label="brand"]').first();
  }

  /** Price numeric span */
  unitPrice(): Locator {
    return this.page.locator('[data-test="unit-price"]').first();
  }

  /** CO₂ rating badge container */
  co2Badge(): Locator {
    return this.page.locator('[data-test="co2-rating-badge"]').first();
  }

  /** Quantity controls */
  quantityInput(): Locator {
    return this.page.locator('[data-test="quantity"]#quantity-input').first();
  }
  increaseQtyBtn(): Locator {
    return this.page.locator('[data-test="increase-quantity"]#btn-increase-quantity').first();
  }
  decreaseQtyBtn(): Locator {
    return this.page.locator('[data-test="decrease-quantity"]#btn-decrease-quantity').first();
  }

  /** Actions */
  addToCartButton(): Locator {
    return this.page.locator('[data-test="add-to-cart"]#btn-add-to-cart').first();
  }
  addToFavoritesButton(): Locator {
    return this.page.locator('[data-test="add-to-favorites"]#btn-add-to-favorites').first();
  }

  // === Assertions ===

  /** Minimal details-page sanity */
  async expectIsDetailsPage() {
    await expect(this.title()).toBeVisible();
    await expect(this.primaryImage()).toBeVisible();
    await expect(this.unitPrice()).toBeVisible();
  }

  /** Stronger check */
  async expectKeyMetaVisible() {
    await this.expectIsDetailsPage();
    await expect(this.categoryBadge()).toBeVisible();
    await expect(this.brandBadge()).toBeVisible();
    await expect(this.co2Badge()).toBeVisible();
  }

  /** Ensure add-to-cart is actionable */
  async expectCanAddToCart() {
    await expect(this.addToCartButton()).toBeVisible();
    await expect(this.addToCartButton()).toBeEnabled();
  }

  // === Helpers ===

  async readTitle(): Promise<string> {
    return (await this.title().innerText()).trim();
  }

  async readUnitPrice(): Promise<number> {
    const raw = (await this.unitPrice().innerText()).trim();
    // Guard for locales where comma might appear; your DOM shows "14.15"
    const normalized = raw.replace(/[^\d.,-]/g, '').replace(',', '.');
    return parseFloat(normalized);
  }

  async setQuantity(qty: number) {
    await this.quantityInput().fill(''); // clear
    await this.quantityInput().type(String(qty));
  }

  async incrementQuantity(times = 1) {
    for (let i = 0; i < times; i++) {
      await this.increaseQtyBtn().click();
    }
  }

  async decrementQuantity(times = 1) {
    for (let i = 0; i < times; i++) {
      await this.decreaseQtyBtn().click();
    }
  }

  async addToCart() {
    await this.addToCartButton().click();
  }
}
