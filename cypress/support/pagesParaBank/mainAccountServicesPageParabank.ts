import AccountsOverwiewPageParabank from "./accountsOverviewPageParabank";
import BasePageParabank from "./basePageParabank";
import OpenNewAccountsParabank from "./openNewAccountPageParabank";
import TransfersFoundPageParabank from "./transfersFoundsPageParabank";

export default class MainAccountServicesPageParabank extends BasePageParabank{
    public accountServicesLabel() { return cy.get("#leftPanel h2"); }
    private openNewAccountLink() { return cy.get("a[href='/parabank/openaccount.htm']"); }
    private accountsOverviewLink() { return cy.get("a[href='/parabank/overview.htm']"); }
    private transferfoundsLink() { return cy.get("a[href='/parabank/transfer.htm']"); }

    
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

    public openaAccountsOverviewPage(){
        this.accountsOverviewLink().should('contain','Accounts Overview').click();
            return new AccountsOverwiewPageParabank()
    }

    public openTransfersFoundPage(){
        this.transferfoundsLink().should('contain','Transfer Funds').click();
            return new TransfersFoundPageParabank()
    }

   
    // public newAccountVerify(){
    //     this.accountsOverwiewLink().then((element) => {
    //         expect(element.text()).to.be.contains('Accounts Overview')
    //     }).click();

    //     return this
    // }
}