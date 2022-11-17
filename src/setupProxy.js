const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
   app.use(
      "/package/getall",
      createProxyMiddleware({
         target: "http://localhost:3001",
         changeOrigin: true,
      })
   );
};
