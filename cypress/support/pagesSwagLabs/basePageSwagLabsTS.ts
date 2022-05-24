export default abstract class basePageSwagLabsTS{

    protected waitForSeconds(secondsToWait :number) {
        cy.wait(secondsToWait * 1000);
            return this
    }

    protected goto(url) {
        cy.visit(url, {failOnStatusCode: false});
            return this
    }

    // protected urlPage(urls){
    //     cy.url().should('eq', urls);
        
    //     return this
    // }
}