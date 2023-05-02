const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const chefData = require("./data/chef.json");

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/chef", (req, res) => {
  res.send(chefData);
});

app.listen(port, () => {
  console.log(`running port: ${port}`);
});
