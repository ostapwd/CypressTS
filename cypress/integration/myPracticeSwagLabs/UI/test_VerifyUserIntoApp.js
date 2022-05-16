import users from "../../../data/users";
import { LoginPageTSPractice } from "../../../support/pagesMyPractice/loginPageTSPractice";
import { ProductPageTSPractice } from "../../../support/pagesMyPractice/productPageTSPractice";

describe('Test suite verified a user login into the application', () => {
    beforeEach('Opened the application', () => {
        new LoginPageTSPractice().open()
    });
    it('Verify a user can login into the application (positive login)', () => {
        new LoginPageTSPractice()
            .verifyUrlLoginPage()
            .verifyUsernameInput()
            .loginToTheApp(users.standardUser)
            .verifyUrlProductsPage()
        new ProductPageTSPractice()
            .verifyProductsLabel()
    });

    it('Verify a user can login into the application (negative login)', () => {
        new LoginPageTSPractice()
            .verifyUrlLoginPage()
            .verifyUsernameInput()
            .loginToTheApp(users.noRegisterUser)
        new LoginPageTSPractice().verifyErrorMessageNegativeLoginPassword()
    })

    it.only('Verify a user can login into the application (negative login)', () => {
        new LoginPageTSPractice()
            .verifyUrlLoginPage()
            .verifyUsernameInput()
            .loginToTheApp(users.lockedOutUser)
        new LoginPageTSPractice()
            .verifyErrorMessageLockedOutUser()
    })
});