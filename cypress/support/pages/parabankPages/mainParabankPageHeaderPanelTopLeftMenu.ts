

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
    private solutionsUrl() { return cy.url().should('include', 'solutions.htm'); }
    private cursorPointer() { return cy.get('a').should('have.css', 'cursor').and('include', 'pointer'); }


    public viewAllItemsWithTheCursorPointer() {
        this.cursorPointer()
        return this;
    };

    public leftMenuSolutionsElementCheckingWrongCssProperty() {
        return this.leftMenuSolutions()
    };

    public leftMenuSolutionsElementCheckingCssProperty() {
        return this.leftMenuSolutions()
    };

    public leftMenuAboutUsElementCheckingCssProperty() {
        return this.leftMenuAboutUs()
    };

    public leftMenuServicesElementCheckingCssProperty() {
        return this.leftMenuServices()    
    };

    public leftMenuProductsElementCheckingCssProperty() {
        return this.leftMenuProducts()
    };

    public leftMenuLocationsElementCheckingCssProperty() {
        return this.leftMenuLocations()
            
    };

    public leftMenuAdminsElementCheckingCssProperty() {
        return this.leftMenuAdminPage()
            
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