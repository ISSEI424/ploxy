const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(express.static("public"));

app.use("/proxy", (req, res, next) => {
  let url = req.query.url;
  if (!url.startsWith("http")) url = "https://" + url;

  createProxyMiddleware({
    target: url,
    changeOrigin: true,
    pathRewrite: { "^/proxy": "" }
  })(req, res, next);
});

app.listen(3000);
