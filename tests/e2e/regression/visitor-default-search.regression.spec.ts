import { test } from '@playwright/test';
import { HomePage } from '../../../src/pages/homepage.page';
import { ProductPage } from '../../../src/pages/product.page';
import type { Position } from '../../../src/utils/position';

type ExampleRow = {
  paginationLocation: Position; // First | Middle | Last
  itemCount: number;
  itemLocation: Position;
};

const examples: ExampleRow[] = [
  { paginationLocation: 'First', itemCount: 9, itemLocation: 'First' },
  { paginationLocation: 'Middle', itemCount: 9, itemLocation: 'Middle' },
  { paginationLocation: 'Last', itemCount: 1, itemLocation: 'Last' },
];

test.describe('Visitor default search — Regression', () => {
  for (const ex of examples) {
    test(`Default search fully works [page=${ex.paginationLocation}, item=${ex.itemLocation}]`, async ({
      page,
    }) => {
      const home = new HomePage(page);
      const product = new ProductPage(page);

      // Background:
      // Given the user is not logged in
      // And there are at least 19 items under $100 (assumed in env data)

      // When I open the homepage
      await home.goto();

      // Then I see at least 9 product cards
      await home.expectAtLeastNProductCards(9);

      // And the pagination control shows at least 3 selectable pages
      await home.expectPaginationHasAtLeastPages(3);

      // When I navigate to a page which is the <paginationLocation> in the pagination bar
      await home.navigateToPageByLocation(ex.paginationLocation);

      // Then I see at least <itemCount> product cards
      await home.expectAtLeastNProductCards(ex.itemCount);

      // And each visible product card shows a title, image, and price
      await home.expectEachCardHasTitleImagePrice();

      // When I open the <itemLocation> item
      await home.openItemByPosition(ex.itemLocation);

      // Then I land on a product details page
      // And the details page shows a title, primary image, and price
      await product.expectIsDetailsPage();
    });
  }
});
