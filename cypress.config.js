const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  e2e: {
    baseUrl: "https://www.edenentradas.com.ar/sitio/contenido/inicio",
  },
});
