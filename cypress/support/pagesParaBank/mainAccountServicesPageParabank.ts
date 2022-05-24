import BasePageParabank from "./basePageParabank";
import OpenNewAccountsParabank from "./openNewAccountPageParabank";

export default class MainAccountServicesPageParabank extends BasePageParabank{
    public accountServicesLabel() { return cy.get("#leftPanel h2"); }
    private openNewAccountLink() { return cy.get("a[href='/parabank/openaccount.htm']"); }
    // public openNewAccountButton() {return cy.get( "input.button[value='Open New Account']")};
    // public numberAccount() {return cy.get( "#fromAccountId")};
    // private accountsOverwiewLink() { return cy.get("a[href='/parabank/overview.htm']"); }
  
    public accountServicesLabelVerify(){
        this.accountServicesLabel().should('contain','Account Services')
            return this
    }

    public openNewAccountLinkPage(){
        this.openNewAccountLink().should('contain','Open New Account').click();
            return new OpenNewAccountsParabank()
    }

   
    // public newAccountVerify(){
    //     this.accountsOverwiewLink().then((element) => {
    //         expect(element.text()).to.be.contains('Accounts Overview')
    //     }).click();

    //     return this
    // }
}