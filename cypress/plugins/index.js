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
            launchOptions.args.push('--disable-site-isolation-trials')
            launchOptions.args.push('--ignore-certificate-errors')

            // whatever you return here becomes the launchOptions
            return launchOptions
        }

        if (browser.family === 'firefox') {
            // auto open devtools
            launchOptions.args.push('-devtools')

            return launchOptions
        }
    });

    require('cypress-mochawesome-reporter/plugin')(on);

    on('task', {
        log(message) {
            console.log('------------------------------------------------------------------');
            console.log(JSON.stringify(message, null, 2))

            return message
        }
    });
};
