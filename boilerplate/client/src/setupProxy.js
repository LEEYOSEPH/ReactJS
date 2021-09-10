const porxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    porxy({
      target: 'http://localhost:5000',
      changeOrigin: true,
    }),
  );
};
