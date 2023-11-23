const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api/v1",
    createProxyMiddleware({
      target: "https://dev-api.dealtable.co.kr",
      changeOrigin: true,
    })
  );
};
