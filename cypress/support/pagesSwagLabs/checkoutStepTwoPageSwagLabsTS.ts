import { checkoutCompletePageSwagLabsTS } from "./checkoutCompletePageSwagLabsTS";

export class checkoutStepTwoPageSwagLabsTS{
    private summaryTotalLabel() { return cy.get(".summary_total_label"); }
    private urlCheckTwoStepPage() { return cy.url(); }
    public checkTwoStepPageLabel() { return cy.get("#header_container .title"); }
    public finishButton() { return cy.get("#finish"); }
    public cancelButton() { return cy.get("#cancel"); }

    public urlPageVerify(link) {
        this.urlCheckTwoStepPage().should('eq', link.url)
            return this
    }

    public checkTwoStepPageLabelVerify(){
        this.checkTwoStepPageLabel().should('be.visible').then((element) => {
            expect(element.text()).to.be.equal('Checkout: Overview')
        })
            return this
    }

    public summaryTotalLabelVerify(){
        this.summaryTotalLabel().should('be.visible').then((element) => {
            expect(element.text()).to.be.equal('Total: $140.34')
        })
            return this
    }

    public finishButtonVerify(){
        this.finishButton().should('be.visible').should('contain', 'Finish')
            return this
    }

    public cancelButtonVerify(){
        this.cancelButton().should('be.visible').then((element) => {
            expect(element.text()).to.be.equal('Cancel')
        })
            return this
    }

    public openCheckoutCompletePage(){
        this.finishButton().should('be.visible').click()
            return new checkoutCompletePageSwagLabsTS()
   }
}
