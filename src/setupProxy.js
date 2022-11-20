const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
   app.use(
      "/book/getall",
      createProxyMiddleware({
         target: "http://localhost:3001",
         changeOrigin: true,
      })
   );
   app.use(
      "/book/addnewbook",
      createProxyMiddleware({
         target: "http://localhost:3001",
         changeOrigin: true,
      })
   );
   app.use(
      "/book/removeAll",
      createProxyMiddleware({
         target: "http://localhost:3001",
         changeOrigin: true,
      })
   );
};
