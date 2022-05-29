export default abstract class basePageSwagLabsTS{
    
    public urlPage() {return cy.url();}
    public productsLabel() { return cy.get("#header_container .title"); }
   
    public waitForSeconds(secondsToWait :number) {
        cy.wait(secondsToWait * 1000);
            return this
    }

    protected goto(url) {
        cy.visit(url, {failOnStatusCode: false});
            return this
    }

    public getUrlPage(url){
        this.urlPage().should('eq', url.url)
            return this
    }

    public getPageLabel(){
        return this.productsLabel()
    }  
}