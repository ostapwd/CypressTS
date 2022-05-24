

export class MainParabankPageContact  {
  
    private buttonContactLeftMenu() { return cy.xpath('//li[@class="contact"]');}
    private contactUserNameInput() { return cy.get('table[class="form2"] input[id="name"]'); }
    private contactUserEmailInput() { return cy.get('table[class="form2"] input[name="email"]'); }
    private contactUserPhoneInput() { return cy.get('table[class="form2"] input[name="phone"]'); }
    private contactUserMessageInput() { return cy.get('table[class="form2"] textarea[name="message"]'); }
    private buttonSendToCustomerCare() { return cy.xpath('//input[@value="Send to Customer Care"]'); }
    private thanksForMessageCustomerCare() { return cy.xpath('//div[@id="rightPanel"] [p]'); }
    private responseWhenTheAllInputsAreNotFilledInCustomerCare() { return cy.xpath('//table[@class="form2"]'); }
    private areNotFiledCustomerCareName() { return cy.xpath('//span[@id="name.errors"]'); }
    private areNotFiledCustomerCareEmail() { return cy.xpath('//span[@id="email.errors"]'); }
    private areNotFiledCustomerCarePhone() { return cy.xpath('//span[@id="phone.errors"]'); }
    private areNotFiledCustomerCareMessage() { return cy.xpath('//span[@id="message.errors"]'); }
    private titleOfThePageWhenItIsClicked() { return cy.xpath('//h1[@class="title"]'); }


    public customerCareClick() {     
        this.buttonContactLeftMenu().click();
        this.titleOfThePageWhenItIsClicked()
        .should ('contain', 'Customer Care');
        return this;

    };

    public customerCare(user) {     
        this.buttonContactLeftMenu().click();
        this.contactUserNameInput().type(user.name);
        this.contactUserEmailInput().type(user.email);
        this.contactUserPhoneInput().type(user.phone);
        this.contactUserMessageInput().type(user.message);
        this.buttonSendToCustomerCare().click();
        this.thanksForMessageCustomerCare().should('contain', `Thank you ${user.name}`); 
        return this;
    };

    public forgotInputAllFillsCustomerCare(user) {     
        this.buttonContactLeftMenu().click();
        this.buttonSendToCustomerCare().click();
        return this;
    };

    public responseInTheTableWhenTheAllInputsAreNotFilledInCustomerCare() {
        this.responseWhenTheAllInputsAreNotFilledInCustomerCare()
        this.areNotFiledCustomerCareName().should('contain', 'Name is required.');
        this.areNotFiledCustomerCareEmail().should('contain', 'Email is required.');
        this.areNotFiledCustomerCarePhone().should('contain', 'Phone is required.');
        this.areNotFiledCustomerCareMessage().should('contain', 'Message is required.') ; 
        return this;
        };
    
}

export default new MainParabankPageContact()