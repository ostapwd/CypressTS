import basePageTSPractice from "./basePageTSPractice";
import { ProductPageTSPractice } from "./productPageTSPractice";


export class LoginPageTSPractice extends basePageTSPractice {

    private usernameInput() { return cy.get("#user-name"); }
    private passwordInput() { return cy.get("#password"); }
    private loginButton() { return cy.get("#login-button"); }
    public  urlLoginPage() { return cy.url(); }
    public  logoApp() {return cy.get(".login_logo");}

    public loginToTheApp(user) {
        this.usernameInput().type(user.username);
        this.passwordInput().type(user.password);
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
}