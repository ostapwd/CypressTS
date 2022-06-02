import BasePage from "./BasePage";

export class PurchasePageTS extends BasePage{

    private removeToChartButtons() { return cy.get("[id*='remove']"); }
    private continueShoping() { return cy.get('#continue-shopping'); }
    private continuePurchae() { return cy.get('#checkout'); }
    private continueButton() { return cy.get('#continue'); }
    private firstName() { return cy.get('#first-name'); }
    private lastName() { return cy.get('#last-name'); }
    private postalCode() { return cy.get('#postal-code'); }
    private cancel() { return cy.get('#cancel'); }
    private getprise() {return cy.get('.inventory_item_price'); }
    private allPrise() {return cy.get('.summary_subtotal_label');}
    private finishButton() { return cy.get('#finish'); }

    public deselectedSomeOF() {
        this.removeToChartButtons().eq(0).click();
        this.removeToChartButtons().eq(1).click();
        this.removeToChartButtons().eq(2).click();

        return this;
    }
    public goShoping() {
        this.continueShoping().click()

        return this;
    }
    public continueBuy(names) {
        this.continuePurchae().click()
        this.continueButton().then(element => {
            this.firstName().type(names.firstNameInList)
            this.lastName().type(names.lastNameInList)
            this.postalCode().type(names.postalCodeInList)
            if (cy.get('error-message-container').should('not.exist')) {
                element.click()
            } else {
                element.click()
            }
        })
        this.continueButton().click()
        return this;
    }
    public getAllPrise(){
        let num = 0;
        this.getprise().then(function(item){
            for(let i=0; i < item.length; i++){
               num += Number(item[i].innerText.slice(1))
            }
        })   
        this.allPrise().then(element => {
            expect(element.text()).to.be.equal(`Item total: $${num}`)
        })
        return this;
    }
    public exit(){
        this.cancel().click();
        return this;
    }
    public finish() {
        this.finishButton().click()
        cy.get('#back-to-products').click()
    }
}
export default new PurchasePageTS();