import { MainPageParabank } from "../../../support/pagesParaBank/mainPageParabank";

const mainPage = new MainPageParabank();

describe('Test suite to verify the web elements register to the App', () => {
    before('Opened the Main page', () => {
        mainPage.openApp();
    });

    it('Verify the Username input', () => {
        mainPage.getUserNameInput().should('be.visible')
    });

    it('Verify the Password input', () => {
        mainPage.getPasswordInput().should('be.visible')
    });

    it('Verify the Login button', () => {
        mainPage.getLoginButton().should('be.visible').and('have.value','Log In')
    });
    

    it('Verify the register link to the App', () => {
        mainPage.getRegisterLink().should('be.visible').and('contain', 'Register').and('have.attr', 'href').and('contain', 'register.htm')
    });

    it('Verify the forgot login link', () => {
        mainPage.getForgotLoginUserLink().then((element) => {
                expect(element.text()).to.be.contains('Forgot login info?')
        })
    });
});