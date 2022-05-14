// import users from "../data/users";
// import LoginPageTS from "../support/pages/loginPage";
// import ProductPageTS from "../support/pages/productPage";

import users from "../data/users";
import loginPagePractice from "../support/pages/loginPagePractice";
import productPagePractice from "../support/pages/productPagePractice";

describe('Test suite', () => {
   
    beforeEach(() => {
        loginPagePractice.open().loginToTheApp(users.standardUser)
    });

    it('Verify a user can login to the aplication', () => {
        productPagePractice.productsLabel.then((element) => {
            expect(element.text()).to.equal('Products')
        })
    });

    it('Verify a user can add all products to the cart', () => {
        productPagePractice.addToCartAllproducts().selectedProductsNumber.then((element) => {
            expect(element.text()).to.equal('6')
        })
    });

    it('Verify a user can logout form the app', () => {
        productPagePractice.openMenu().waitTime().logoutApp();
        loginPagePractice.loginPageLogoLabel.should("be.visible")
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