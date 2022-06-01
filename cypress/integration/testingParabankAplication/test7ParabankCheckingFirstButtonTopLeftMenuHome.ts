import { MainParabankPageLoginRegister } from "../../support/pages/parabankPages/mainParabankPageLoginRegister";
import { MainParabankPageHome } from "../../support/pages/parabankPages/mainParabankPageHeaderPanelHome"
import usersParabank from "../../data/registrationUsersParabank";


describe("Simply test for Parabank button 'Home'", function () {

    it("Test 1 Checking the button 'Home' after user has registered", () => {
        new MainParabankPageLoginRegister().open()
            .clickOnTheButtonToRegisterToTheApp()
        new MainParabankPageLoginRegister().confirmationThatWeAreOnSelectedRegisterPage().should("contain", "Signing up is easy!")
        new MainParabankPageLoginRegister().registerToTheApp(usersParabank.secondUser)
        new MainParabankPageHome().clickOnIconHome()
        new MainParabankPageHome().theTextIfWeAreInTheCorrectPage().should('contain', 'ATM Services')

    })

})