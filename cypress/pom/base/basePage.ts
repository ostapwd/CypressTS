
export class BasePage {
    protected container: string;
    protected page_name: string;
    protected page_url: string;

    constructor(container: string, page_name: string, page_url?: string) {
        this.container = container;
        this.page_name = page_name;
        this.page_url = page_url;
    }

    protected get baseContainer(): Cypress.Chainable {
        return cy.get(this.container, { timeout: 6000 });
    }

    public visit(): this {
        cy.visit(this.page_url);

        return this;
    }

    public checkPageUrl(): this {
        cy.location('href', {timeout: 6000}).should('include', this.page_url);

        return this;
    }

    public checkContainer(): this {
        this.baseContainer
            .should('exist')
            .should('be.visible');

        return this;
    }
}