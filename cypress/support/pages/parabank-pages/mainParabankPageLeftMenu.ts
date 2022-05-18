export class MainParabankPageLeftMenu  {
    private leftMenuSolutions() { return cy.contains('#headerPanel ul.leftmenu li[class="Solutions"]','Solutions'); }
    private leftMenuAboutUs() { return cy.contains('#headerPanel ul.leftmenu li > a','About Us'); }
    private leftMenuServices() { return cy.contains('#headerPanel ul.leftmenu li > a','Services'); }
    private leftMenuProducts() { return  cy.contains('#headerPanel ul.leftmenu li > a','Products'); }
    private leftMenuLocations() { return  cy.contains('#headerPanel ul.leftmenu li > a','Locations'); }
    private leftMenuAdminPage() { return  cy.contains('#headerPanel ul.leftmenu li > a','Admin Page'); }
    private locationUrl() { return cy.url().should('eq', 'href="http://www.parasoft.com/jsp/pr/contacts.jsp'); }
    private productUrl() { return cy.url().should('eq', 'href="http://www.parasoft.com/jsp/pr/contacts.jsp'); }
    private aboutUsUrl() { return cy.url().should('eq','https://parabank.parasoft.com/parabank/about.htm'); }
    private menuServicesUrl() { return cy.url().should('eq','https://parabank.parasoft.com/parabank/services.htm'); }
    private menuAdminUrl() { return cy.url().should('eq', 'https://parabank.parasoft.com/parabank/admin.htm' ); }
    private solutionsUrl() { return cy.url().should('eq', 'https://parabank.parasoft.com/parabank/solutions.htm' ); }

    public leftMenuSolutionsElementCheckingVrongCssProperty() {
        this.leftMenuSolutions()
        .should('have.css', 'background')
        .and('include', 'rgb(255, 255, 255) url("https://parabank.parasoft.com/parabank/images/bullet-hover.gif")')
        return this
    };
    
    public leftMenuSolutionsElementCheckingCssProperty() {
        this.leftMenuSolutions()
        .should('have.css', 'background')
        .and('include', 'rgb(255, 255, 255) url("https://parabank.parasoft.com/parabank/images/bullet-normal.gif")')
        return this
    };

    public leftMenuAboutUsElementCheckingCssProperty() {
        this.leftMenuAboutUs()
        .should('have.css', 'background')
        .and('include', 'rgb(255, 255, 255) url("https://parabank.parasoft.com/parabank/images/bullet-normal.gif")')
        return this
    };

    public leftMenuServicesElementCheckingCssProperty() {
        this.leftMenuServices()
        .should('have.css', 'background')
        .and('include', 'rgb(255, 255, 255) url("https://parabank.parasoft.com/parabank/images/bullet-normal.gif")')
        return this
    };

    public leftMenuProductsElementCheckingCssProperty() {
        this.leftMenuProducts()
        .should('have.css', 'background')
        .and('include', 'rgb(255, 255, 255) url("https://parabank.parasoft.com/parabank/images/bullet-normal.gif")')
        return this
    };

    public leftMenuLocationsElementCheckingCssProperty() {
        this.leftMenuLocations()
        .should('have.css', 'background')
        .and('include', 'rgb(255, 255, 255) url("https://parabank.parasoft.com/parabank/images/bullet-normal.gif")')
        return this
    };

    public leftMenuAdminsElementCheckingCssProperty() {
        this.leftMenuAdminPage()
        .should('have.css', 'background')
        .and('include', 'rgb(255, 255, 255) url("https://parabank.parasoft.com/parabank/images/bullet-normal.gif")')
        return this
    };


    public leftMenuElementSolutionGoToAnotherPageClick() {
        this.leftMenuSolutions().click();
        this.solutionsUrl();
        cy.location().then((loc) => {
        console.log(loc)})
        //cy.url().should('eq', 'https://parabank.parasoft.com/parabank/about.htm' );
        return this
    };

    public leftMenuEboutUsGoToAnotherPageClick() {
        this.leftMenuAboutUs().click();
        this.aboutUsUrl();
        return this
    };

    public leftMenuServicesGoToAnotherPageClick() {
            this.leftMenuServices().click();
            //this.menuServicesUrl();
            cy.url().should('eq', 'https://parabank.parasoft.com/parabank/services.htm;jsessionid=21F6CF6116621DA7310ABE0301EBDB85')
        return this
    };

    public leftMenuAdminGoToAnotherPageClick() {
            this.leftMenuAdminPage().click();
            this.menuAdminUrl()
                return this;    
        };
        
        public leftMenuProductsGoToAnotherPageClick() {
            this.leftMenuProducts().click({force: true})
            this.productUrl()
                return this;    
        };

        public leftMenuLocationsGoToAnotherPageClick() {
            this.leftMenuLocations().click()
            this.locationUrl()
                return this;    
        };

        public open() {
            cy.visit("https://parabank.parasoft.com/parabank/index.htm");
            return this;
        };

}

export default new MainParabankPageLeftMenu()