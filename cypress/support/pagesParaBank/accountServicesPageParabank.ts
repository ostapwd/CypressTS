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

    public clickOnLinkOpenNewAccount(){
        this.openNewAccountLink().click();
            return this
    }

    public clickOnLinkAccountsOverview(){
        this.accountsOverviewLink().click();
            return this
    }

    public clickOnLinkTransfersFound(){
       return this.transferfoundsLink().click();
            return new TransfersFoundPageParabank()
    }
}