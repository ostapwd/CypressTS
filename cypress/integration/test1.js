import users from "../data/users";
import loginPage from "../support/pages/loginPage";
import { LoginPageTS } from "../support/pages/loginPageTS"

describe('SwagLabs test suite', function() {

    const loginPageTS = new LoginPageTS();
    beforeEach(function() {
        loginPageTS.open();
    });

    it('problem user login ', function() {

        loginPageTS
            .loginToTheApp(users.problemUser)
            .productNameVerification();

    });


    it('wrong pass login ', function() {

        loginPageTS
            .loginToTheApp(users.wrongPassUser);
        loginPageTS
            .wrongPassValidate();
    });


    it('should buy items', function() {

        loginPageTS
            .loginToTheApp(users.standardUser)
            .productsLabelVerification()
            .addToCart()
            .cartOpen()
            .deleteItems()
            .checkoutConfirm()
            .confirmationCheckout('Yurii', 'Nah', '12345')
            .validationPurchase();
    });
});