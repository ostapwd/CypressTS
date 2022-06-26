import usersParabank from "../../data/ParaBank/usersParabank";
import BasePageParabank from "./basePageParabank"

export class ContactPageParabank extends BasePageParabank{
    private contactForm() { return cy.get('#contactForm'); }
    private buttonContactForm() { return cy.get( ".button[value='Send to Customer Care']"); }
    private userNameContactForm() { return cy.get("#name") };
    private emailContactForm() { return cy.get("#email"); }
    private phoneContactForm() { return cy.get("#phone"); }
    private messageContactForm() { return cy.get("#message") };
   
    public getContactForm(){
        return this.contactForm();
    }

    public getButtonContactForm(){
        return this.buttonContactForm();
    }

    public sendContactForm(){
        return this.getButtonContactForm().click();
    }

    public fillFieldsTheContactForm(){
        this.userNameContactForm().clear().type(usersParabank.newUser.userName)
        this.emailContactForm().clear().type(usersParabank.newUser.email)
        this.phoneContactForm().clear().type(usersParabank.newUser.phoneNumber)
        this.messageContactForm().clear().type(usersParabank.newUser.message)
            return this
    }
  
}