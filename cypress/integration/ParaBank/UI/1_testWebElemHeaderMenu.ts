import { BasePageParabank } from "../../../support/pagesParaBank/basePageParabank";

const basePage = new BasePageParabank();

describe('Test suite to verify the header panel', () => {
    before('Opened the Main page', () => {
        basePage.openApi();
    });
    it('Verify the names of the menu items in the left menu on the main API page ', () => {
        const nameItems = ['Solutions', 'About Us', 'Services', 'Products', 'Locations', 'Admin Page']
        basePage.getLeftMenu()
            .should('be.visible')
            .find('li')
            .should('have.length', 6)
            .each((item, index) => {
                expect(Cypress.$(item).text()).to.eq(nameItems[index]
                )})
    });

    // it('Test a user can open link the AboutUs', () => {
    //     basePage
    //         .openAboutUsLinkMenu()
    // });

    // it('Test a user can open the Services menu ', () => {
    //     basePage
    //         .openServicesLinkMenu()
    // });

    // it('Test a user open the Products menu ', () => {
    //    basePage
    //         .openServicesLinkMenu()
    // });

    // it('Test a user open the Locations menu ', () => {
    //    basePage
    //         .openLocationsLinkMenu()
    // });

    // it('Test a user open the Admin page menu ', () => {
    //     basePage
    //         .openAdminPageLinkMenu()
    // });

    // it.only('Test a user click the home button', () => {
    //     basePage
    //         .returnAccountsServicesPage()
    //     basePage
    //         .urlPageVerify(urlsPagesParabank.loginPageUrl)
    // });
      it('Verify the button menu on the main API page', () => {
        const links = ['index.htm', 'about.htm', 'contact.htm']
        basePage
            .getRightButtonMenu()
                .should('be.visible')
                .find('a')
                .should('have.length', 3)
                .each((item, index) => {
                    expect(Cypress.$(item).text()).to.contains(links[index]
                    )})
    });
});