export class ProductPageTS {
  private productName() {
    return cy.get('#item_5_title_link > div')
  }
  private productsLabel() {
    return cy.get('#header_container .title')
  }
  private addToCartButtons() {
    return cy.get('.btn.btn_primary.btn_small.btn_inventory')
  }
  private openCart() {
    return cy.get('#shopping_cart_container > a')
  }
  private deleteItem() {
    return cy.get('#remove-sauce-labs-onesie')
  }
  private deleteItem2() {
    return cy.get('#remove-sauce-labs-bolt-t-shirt')
  }
  private checkoutConfirmation() {
    return cy.get('#checkout')
  }
  private checkoutFirstname() {
    return cy.get('#first-name')
  }
  private checkoutLastname() {
    return cy.get('#last-name')
  }
  private checkoutPostalcode() {
    return cy.get('#postal-code')
  }
  private checkoutContinueBtn() {
    return cy.get('#continue')
  }
  private checkoutFinishBtn() {
    return cy.get('#finish')
  }
  private purchaseValidation() {
    return cy.get('#checkout_complete_container > img')
  }

  public productNameVerification() {
    this.productName().then((elment) => {
      expect(elment.text()).to.equal('Sauce Labs Fleece Jacket')
    })
    return this
  }

  public productsLabelVerification() {
    this.productsLabel()
      .should('have.css', 'text-transform', 'uppercase')
      .then((item) => {
        expect(item.text()).to.equal('Products')
      })
    return this
  }

  public addToCart() {
    this.addToCartButtons().click({ multiple: true })
    return this
  }

  public cartOpen() {
    this.openCart().click()
    return this
  }

  public deleteItems() {
    this.deleteItem().click()
    this.deleteItem2().click()

    return this
  }

  public checkoutConfirm() {
    this.checkoutConfirmation().click()
    return this
  }

  public confirmationCheckout(firstname, lastname, zip) {
    this.checkoutFirstname().type(firstname)
    this.checkoutLastname().type(lastname)
    this.checkoutPostalcode().type(zip)
    this.checkoutContinueBtn().click()
    this.checkoutFinishBtn().click()

    return this
  }

  public validationPurchase() {
    this.purchaseValidation().should('be.visible')
    return this
  }
}
