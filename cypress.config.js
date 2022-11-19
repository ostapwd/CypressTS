const { defineConfig } = require('cypress')
const webpackPreprocessor = require('@cypress/webpack-preprocessor')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', webpackPreprocessor())
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
  },
  
  
    chromeWebSecurity: false,
    viewportWidth: 1200,
  viewportHeight: 800
    //watchForFileChanges: false
  
})

