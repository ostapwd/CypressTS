import usersParabank from "../../data/usersParabank";
import {MainParabankPageLoginRegister} from "../../support/pages/parabank-pages/parabankLoginPage";
import { MainParabankPageLeftMenu } from "../../support/pages/parabank-pages/mainParabankPageLeftMenu";

const l = new MainParabankPageLoginRegister();
const m = new MainParabankPageLeftMenu();

describe ("Third test suite for Parabank", function () {
    beforeEach('login to the app', () => {
        l.open()
    })

    it("Test 1 Checking Solutions what situated in the header panel, left menu ", () => {
       m.leftMenuElementSolutionGoToAnotherPageClick()
    });

    it("Test 2 Checking About Us what situated in the header panel, left menu ", () => {
        m.leftMenuEboutUsGoToAnotherPageClick()
     });
    
     it("Test 3 Checking Services what situated in the header panel, left menu ", () => {
        m.leftMenuServicesGoToAnotherPageClick()
     });

     it("Test 4 Checking Admin what situated in the header panel, left menu ", () => {
        m.leftMenuAdminGoToAnotherPageClick() 
     });

     it("Test 5 Checking Products what situated in the header panel, left menu ", () => {
        m.leftMenuProductsGoToAnotherPageClick()
     });

     it("Test 6 Checking Location what situated in the header panel, left menu ", () => {
        m.leftMenuLocationsGoToAnotherPageClick()
     });

     afterEach(function () {
      cy.log("after Each");
  });

});