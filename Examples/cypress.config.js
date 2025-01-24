const { defineConfig } = require("cypress");

const ENV_CONFIG = {
  dev: {
    baseUrl: 'http://localhost:3000',
  },
  staging: {
    baseUrl: 'https://staging.example.com',
  },
  production: {
    baseUrl: 'https://www.example.com',
  },
}

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
    specPattern : 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: ENV_CONFIG[process.env.ENV]?.baseUrl || 'http://localhost:3000', // Default to localhost
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
