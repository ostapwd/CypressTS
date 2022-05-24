import {MainParabankPageLoginRegister} from "../../support/pages/parabankPages/mainParabankPageLoginRegister";
import {MainParabankPageHome} from "../../support/pages/parabankPages/mainParabankPageHeaderPanelHome"
import usersParabank from "../../data/usersParabank";

const l = new MainParabankPageLoginRegister();
const h = new MainParabankPageHome() 
describe ("Seventh test suite for Parabank", function () {
    beforeEach('login to the app', () => {
        l.open()
        .registerToTheApp(usersParabank.secondUser)
    })

    it("Test 1 Checking the button 'Home' after user has registered", () => {
    h.homeTopLeftMenuHeaderPanel()
    })

    


})