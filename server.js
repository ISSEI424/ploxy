const express = require("express");
const path = require("path");

const app = express();

// public フォルダを使う
app.use(express.static("public"));

// トップページ
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server running");
});
