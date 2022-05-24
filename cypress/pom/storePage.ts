import {BasePage} from "./base/basePage";

export class StorePage extends BasePage {
    constructor() {
        super('#root', 'StorePage', 'inventory.html');
    }

    private get headerLabel(): Cypress.Chainable {
       return this.baseContainer.find('span.title');
    }

    private get addProduct(): Cypress.Chainable {
        return this.baseContainer.get('.btn');
    }

    private get itemBusket(): Cypress.Chainable {
        return this.baseContainer.find('.shopping_cart_link')
    }

    public checkHeaderLabel(): this {
        this.headerLabel
            .should('exist')
            .should('be.visible')
            .contains('Products');

        return this;
    }

    public selectAllItems(): this {
        this.addProduct
            .each(($button) => {
                cy.wrap($button).click();
            })
        return this;
    };

    public checkItemBusket(): void{
        this.itemBusket
            .click();
    }
}