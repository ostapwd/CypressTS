import BasePage from "./BasePageSwaglabs";


export class ContainerPageSwaglabs extends BasePage {

    private checkoutButton() { return cy.xpath("//button[@data-test='checkout']"); }
    private productSortContainer() { return cy.get(".product_sort_container option"); }
    private filterSelect() { return cy.get(".product_sort_container"); }
    public cursorPointerForProductContainer() { return cy.get('.select_container').should('have.css', 'cursor').and('include', 'pointer'); }
    private itemPrices() { return cy.xpath('//div[@class="inventory_item_price"]'); }

    public filterByIndex(index: number) {
        this.filterSelect().select(index);
        return this;
    };

    public checkoutButtonClick() {
        this.checkoutButton().click();
        return this;
    };

    public productSortContainerCheckingQuantity() {
        this.productSortContainer().
            not(':visible').should('have.length', 4);
        return this;
    };
    public filterByText(option: string) {
        this.filterSelect().select(option);
        return this;
    };

    public filterByIndexFromAtoZCheckOnlyPrice() {
        return this.itemPrices();
    };

    public filterByIndexFromZtoACheckOnlyPrice() {
        return this.itemPrices();

    };

    public filterByIndexFromHighToLowCheckOnlyPrice() {
        return this.itemPrices();
    };

    public filterByIndexFromLowToHighCheckOnlyPrice() {
        return this.itemPrices();
    };

}

export default new ContainerPageSwaglabs();