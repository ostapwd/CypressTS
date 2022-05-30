import names from "../../data/names";

class PurchasePage {

    get removeToChartButtons() { return cy.get("[id*='remove']"); }
    get continueShoping() { return cy.get('#continue-shopping'); }
    get continuePurchae() { return cy.get('#checkout'); }
    get continueButton() { return cy.get('#continue');}
    get firstName(){ return cy.get('#first-name');}
    get lastName(){ return cy.get('#last-name');}
    get postalCode(){ return cy.get('#postal-code');}
    get finishButton() { return cy.get('#finish')}

    deselectedSomeOF() {
        this.removeToChartButtons.eq(0).click();
        this.removeToChartButtons.eq(1).click();
        this.removeToChartButtons.eq(2).click();

        return this;
    }
    goShoping() {
        this.continueShoping.click()

        return this;
    }
    continueBuy(names){
        this.continuePurchae.click()
        this.continueButton.then(element => {
            if (cy.get('error-message-container').should('not.exist')){
                this.firstName.type(names.firstNameInList)
                this.lastName.type(names.lastNameInList)
                this.postalCode.type(names.postalCodeInList)
            } else {
                element.click()
            }
        })
        this.continueButton.click()
        this.finishButton.click()
        cy.get('#back-to-products').click()
        return this;
    }
}

export default new PurchasePage()