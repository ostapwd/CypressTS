


export class MainParabankPageOpenNewAccount  {
  
    private linkOpenNewAccount() { return cy.get('a[href="/parabank/openaccount.htm"]');}
    private menuServicesUrl() { return cy.url().should('include', 'openaccount.htm'); }


    public clickOnTheLinkOpenNewAccount() {     
        this.linkOpenNewAccount().click()
        this.menuServicesUrl().should('contain', 'ATM Services')
        return this;
    };

        
    
}

export default new MainParabankPageOpenNewAccount()




