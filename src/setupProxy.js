const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://boiling-wave-77839.herokuapp.com",
      changeOrigin: true,
    })
  );
};
