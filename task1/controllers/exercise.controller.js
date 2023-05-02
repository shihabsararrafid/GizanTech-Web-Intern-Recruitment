const fs = require("fs");
const { loadData } = require("../Middlewares/loadData");

module.exports.getBodyParts = async (req, res, next) => {
  //calling the loadData middleware to load all the data
  loadData()
    .then((value) => {
      const parsedData = JSON.parse(value);
      let bodyParts = [];
      // getting the unique bodyParts
      setTimeout(() => {
        parsedData.forEach((element) => {
          if (bodyParts.indexOf(element.bodyPart) === -1) {
            bodyParts.push(element.bodyPart);
          }
        });
      }, 1000);
      setTimeout(() => {
        // rendering ejs file as a response from view folder
        res.status(200).render("pages/bodypart", {
          data: bodyParts,
          title: "All Bodyparts",
        });
      }, 1500);
    })
    .catch((error) => {
      res.status(400).json({
        status: "Fail",
        message: "Failed to load data from db",
        error: error.message,
      });
      console.log(error.message);
    });
};

module.exports.getExerciseByBodyPart = async (req, res, next) => {
  loadData()
    .then((val) => {
      const { bodyPart } = req.params;
      const parsedData = JSON.parse(val);
      let exercises = [];
      // res.send(bodyPart);
      setTimeout(() => {
        parsedData.forEach((element) => {
          if (element.bodyPart === bodyPart) {
            exercises.push(element);
          }
        });
      }, 1000);
      setTimeout(() => {
        //  rendering ejs file as a response from view folder
        res.status(200).render("pages/exercises", {
          data: exercises,
          title: `All Exercises for ${bodyPart}`,
        });
        // res.send(exercises);
      }, 1500);
    })
    .catch((error) => {
      res.status(400).json({
        status: "Fail",
        message: "Failed to load data from db",
        error: error.message,
      });
      console.log(error.message);
    });
};

module.exports.getExerciseById = async (req, res, next) => {
  loadData()
    .then((val) => {
      const { id } = req.params;
      const parsedData = JSON.parse(val);
      let exercises = [];
      // res.send(bodyPart);
      setTimeout(() => {
        parsedData.forEach((element) => {
          if (element.id === id) {
            exercises.push(element);
          }
        });
      }, 1000);
      setTimeout(() => {
        //  rendering ejs file as a response from view folder
        res.status(200).render("pages/exercises", {
          data: exercises,
          title: ` Exercise for id ${id}`,
        });
        // res.send(exercises);
      }, 1500);
    })
    .catch((error) => {
      res.status(400).json({
        status: "Fail",
        message: "Failed to load data from db",
        error: error.message,
      });
      console.log(error.message);
    });
};
