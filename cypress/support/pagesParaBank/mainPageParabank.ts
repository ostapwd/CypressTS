import BasePageParabank from "./basePageParabank"
import { ContactPageParabank } from "./contactPageParabank"
import { RegisterPageParabank } from "./registerPageParabank"

export class MainPageParabank extends BasePageParabank {
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
    public pageLabel() { return cy.get("#rightPanel"); }
    public servicesPageLabel() { return cy.xpath('//*[@id="rightPanel"]/span[1]') }
    public registerUserLink() { return cy.get("a[href*='register.htm']"); }
    public logOutrUserLink() { return cy.get("a[href*='logout.htm']"); }
    
   
   
    public openApi(){
        super.goto(Cypress.env("UI_HOST_Parabank"))
        super.waitForSeconds(1)
            return this
    }

    public getLeftMenu(){
       return this.leftMenu()
    }

    public getAboutUsLink(){
       return this.aboutUsLink()
    }

    public clickOpenAboutUsPage(){
        return this.getAboutUsLink().click()
    }

    public getPageLabel(){
        return this.pageLabel()
    }

    public getServicesLink(){
        return this.servicesLink()
    }

    public clickOpenServicesPage(){
       return this.getServicesLink().click()
    }

    public getServicesPageLabel(){
        return this.servicesPageLabel()
    }

    public getProductsLink(){
       return this.productsLink()
    }

    public clickOpenProductsPage(){
        return this.getProductsLink().click()
    }

    public getLocationsLink(){
        return this.locationsLink()
    }

    public clickOpenLocationsPage(){
       return this.getLocationsLink().click()
    }

    public getAdminPageLink(){
       return this.adminPageLink()
    }

    public clickOpenAdminPage(){
       return this.getAdminPageLink().click()
    }

    public getRightButtonMenu(){
       return this.rightButtonMenu()
    }

    public getHomeButton(){
       return this.homeButton()
    }

    public clickHomeButton(){
        return this.getHomeButton().click()
    }

    public getAboutUsButton(){
       return this.aboutUsButton()
    }

    public clickButtonAboutUsPage(){
        return this.getAboutUsButton().click()
    }

    public getContactButton(){
        return this.contactButton()
    }

    public clickButtonContactPage(){
        this.getContactButton().click()
        return new ContactPageParabank()
    }

    public getRegisterLink(){
        return this.registerUserLink()
    }

    public openRegisterForm(){
        this.registerUserLink().click()
            return new RegisterPageParabank()
    }
}