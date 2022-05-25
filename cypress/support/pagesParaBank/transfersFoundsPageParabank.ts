import BasePageParabank from "./basePageParabank";

export default class TransfersFoundPageParabank extends BasePageParabank{
    
    private pageTitle() { return cy.get("div[ng-if='showForm'] h1.title"); }
    public amount() { return cy.get("#amount"); }
    public fromAccount() { return cy.get("#fromAccountId"); }
    public toAccount() { return cy.get("#toAccountId"); }
    private transferButton() { return cy.get("input[value='Transfer']"); }
   
    public pageTitleLabel(){
        this.pageTitle().should('contain','Transfer Complete!');
            return this
    }

    public transferAmount(){
        this.amount().should('be.visible').clear().type('500')
        this.fromAccount().select(0).should('be.visible')
        this.toAccount().select(1).should('be.visible')
        this.transferButton().click()
            return this
    }
}
