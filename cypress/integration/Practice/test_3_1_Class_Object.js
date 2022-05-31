import users from "../data/users";
import loginPagePractice from "../support/pagesMyPractice/loginPagePractice";


describe('Test suite', () => {
    it('Checking the quantity of products in the cart', () => {
        loginPagePractice.open()
            .loginToTheApp(users.standardUser)
            .addToCartAllproducts()
            .logAllProducts()
            .openShoppingCart()
            .logAllProductsInCart()
            .quantityOfSelectedProductsInCart()
            .verifyUrlCart()
    });
});
