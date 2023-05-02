const express = require("express");

const exerciseController = require("../../controllers/exercise.controller");

const exerciseRoute = express.Router();

exerciseRoute
  .route("/getBodyParts")
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
  .get(exerciseController.getBodyParts);

exerciseRoute
  .route("/getExerciseByBodyPart/:bodyPart")
  /**
   * @api {get}
   * @apiDescription Get all exercise for a certain bodyPart
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam
   * @apiParam
   *
   * @apiSuccess {Object[]} all the exercises which are done on the requested bodyPart.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */ .get(exerciseController.getExerciseByBodyPart);

exerciseRoute
  .route("/getById/:id")
  /**
   * @api {get}
   * @apiDescription Get specific exercise according to an Id
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} specific exercise
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(exerciseController.getExerciseById);
exerciseRoute
  .route("/getByName/:name")
  /**
   * @api {get}
   * @apiDescription Get all the users from the database
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the users.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(exerciseController.getExerciseByName);
exerciseRoute
  .route("/getTargets")
  /**
   * @api {get}
   * @apiDescription Get all the targets from the database
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the targets.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(exerciseController.getTargetMuscles);

exerciseRoute
  .route("/getByTarget/:target")
  /**
   * @api {get}
   * @apiDescription Get all the users from the database
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the users.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(exerciseController.getExerciseByTarget);

exerciseRoute
  .route("/getAllExercises")
  /**
   * @api {get}
   * @apiDescription Get all the users from the database
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the users.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(exerciseController.getAllExercises);

exerciseRoute
  .route("/getEquipments")
  /**
   * @api {get}
   * @apiDescription Get all the users from the database
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the users.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(exerciseController.getEquipments);
module.exports = exerciseRoute;
