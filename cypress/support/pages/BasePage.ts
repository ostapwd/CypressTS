export default abstract class BasePage {

    public waitForSeconds(secondsToWait :number) {
        cy.wait(secondsToWait * 100);

        return this;
    }

    protected goto(url) {
        cy.visit(url, { failOnStatusCode: false });

        return this;
    }
}