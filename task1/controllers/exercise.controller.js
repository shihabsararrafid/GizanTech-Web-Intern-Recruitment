const fs = require("fs");
const { loadUser } = require("../Middlewares/loadUser");
const { loadbodyParts } = require("../Middlewares/loadbodyParts");

module.exports.getBodyParts = async (req, res, next) => {
  // try {
  //   const val = loadbodyParts();
  //   // res.status(200).json({
  //   //   status: "Success",
  //   //   message: "Data Loaded Successfully",
  //   //   bodyparts: val,
  //   // });
  //   res.render("pages/bodypart");
  // } catch (error) {
  //   console.log("hello error");
  // }
  loadUser()
    .then((value) => {
      const parsedData = JSON.parse(value);
      let bodyParts = [];
      setTimeout(() => {
        // for (exercise in parsedData) {
        //   if (bodyParts.indexOf(exercise.bodyPart) === -1) {
        //     console.log(exercise.bodyPart);
        //     console.log("he");
        //     bodyParts.push(exercise.bodyPart);
        //   }
        // }
        parsedData.forEach((element) => {
          if (bodyParts.indexOf(element.bodyPart) === -1) {
            //console.log(element.bodyPart);
            bodyParts.push(element.bodyPart);
          }
        });
        // console.log("hi");
      }, 1000);
      setTimeout(() => {
        res.status(200).render("pages/bodypart", {
          data: bodyParts,
          title: "All Bodyparts",
        });
      }, 1500);

      //  const bodyparts = parsedData.map((exercies) => exercies.bodyPart);
      // res.status(200).json({
      //   status: "Success",
      //   message: "Data Loaded Successfully",
      //   bodyparts: bodyParts,
      // });
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
