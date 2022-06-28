import { AccountServicesPageParabank } from "./accountServicesPageParabank";
import BasePageParabank from "./basePageParabank"

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
    public servicesPageLabel() { return cy.xpath('//*[@id="rightPanel"]/span[1]') }
    public registerUserLink() { return cy.get("a[href*='register.htm']"); }
    public usernameInput() { return cy.get(".input[name='username']"); }
    public passwordInput() { return cy.get(".input[name='password']"); }
    public loginButton() { return cy.get(".button[value='Log In']"); }
    public forgotLoginLink() { return cy.get("a[href*='lookup.htm']"); }
   
    public openApp(){
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

    public clickOnAboutUsLink(){
       this.getAboutUsLink().click()
            return this
    }

    public getServicesLink(){
        return this.servicesLink()
    }

    public clickOnServicesLink(){
        this.getServicesLink().click()
            return this
    }

    public getServicesPageLabel(){
        return this.servicesPageLabel()
    }

    public getProductsLink(){
       return this.productsLink()
    }

    public clickOnProductsLink(){
        this.getProductsLink().click()
            return this
    }

    public getLocationsLink(){
        return this.locationsLink()
    }

    public clickOnLocationsLink(){
        this.getLocationsLink().click()
            return this
    }

    public getAdminPageLink(){
       return this.adminPageLink()
    }

    public clickOnAdminPageLink(){
        this.getAdminPageLink().click()
            return this
    }

    public getRightButtonMenu(){
       return this.rightButtonMenu()
    }

    public getHomeButton(){
       return this.homeButton()
    }

    public clickOnHomeButton(){
        this.getHomeButton().click()
            return this
    }

    public getAboutUsButton(){
       return this.aboutUsButton()
    }

    public clickOnButtonAboutUs(){
        this.getAboutUsButton().click()
            return this
    }

    public getContactButton(){
        return this.contactButton()
    }

    public clickOnButtonContact(){
       return this.getContactButton().click()
    }

    public getUserNameInput(){
        return this.usernameInput()
    }

    public getPasswordInput(){
        return this.passwordInput()
    }

    public getRegisterLink(){
        return this.registerUserLink()
    }

    public openRegisterForm(){
       return this.registerUserLink().click()
    }

    public loginToTheApp(user){
        this.usernameInput().clear().type(user.userName)
        this.passwordInput().clear().type(user.password)
        return this
    }
    
    public getLoginButton(){
       return this.loginButton()
    }

    public clickLoginButton(){
        this.getLoginButton().click()
        return new AccountServicesPageParabank()
    }

    public getForgotLoginUserLink(){
       return this.forgotLoginLink()
    }

    public clickOnForgotLogin(){
       return this.forgotLoginLink().click()
    }
}