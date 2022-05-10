class ProductPage {

    get productName() { return cy.get('#item_5_title_link > div'); }
    get productsLabel() { return cy.get('#header_container .title'); }
    get addToCartButtons() { return cy.get('.btn.btn_primary.btn_small.btn_inventory'); }
    get openCart() { return cy.get('#shopping_cart_container > a'); }
    get deleteItem() { return cy.get('#remove-sauce-labs-onesie'); }
    get deleteItem2() { return cy.get('#remove-sauce-labs-bolt-t-shirt'); }
    get checkoutConfirmation() { return cy.get('#checkout'); }
    get checkoutFirstname() { return cy.get('#first-name'); }
    get checkoutLastname() { return cy.get('#last-name'); }
    get checkoutPostalcode() { return cy.get('#postal-code'); }
    get checkoutContinueBtn() { return cy.get('#continue'); }
    get checkoutFinishBtn() { return cy.get('#finish'); }
    get purchaseValidation() { return cy.get('#checkout_complete_container > img'); }


    productNameVerification() {
        this.productName.then(elment => {
            expect(elment.text()).to.equal('Sauce Labs Fleece Jacket')
        });
        return this;
    }

    productsLabelVerification() {
        this.productsLabel.should('have.css', 'text-transform', 'uppercase').then(item => {
            expect(item.text()).to.equal('Products')
        });
        return this;
    }

    addToCart() {
        this.addToCartButtons.click({ multiple: true });
        return this;
    }

    cartOpen() {
        this.openCart.click();
        return this;
    }

    deleteItems() {
        this.deleteItem.click();
        this.deleteItem2.click();

        return this;
    }

    checkoutConfirm() {
        this.checkoutConfirmation.click();
        return this;
    }


    confirmationCheckout(firstname, lastname, zip) {
        this.checkoutFirstname.type(firstname);
        this.checkoutLastname.type(lastname);
        this.checkoutPostalcode.type(zip);
        this.checkoutContinueBtn.click();
        this.checkoutFinishBtn.click();

        return this;
    }

    validationPurchase() {
        this.purchaseValidation.should('be.visible');
        return this;
    }

}

export default new ProductPage()