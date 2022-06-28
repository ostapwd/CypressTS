import BasePageParabank from "./basePageParabank";
import { MainPageParabank } from "./mainPageParabank";

export class AccountServicesPageParabank extends BasePageParabank{
    public logOutrUserLink() { return cy.get("a[href*='logout.htm']"); }
    private openNewAccountLink() { return cy.get("a[href='/parabank/openaccount.htm']"); }
    private accountsOverviewLink() { return cy.get("a[href='/parabank/overview.htm']"); }
    private transferfoundsLink() { return cy.get("a[href='/parabank/transfer.htm']"); }
   
    public getLogOutUserLink(){
        return this.logOutrUserLink()
    }

    public logOutOfTheApp(){
        this.logOutrUserLink().click()
        return new MainPageParabank()
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
}