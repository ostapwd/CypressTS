class productPage {
  get productsLabel() {
    return cy.get('#header_container .title');
  }
  get addToCardButtons() {
    return cy.get("[id*='add-to-cart']");
  }
  get inventoryItemNames() {
    return cy.get('.inventory_item_name');
  }
  get cardNumber() {
    return cy.get('.shopping_cart_badge');
  }
  get menu() {
    return cy.get("[id*= 'react-burger-menu-btn']");
  }
  logAllProducts() {
    this.inventoryItemNames.each((item) => {
      cy.log(item.text());
    });
    return this;
  }

  addToCardAllProducts() {
    this.addToCardButtons.each((item) => {
      item.click();
    });
    return this;
  }

  verifyProductsQuantity(number) {
    this.cardNumber.then((el) => {
      expect(el.text()).to.be.equal(number);
    });
  }
}

export default new productPage();
