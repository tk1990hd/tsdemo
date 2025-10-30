👉 [https://practicesoftwaretesting.com/](https://practicesoftwaretesting.com/)
🐞 [https://with-bugs.practicesoftwaretesting.com/](https://with-bugs.practicesoftwaretesting.com/)

👉 [https://github.com/testsmith-io/practice-software-testing](https://github.com/testsmith-io/practice-software-testing)


1. Review the provided **user stories**
2. Design and implement an **automated test suite** for them
3. Run your tests against both:
   - The **main site** (expected to pass)
   - The **bug-ridden site** (expected to fail)
4. Analyse and document the **failures** you find


- Cover **all** of the provided User Stories
- Include at least: 
    - One **positive** test per story (happy path)
    - One **negative** or **edge-case** test per user story

  - Add a short **Bug Report Summary** in your `README.md` or a separate `BUGS.md` file:
    - Steps to reproduce
    - Expected vs actual behavior

Include a **README.md** file with:
- How to install and run tests
- Frameworks and libraries used
- Known issues or limitations
- How to switch between the **main** and **buggy** site URLs depending on the implementation

## 📝 User Stories
#### **1. View Product List**
**As a visitor**, I want to view a list of available tools so that I can browse what’s for sale.  
**Acceptance Criteria:**
- The homepage or “Shop” page displays a list of products with names, images, and prices.
- Each product links to a detailed product page.
- Pagination or scrolling works correctly to show more products.

#### **2. View Product Details**
**As a visitor**, I want to view detailed information about a specific tool so that I can learn more before purchasing.  
**Acceptance Criteria:**
- Clicking a product opens its detail page.
- The page displays name, description, price, and image.
- The “Add to Cart” button is visible and enabled.

#### **3. Search for a Product**
**As a visitor**, I want to search for products by name so that I can quickly find the tool I want.  
**Acceptance Criteria:**
- A search bar is available on the shop page.
- Entering a product name shows matching results.
- Non-matching searches show a “no results found” message.

#### **4. Filter Products by Category**
**As a visitor**, I want to filter tools by category so that I can find the type of product I need.  
**Acceptance Criteria:**
- Category filters (e.g., “Hand Tools”, “Power Tools”) are displayed.
- Selecting a category updates the product list.
- Clearing the filter shows all products again.

#### **5. Login**
**As a registered user**, I want to log in using my credentials so that I can access my account and purchase tools.  
**Acceptance Criteria:**
- Valid credentials allow successful login and show the user’s name.
- Invalid credentials display an appropriate error message.
- Login persists during navigation until logout.

#### **6. Add Product to Cart**
**As a logged-in user**, I want to add a product to my cart so that I can purchase it later.  
**Acceptance Criteria:**
- Clicking “Add to Cart” adds the item to the cart.
- The cart icon or counter updates with the correct number of items.
- The product appears in the cart summary with name, quantity, and price.

#### **7. Update or Remove from Cart**
**As a logged-in user**, I want to update quantities or remove items from my cart so that I can manage my purchase.  
**Acceptance Criteria:**
- Quantities can be increased or decreased.
- Removing an item updates the total.
- Cart total reflects all changes immediately.

#### **8. Complete Checkout**
**As a logged-in user**, I want to complete the checkout process so that I can buy my selected tools.  
**Acceptance Criteria:**
- Checkout form requires shipping and payment details.
- Submitting the form confirms the order.
- The user sees an order confirmation message or summary.

#### **9. View Order History**
**As a logged-in user**, I want to view my past orders so that I can track what I’ve purchased.  
**Acceptance Criteria:**
- The “My Orders” or “Order History” page lists previous orders.
- Each order shows date, total amount, and item summary.
- Clicking an order displays detailed order information.

### **10. Category Filtering and Reset**
**As a visitor**, I want to filter products by category so that I can narrow down what I’m viewing.  
**Acceptance Criteria:**
- Category filters update the product list dynamically without breaking pagination.  
- Selected filter states persist when navigating back or refreshing the page.  
- The filtered results match the category field in the API response.  
- Clicking “Clear Filters” restores the full list.

## 🌐 API Testing (Optional Extension)
### Objectives
- Validate key backend endpoints that support your user stories  
  (e.g., product listing, login, cart, order creation)
- Confirm that **UI and API data** are consistent (e.g., prices, cart totals, order confirmation)
- Showcase how you would **integrate UI and API testing** in a single framework or pipeline

### Expectations
- You may use built-in capabilities from Playwright i.e.
  - `request` fixture or `APIRequestContext` in **Playwright**
  - `cy.request()` in **Cypress**
  - Or if there any additional packages that you are familiar with that you might like to use.
- Include your API tests in a clear folder
- Include test data and environment configuration as needed
- Document how to run the API tests in your `README.md`