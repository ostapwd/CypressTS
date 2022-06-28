import { AccountServicesPageParabank } from "./accountServicesPageParabank";

export class AccountsOverviewPageParabank extends AccountServicesPageParabank{
    public tableAccounts() { return cy.get("#accountTable"); }
    private numbersAccounts() { return cy.get("a[href*='activity']"); }
    private totalAmount() { return cy.xpath("//*[@id='accountTable']/tbody/tr[4]"); }

    public getTableAccountsOverview(){
        return this.tableAccounts()
    }

    public getNumbersAccountLog(){
        return this.numbersAccounts()
    }
} 
