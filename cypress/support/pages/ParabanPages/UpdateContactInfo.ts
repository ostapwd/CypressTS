import {BasePage} from "./BasePage";
import { MainPage } from "./MainPage";

export class ContactInfo extends MainPage{
    private customerFirstName(){return cy.get("input[id = 'customer.firstName']")}
    private customerLastName(){return cy.get("input[id = 'customer.lastName']")}
    private customerAddress(){return cy.get("input[id = 'customer.address.street']")}
    private customerCity(){return cy.get("input[id = 'customer.address.city']")}
    private customerState(){return cy.get("input[id = 'customer.address.state']")}
    private customerZipCode(){return cy.get("input[id = 'customer.address.zipCode']")}
    private customerPhone(){return cy.get("input[id = 'customer.phoneNumber']")}
    private updateProfile() {return cy.get("input[value='Update Profile']")}


    public typeUpdateInfo(user){
        this.customerFirstName().type(user.firstName);
        this.customerLastName().type(user.lastName)
        this.customerAddress().type(user.addressStreet)
        this.customerCity().type(user.addressCity)
        this.customerState().type(user.addressState)
        this.customerZipCode().type(user.addressZipCode)
        this.customerPhone().type(user.phone)
        this.updateProfile().click()
        return this
    }
}