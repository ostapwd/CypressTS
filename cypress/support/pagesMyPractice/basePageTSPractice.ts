export default abstract class basePageTSPractice {

    protected waitForSeconds(secondsToWait :number) {
        cy.wait(secondsToWait * 1000);

        return this
    }

    protected goto(url) {
        cy.visit(url, {failOnStatusCode: false});

        return this
    }
}