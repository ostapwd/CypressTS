import basePageTSPractice from "./basePageTSPractice";
import { ProductPageTSPractice } from "./productPageTSPractice";


export class LoginPageTSPractice extends basePageTSPractice {

    private usernameInput() { return cy.get("#user-name"); }
    private passwordInput() { return cy.get("#password"); }
    private loginButton() { return cy.get("input[data-test='login-button']"); }
    public  urlLoginPage() { return cy.url(); }
    public  logoApp() {return cy.get(".login_logo");}
    public  errorMessageNegativeLoginPassword() {return cy.xpath("//*[@data-test='error']");}
    public  errorMessageLockedOutUser() {return cy.xpath("//*[@data-test='error']");}
    

    public loginToTheApp(user) {
        this.usernameInput().type(user.username);
        this.waitForSeconds(1);
        this.passwordInput().type(user.password);
        this.waitForSeconds(1);
        this.loginButton().click(); 
            return new ProductPageTSPractice()
    }

    public open() {
        super.goto('https://www.saucedemo.com/');
        this.waitForSeconds(1)
            return this;
    }

    public verifyUrlLoginPage(){
        this.urlLoginPage().should('eq', 'https://www.saucedemo.com/')
            return this
    }

    public verifyLogoApp(){
        this.logoApp().should('be.visible')
            return this
    }

    public verifyUsernameInput(){
        this.usernameInput().should('be.visible');
        return this
    }

    public verifyPlaceholderUsernameInput(){
        this.usernameInput().should('be.visible').invoke('attr', 'placeholder').should('contain', 'Username');
        return this
    }

    public verifyPasswordInput(){
        this.passwordInput().should('be.visible');
        return this
    }

    public verifyPlaceholderPasswordInput(){
        this.passwordInput().should('be.visible').invoke('attr', 'placeholder').should('contain', 'Password');
        return this
    }

    public verifyLoginButton(){
        this.loginButton().should('be.visible').invoke('attr', 'value').should('contain', 'Login');
        return this
    }

    public verifyColorLoginButton(){
        this.loginButton().should('have.css', 'background-color', 'rgb(226, 35, 26)');
        return this
    }

    public verifyErrorMessageNegativeLoginPassword(){
        this.errorMessageNegativeLoginPassword().should('be.visible').then((element) => {
            expect(element.text()).to.be.equal('Epic sadface: Username and password do not match any user in this service')
        });
        this.errorMessageNegativeLoginPassword().contains('Epic sadface: Username and password do not match any user in this service');
        return this
    }

    public verifyErrorMessageLockedOutUser(){
        this.errorMessageLockedOutUser().should('be.visible').then((element) => {
            expect(element.text()).to.be.equal('Epic sadface: Sorry, this user has been locked out.')
        });
        return this
    }
}