import { checkoutCompletePageSwagLabsTS } from "./checkoutCompletePageSwagLabsTS";

export class checkoutStepTwoPageSwagLabsTS{
    private summaryTotalLabel() { return cy.get(".summary_total_label"); }
    private urlCheckTwoStepPage() { return cy.url(); }
    public checkTwoStepPageLabel() { return cy.get("#header_container .title"); }
    public finishButton() { return cy.get("#finish"); }
    public cancelButton() { return cy.get("#cancel"); }

    public verifyUrlCheckTwoStepPage(){
        this.urlCheckTwoStepPage().should('eq','https://www.saucedemo.com/checkout-step-two.html')
        return this
    }

    public verifyCheckTwoStepPageLabel(){
        this.checkTwoStepPageLabel().should('be.visible').then((element) => {
            expect(element.text()).to.be.equal('Checkout: Overview')
        })
        return this
    }

    public verifySummaryTotalLabel(){
        this.summaryTotalLabel().should('be.visible').then((element) => {
            expect(element.text()).to.be.equal('Total: $140.34')
        })
        return this
    }

    public verifyFinishButton(){
        this.finishButton().should('be.visible').should('contain', 'Finish')
        return this
    }

    public verifyCancelButton(){
        this.cancelButton().should('be.visible').then((element) => {
            expect(element.text()).to.be.equal('Cancel')
        })
        return this
    }

    public openCheckoutCompletePage(){
        this.finishButton().click()
        return new checkoutCompletePageSwagLabsTS()
   }
}
