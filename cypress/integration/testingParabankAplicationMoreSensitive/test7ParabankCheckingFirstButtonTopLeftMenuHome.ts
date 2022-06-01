import {MainParabankPageLoginRegister} from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageLoginRegister";
import {MainParabankPageHome} from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageHeaderPanelHome"
import usersParabank from "../../data/registrationUsersParabank";

const loginRegister = new MainParabankPageLoginRegister();
const home = new MainParabankPageHome() 

describe ("Simply test for Parabank button 'Home'", function () {
   
    it("Test 1 Checking the button 'Home' after user has registered", () => {
        loginRegister.open()
        .registerToTheApp(usersParabank.secondUser)
        home.homeTopLeftMenuHeaderPanel()
    })


})