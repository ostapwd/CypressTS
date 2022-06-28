import usersParabank from "../../../data/ParaBank/usersParabank";
import { MainPageParabank } from "../../../support/pagesParaBank/mainPageParabank";
import { RegisterPageParabank } from "../../../support/pagesParaBank/registerPageParabank";

const mainPage = new MainPageParabank();
const registerPage = new RegisterPageParabank();

describe('Test suite a user can to register to the App', () => {
    before('Opened the Main page', () => {
        mainPage.openApp();
    });

    it('Verify a user can register to the App', () => {
        mainPage.openRegisterForm()
        mainPage.getPageLabel().should('contain','Signing up is easy!')
        registerPage.registerToTheApp(usersParabank.newUser).clickRegisterButton().getPageLabel().then((element) => {
                expect(element.text()).to.be.contains(`Welcome ${usersParabank.newUser.userName}`)
                expect(element.text()).to.be.contains("Your account was created successfully. You are now logged in.")
        });
    });
});