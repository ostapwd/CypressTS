import { defineConfig } from 'cypress'

export default defineConfig({
  env: {
    TAGS: '@smoke',
    API_HOST: 'https://jsonplaceholder.typicode.com',
    UI_HOST: 'https://www.saucedemo.com/',
  },
  defaultCommandTimeout: 20000,
  responseTimeout: 60000,
  chromeWebSecurity: false,
  watchForFileChanges: false,
  pageLoadTimeout: 60000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'reports',
    charts: true,
    reportPageTitle: 'My Test Suite',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.*',
  },
})
