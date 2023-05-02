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
