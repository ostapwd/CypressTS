export default abstract class BasePage {

    public waitForSec(sec: number) {
        cy.wait(sec * 1000)
        return this;
    }

    protected goto(url: string) {
        cy.visit(url, { failOnStatusCode: false })
        return this;
    }
}