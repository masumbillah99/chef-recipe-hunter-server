const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const chefData = require("./data/chef.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/chef", (req, res) => {
  res.send(chefData);
});

app.get("/chef/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedChef = chefData.find((sc) => sc.id === id); // sc = single chef
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`running port: ${port}`);
});
