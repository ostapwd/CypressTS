import usersParabank from "../../data/registrationUsersParabank";
import {MainParabankPageLoginRegister} from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageLoginRegister";
import { MainParabankPageLeftMenu } from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageHeaderPanelTopLeftMenu";

const loginRegister = new MainParabankPageLoginRegister();
const leftMenu = new MainParabankPageLeftMenu();

describe ("Third test suite for Parabank", function () {
    beforeEach('login to the app', () => {
      loginRegister.open()
    })

    it("Test 1 Checking the link 'Solutions' if it go to to the correct link ", () => {
      leftMenu.leftMenuElementSolutionGoToAnotherPageClick()
    });

    it("Test 2 Checking the link 'About Us' if it go to to the correct link ", () => {
      leftMenu.leftMenuEboutUsGoToAnotherPageClick()
     });
    
     it("Test 3 Checking the link 'Services' if it go to to the correct link ", () => {
      leftMenu.leftMenuServicesGoToAnotherPageClick()
     });

     it("Test 4 Checking the link 'Admin' if it go to to the correct link ", () => {
      leftMenu.leftMenuAdminGoToAnotherPageClick() 
     });

     it("Test 5 Checking the link 'Products' if it go to to the correct link ", () => {
      leftMenu.leftMenuProductsGoToAnotherPageClick()
     });

     it("Test 6 Checking the link 'Location' if it go to to the correct link ", () => {
      leftMenu.leftMenuLocationsGoToAnotherPageClick()
     });
     
     afterEach(function () {
      cy.log("after Each");
  });
});