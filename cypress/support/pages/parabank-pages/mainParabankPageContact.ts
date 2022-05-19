

export class MainParabankPageContact  {
  
    private buttonContactleftMenu() { return cy.xpath('//li[@class="contact"]');}
    private contactUserNameInput() { return cy.get('table[class="form2"] input[id="name"]'); }
    private contactUserEmailInput() { return cy.get('table[class="form2"] input[name="email"]'); }
    private contactUserPhoneInput() { return cy.get('table[class="form2"] input[name="phone"]'); }
    private contactUserMessageInput() { return cy.get('table[class="form2"] textarea[name="message"]'); }
    private buttonSendToCustomerCare() { return cy.xpath('//input[@value="Send to Customer Care"]'); }

    public customerCare(user) {     
        this.buttonContactleftMenu().click();
        this.contactUserNameInput().type(user.name);
        this.contactUserEmailInput().type(user.email);
        this.contactUserPhoneInput().type(user.phone);
        this.contactUserMessageInput().type(user.message);
        this.buttonSendToCustomerCare().click();
        return this;
    } ;


         
}

export default new MainParabankPageContact()