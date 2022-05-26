import BasePage from "./BasePage"

export class sideMenuPageTS extends BasePage{

    private sideMenuButton() {return cy.xpath("//*[@id = 'react-burger-menu-btn']")}

    private sideMenuLogOut() {return cy.get("#logout_sidebar_link")}

    private sideMenuAbout() {return cy.get("#about_sidebar_link")}

    public openSideMenu(){
        this.sideMenuButton().click();
        return this
    }

    public logOut(){
        this.sideMenuLogOut().click()
        cy.url().should('eq', 'https://www.saucedemo.com/')
        return this
    }

    public openAbout(){
        this.sideMenuAbout().click()
        cy.url().should('eq', 'https://saucelabs.com/')
        return this
    }
}
