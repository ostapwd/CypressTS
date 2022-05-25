export default class AboutUsPageParabank{
    private aboutPageTitle() { return cy.get("#rightPanel h1.title"); }
    
    public aboutPageTitleLabel(){
        this.aboutPageTitle().should('contain','ParaSoft Demo Website');
            return this
    }

}