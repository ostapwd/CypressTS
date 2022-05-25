import BasePageParabank from "./basePageParabank";

export default class AccountsOverwiewPageParabank extends BasePageParabank{
    
    public pageTitle() { return cy.get("div[ng-if='showForm'] h1.title"); }
    public tableAccounts() { return cy.get("#accountTable"); }
    private numbersAccounts() { return cy.get("a[href*='activity']"); }
    private totalAmount() { return cy.xpath("//*[@id='accountTable']/tbody/tr[4]"); }

   
    // public numberNewAccount() { return cy.get("#newAccountId"); }
    // private newAccountForm() { return cy.get("form[ng-submit='submit()']")}
    // public createdAccountLabel() { return cy.get("div[ng-if='showResult'] h1.title"); }
    // public accountDetailsLabel() { return cy.get("div[ng-if='showResult'] h1.title"); }

    public pageTitleLabel(){
        this.pageTitle().should('contain','Accounts Overview');
            return this
    }

    public tableAccountsOverview(){
        this.tableAccounts().find('thead').should(($th) => {
            expect($th).to.contain('Account')
            expect($th).to.contain('Balance*')
            expect($th).to.contain('Available Amount')
        })
        return this
    }

    public numbersAccountLog(){
        this.numbersAccounts().each((number) => {
            cy.log(number.text())
        })
        return this
    }

    public totalAmountAccountsOverview(){
        this.totalAmount().then((element) => {
          cy.log(element.text())
        })
        return this
    }





    // public selectTypeAccount(){
    //     this.typeAccount().select(0);
    //         return this
    // }

    // public selectNumberAccount(){
    //     this.typeAccount().select(0);
    //         return this
    // }

    // public openNewAccount(){
    //     this.newAccountForm().submit();
    //         return this
    // }

    // public confirmCreattedAccount(){
    //     this.createdAccountLabel().should('contain','Account Opened!')
    //     this.numberNewAccount().then(item => {
    //         cy.log(item.text())
    //     });
    //     return this
    // }

    // public confirmAcountsDetails(){
    //     this.accountDetailsLabel().should('contain','Account Details');
    //         return this
    // }

}
