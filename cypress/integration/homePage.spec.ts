import {HomePage} from "../pom/homePage";

const homePage = new HomePage();

describe ('Smoke Test: Home Page', () => {
    it('Smoke - Home Page UI ',function () {
        homePage
            .visit()
            .checkPageUrl()
            .checkContainer();
    });
    
    it('Test User Login', function () {
        homePage
            .loginInput()
            .passwordInput()
            .loginButtonClick();
    });
});