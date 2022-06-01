import BasePage from "./BasePageSwaglabs";


export class ContainerPageSwaglabs extends BasePage {

    private checkoutButton() { return  cy.xpath("//button[@data-test='checkout']"); }
    private productSortContainer() { return  cy.get(".product_sort_container option"); }
    private filterSelect() { return cy.get(".product_sort_container"); }
    private itemPrices() { return cy.xpath('//div[@class="inventory_item_price"]'); }


    public filterByText(option: string){
        this.filterSelect().select(option);
        return this;
    }

    public filterByIndex(index: number){
        this.filterSelect().select(index);
        return this;
    }


    public checkoutButtonClick() {
        this.checkoutButton().click();
        return this;
    }

    public productSortContainerCheckingQuantity() {
        this.productSortContainer().
        not(':visible').should('have.length', 4);
        return this;
    }

    public itemPricesList() {
        this.itemPrices().then(element => {
            expect(element.text()).to.be.equal(6);
        });
        return this;
    }

    public filterByIndexFromAtoZ(aToZ){
        
        this.itemPrices().each((item, index, list ) => {
            expect(list).to.have.length(6)
            cy.wrap(item).should('contain.text',aToZ[index] ) 

        })
        return this;
    }

    public filterByIndexFromZtoA(zToA){
       
        this.itemPrices().each((item, index, list ) => {
            expect(list).to.have.length(6)
            cy.wrap(item).should('contain.text',zToA[index] ) 

        })
        return this;
    }

    public filterByIndexFromHighToLow(highToLow){
       
        this.itemPrices().each((item, index, list ) => {
            expect(list).to.have.length(6)
            cy.wrap(item).should('contain.text',highToLow[index] ) 

        })
        return this;
    }

    public filterByIndexFromLowToHigh(lowToHigh){
       
        this.itemPrices().each((item, index, list ) => {
            expect(list).to.have.length(6)
            cy.wrap(item).should('contain.text',lowToHigh[index] ) 

        })
        return this;
    }

    public filterByIndexFromAtoZCheckOnlyPrice(){
        let n = ['$29.99', '$9.99', '$15.99', '$49.99', '$7.99', '$15.99']
        this.itemPrices().each((item, index) => {
            expect(Cypress.$(item).text()).to.eq(n[index]
        )
        return this;
            })
        }

    public filterByIndexFromZtoACheckOnlyPrice(){
        let n = ['$15.99', '$7.99', '$49.99', '$15.99', '$9.99', '$29.99']
        this.itemPrices().each((item, index) => {
            expect(Cypress.$(item).text()).to.eq(n[index]
        )
        return this;
            })
        }

    public filterByIndexFromHighToLowCheckOnlyPrice(){
        let n = ['$49.99', '$29.99', '$15.99', '$15.99', '$9.99', '$7.99']
        this.itemPrices().each((item, index) => {
            expect(Cypress.$(item).text()).to.eq(n[index]
        )
        return this;
            })
}

    public filterByIndexFromLowToHighCheckOnlyPrice(){
        let n = ['$7.99', '$9.99', '$15.99', '$15.99', '$29.99', '$49.99']
        this.itemPrices().each((item, index) => {
            expect(Cypress.$(item).text()).to.eq(n[index]
            )
        return this;
            })

}
}


export default new ContainerPageSwaglabs();