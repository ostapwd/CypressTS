export class checkoutCompletePageSwagLabsTS{
    public infoCheckoutCompleteLabel() { return cy.get("#checkout_complete_container .complete-header"); }
    private urlCheckCompletePage() { return cy.url(); }
    public checkCompletePageLabel() { return cy.get("#header_container .title"); }
    public imageCompletePage() { return cy.get(".pony_express"); }
    public backHomeButton() { return cy.get("#back-to-products"); }
    

    public verifyUrlCheckTwoStepPage(){
        this.urlCheckCompletePage().should('eq','https://www.saucedemo.com/checkout-complete.html')
        return this
    }

    public verifyInfoCheckoutCompletePageLabel(){
        this.checkCompletePageLabel().should('be.visible').then((element) => {
            expect(element.text()).to.be.equal('Checkout: Complete!')
        })
        return this
    }

    public verifyImageCompletePage(){
        this.imageCompletePage().should('be.visible')
        return this
    }
}