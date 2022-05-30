import {BasePage} from "./BasePage";


export class RegisterPage extends BasePage{
    private customerFirstName(){return cy.get("input[id = 'customer.firstName']")}
    private customerLastName(){return cy.get("input[id = 'customer.lastName']")}
    private customerAddress(){return cy.get("input[id = 'customer.address.street']")}
    private customerCity(){return cy.get("input[id = 'customer.address.city']")}
    private customerState(){return cy.get("input[id = 'customer.address.state']")}
    private customerZipCode(){return cy.get("input[id = 'customer.address.zipCode']")}
    private customerPhone(){return cy.get("input[id = 'customer.phoneNumber']")}
    private customerSSN(){return cy.get("input[id = 'customer.ssn']")}
    private customerUsername(){return cy.get("input[id = 'customer.username']")}
    private customerPassword(){return cy.get("input[id = 'customer.password']")}
    private customerConfirm(){return cy.get("input[id = 'repeatedPassword']")}
    private registerBTN() {return cy.get ('#customerForm > table > tbody > tr:nth-child(13) > td:nth-child(2) > input')}

    public typeRegisterInfo(user){
        this.customerFirstName().type(user.firstName);
        this.customerLastName().type(user.lastName)
        this.customerAddress().type(user.addressStreet)
        this.customerCity().type(user.addressCity)
        this.customerState().type(user.addressState)
        this.customerZipCode().type(user.addressZipCode)
        this.customerPhone().type(user.phone)
        this.customerSSN().type(user.ssn)
        this.customerUsername().type(user.username)
        this.customerPassword().type(user.password)
        this.customerConfirm().type(user.confirmPassword)
        return this
    }

    public clickRegister() {
        this.registerBTN().click()
        return this
    }
}