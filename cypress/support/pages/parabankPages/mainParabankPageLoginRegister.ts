export { MainParabankPageContact } from "./mainParabankPageHeaderPanelContact";
import BasePageParabank from "./BasePageParabank";


export class MainParabankPageLoginRegister extends BasePageParabank {

    private usernameInput() { return cy.xpath('//input[@name="username"]'); }
    private passwordInput() { return cy.get("input[name='password']"); }
    private loginButton() { return cy.get("input[class='button']"); }
    private clickRegister() { return cy.contains('Register'); }
    private checkingSelectedClickRegister() { return cy.get('div[id="rightPanel"] h1'); }
    private fillInputsToRegisterUser() { return cy.get('tbody').find('td'); }
    private checkingIfTheInputsOfRegisterHaveEnoughtInputs() { return cy.get('tbody > tr'); }
    private clickButtonRegister() { return cy.get('input[class="button"]').contains('Register'); }
    public theTextOnThePageAfterClickCustomerLogin() { return cy.get('div[id="leftPanel"]').contains('Customer Login'); }
    private loginButtonForgot() { return cy.contains('Log In'); }
    private forgotLoginInfo() { return cy.contains('Forgot login info?'); }
    private checkIfItIsCustomerLookup() { return cy.get('h1[class="title"]'); }
    public inputForgotPassword() { return cy.get('tbody').find('td'); }
    private inputForgotPasswordFillAllInputs() { return cy.get('tbody').find('td'); }
    private responseWhenTheAllInputsAreNotFilled() { return cy.get('tbody'); }
    public tableRowInputs() { return cy.get('tbody').first().find('tr'); }
    private usernameInputForgot() { return cy.get("input[name='username']"); }
    private passwordInputForgot() { return cy.get("input[name='password']"); }
    private welcomeForMessageCustomerCareLogin() { return cy.xpath('//div[@id="rightPanel"] [p]'); }

    private customerFirstNameToRegister() { return cy.get('tbody').find('td').find('input[id="customer.firstName"]'); }
    private customerLastNameToRegister() { return cy.get('tbody').find('td').find('input[id="customer.lastName"]'); }
    private customerStreetToRegister() { return cy.get('tbody').find('td').find('input[id="customer.address.street"]'); }
    private customerCityToRegister() { return cy.get('tbody').find('td').find('input[id="customer.address.city"]'); }
    private customerAdressStateToRegister() { return cy.get('tbody').find('td').find('input[id="customer.address.state"]'); }
    private customerZipCodeToRegister() { return cy.get('tbody').find('td').find('input[id="customer.address.zipCode"]'); }
    private customerPhoneNumberToRegister() { return cy.get('tbody').find('td').find('input[id="customer.phoneNumber"]'); }
    private customerSsnToRegister() { return cy.get('tbody').find('td').find('input[id="customer.ssn"]'); }
    private customerUserNameToRegister() { return cy.get('tbody').find('td').find('input[id="customer.username"]'); }
    private customerPasswordToRegister() { return cy.get('tbody').find('td').find('input[id="customer.password"]'); }
    private customerRepeatedPasswordToRegister() { return cy.get('tbody').find('td').find('input[id="customer.password"]'); }

    public clickOnTheButtonToRegisterToTheApp() {
        return this.clickRegister().click();
    }

    public confirmationThatWeAreOnSelectedRegisterPage() {
        return this.checkingSelectedClickRegister()
    }

    public registerToTheApp(user) {
        this.customerFirstNameToRegister().type(user.firstName)
        this.customerLastNameToRegister().type(user.lastName)
        this.customerStreetToRegister().type(user.addressStreet)
        this.customerCityToRegister().type(user.addressCity)
        this.customerAdressStateToRegister().type(user.addressState)
        this.customerZipCodeToRegister().type(user.addressZipCode)
        this.customerPhoneNumberToRegister().type(user.phoneNumber)
        this.customerSsnToRegister().type(user.ssn)
        this.customerUserNameToRegister().type(user.username)
        this.customerPasswordToRegister().type(user.password)
        this.customerRepeatedPasswordToRegister().type(user.repeatedPassword)

        return this;
    };

    public checkingIfThereAreEnoughtInputsOfRegistration() {
        return this.checkingIfTheInputsOfRegisterHaveEnoughtInputs()
    };

    public clickOnTheButtonRegister() {
        this.clickButtonRegister().click();
        return this;
    };

    public getWelcomeForCustomerCareHaveLoginedMessage() {
        return this.welcomeForMessageCustomerCareLogin();
    };

    public loginToTheApp(user) {
        this.usernameInput().type(user.username);
        this.passwordInput().type(user.password);
        this.loginButton().click();
    };

    public clickOnForgotLoginInformation() {
        this.forgotLoginInfo().click()
        return this;
    };

    public verifyingIfItIsCustomerLookup() {
        return this.checkIfItIsCustomerLookup();
    }

    public forgotSomeLoginInformation(user) {
        this.inputForgotPassword().then(tableRow => {
            cy.wrap(tableRow).find('input[name="firstName"]').type(user.firstName)
            cy.wrap(tableRow).find('input[name="lastName"]').type(' ')
            cy.wrap(tableRow).find('input[name="address.street"]').type(' ')
            cy.wrap(tableRow).find('input[name="address.city"]').type(' ')
            cy.wrap(tableRow).find('input[name="address.state"]').type(' ')
            cy.wrap(tableRow).find('input[name="address.zipCode"]').type(' ')
            cy.wrap(tableRow).find('input[name="ssn"]').type(user.ssn)
            cy.wrap(tableRow).find('.button').click()
        })
        return this;
    };

    public forgotFillAllInputs(user) {
        this.inputForgotPasswordFillAllInputs().then(tableRow => {
            cy.wrap(tableRow).find('input[name="firstName"]')
            cy.wrap(tableRow).find('input[name="ssn"]')
            cy.wrap(tableRow).find('.button').click()
        })
        return this;
    };

    public responseIfTheFirstNameInputIsRequired() {
        return this.responseWhenTheAllInputsAreNotFilled()
    };

    public responseIfTheLaststNameInputIsRequired() {
        return this.responseWhenTheAllInputsAreNotFilled()
    };

    public responseIfTheAddressInputIsRequired() {
        return this.responseWhenTheAllInputsAreNotFilled()
    };

    public responseIfTheCityInputIsRequired() {
        return this.responseWhenTheAllInputsAreNotFilled()

    };

    public responseIfTheStateInputIsRequired() {
        return this.responseWhenTheAllInputsAreNotFilled()
    };

    public responseIfTheZipCodeInputIsRequired() {
        return this.responseWhenTheAllInputsAreNotFilled()
    };

    public responseIfTheSocialSecurityNumberInputIsRequired() {
        return this.responseWhenTheAllInputsAreNotFilled()
    };

    public responseIfTheAllInputAreRequired() {
        return this.responseWhenTheAllInputsAreNotFilled()
    };

    public open() {
        super.goto("https://parabank.parasoft.com/parabank/index.htm");
        return this;
    };
}

export default new MainParabankPageLoginRegister()

