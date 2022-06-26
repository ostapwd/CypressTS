export default abstract class BasePageParabank {
   
    public firstNameInput() {return cy.get("input[id*='firstName']")};
    public lastNameInput() {return cy.get("input[id*='lastName']")};
    public addressStreetInput() {return cy.get("input[id*='address.street']")};
    public addressCityInput() {return cy.get("input[id*='address.city']")};
    public addressStateInput() {return cy.get("input[id*='address.state']")};
    public addressZipCodeInput() {return cy.get("input[id*='address.zipCode']")};
    public phoneNumberInput() {return cy.get("input[id*='phoneNumber']")};
    public ssnInput() {return cy.get("input[id*='ssn']")};
    public usernameRegisterInput() { return cy.get(".input[id='customer.username']"); }
    public passwordRegisterInput() { return cy.get(".input[id='customer.password']"); }
    public repeatedPasswordInput() {return cy.get("#repeatedPassword")};
   
    public waitForSeconds(secondsToWait :number) {
        cy.wait(secondsToWait * 1000);  
            return this
    }

    protected goto(url) {
        cy.visit(url, {failOnStatusCode: false});
         return this
    }

    public urlVerify(url) {
        cy.url().should('contain',url.url);
         return this;
    }
}