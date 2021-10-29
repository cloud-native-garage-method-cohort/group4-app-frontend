const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://dog-facts-backend-group-4-dev.itzroks-100000kr1k-fz0n6p-6ccd7f378ae819553d37d5f2ee142bd6-0000.ams03.containers.appdomain.cloud/',
      changeOrigin: true,
    })
  );
};