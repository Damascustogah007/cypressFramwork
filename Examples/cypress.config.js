const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: 'http://localhost:3000',
    viewportWidth : 1280,
    viewportHeight : 720, 
  },
  e2e: {
    retries : { 
      "runMode": 2, 
      "openMode": 2 
    },
    defaultCommandTimeout : 4 * 1000,
    pageLoadTimeout : 6 * 1000,
    downloadsFolder : 'cypress/downloads',
    chromeWebSecurity : false,
    waitForAnimations : true,
    screenshotsFolder: "cypress/screenshots",
    video: true,
    specPattern : 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
