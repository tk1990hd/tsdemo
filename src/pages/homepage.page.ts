// src/pages/homepage.page.ts
import { expect, Page, Locator } from '@playwright/test';
import { Position, resolveIndex } from '../utils/position';

export class HomePage {
  constructor(private page: Page) {}

  // === Locators ===

  /** All product cards currently visible on the homepage:*/
  productCards(): Locator {
    return this.page.locator('a.card[data-test^="product-"]');
  }

  /** Title within a card*/
  cardTitle(card: Locator): Locator {
    return card.locator('[data-test="product-name"], .card-title').first();
  }

  /** Price within a card*/
  cardPrice(card: Locator): Locator {
    return card.locator('[data-test="product-price"], .price, [class*="price"]').first();
  }

  /** Image within a card*/
  cardImage(card: Locator): Locator {
    return card.locator('img.card-img-top, img').first();
  }

  /** Pagination container*/
  paginationRoot(): Locator {
    return this.page.locator('ul.pagination');
  }

  /** Page links*/
  paginationPageLinks(): Locator {
    return this.paginationRoot().locator('li.page-item a.page-link[aria-label^="Page-"]');
  }

  /** Current page indicator*/
  currentPageItem(): Locator {
    return this.paginationRoot().locator('li.page-item.active');
  }

  // === Actions ===

  /** Homepage = catalogue */
  async goto() {
    await this.page.goto('/');
  }

  /** Click card by First/Middle/Last position */
  async openItemByPosition(pos: Position) {
    const cards = this.productCards();
    await expect(cards.first()).toBeVisible();
    const count = await cards.count();
    const idx = resolveIndex(count, pos);
    await cards.nth(idx).click();
  }

  /** Click pagination by First/Middle/Last position */
  async navigateToPageByLocation(pos: Position) {
    const links = this.paginationPageLinks();
    await expect(links.first()).toBeVisible();

    const count = await links.count();
    const idx = resolveIndex(count, pos);
    await links.nth(idx).click();

    // Assert pagination shows a selected page (active li)
    await expect(this.currentPageItem()).toBeVisible();
  }

  // === Assertions ===

  async expectAtLeastNProductCards(n: number) {
    const cards = this.productCards();
    await expect(cards.first()).toBeVisible();
    const count = await cards.count();
    expect(count).toBeGreaterThanOrEqual(n);
  }

  async expectEachCardHasTitleImagePrice() {
    const cards = this.productCards();
    const count = await cards.count();
    for (let i = 0; i < count; i++) {
      const card = cards.nth(i);
      await expect(this.cardTitle(card), `title missing on card #${i + 1}`).toBeVisible();
      await expect(this.cardImage(card), `image missing on card #${i + 1}`).toBeVisible();
      await expect(this.cardPrice(card), `price missing on card #${i + 1}`).toBeVisible();
    }
  }

  async expectPaginationHasAtLeastPages(n: number) {
    const links = this.paginationPageLinks();
    await expect(this.paginationRoot()).toBeVisible();
    const count = await links.count();
    expect(count).toBeGreaterThanOrEqual(n);
  }
}
