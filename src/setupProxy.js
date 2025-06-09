const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://clicks.aweber.com", // Change this to your backend URL
      changeOrigin: true,
    })
  );
};
