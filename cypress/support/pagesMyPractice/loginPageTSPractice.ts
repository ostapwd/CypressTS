import basePageTSPractice from "./basePageTSPractice";
import { ProductPageTSPractice } from "./productPageTSPractice";


export class LoginPageTSPractice extends basePageTSPractice {

    private usernameInput() { return cy.get("#user-name"); }
    private passwordInput() { return cy.get("#password"); }
    private loginButton() { return cy.get("input[data-test='login-button']"); }
    public  urlLoginPage() { return cy.url(); }
    public  logoApp() {return cy.get(".login_logo");}
    public  errorMessageLoginToTheApp() {return cy.xpath("//*[@data-test='error']");}
    public  errorMessageColor() {return cy.get(".error-message-container.error");}
    
    public loginToTheApp(user) {
        this.usernameInput().clear().type(user.username);
        this.waitForSeconds(1);
        this.passwordInput().clear().type(user.password);
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

    public emptyPasswordToTheApp(user) {
        this.usernameInput().clear().type(user.username);
        this.waitForSeconds(1);
        this.passwordInput().clear()
        this.waitForSeconds(1);
        this.loginButton().click(); 
            return this
    }

    public emptyUsernameToTheApp(user) {
        this.usernameInput().clear();
        this.waitForSeconds(1);
        this.passwordInput().clear().type(user.password);
        this.waitForSeconds(1);
        this.loginButton().click(); 
            return this
    }

    public emptyFieldsToTheApp() {
        this.usernameInput().clear();
        this.waitForSeconds(1);
        this.passwordInput().clear();
        this.waitForSeconds(1);
        this.loginButton().click(); 
            return this
    }

    public verifyErrorMessage(error){
        this.errorMessageLoginToTheApp().should('be.visible').then((element) => {
            expect(element.text()).to.be.equal(error.message);
        this.errorMessageColor().should('have.css', 'background-color', 'rgb(226, 35, 26)')
        });
            return this
    }
}