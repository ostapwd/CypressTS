import BasePage from "./BasePageSwaglabs";
import { ProductPageSwaglabs } from "./productPageSwaglabs";

export class CheckoutPageSwaglabs {

    private checkoutLabel() { return cy.xpath("//span[@class='title']"); }
    private shopperNameInput() { return cy.xpath('//input[@id="first-name"]'); }
    private shopperLastNameInput() { return cy.xpath('//input[@placeholder="Last Name"]'); }
    private shopperZipInput() { return cy.xpath('//input[@id="postal-code"]'); }
    private buttonContinue() { return cy.xpath('//input[@type="submit"]'); }
    private checkoutOverview() { return cy.xpath("//span[@class='title']"); }
    private buttonFinish() { return cy.xpath("//button[@class='btn btn_action btn_medium cart_button']"); }
    private checkoutComplete() { return cy.xpath("//span[@class='title']"); }
    private buttonBackHome() { return cy.xpath('//button[@name="back-to-products"]'); }
    private buttonCancel() { return cy.get("button[class='btn btn_secondary back btn_medium cart_cancel_link']"); }


    public checkoutLabelShouldContainInThePageCheckout() {
        return this.checkoutLabel();
    };

    public buttonContinueClick() {
        this.buttonContinue().click();
        return this;
    };

    public inputInformationAboutBuyer(shoper) {
        this.shopperNameInput().type(shoper.shopperName);
        this.shopperLastNameInput().type(shoper.shopperLastName);
        this.shopperZipInput().type(shoper.shopperZip);
        return new ProductPageSwaglabs();
    };

    public checkoutOverviewShouldContain() {
        return this.checkoutOverview();
    };

    public buttonFinishClick() {
        this.buttonFinish().click();
        return this;
    };

    public checkoutCompleteShouldContainText() {
        return this.checkoutComplete();
    };

    public buttonBackHomeClick() {
        this.buttonBackHome().click();
        return this;
    };

    public clickOnTheButtonCancel() {
        this.buttonCancel().click();
        return this;
    };

}


export default new CheckoutPageSwaglabs();