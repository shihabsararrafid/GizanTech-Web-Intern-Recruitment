const fs = require("fs");
const { loadUser } = require("../Middlewares/loadUser");
const { loadbodyParts } = require("../Middlewares/loadbodyParts");

module.exports.getBodyParts = async (req, res, next) => {
  try {
    const val = loadbodyParts();
    // res.status(200).json({
    //   status: "Success",
    //   message: "Data Loaded Successfully",
    //   bodyparts: val,
    // });
    res.render("pages/bodypart");
  } catch (error) {
    console.log("hello error");
  }
  // loadUser()
  //   .then((value) => {
  //     const parsedData = JSON.parse(value);

  //     //  const bodyparts = parsedData.map((exercies) => exercies.bodyPart);
  //     res.status(200).json({
  //       status: "Success",
  //       message: "Data Loaded Successfully",
  //       bodyparts: bodyParts,
  //     });
  //   })
  //   .catch((error) => {
  //     console.log(error.message);
  //   });
};
