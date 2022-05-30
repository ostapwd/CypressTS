export default abstract class BasePage {

    public waitForSeconds(secondsToWait :number) {
        cy.wait(secondsToWait * 1000);

        return this;
    }

    protected goto(url) {
        cy.visit(Cypress.env('UI_URL'));

        return this;
    }
}