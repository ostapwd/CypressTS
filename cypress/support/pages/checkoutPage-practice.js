
class CheckoutPage {

    get checkoutButton() { return  cy.xpath("//button[@data-test='checkout']"); }
    get checkoutLabel() { return  cy.xpath("//span[@class='title']"); }
    get shopperNameInput() { return  cy.xpath('//input[@id="first-name"]'); }
    get shopperLastNameInput() { return  cy.xpath('//input[@placeholder="Last Name"]'); }
    get shopperZipInput() { return cy.xpath('//input[@id="postal-code"]'); }
    get buttonContinue() { return cy.xpath('//input[@type="submit"]'); }
    get checkoutOverview() { return  cy.xpath("//span[@class='title']"); }
    get buttonFinish() { return cy.xpath("//button[@class='btn btn_action btn_medium cart_button']")}
    get checkoutComplete() { return  cy.xpath("//span[@class='title']"); }
    get buttonBackHome() { return cy.xpath('//button[@name="back-to-products"]');
    

    }
    

    inputInformationAboutBuyer(firstname, lastname, zip) {
        this.shopperNameInput.type(firstname);
        this.shopperLastNameInput.type(lastname);
        this.shopperZipInput.type(zip);
        
        
    }


    }



export default new CheckoutPage()