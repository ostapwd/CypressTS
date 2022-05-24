


export class MainParabankPageAboutUs  {
  
    private buttonContactLeftAboutUs() { return cy.xpath('//li[@class="aboutus"]');}
    private clickingOnTheButtonAboutUsGoToTheTabAboutUs() { return cy.xpath('//h1[@class="title"]'); }
    private aboutUsUrlButtonSecondButtonSituatedOnTheRight() { return cy.url().should('include', 'about.htm'); }


    public aboutUsTopLeftMenuHeaderPanel() {     
        this.buttonContactLeftAboutUs().click()
        this.clickingOnTheButtonAboutUsGoToTheTabAboutUs()
       .should('contain', 'ParaSoft Demo Website');
       this.aboutUsUrlButtonSecondButtonSituatedOnTheRight()
        return this;
    };

        
    
}

export default new MainParabankPageAboutUs()
