const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Informe aqui a URL da sua aplicação local
    baseUrl: 'http://localhost:3000'
  }
});
