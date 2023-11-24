const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api/v1",
    createProxyMiddleware({
      target: process.env.REACT_APP_API_KEY,
      changeOrigin: true,
    })
  );
};
