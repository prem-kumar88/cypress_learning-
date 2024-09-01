const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: true,
    experimentalStudio:true,
   // baseUrl: "https://animechan.io/api/v1/quotes"
  },
});
