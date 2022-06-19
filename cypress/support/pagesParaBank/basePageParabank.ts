export class BasePageParabank {
    public firstNameInput() {return cy.get("input[id*='firstName']")};
    public lastNameInput() {return cy.get("input[id*='lastName']")};
    public addressStreetInput() {return cy.get("input[id*='address.street']")};
    public addressCityInput() {return cy.get("input[id*='address.city']")};
    public addressStateInput() {return cy.get("input[id*='address.state']")};
    public addressZipCodeInput() {return cy.get("input[id*='address.zipCode']")};
    public phoneNumberInput() {return cy.get("input[id*='phoneNumber']")};
    public ssnInput() {return cy.get("input[id*='ssn']")};
    public usernameRegisterInput() { return cy.get(".input[id='customer.username']"); }
    public passwordRegisterInput() { return cy.get(".input[id='customer.password']"); }
    public repeatedPasswordInput() {return cy.get("#repeatedPassword")};
    public leftMenu() { return cy.get(".leftmenu"); }
    public aboutUsLink() { return cy.get(".leftmenu a[href*='about.htm']"); }
    public servicesLink() { return cy.get(".leftmenu a[href*='services.htm']"); }
    public productsLink() { return cy.get(".leftmenu a[href*='products']"); }
    public locationsLink() { return cy.get(".leftmenu a[href*='contacts']"); }
    public adminPageLink() { return cy.get(".leftmenu a[href*='admin']"); }
    public rightButtonMenu() { return cy.get(".button"); }
    public homeButton() { return cy.get(".home a[href*='/parabank/index.htm']"); }
    public aboutUsButton() { return cy.get(".aboutus a[href*='about.htm']"); }
    public contactButton() { return cy.get(".contact a[href*='contact.htm']"); }
   
    protected waitForSeconds(secondsToWait :number) {
        cy.wait(secondsToWait * 1000);  
            return this
    }

    protected goto(url) {
        cy.visit(url, {failOnStatusCode: false});
         return this
    }

    protected urlVerify(url) {
        cy.url().should('contain',url);
         return this;
    }

    public openApi(){
        this.goto(Cypress.env("UI_HOST_Parabank"))
        this.waitForSeconds(1)
            return this
    }

    public getLeftMenu(){
       return this.leftMenu()
    }

    public getRightButtonMenu(){
       return this.rightButtonMenu()
    }

    public returnAccountsServicesPage(){
        this.homeButton().should('be.visible').click()
        return this
    }

    public openAboutUsPage(){
        this.aboutUsButton().should('be.visible').click()
        return new AboutUsPageParabank()
    }

    public openContactPage(){
        this.contactButton().should('contain', 'contact').click()
        return new ContactPageParabank()
    }

    public openAboutUsLinkMenu(){
        this.aboutUsLink().should('contain', 'About Us').click()
        return new AboutUsPageParabank()
    }

    public openServicesLinkMenu(){
        this.servicesLink().should('contain', 'Services').click()
        return this
    }

    public openProductsLinkMenu(){
        this.productsLink().should('contain', 'Products').click()
        return this
    }

    public openLocationsLinkMenu(){
        this.locationsLink().should('contain', 'Locations')
        return this
    }

    public openAdminPageLinkMenu(){
        this.adminPageLink().should('contain', 'Admin Page').click()
        return this
    }

}