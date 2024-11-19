const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  const text = "Server del mio blog";
  res.send(text);
});

app.listen(port, () => {
  console.log(`Example app is listening on ${port}`);
});
