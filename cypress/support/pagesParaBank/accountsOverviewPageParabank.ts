import { AccountServicesPageParabank } from "./accountServicesPageParabank";

export class AccountsOverviewPageParabank extends AccountServicesPageParabank{
    public tableAccounts() { return cy.get("#accountTable"); }
    private numbersAccounts() { return cy.get("a[href*='activity']"); }

    public getTableAccountsOverview(){
        return this.tableAccounts()
    }

    public getNumbersAccountLog(){
        return this.numbersAccounts()
    }
} 
