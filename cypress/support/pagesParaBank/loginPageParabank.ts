import AccountServicesPageParabank from "./accountServicesPageParabank";
import BasePageParabank from "./basePageParabank";
import ForgotLoginPageParabank from "./forgotLoginPageParabank";
import RegisterPageParabank from './registerPageParabank';

export class LoginPageParabank extends BasePageParabank  {
    public logoPageLabel() {return cy.get(".logo")}
    public usernameInput() { return cy.get(".input[name='username']"); }
    public passwordInput() { return cy.get(".input[name='password']"); }
    public loginButton() { return cy.get(".button[value='Log In']"); }
    public forgotLoginLink() { return cy.get("a[href*='lookup.htm']"); }
    public registerUserLink() { return cy.get("a[href*='register.htm']"); }
    public logOutrUserLink() { return cy.get("a[href*='logout.htm']"); }
    public firstInput() { return cy.get("a[href='logout.htm']"); }
    public leftMenu() { return cy.get(".leftmenu"); }
    public aboutUsLink() { return cy.get(".leftmenu a[href*='about.htm']"); }
    public servicesLink() { return cy.get(".leftmenu a[href*='services.htm']"); }
    public productsLink() { return cy.get(".leftmenu a[href*='products']"); }
    public locationsLink() { return cy.get(".leftmenu a[href*='contacts']"); }
    public adminPageLink() { return cy.get(".leftmenu a[href*='admin']"); }

    public open(){
        super.goto('https://parabank.parasoft.com/parabank/index.htm')
        this.waitForSeconds(3)
            return this
    }

    public logo(){
        this.logoPageLabel().should('be.visible')
            return this
    }

    public urlPageVerify(link){
        super.urlVerify(link.url)
            return this
    }

    public openRegisterForm(){
        this.registerUserLink().then((element) => {
            expect(element.text()).to.be.contains('Register')
        }).click()
        super.waitForSeconds(3)
        return new RegisterPageParabank()
    }

    public loginToTheApp(user){
        this.usernameInput().clear().type(user.userName)
        this.passwordInput().clear().type(user.password)
        this.loginButton().should('be.visible').click()
        return new AccountServicesPageParabank()
    }
    
    public checkLoginButton(){
        this.loginButton().should('have.value','Log In')
        return this
    }

    public logOutOfTheApp(){
        super.waitForSeconds(3)
        this.logOutrUserLink().should('be.visible').click()
        return new LoginPageParabank()
    }

    public forgotLogin(){
        super.waitForSeconds(3)
        this.forgotLoginLink().then((element) => {
            expect(element.text()).to.be.contains('Forgot login info?')
        }).click()
        return new ForgotLoginPageParabank()
    }

    public leftMenuVerify(){
        this.leftMenu().find('li').should('have.length', 6)
        return this
    }

    public openAboutUsLinkMenu(){
        this.aboutUsLink().should('contain', 'About Us').click()
        return this
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
        this.locationsLink().should('contain', 'Locations').click()
        return this
    }

    public openAdminPageLinkMenu(){
        this.adminPageLink().should('contain', 'Admin Page').click()
        return this
    }
}
