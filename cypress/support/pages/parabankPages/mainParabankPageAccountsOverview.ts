
export class MainParabankPageAccountOverview  {
  
    private linkAccountOverview() { return cy.get('a[href="/parabank/overview.htm"]');}
    private enterToAccount() { return cy.xpath('//a[@class="ng-binding"]'); }
    private mustCheckIfWeAreInTheCorrectPage() { return cy.xpath('//h1[@class="title"]'); }
    private chooseMonth() { return cy.xpath('//select[@id="month"]'); }
    private chooseTransactionType() { return cy.xpath('//select[@id="transactionType"]'); }
    public buttonGoFromAccountActivity() { return cy.get('[value="Go"]')
            .get('input', { includeShadowDom: true }).type(' ', {force: true}); }
    private transactionsTable() { return cy.get('tbody').find('td'); }
    private checkingTransactionsTableRows() { return  cy.get('tbody > tr'); }
   
    
   public checkingThatTheFillsTransactionsTableAreNotEmpty(text) {
        this.transactionsTable().then(tableRow => {
            cy.wrap(tableRow).find('[class="ng-binding"]').type(text)

            /*cy.wrap(tableRow).find('input[id="customer.lastName"]').type(user.lastName)
            cy.wrap(tableRow).find('input[id="customer.address.street"]').type(user.addressStreet)
            cy.wrap(tableRow).find('input[id="customer.address.city"]').type(user.addressCity)
            cy.wrap(tableRow).find('input[id="customer.address.state"]').type(user.addressState)
            cy.wrap(tableRow).find('input[id="customer.address.zipCode"]').type(user.addressZipCode)
            cy.wrap(tableRow).find('input[id="customer.phoneNumber"]').type(user.phoneNumber)
            cy.wrap(tableRow).find('input[id="customer.ssn"]').type(user.ssn)
            cy.wrap(tableRow).find('input[id="customer.username"]').type(user.username)
            cy.wrap(tableRow).find('input[id="customer.password"]').type(user.password)
            cy.wrap(tableRow).find('input[id="repeatedPassword"]').type(user.repeatedPassword)*/
          })
            return this;    
    };

    public weMustCheckIfWeAreInTheCorrectPage() {
        this.mustCheckIfWeAreInTheCorrectPage().should('contain', 'Accounts Overview');
        return this;
    }
    public chooseMonthAccountOverview(option: string) {
        this.chooseMonth().select(option);
        return this;
    };

    public chooseTransactionTypeClick(option: string) {
        this.chooseTransactionType().select(option);
        return this;
    }

    public checkingIfThereAreEnoughtInputsInTransactionsTable() {
        this.checkingTransactionsTableRows().then(($lis) => {
            expect($lis, '5 items').to.have.length(7)
      })
            return this;
    };

/*public filterByIndex(index: number){
    this.filterSelect().select(index);

    return this;
}*/


    public  enterToAccountToSeeMoreDetails() {
        this. enterToAccount().click();
        return this;

    }

    public clickLinkAccountOverview() {
        this.linkAccountOverview().click();
        return this;
    }

    /*public filterByTextTypeOfAccount(option: string){
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
    }*/
    
}

    


export default new MainParabankPageAccountOverview() 

  