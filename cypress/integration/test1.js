import loginPage from "../support/pages/loginPage";

describe('SwagLabs test suite', function() {

    beforeEach(function() {
        loginPage.open();
    });

    it('problem user login ', function() {

        loginPage
            .loginToTheApp('problem_user', 'secret_sauce')
            .productNameVerification();

    });


    it('wrong pass login ', function() {

        loginPage
            .loginToTheApp('standard_user', 'ayay');
        loginPage
            .wrongPassValidate();
    });


    it('should buy items', function() {

        loginPage
            .loginToTheApp('standard_user', 'secret_sauce')
            .productsLabelVerification()
            .addToCart()
            .cartOpen()
            .deleteItems()
            .checkoutConfirm()
            .confirmationCheckout('Yurii', 'Nah', '12345')
            .validationPurchase();
    });
});