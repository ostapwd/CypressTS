


export class MainParabankPageAboutUs {

   private buttonContactLeftAboutUs() { return cy.xpath('//li[@class="aboutus"]'); }
   private clickingOnTheButtonAboutUsGoToTheTabAboutUs() { return cy.xpath('//h1[@class="title"]'); }
   private aboutUsUrlButtonSecondButtonSituatedOnTheRight() { return cy.url().should('include', 'about.htm'); }


   public clickAboutUsTopLeftMenuHeaderPanel() {
      this.buttonContactLeftAboutUs().click()
      return this;
   };
   public clickingOnTheButtonAboutUsGoToTheTabAboutUsShouldContain() {
      return this.clickingOnTheButtonAboutUsGoToTheTabAboutUs()

   };
   public clickAboutUsUrlButtonSecondButtonSituatedOnTheRight() {
      return this.aboutUsUrlButtonSecondButtonSituatedOnTheRight()

   };

}

export default new MainParabankPageAboutUs()
