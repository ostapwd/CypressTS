import {BasePage} from "./base/basePage";

export class StorePage extends BasePage {
    constructor() {
        super('#root', 'StorePage', 'inventory.html');
    }

    private get headerLabel(): Cypress.Chainable {
       return this.baseContainer.find('span.title');
    }

    private get itemPrice(): Cypress.Chainable {
        return this.baseContainer.find('.inventory_item_price')
    }

    private get addProduct(): Cypress.Chainable {
        return this.baseContainer.get('.btn');
    }

    private get itemBasket(): Cypress.Chainable {
        return this.baseContainer.find('#shopping_cart_container')
    }

    public checkHeaderLabel(): this {
        this.headerLabel
            .should('exist')
            .should('be.visible')
            .contains('Products');

        return this;
    }

    public checkItemPrice(): this {
        this.itemPrice
            .each(($price) => {
                cy.wrap($price).contains('$');
            });

        return this;

    };

    public selectAllItems(): this {
        this.addProduct
            .each(($button) => {
                cy.wrap($button).click();
            })
        return this;
    };

    public openItemBasket(): void{
        this.itemBasket
            .click();
    }
}