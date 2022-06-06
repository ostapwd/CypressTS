

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