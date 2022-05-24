export class MainParabankPageTransferFunds  {
  
    private linkTransferFunds() { return cy.get('a[href="/parabank/transfer.htm"]');}
    private resultOfTransferFundsOpening() { return cy.get('h1[class="title"]'); }
    private resFundsOpening() { return cy.get('[selected="selected"]'); }
    public buttonOpenNewAccount() { return cy.get('[type="submit"]')
            .get('input', { includeShadowDom: true }).type(' ', {force: true}); }
    private amountTransfer() { return cy.get('form[ng-submit="submit()"] input[id="amount"]'); }


   
    public sendTransfer(user) {     
        this.amountTransfer().type(user.amount);
        return this;
    }


    public putNumberOfAmountWhatWeWantTransfer() {
        this.resFundsOpening().click()
        return this;
    };


    public clickLinkTransferFunds() {
        this.linkTransferFunds().click()
        return this;
    }

    public  resultOfTransferFundsOpeningWhenWeClickedOnIt() { 
    this.resultOfTransferFundsOpening().should('contain', 'Transfer Funds');
    return this;
    }


}


    export default new MainParabankPageTransferFunds()