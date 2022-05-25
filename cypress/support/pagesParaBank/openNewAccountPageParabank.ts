import BasePageParabank from "./basePageParabank";

export default class OpenNewAccountsParabank extends BasePageParabank{

    public pageTitle() { return cy.get("div[ng-if='showForm'] h1.title"); }
    public typeAccount() { return cy.get("#type"); }
    public numberNewAccount() { return cy.get("#newAccountId"); }
    private newAccountForm() { return cy.get("form[ng-submit='submit()']")}
    public createdAccountLabel() { return cy.get("div[ng-if='showResult'] h1.title"); }
    public accountDetailsLabel() { return cy.get("div[ng-if='showResult'] h1.title"); }

    public pageTitleLabel(){
        this.pageTitle().should('contain','Open New Account');
            return this
    }

    public selectTypeAccount(){
        this.typeAccount().select(0);
            return this
    }

    public selectNumberAccount(){
        this.typeAccount().select(0);
            return this
    }

    public openNewAccount(){
        this.newAccountForm().submit();
            return this
    }

    public confirmCreattedAccount(){
        this.createdAccountLabel().should('contain','Account Opened!')
        this.numberNewAccount().then(item => {
            cy.log(item.text())
        });
        return this
    }

    public confirmAcountsDetails(){
        this.accountDetailsLabel().should('contain','Account Details');
            return this
    }

}