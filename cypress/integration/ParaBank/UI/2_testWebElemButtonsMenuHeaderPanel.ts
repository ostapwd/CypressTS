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
    before('Opened the Main page', () => {
        basePage.openApi();
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