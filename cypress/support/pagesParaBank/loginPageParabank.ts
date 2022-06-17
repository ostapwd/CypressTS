import BasePageParabank from "./basePageParabank";
import ForgotLoginPageParabank from "./forgotLoginPageParabank";
import RegisterPageParabank from './registerPageParabank';
import MainAccountServicesPageParabank from "./mainAccountServicesPageParabank";

export class LoginPageParabank extends BasePageParabank  {
    public logoPageLabel() {return cy.get(".logo")}
    public usernameInput() { return cy.get(".input[name='username']"); }
    public passwordInput() { return cy.get(".input[name='password']"); }
    public loginButton() { return cy.get(".button[value='Log In']"); }
    public forgotLoginLink() { return cy.get("a[href*='lookup.htm']"); }
    public registerUserLink() { return cy.get("a[href*='register.htm']"); }
    public logOutrUserLink() { return cy.get("a[href*='logout.htm']"); }
    

    public open(){
        super.goto(Cypress.env("UI_HOST_Parabank"))
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
        return new MainAccountServicesPageParabank()
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
}
