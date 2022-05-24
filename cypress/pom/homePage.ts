import {BasePage} from "./base/basePage";

export class HomePage extends BasePage {
    constructor() {
        super('#root', 'HomePage', '/');
    }

    private get userNameField(): Cypress.Chainable {
        return this.baseContainer.find('#user-name', { timeout: 10000 });
    }

    private get loginField(): Cypress.Chainable {
        return this.baseContainer.find('#password', {timeout: 10000});
    }

    private get loginButton(): Cypress.Chainable {
        return this.baseContainer.find('#login-button')
    }

    public loginInput(): this{
        this.userNameField.type('standard_user');
        return this;
    }

    public passwordInput(): this{
        this.loginField.type('secret_sauce');
        return this;
    }

    public loginButtonClick(): void{
        this.loginButton.click();
    }
}