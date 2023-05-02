const express = require("express");
const { getBodyParts } = require("../../controllers/exercise.controller");

const exerciseRoute = express.Router();

exerciseRoute
  .route("/getByBodyPart")
  /**
   * @api {get}
   * @apiDescription Get all the bodyParts from the database
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   None
   *
   * @apiParam  No param is used
   * @apiParam
   *
   * @apiSuccess {Success 200} {Object[]} all the bodyparts.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(getBodyParts);

module.exports = exerciseRoute;
