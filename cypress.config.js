const { defineConfig } = require("cypress");
const browserify = require('@cypress/browserify-preprocessor');

module.exports = defineConfig({
  viewportWidth: 1078,
  viewportHeight: 660,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  env: {
    baseUrl : 'https://www.saucedemo.com'
  },
  e2e: {
    setupNodeEvents(on) {
      // implement node event listeners here
      let options = browserify.defaultOptions;
      options.browserifyOptions.transform[1][1].plugins.push([
        'module-resolver',
        {
          alias: {
            '@tests': './tests',
            '@helpers': '.tests/helpers'
          },
        },
      ]);
      on('file:preprocessor', browserify(options));
    },
    specPattern: 'tests/scenario/**/*.test.js'
  },
});
