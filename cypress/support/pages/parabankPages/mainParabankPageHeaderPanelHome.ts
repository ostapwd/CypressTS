
export class MainParabankPageHome {

    private buttonContactLeftHome() { return cy.xpath('//li[@class="home"]'); }
    private clickingOnTheButtonAboutUsGoToTheTabHome() { return cy.xpath('//div[@id="rightPanel"]'); }
    private aboutUsUrlButtonButtonSituatedOnTheRight() { return cy.url().should('include', 'parabank/index.htm'); }
    private ifWeAreInTheCorrectPage() { return cy.xpath('//li[@class="captionone"]'); }

    public homeTopLeftMenuHeaderPanel() {
        this.buttonContactLeftHome().click()
        this.clickingOnTheButtonAboutUsGoToTheTabHome()
        this.aboutUsUrlButtonButtonSituatedOnTheRight()
        this.ifWeAreInTheCorrectPage()
            .should('contain', 'ATM Services')
        return this;
    };

}

export default new MainParabankPageHome()