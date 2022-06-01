import names from "../../data/names";

class PurchasePage {

    get removeToChartButtons() { return cy.get("[id*='remove']"); }
    get continueShoping() { return cy.get('#continue-shopping'); }
    get continuePurchae() { return cy.get('#checkout'); }
    get continueButton() { return cy.get('#continue'); }
    get firstName() { return cy.get('#first-name'); }
    get lastName() { return cy.get('#last-name'); }
    get postalCode() { return cy.get('#postal-code'); }
    get cancel() { return cy.get('#cancel'); }
    get getprise() {return cy.get('.inventory_item_price'); }
    get allPrise() {return cy.get('.summary_subtotal_label');}
    get finishButton() { return cy.get('#finish'); }

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
    continueBuy(names) {
        this.continuePurchae.click()
        this.continueButton.then(element => {
            this.firstName.type(names.firstNameInList)
            this.lastName.type(names.lastNameInList)
            this.postalCode.type(names.postalCodeInList)
            if (cy.get('error-message-container').should('not.exist')) {
                element.click()
            } else {
                element.click()
            }
        })
        this.continueButton.click()
        return this;
    }
    getAllPrise(){
        let num = 0;
        this.getprise.then(function(item){
            for(let i=0; i < item.length; i++){
               num += Number(item[i].innerText.slice(1))
            }

            //expect(this.allPrise.text()).to.be.equal(`Item total: $${num}`)
        })   
        this.allPrise.then(element => {
            expect(element.text()).to.be.equal(`Item total: $${num}`)
        })
    }
    exit(){
        this.cancel.click();
        return this;
    }
    finish() {
        this.finishButton.click()
        cy.get('#back-to-products').click()
    }
}

export default new PurchasePage()