export default class ContactPageParabank{
    private aboutPageTitle() { return cy.get("#rightPanel h1.title"); }
    
    public aboutPageTitleLabel(){
        this.aboutPageTitle().should('contain','ParaSoft Demo Website');
            return this
    }

}