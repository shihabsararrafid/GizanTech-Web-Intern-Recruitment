//imports
const express = require("express");
const cors = require("cors");
const exerciseRoute = require("./routes/v1/exercise.route");

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

app.set("view engine", "ejs");
app.use("/api/v1", exerciseRoute);

app.get("/", (re1, res) => {
  res.send("Route is working");
});

module.exports = app;
