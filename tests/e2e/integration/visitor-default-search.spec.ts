import { test } from '@playwright/test';
import { HomePage } from '../../../src/pages/homepage.page';

test.describe('Visitor default search — Integration', () => {
  test('Default search results show to a visitor', async ({ page }) => {
    const home = new HomePage(page);

    // Background:
    // Given the user is not logged in (fresh context)
    // And there are at least 10 items under $100 (assumed in env data)

    // Scenario:
    // When I open the homepage
    await home.goto();

    // Then I see at least 9 product cards
    await home.expectAtLeastNProductCards(9);

    // And each visible product card shows a title, image, and price
    await home.expectEachCardHasTitleImagePrice();

    // And the pagination control shows at least 2 selectable pages
    await home.expectPaginationHasAtLeastPages(2);
  });
});
