import { AccountServicesPageParabank } from "./accountServicesPageParabank";

export class OpenNewAccountPageParabank extends AccountServicesPageParabank{
    public typeAccount() { return cy.get("#type"); }
    public numberNewAccount() { return cy.get("#newAccountId"); }
    private newAccountForm() { return cy.get("form[ng-submit='submit()']")}
    public createdAccountLabel() { return cy.get("div[ng-if='showResult'] h1.title"); }
    public accountDetailsLabel() { return cy.get("div[ng-if='showResult'] h1.title"); }
    private openNewAccountButton() { return cy.get( ".button[value='Open New Account']"); }
   
    public selectTypeAccount(option: string){
        this.typeAccount().select(option);
            return this
    }

    public selectNumberAccount(index: number){
        this.typeAccount().select(index);
            return this
    }

    public clickOnButtonOpenNewAccount(){
        this.openNewAccountButton().click();
            return this
    }

    public confirmCreattedNewAccount(){
        return this.numberNewAccount()
    }

    public confirmAcountsDetails(){
        this.accountDetailsLabel().should('contain','Account Details');
            return this
    }
}