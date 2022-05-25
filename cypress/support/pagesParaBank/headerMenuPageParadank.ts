import AboutUsPageParabank from './aboutUsPageParabank';
import ContactPageParabank from './contactPageParabank';

export default class HeaderMenuPageParabank{
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
  
   
    public leftMenuVerify(){
        this.leftMenu().find('li').should('have.length', 6);
        return this
    }

    public rightButtonMenuVerify(){
        this.rightButtonMenu().find('li').should('have.length', 3).should('be.visible')
        return this
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