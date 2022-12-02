class RegisterParabank {
    get registerButton() { return cy.contains('Register') };
    get firstName() { return cy.get("[name='customer.firstName']") }
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
    get registerButton() { return cy.xpath('//a[text()="Register"]') }
    get usernameInput() { return cy.get("#user-name") }
    get passwordInput() { return cy.get("#password") }
    get loginButton() { return cy.get("#login-button") }
    get registerButton2() {return cy.get('#rightPanel .button')}

    registerToTheApp(creds) {
        this.firstName.type(creds)
        this.lastName.type(creds)
        this.castomerStreet.type(creds)
        this.castomerCity.type(creds)
        this.castomerState.type(creds)
        this.castomerZip.type(creds)
        this.castomerPhone.type(creds)
        this.castomerSSN.type(creds)
        this.userName.type(creds)
        this.userPassword.type(creds)
        this.repeatedPassword.type(creds)
        this.registerButton2.click()
    }
    open(){
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        return this;
    }
    clickRegisterButton(){
        this.registerButton.click();
        return this;
    }

}

export default new RegisterParabank()