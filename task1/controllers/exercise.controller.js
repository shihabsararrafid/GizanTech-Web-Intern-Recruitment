const fs = require("fs");
const { loadData } = require("../Middlewares/loadData");

module.exports.getBodyParts = async (req, res, next) => {
  //calling the loadData middleware to load all the data
  loadData()
    .then((value) => {
      const url = "http://localhost:3001/api/v1/getExerciseByBodyPart";
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
          url: url,
          name: "BodyParts",
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
        if (exercises.length !== 0)
          res.status(200).render("pages/exercises", {
            data: exercises,
            title: `All Exercises for ${bodyPart}`,
          });
        else
          res.status(400).json({
            status: "failed",
            message: "No such bodypart exists in db",
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
        if (exercises.length !== 0)
          res.status(200).render("pages/exercises", {
            data: exercises,
            title: ` Exercise for id ${id}`,
          });
        else
          res
            .status(400)
            .json({ status: "failed", message: "No such id exists in db" });
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

module.exports.getExerciseByName = async (req, res, next) => {
  loadData()
    .then((val) => {
      const { name } = req.params;
      const parsedData = JSON.parse(val);
      let exercises = [];
      // res.send(bodyPart);
      setTimeout(() => {
        parsedData.forEach((element) => {
          if (element.name === name) {
            exercises.push(element);
          }
        });
      }, 1000);
      setTimeout(() => {
        //  rendering ejs file as a response from view folder
        if (exercises.length !== 0)
          res.status(200).render("pages/exercises", {
            data: exercises,
            title: ` Exercise for name ${name}`,
          });
        else
          res
            .status(400)
            .json({ status: "failed", message: "No such name exists in db" });
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

module.exports.getTargetMuscles = async (req, res, next) => {
  loadData()
    .then((value) => {
      const parsedData = JSON.parse(value);
      let targets = [];
      const url = "http://localhost:3001/api/v1/getByTarget";
      // getting the unique bodyParts
      setTimeout(() => {
        parsedData.forEach((element) => {
          if (targets.indexOf(element.target) === -1) {
            targets.push(element.target);
          }
        });
      }, 1000);
      setTimeout(() => {
        // rendering ejs file as a response from view folder
        res.status(200).render("pages/bodypart", {
          data: targets,
          url: url,
          name: "targets",
          title: "All targets",
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

module.exports.getExerciseByTarget = async (req, res, next) => {
  loadData()
    .then((val) => {
      const { target } = req.params;
      const parsedData = JSON.parse(val);
      let exercises = [];
      // res.send(bodyPart);
      setTimeout(() => {
        parsedData.forEach((element) => {
          if (element.target === target) {
            exercises.push(element);
          }
        });
      }, 1000);
      setTimeout(() => {
        //  rendering ejs file as a response from view folder
        if (exercises.length !== 0)
          res.status(200).render("pages/exercises", {
            data: exercises,
            title: ` Exercise for targetPart ${target}`,
          });
        else
          res
            .status(400)
            .json({ status: "failed", message: "No such name exists in db" });
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

module.exports.getAllExercises = async (req, res, next) => {
  loadData()
    .then((val) => {
      const parsedData = JSON.parse(val);
      let exercises = [];
      // res.send(bodyPart);
      res.status(200).render("pages/exercises", {
        data: parsedData,
        title: ` All Exercises`,
      });
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

module.exports.getEquipments = async (req, res, next) => {
  loadData()
    .then((value) => {
      const parsedData = JSON.parse(value);
      let equipments = [];
      const url = "http://localhost:3001/api/v1/getByEquipment";
      // getting the unique bodyParts
      setTimeout(() => {
        parsedData.forEach((element) => {
          if (equipments.indexOf(element.equipment) === -1) {
            equipments.push(element.equipment);
          }
        });
      }, 1000);
      setTimeout(() => {
        // rendering ejs file as a response from view folder
        res.status(200).render("pages/bodypart", {
          data: equipments,
          url: url,
          name: "Equipments",
          title: "All Equipments",
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
