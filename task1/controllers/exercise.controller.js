const fs = require("fs");
const { loadUser } = require("../Middlewares/loadUser");

module.exports.getBodyParts = async (req, res, next) => {
  loadUser()
    .then((value) => {
      const parsedData = JSON.parse(value);
      res.send(parsedData);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
