const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/v1",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    specPattern: "cypress/e2e/**/*.spec.js", // define onde os arquivos de teste estão localizados
    setupNodeEvents(on, config) {
      // configure plugins or tasks here
    },
  },
});
