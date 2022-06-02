
export class MainParabankPageHome {

  private buttonContactLeftHome() { return cy.xpath('//li[@class="home"]'); }
  private clickingOnTheButtonAboutUsGoToTheTabHome() { return cy.xpath('//div[@id="rightPanel"]'); }
  private aboutUsUrlButtonButtonSituatedOnTheRight() { return cy.url().should('include', 'parabank/index.htm'); }
  private ifWeAreInTheCorrectPage() { return cy.xpath('//li[@class="captionone"]'); }

  public theTextIfWeAreInTheCorrectPage() {
    return this.ifWeAreInTheCorrectPage()
  };

  public clickOnIconHome() {
    return this.buttonContactLeftHome().click()

  };
  public clickingOnTheButtonAboutUsToGoToTheTabHome() {
    return this.clickingOnTheButtonAboutUsGoToTheTabHome()

  };
  public aboutUsUrlButtonButtonSituatedOnTheRightShouldInclude() {
    return this.aboutUsUrlButtonButtonSituatedOnTheRight()

  };

}

export default new MainParabankPageHome()