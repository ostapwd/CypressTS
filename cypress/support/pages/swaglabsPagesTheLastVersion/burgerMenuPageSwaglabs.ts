import BasePage from "./BasePageSwaglabs";

export class BurgerMenuPageSwaglabs {

    private burgerButton() { return cy.xpath("//div[@class='bm-burger-button']"); }
    private allItemsButton() { return cy.xpath("//a[@id='inventory_sidebar_link']"); }


    public clickOnTheBurgerButton() {
        this.burgerButton().click();
        return this;
    };

    public clickOnTheAllItemsButton() {
        this.allItemsButton().click();
        return this;
    };

}

export default new BurgerMenuPageSwaglabs();