import users from "../data/users";
import loginPage from "../support/pages/loginPage";
import productPage from "../support/pages/productPage";

describe('Test suite', function () {
   
    beforeEach(() => {
       loginPage.open().loginToTheApp(users.standardUser);
    });

    it('Verify a user can login to the aplication', () => {
        productPage.productsLabel.then((element) => {
            expect(element.text()).to.equal('Products')
        })
    });

    it('Verify a user can add all products to the cart', () => {
        productPage.addToCartAllproducts().selectedProductsNumber.then((element) => {
            expect(element.text()).to.equal('6')
        })
    });

    it('Verify a user can logout form the app', () => {
        productPage.openMenu().waitTime().logoutApp();
        loginPage.loginPageLogoLabel.should("be.visible");
    });
});

// describe('Test suite', function () {
//     it('Verify a user can add all products to the cart', () => {
//         loginPage.open()
//             .loginToTheApp(users.standardUser)
//             .addToCartAllproducts()
//             .verifyThatNumberSelectedProductsEquals("6");
//     });
// });