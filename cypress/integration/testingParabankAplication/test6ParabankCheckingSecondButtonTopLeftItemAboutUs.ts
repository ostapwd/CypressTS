import {MainParabankPageLoginRegister} from "../../support/pages/parabankPages/mainParabankPageLoginRegister";
import {MainParabankPageAboutUs} from "../../support/pages/parabankPages/mainParabankPageHeaderPanelAboutUs"


const l = new MainParabankPageLoginRegister();
const a = new MainParabankPageAboutUs() 
describe ("Sixth test suite for Parabank", function () {
    beforeEach('login to the app', () => {
        l.open()
    })

    it("Test 1 Checking the button 'About Us' if it has a correct page title after click on it", () => {
    a.aboutUsTopLeftMenuHeaderPanel()
    })

    


})