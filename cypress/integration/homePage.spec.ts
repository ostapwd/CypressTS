import {HomePage} from "../pom/homePage";

const homePage = new HomePage();

describe ('Test Home Page', () => {
    it('Smoke - Home Page UI ',function () {
        homePage
            .visit()
            .checkPageUrl();
    });
    
    it('Test User Login', function () {
        homePage
            .checkContainer()
            .loginInput()
            .passwordInput()
            .loginButtonClick();
    });

    it('should ', function () {
        
    });
});