


export class MainParabankPageRequestLoans  {
  
    private linkOpenRequestLoans() { return cy.get('a[href="/parabank/requestloan.htm"]');}
    private checkIfWeAreInTheNededPage() { return cy.xpath('//h1[@class="title"]'); }
    private tableApplyForALoanFirstInput() { return cy.get('table[class="form2"] input[ng-model="loanRequest.amount"]'); }
    private tableApplyForALoanSecondInput() { return cy.get('table[class="form2"] input[id="downPayment"]'); }
    private clickOnTheButtonFromAccount() { return cy.get('select[id="fromAccountId"]'); }
    private buttonApllyNow() { return cy.get('input[type="submit"]');}
    private confirmationThetWeAreOnThePageWhatWeNeded() { return cy.xpath('//h1[class="title"]');}


    public linkOpenRequestLoansClick() {
        this.linkOpenRequestLoans().click();
        this.checkIfWeAreInTheNededPage().should('contain', 'Apply for a Loan')
        return this;
    }

    public toFillTableApplyForALoan(index) {     
        this.tableApplyForALoanFirstInput().type(index.loanAmount);
        this.tableApplyForALoanSecondInput().type(index.downPayment);
        return this;
    };

    public whenWeWantToConfirmAnAccount(index: number) {
        this.clickOnTheButtonFromAccount().select(index);
        return this;
    };

    public clickOnThebuttonApllyNow() {
        this.buttonApllyNow().click();
        return this;
    };

    public confirmationThetWeAreOnTheNededPage() {
     this.confirmationThetWeAreOnThePageWhatWeNeded().should('contain', "Loan Request Processed");
     return this;
    };
 
}

export default new MainParabankPageRequestLoans()






