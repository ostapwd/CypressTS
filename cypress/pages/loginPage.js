import productsPage from './ProductsPage'

class loginPage {
get inputUsername(){ return cy.get('#user-name') }
get inputPassword(){ return cy.get('#password') }
get loginButton(){ return cy.get('#login-button') }

loginToTheApp(user){
    this.inputUsername.type(user.username)
    this.inputPassword.type(user.password)
    cy.wait(2000)
    this.loginButton.click()
    return productsPage
    }

open(){
    cy.visit('https://www.saucedemo.com/')
    return this
    }
}

export default new loginPage()