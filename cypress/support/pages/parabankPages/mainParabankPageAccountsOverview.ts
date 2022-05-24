
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
    private responseOfThePageAccountActivity() { return cy.xpath('//p[@ng-if="transactions.length <= 0"]')}
   

    public responseOfThePageAboutAccountActivity() {
        this.responseOfThePageAccountActivity().should('contain', 'No transactions found.');
        return this;
    }

   public checkingThatTheFillsTransactionsTableAreNotEmpty(text) {
        this.transactionsTable().then(tableRow => {
            cy.wrap(tableRow).find('[class="ng-binding"]').type(text)
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
            expect($lis, '2 items').to.have.length(7)
      })
            return this;
    };

    public  enterToAccountToSeeMoreDetails() {
        this. enterToAccount().click();
        return this;
    }

    public clickLinkAccountOverview() {
        this.linkAccountOverview().click();
        return this;
    }
    
}

    


export default new MainParabankPageAccountOverview() 

  