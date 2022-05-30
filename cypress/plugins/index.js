
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 // @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
};
const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");

module.exports = (on, config) => {

    const options = {
        ...browserify.defaultOptions,
        typescript: require.resolve("typescript"),
    };

    on("file:preprocessor", cucumber(options));

    on('before:browser:launch', (browser = {}, launchOptions) => {
        // `args` is an array of all the arguments that will
        // be passed to browsers when it launches

        //console.log(launchOptions.args) // print all current args

        if (browser.family === 'chromium' && browser.name !== 'electron') {
            launchOptions.args.push('--disable-site-isolation-trials');
            launchOptions.args.push('--ignore-certificate-errors');

            // whatever you return here becomes the launchOptions
            return launchOptions;
        }

        if (browser.family === 'firefox') {
            // auto open devtools
            launchOptions.args.push('-devtools');

            return launchOptions;
        }
    });

    require('cypress-mochawesome-reporter/plugin')(on);

    on('task', {
        log(message) {
            console.log('------------------------------------------------------------------');
            console.log(JSON.stringify(message, null, 2));

            return message;
        }
    });
};