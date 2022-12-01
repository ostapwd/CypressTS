
export class RegisterParabankJS {
    get registerButton() {return cy.contains('Register')};

    get firstName() { return cy.get("[name='customer.firstName']") };
    get lastName() { return cy.get('[name="customer.lastName"]') };
    get castomerStreet() { return cy.get('[name="customer.address.street"]') }
    get castomerCity() { return cy.get('[name="customer.address.city"]') }
    get castomerState() { return cy.get('[name="customer.address.state"]') }
    get castomerZip() { return cy.get('[name="customer.address.zipCode"]') }
    get castomerPhone() { return cy.get('[name="customer.phoneNumber"]') }
    get castomerSSN() { return cy.get('[name="customer.ssn"]') }
    get userName() { return cy.get('[name="customer.username"]') }
    get userPassword() { return cy.get('[name="customer.password"]') }
    get repeatedPassword() { return cy.get('[name="repeatedPassword"]') }
    get registerButton() { return cy.get('[value="Register"]') }
    get usernameInput() { return cy.get("#user-name") }
    get passwordInput() { return cy.get("#password") }
    get loginButton() { return cy.get("#login-button") }

    registerToApp(userCreds) {
        this.firstName().type(userCreds)
        this.lastName().type(userCreds)
        this.castomerStreet().type(userCreds)
        this.castomerCity().type(userCreds)
        this.castomerState().type(userCreds)
        this.castomerZip().type(userCreds)
        this.castomerPhone().type(userCreds)
        this.castomerSSN().type(userCreds)
        this.userName().type(userCreds)
        this.userPassword().type(userCreds)
        this.repeatedPassword().type(userCreds)
        this.registerButton().click()
        
    }

    open(){
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        return this;
      
    }
    clickRegister(){
        this.registerButton().click();
        return this;
    }
}
