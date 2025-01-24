const cypressPlugin = require("eslint-plugin-cypress");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...cypressPlugin.configs.recommended.globals, // Includes Cypress globals (e.g., 'cy', 'Cypress')
        browser: true, // Include browser environment globals
      },
      ecmaVersion: 2022, // Enable ES2022 syntax
    },
    plugins: {
      cypress: cypressPlugin,
    },
    rules: {
      "cypress/no-assigning-return-values": "error",
      "cypress/no-unnecessary-waiting": "error",
      "cypress/assertion-before-screenshot": "warn",
      "cypress/no-force": "error",
      "cypress/no-async-tests": "error",
      "cypress/no-async-before": "error",
      "cypress/no-pause": "error",
      "cypress/no-debug": "error",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": "warn",
    },
  },
];


