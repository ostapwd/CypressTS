import BasePageParabank from "./basePageParabank";

export default class OpenNewAccountsParabank extends BasePageParabank{

    public pageTitle() { return cy.get("div[ng-if='showForm'] h1.title"); }
    public typeAccount() { return cy.get("#type"); }
    public numberNewAccount() { return cy.get("#newAccountId"); }
    private newAccountForm() { return cy.get("form[ng-submit='submit()']")}
    public resultCreattedAccount() { return cy.get("div[ng-if='showResult'] h1.title"); }

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

    public VerifyResultCreattedAccount(){
        this.resultCreattedAccount().should('contain','Account Opened!')
        this.numberNewAccount().then(item => {
            cy.log(item.text())
        });
        return this
    }

}