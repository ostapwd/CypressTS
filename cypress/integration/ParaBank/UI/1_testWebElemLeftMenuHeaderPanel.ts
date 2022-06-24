import urlsPagesParabank from "../../../data/ParaBank/urlsPagesParabank";
import { AboutUsPageParabank } from "../../../support/pagesParaBank/aboutUsPageParabank";
import { AdminPageParabank } from "../../../support/pagesParaBank/adminPageParabank";
import { BasePageParabank } from "../../../support/pagesParaBank/basePageParabank";
import { LocationsPageParabank } from "../../../support/pagesParaBank/locationsPageParabank";
import { ProductsPageParabank } from "../../../support/pagesParaBank/productsPageParabank";
import { ServicesPageParabank } from "../../../support/pagesParaBank/servicesPageParabank";

const basePage = new BasePageParabank();
const aboutUsPage = new AboutUsPageParabank();
const servicesPage = new ServicesPageParabank();
const productsPage = new ProductsPageParabank();
const locationsPage = new LocationsPageParabank();
const adminPage = new AdminPageParabank();

describe('Test suite to verify the left menu of the header panel', () => {
    beforeEach('Opened the Main page', () => {
        basePage.openApi();
    });
    it('Verify the names of the menu items in the left menu on the main API page ', () => {
        const nameItems = ['Solutions', 'About Us', 'Services', 'Products', 'Locations', 'Admin Page']
        basePage.getLeftMenu()
            .find('li')
            .should('be.visible')
            .and('have.length', 6)
            .each((item, index) => {
                expect(Cypress.$(item).text()).to.eq(nameItems[index]
                )})
    });

    it('Test a user can open the AboutUs page', () => {
        basePage
            .getAboutUsLink()
                .should('contain', 'About Us')
                .and('have.attr', 'href')
                .and('contain', 'about.htm')
        aboutUsPage
            .clickOpenAboutUsPage()
            .urlVerify(urlsPagesParabank.aboutUsPageUrl)
            .getPageLabel()
                .should('contain','ParaSoft Demo Website')
    });

    it('Test a user can open the Services page ', () => {
        basePage
            .getServicesLink()
                .should('contain', 'Services')
                .and('have.attr', 'href')
                .and('contain', 'services.htm')
        servicesPage
            .clickOpenServicesPage()
            .urlVerify(urlsPagesParabank.servicesPageUrl)
            .getServicesPageLabel()
                .should('contain','Available Bookstore SOAP services:')
    });

    it('Test a user open the Products page', () => {
        basePage
            .getProductsLink()
                .should('contain', 'Products')
                .and('have.attr', 'href')
                .and('contain', 'products.jsp')
        productsPage
            .clickOpenProductsPage()
            .urlVerify(urlsPagesParabank.productsPageUrl)
    });

    it('Test a user open the Locations page', () => {
        basePage
            .getLocationsLink()
                .should('contain', 'Locations')
                .and('have.attr', 'href')
                .and('contain', 'contacts.jsp')
        locationsPage
            .clickOpenLocationsPage()
            .urlVerify(urlsPagesParabank.locationsPageUrl)
    });

    it('Test a user open the Admin page', () => {
        basePage
            .getAdminPageLink()
                .should('contain', 'Admin Page')
                .and('have.attr', 'href')
                .and('contain', 'admin.htm')
        adminPage
            .clickOpenAdminPage()
            .urlVerify(urlsPagesParabank.adminPageUrl)
            .getPageLabel()
                .should('contain','Administration')
    });

    it('Verify the button menu on the main API page', () => {
        const links = ['index.htm', 'about.htm', 'contact.htm']
        basePage
            .getRightButtonMenu()
                .should('be.visible')
                .find('a')
                .should('have.length', 3)
                .each((item, index) => {
                    expect(Cypress.$(item).attr('href')).to.contain(links[index])
                })
    });
});