import { checkoutCompletePageSwagLabsTS } from "./checkoutCompletePageSwagLabsTS";
import basePageSwagLabsTS from './basePageSwagLabsTS';

export class checkoutStepTwoPageSwagLabsTS extends basePageSwagLabsTS{
    private summaryTotalLabel() { return cy.get(".summary_total_label"); }
    private urlCheckTwoStepPage() { return cy.url(); }
    public checkTwoStepPageLabel() { return cy.get("#header_container .title"); }
    public finishButton() { return cy.get("#finish"); }
    public cancelButton() { return cy.get("#cancel"); }

    public urlPageVerify(link) {
        this.urlCheckTwoStepPage().should('eq', link.url)
            return this
    }

    public getSummaryTotalLabel(){
       return this.summaryTotalLabel()
    }

    public getFinishButton(){
        return this.finishButton()
    }

    public clickOpenCheckoutCompletePage(){
        this.finishButton().should('be.visible').click()
            return new checkoutCompletePageSwagLabsTS()
   }
}
