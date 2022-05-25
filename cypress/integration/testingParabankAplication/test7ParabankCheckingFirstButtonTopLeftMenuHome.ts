import {MainParabankPageLoginRegister} from "../../support/pages/parabankPages/mainParabankPageLoginRegister";
import {MainParabankPageHome} from "../../support/pages/parabankPages/mainParabankPageHeaderPanelHome"
import usersParabank from "../../data/registrationUsersParabank";

const l = new MainParabankPageLoginRegister();
const h = new MainParabankPageHome() 

describe ("Simply test for Parabank button 'Home'", function () {
   
    it("Test 1 Checking the button 'Home' after user has registered", () => {
        l.open()
        .registerToTheApp(usersParabank.secondUser)
        h.homeTopLeftMenuHeaderPanel()
    })


})