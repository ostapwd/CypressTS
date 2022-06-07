import {ProductsPage} from "./sauceDemoProductsPage"
import {BasePage} from "./basePage"


export class  SauceDemoLoginPage extends BasePage{
    private login_username(){ return cy.get('#user-name') }
    private login_password(){ return cy.get('#password') }
    private submit(){ return cy.get('#login-button') }
    
    public fillRegistrationForm(users){
        this.login_username().type(users.username)
        this.login_password().type(users.password)
        this.submit().click()
        return new ProductsPage()
    }
    public open() {
        super.goto("https://www.saucedemo.com/");

        return this;
    }
}






















