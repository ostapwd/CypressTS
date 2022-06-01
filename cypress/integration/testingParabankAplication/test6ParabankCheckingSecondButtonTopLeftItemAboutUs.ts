import { MainParabankPageLoginRegister } from "../../support/pages/parabankPages/mainParabankPageLoginRegister";
import { MainParabankPageAboutUs } from "../../support/pages/parabankPages/mainParabankPageHeaderPanelAboutUs"




describe("Simply test for Parabank button 'About Us'", function () {

    it("Test 1 Checking the button 'About Us' if it has a correct page title after click on it", () => {
        new MainParabankPageLoginRegister().open()
        new MainParabankPageAboutUs().clickAboutUsTopLeftMenuHeaderPanel()
        new MainParabankPageAboutUs().clickingOnTheButtonAboutUsGoToTheTabAboutUsShouldContain()
            .should('contain', 'ParaSoft Demo Website');
        new MainParabankPageAboutUs().clickAboutUsUrlButtonSecondButtonSituatedOnTheRight()

    })


})