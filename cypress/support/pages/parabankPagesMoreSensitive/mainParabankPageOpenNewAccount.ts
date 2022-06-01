


export class MainParabankPageOpenNewAccount  {
  
    private linkOpenNewAccount() { return cy.get('a[href="/parabank/openaccount.htm"]');}
    private menuServicesUrl() { return cy.url().should('include', 'openaccount.htm'); }
    private typeOfAccount() { return cy.get('select[ng-model="types.selectedOption"]'); }
    private numberOfAccount() { return cy.get('select[id="fromAccountId"]'); }
    private openNewAccount() { return cy.get('input[value="Open New Account"]'); }
    public shadowInputButtonOpenNewAccount() { return cy.get('[ng-submit="submit()"]')
            .get('input', { includeShadowDom: true }).type(' ', {force: true}); }
    private resultsOfOpeningTheAccount() { return cy.get('h1[class="title"]'); }
    private newAccountNumberClick() { return cy.get('a[class="ng-binding"]'); }
    private accountActivity() { return cy.get('form[ng-submit="submit()"]'); }
    private chooseMonth() { return cy.xpath('//select[@id="month"]'); }
    private chooseTypeOfActivity() { return cy.xpath('//select[@id="transactionType"]'); }
    public buttonGoFromAccountActivity() { return cy.get('[type="submit"]')
            .get('input', { includeShadowDom: true }).type(' ', {force: true}); }
    private resultOfClickingOnTheButtonGo() { return cy.xpath('//p[@ng-if="transactions.length <= 0"]'); }
    private openNewAccountAndSelectAllMonthAndTransaction() { return cy.get('[class="ng-binding"]'); }
    private fundsTransferReceived() { return cy.get('a[class="ng-binding"]'); }
    private ifWeAreInTheCorrectPage() { return cy.get('[class="title"]'); }

    public checkifWeAreInTheCorrectPage() {
        this.ifWeAreInTheCorrectPage().should('contain', 'Transaction Details');
        return this;
    }


    public fundsTransferReceivedClick() {
        this.fundsTransferReceived().click();
        return this;
    }

    public openNewAccountAndSelectAllMonthAndTransactions() {
        this.openNewAccountAndSelectAllMonthAndTransaction().should('contain', 'Funds Transfer Received');
        return this;
    }


    public theResultOfClickingOnTheButtonGo() {
        this.resultOfClickingOnTheButtonGo()
        .each(item => {
            cy.log(item.text());;
        });
        return this;

    };

    public clickOnChooseTypeOfActivity(option: string){
        this.chooseTypeOfActivity().select(option);
        return this;
    };

    public actuallyPeriodChooseMonth(option: string) {
        this.chooseMonth().select(option);
        return this;
    };

    public showAccountActivity() {
        this.accountActivity().should('contain', 'Activity Period:');
        return this;
    };

    public clickOnNewAccountNumber() {
        this.newAccountNumberClick().click()
        return this;
    };
    public watchResultsOfOpeningTheAccount() {
        this.resultsOfOpeningTheAccount().should('contain', 'Account Opened!');
        return this;
        };
    
    public clickOnTheLinkOpenNewAccount() {     
        this.linkOpenNewAccount().click()
       .should('contain', 'Open New Account');
        this.menuServicesUrl();
        return this;
    };

    public whatTypeOfAccountWeWantToOpen() {
        this.typeOfAccount().should('contain', 'CHECKING');
        return this;
    };

    public filterByTextTypeOfAccount(option: string){
        this.typeOfAccount().select(option);
        return this;
    };

    public filterByIndexNumberOfAccount(index: number){
        this.numberOfAccount().select(index);
        return this;
    };

    public openNewAccountClick(option: string){
        this.typeOfAccount().select(option);
        return this;
    }
}

export default new MainParabankPageOpenNewAccount()




