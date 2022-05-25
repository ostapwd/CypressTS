import BasePage from "./BasePageSwaglabs";


export class ContainerPageSwaglabs extends BasePage {

    private checkoutButton() { return  cy.xpath("//button[@data-test='checkout']"); }
    private productSortContainer() { return  cy.get(".product_sort_container option"); }
    private filterSelect() { return cy.get(".product_sort_container"); }


    public filterByText(option: string){
        this.filterSelect().select(option);
        return this;
    }

    public filterByIndex(index: number){
        this.filterSelect().select(index);
        return this;
    }


    public checkoutButtonClick() {
        this.checkoutButton().click();
        return this;
    }

    public productSortContainerCheckingQuantity() {
        this.productSortContainer().
        not(':visible').should('have.length', 4);
        return this;
    }

}


export default new ContainerPageSwaglabs();