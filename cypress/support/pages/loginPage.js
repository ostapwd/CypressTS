
class LoginPage{
    get userNameInput(){return cy.get('#user-name')}
    get passwordInput(){return cy.get('#password')}
    get buttonCkick(){return cy.get('#login-button')}
 loginUser(username,password){
     this.userNameInput.type(username)
     this.passwordInput.type(password)
     this.buttonCkick.click()
}
open(){
    cy.visit('https://www.saucedemo.com/');
    return this;
}  
}
export default new LoginPage()
