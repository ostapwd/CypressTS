

export class MainParabankPageLeftMenu {

    private leftMenuSolutions() { return cy.contains('#headerPanel ul.leftmenu li[class="Solutions"]', 'Solutions'); }
    private leftMenuAboutUs() { return cy.contains('#headerPanel ul.leftmenu li > a', 'About Us'); }
    private leftMenuServices() { return cy.contains('#headerPanel ul.leftmenu li > a', 'Services'); }
    private leftMenuProducts() { return cy.contains('#headerPanel ul.leftmenu li > a', 'Products'); }
    private leftMenuLocations() { return cy.contains('#headerPanel ul.leftmenu li > a', 'Locations'); }
    private leftMenuAdminPage() { return cy.contains('#headerPanel ul.leftmenu li > a', 'Admin Page'); }
    private locationUrl() { return cy.url().should('include', 'contacts.jsp'); }
    private productsUrl() { return cy.url().should('include', 'products.jsp'); }
    private aboutUsUrl() { return cy.url().should('include', 'about.htm'); }
    private menuServicesUrl() { return cy.url().should('include', 'services.htm'); }
    private menuAdminUrl() { return cy.url().should('include', 'admin.htm'); }
    private solutionsUrl() { return cy.url().should('include', ' solutions.htm'); }
    private cursorPointer() { return cy.get('a').should('have.css', 'cursor').and('include', 'pointer'); }


    public AllItemsWithTheCursorPointer() {
        this.cursorPointer()
        return this;
    }

    public leftMenuSolutionsElementCheckingWrongCssProperty() {
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
        this.solutionsUrl()
        return this
    };

    public leftMenuEboutUsGoToAnotherPageClick() {
        this.leftMenuAboutUs().click();
        this.aboutUsUrl()
        return this
    };

    public leftMenuServicesGoToAnotherPageClick() {
        this.leftMenuServices().click();
        this.menuServicesUrl()
        return this
    };

    public leftMenuAdminGoToAnotherPageClick() {
        this.leftMenuAdminPage().click();
        this.menuAdminUrl()
        return this;
    };

    public leftMenuProductsGoToAnotherPageClick() {
        this.leftMenuProducts().click({ force: true })
        this.productsUrl()
        return this;
    };

    public leftMenuLocationsGoToAnotherPageClick() {
        this.leftMenuLocations().click()
        this.locationUrl()
        return this;
    };

}

export default new MainParabankPageLeftMenu()