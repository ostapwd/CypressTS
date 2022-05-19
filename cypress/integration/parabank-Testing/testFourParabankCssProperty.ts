
import {MainParabankPageLoginRegister} from "../../support/pages/parabank-pages/parabankLoginPage";
import { MainParabankPageLeftMenu } from "../../support/pages/parabank-pages/mainParabankPageLeftMenu";

const l = new MainParabankPageLoginRegister();
const m = new MainParabankPageLeftMenu();

describe ("Third test suite for Parabank", function () {
    beforeEach('login to the app', () => {
        l.open()
    })

    it("Test 1 Checking css property 'Solutions' link (positive)", () => {
        m.leftMenuSolutionsElementCheckingWrongCssProperty() 
    })

    it("Test 2 Checking css property 'Solutions' link (negative)", () => {
        m.leftMenuSolutionsElementCheckingCssProperty() 
    })

    it("Test 3 Checking css property 'About Us' link ", () => {
        m.leftMenuAboutUsElementCheckingCssProperty()
    })

    it("Test 4 Checking css property 'Services' link ", () => {
        m.leftMenuServicesElementCheckingCssProperty()
    })

    it("Test 5 Checking css property 'Products' link ", () => {
        m.leftMenuProductsElementCheckingCssProperty()
    })

    it("Test 6 Checking css property 'Locations' link ", () => {
        m.leftMenuLocationsElementCheckingCssProperty()
    })

    it("Test 7 Checking css property 'Services' link ", () => {
        m.leftMenuAdminsElementCheckingCssProperty()
    })
    afterEach(function () {
        cy.log("after Each");
    });
    
})