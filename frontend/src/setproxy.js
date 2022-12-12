const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/users',
    createProxyMiddleware({
      target: 'https://localhost:5000',
      changeOrigin: true,
    })
  );
};