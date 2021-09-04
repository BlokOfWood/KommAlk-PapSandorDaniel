const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.use(express.static(__dirname + "/web/"));

app.get("/", (req, res) => {
  console.log(__dirname + "\\web\\index.html")
});