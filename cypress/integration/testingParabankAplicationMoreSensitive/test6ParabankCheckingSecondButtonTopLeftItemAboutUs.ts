import { MainParabankPageLoginRegister } from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageLoginRegister";
import { MainParabankPageAboutUs } from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageHeaderPanelAboutUs"


const loginRegister = new MainParabankPageLoginRegister();
let aboutUs = new MainParabankPageAboutUs()

describe("Simply test for Parabank button 'About Us'", function () {

    it("Test 1 Checking the button 'About Us' if it has a correct page title after click on it", () => {
        loginRegister.open()
        aboutUs.clickButtonAboutUsTopLeftMenuHeaderPanelAndCheckIfItHasWritePageAndText()
    })


})