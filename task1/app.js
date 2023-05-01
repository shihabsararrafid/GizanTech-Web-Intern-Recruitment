//imports
const express = require("express");
const cors = require("cors");

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

app.get("/", (re1, res) => {
  res.send("Route is working");
});

module.exports = app;
