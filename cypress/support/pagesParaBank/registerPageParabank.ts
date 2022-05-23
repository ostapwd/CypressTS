import BasePageParabank from './basePageParabank';

export default class RegisterPageParabank extends BasePageParabank{
    public registerButton() {return cy.get( "input.button[value='Register']")};
    public registerLabel() {return cy.get( "#rightPanel h1.title")};
    public successLabel() {return cy.get( "#rightPanel p")};

    public firsftNameInput() {return cy.get( "input[id*='.firstName']")};
    public firstsNameInput() {return cy.get( "input[id*='.firstName']")};

    public registerToTheApp(user){
        super.firstNameInput().should('be.visible').clear().type(user.firstName);
        super.lastNameInput().should('be.visible').clear().type(user.lastName);
        super.addressStreetInput().should('be.visible').clear().type(user.addressStreet);
        super.addressCityInput().should('be.visible').clear().type(user.addressCity);
        super.addressStateInput().should('be.visible').clear().type(user.addressState);
        super.addressZipCodeInput().should('be.visible').clear().type(user.addressZipCode);
        super.phoneNumberInput().should('be.visible').clear().type(user.phoneNumber);
        super.ssnInput().should('be.visible').clear().type(user.ssn);
        super.usernameRegisterInput().should('be.visible').clear().type(user.userName);
        super.passwordRegisterInput().should('be.visible').clear().type(user.password);
        super.repeatedPasswordInput().should('be.visible').clear().type(user.repeatedPassword);
        this.registerButton().should('be.visible').should('have.value', 'Register').click()
        this.waitForSeconds(3)
            return this
    }

    public registerLabelVerify(){
        this.registerLabel().then((element) => {
            expect(element.text()).to.be.contains('Signing up is easy!')
        })
        super.waitForSeconds(3)
        return this
    }

    public confirmSuccessRegistration(){
        this.registerLabel().then((element) => {
            expect(element.text()).to.be.contains('Welcome')
        })
        this.successLabel().then((element) => {
            expect(element.text()).to.be.contains('Your account was created successfully. You are now logged in.')
        })
        super.waitForSeconds(3)
        return this
    }
}