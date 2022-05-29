
class LoginPage{
    get userNameInput(){return cy.get('#user-name')}
    get passwordInput(){return cy.get('#password')}
    get buttonCkick(){return cy.get('#login-button')}
    get addToCard(){return cy.get('#add-to-cart-sauce-labs-backpack')}
    get shoppingCard(){return cy.get('.shopping_cart_link')}
    get checkOut(){return cy.get('#checkout')}
    
    
 loginUser(user){
     this.userNameInput.type(user.username)
     this.passwordInput.type(user.password)
     this.buttonCkick.click()
     return this
}
open(){
    cy.visit('https://www.saucedemo.com/');
    return this;
}  
}
export default new LoginPage()
