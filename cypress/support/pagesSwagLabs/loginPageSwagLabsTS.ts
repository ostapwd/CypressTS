import basePageSwagLabsTS from "./basePageSwagLabsTS";
import { ProductPageSwagLabsTS } from "./productPageSwagLabsTS";

export class LoginPageSwagLabsTS extends basePageSwagLabsTS {
    private usernameInput() { return cy.get("#user-name"); }
    private passwordInput() { return cy.get("#password"); }
    private loginButton() { return cy.get("input[data-test='login-button']"); }
    public  urlPage() { return cy.url(); }
    public  logoApp() {return cy.get(".login_logo");}
    public  errorMessageLoginToTheApp() {return cy.xpath("//*[@data-test='error']");}
    public  errorMessageColor() {return cy.get(".error-message-container.error");}
    
    public loginToTheApp(user) {
        this.usernameInput().clear().type(user.username);
        this.waitForSeconds(1);
        this.passwordInput().clear().type(user.password);
        this.waitForSeconds(1);
        this.loginButton().click(); 
            return new ProductPageSwagLabsTS()
    }

    public open() {
        super.goto('https://www.saucedemo.com/');
        this.waitForSeconds(1)
            return this;
    }

    // public verifyUrlPage(url){
    //     super.urlPage(url.url)
    //         return this
    // }


    public urlPageVerify(link){
        this.urlPage().should('eq', link.url)
            return this
    }

    public logoAppVerify(){
        this.logoApp().should('be.visible')
            return this
    }

    public usernameInputVerify(){
        this.usernameInput().should('be.visible');
            return this
    }

    public placeholderUsernameInputVerify(){
        this.usernameInput().invoke('attr', 'placeholder').should('contain', 'Username');
            return this
    }

    public passwordInputVerify(){
        this.passwordInput().should('be.visible');
            return this
    }

    public placeholderPasswordInputVerify(){
        this.passwordInput().invoke('attr', 'placeholder').should('contain', 'Password');
            return this
    }

    public loginButtonVerify(){
        this.loginButton().invoke('attr', 'value').should('contain', 'Login');
            return this
    }

    public colorLoginButtonVerify(){
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

    public errorMessageVerify(error){
        this.errorMessageLoginToTheApp().should('be.visible').then((element) => {
            expect(element.text()).to.be.equal(error.message);
        this.errorMessageColor().should('have.css', 'background-color', 'rgb(226, 35, 26)')
        });
            return this
    }
}