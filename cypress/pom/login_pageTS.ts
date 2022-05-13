import { ProductsTS } from './products_page';
export class LoginTS{
    private login_username(){ return cy.get('#user-name') }
    private login_password(){ return cy.get('#password') }
    private submit(){ return cy.get('#login-button') }
    
    public loginToTheApp(users){
        this.login_username().type(users.username)
        this.login_password().type(users.password)
        this.submit().click()
        return new ProductsTS()
    }
    public open(){
        cy.visit('https://www.saucedemo.com/')
    }
}