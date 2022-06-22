// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
require('cypress-xpath');
import 'cypress-mochawesome-reporter/register';
Cypress.Commands.add('confirmCaptcha', function () {
    cy.get("iframe[title='reCAPTCHA']")
        .first()
        .then((recaptchaIframe) => {
            const body = recaptchaIframe.contents();

            cy.wrap(body)
                .find('.recaptcha-checkbox-border')
                .should('be.visible')
                .click();
        });
});
// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })