import { AccountServicesPage } from "./accountServicesPage";
import BasePageParabank from "./basePageParabank";

export class RegisterPageParabank extends BasePageParabank{
    public registerButton() {return cy.get( "input.button[value='Register']")};
    public successLabel() {return cy.get( "#rightPanel p")};

    public registerToTheApp(user){
        super.firstNameInput().clear().type(user.firstName);
        super.lastNameInput().clear().type(user.lastName);
        super.addressStreetInput().clear().type(user.addressStreet);
        super.addressCityInput().clear().type(user.addressCity);
        super.addressStateInput().clear().type(user.addressState);
        super.addressZipCodeInput().clear().type(user.addressZipCode);
        super.phoneNumberInput().clear().type(user.phoneNumber);
        super.ssnInput().clear().type(user.ssn);
        super.usernameRegisterInput().clear().type(user.userName);
        super.passwordRegisterInput().clear().type(user.password);
        super.repeatedPasswordInput().clear().type(user.repeatedPassword);
            return this
    }

    public getRegisterButton(){
       return this.registerButton().click()
    }

    public clickRegisterButton(){
        this.registerButton().click()
            return new AccountServicesPage()
    }

}