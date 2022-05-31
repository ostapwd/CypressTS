class LoginPageTs{
    private userNameInput(){return cy.get('#user-name')}
    private passwordInput(){return cy.get('#password')}
    private buttonCkick(){return cy.get('#login-button')}
    private addProduct(){return cy.get('#add-to-cart-sauce-labs-backpack')}
    private goToCart(){return cy.get('.shopping_cart_link')}
    public checkOut(){return cy.get('#checkout')}

 private loginUser(user){
     this.userNameInput().type(user.username)
     this.passwordInput().type(user.password)
     this.buttonCkick().click()
     return this
}
public open(){
    cy.visit('https://www.saucedemo.com/');
    return this;
}  
}
export default new LoginPageTs()