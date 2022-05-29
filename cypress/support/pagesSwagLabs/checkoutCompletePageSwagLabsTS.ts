import basePageSwagLabsTS from './basePageSwagLabsTS';

export class checkoutCompletePageSwagLabsTS extends basePageSwagLabsTS{
    public infoCheckoutCompleteLabel() { return cy.get("#checkout_complete_container .complete-header"); }
    public checkCompletePageLabel() { return cy.get("#header_container .title"); }
    public imageCompletePage() { return cy.get(".pony_express"); }
    public backHomeButton() { return cy.get("#back-to-products"); }  

    public getInfoCheckoutComplete(){
       return this.checkCompletePageLabel()
    }

    public getImageComplete(){
       return this.imageCompletePage()
    }

    public getBackHomeButton(){
       return this.backHomeButton()
    }

    public clickBackHomeButton(){
        return this.backHomeButton()
     }
}