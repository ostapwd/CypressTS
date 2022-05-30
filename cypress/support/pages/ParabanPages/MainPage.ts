import {BasePage} from "./BasePage";

export class MainPage extends BasePage{

    private openNewAccount(){
        return cy.contains('Open New Account')
    }

    private accountType() { return cy.get('select[ng-model="types.selectedOption"]'); }

    private amountForOpeningAccount() { return cy.get("#fromAccountId"); }

    private openNewAccountBTN(){return cy.get('input[value="Open New Account"]')}

    private newAccountID() { return cy.get("#newAccountId")}

    public clickOpenNewAccount(){
        this.openNewAccount().click()
        return this
    }

    public selectAccountTypeChecking() {
        this.accountType().select(0)
        return this;
    };

    public selectAmountForOpening(){
        this.amountForOpeningAccount().select(0)
        return this
    }

    public clickOpenNewAccountBTN(){
        this.openNewAccountBTN().click()
        return this
    }

    public clickNewAccountID(){
        this.newAccountID().click()
    }
}