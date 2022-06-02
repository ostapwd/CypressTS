import {BasePage} from "./BasePage";

export class MainPage extends BasePage{

    private openNewAccount(){
        return cy.get("#leftPanel > ul > li:nth-child(1) > a")
    }

    private updateContactInfo() {return cy.get("#leftPanel > ul > li:nth-child(6) > a")}

    private accountType() { return cy.get('#type'); }

    private numberofFunds(){return cy.get("#fromAccountId")}
    
    private openNewAccountBTN(){return cy.get("input[value = 'Open New Account']")}

    private newAccountID() { return cy.get("#newAccountId")}

    public clickOpenNewAccount(){
        this.openNewAccount().click()
        return this
    }

    public selectAccountTypeChecking() {
        this.accountType().select(0)
        return this;
    };

    public selectAccountFunds() {
        this.numberofFunds().select(0)
        return this;
    };

    public clickOpenNewAccountBTN(){
        this.openNewAccountBTN().click()
        return this
    }

    public clickNewAccountID(){
        this.newAccountID().click()
    }

    public clickUpdateContactInfo(){
        this.updateContactInfo().click()
        return this
    }
}