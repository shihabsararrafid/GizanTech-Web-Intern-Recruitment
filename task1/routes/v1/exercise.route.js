const express = require("express");
const { getBodyParts } = require("../../controllers/exercise.controller");

const exerciseRoute = express.Router();

exerciseRoute.route("/getByBodyPart").get(getBodyParts);

module.exports = exerciseRoute;
