import users from "../data/users";
import { LoginPageTS } from "../support/pages/loginPageTS"

describe('SwagLabs test suite', function() {

    const loginPageTS = new LoginPageTS();
    beforeEach(function() {
        loginPageTS.open();
    });

    it('problem user login ', function() {

        loginPageTS
            .loginToTheApp(users.problemUser)
            .productName().then((elment) => {
                expect(elment.text()).to.equal('Sauce Labs Fleece Jacket')
            });
    });

    it('wrong pass login ', function() {

        loginPageTS
            .loginToTheApp(users.wrongPassUser);
        loginPageTS
            .wrongPassVerify().should(
                'have.text',
                'Epic sadface: Username and password do not match any user in this service',
            );
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
            .purchaseValidation().should('be.visible');
    });
});