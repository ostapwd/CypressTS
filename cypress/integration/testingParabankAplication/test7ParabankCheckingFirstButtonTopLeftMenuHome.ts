import { MainParabankPageLoginRegister } from "../../support/pages/parabankPages/mainParabankPageLoginRegister";
import { MainParabankPageHome } from "../../support/pages/parabankPages/mainParabankPageHeaderPanelHome"
import usersParabank from "../../data/registrationUsersParabank";

const loginRegisterPage = new MainParabankPageLoginRegister();
const homePage = new MainParabankPageHome()

describe("Simply test for Parabank button 'Home'", function () {

    it("Test 1 Checking the button 'Home' after user has registered", () => {
        loginRegisterPage.open()
            .registerToTheApp(usersParabank.secondUser)
        homePage.homeTopLeftMenuHeaderPanel()
    })


})