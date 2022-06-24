import usersParabank from "../../../data/ParaBank/usersParabank";
import { BasePageParabank } from "../../../support/pagesParaBank/basePageParabank";
import { RegisterPageParabank } from "../../../support/pagesParaBank/registerPageParabank";

const basePage = new BasePageParabank();
const registerPage = new RegisterPageParabank();

describe('Test suite a user can to register to the App', () => {
    before('Opened the Main page', () => {
        basePage.openApi();
    });

    it('Verify link register to the App', () => {
        basePage
            .getRegisterLink().
                should('be.visible')
                .and('contain', 'Register')
                .and('have.attr', 'href')
                .and('contain', 'register.htm')
    });

    it('Verify a user can register to the App', () => {
        registerPage
            .openRegisterForm()
        basePage
            .getPageLabel()
                .should('contain','Signing up is easy!')
        registerPage
            .getRegisterButton()
                .should('be.visible')
                .and('have.value', 'Register')
                .and('have.css', 'background-color', 'rgb(202, 129, 37)')
        registerPage
            .registerToTheApp(usersParabank.newUser)
            .clickRegisterButton()
        basePage
            .getPageLabel()
                .then((element) => {
                expect(element.text()).to.be.contains(`Welcome ${usersParabank.newUser.userName}`)
        });
    });
});