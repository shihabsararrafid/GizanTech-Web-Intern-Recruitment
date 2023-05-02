const fs = require("fs");
const path = require("path");

module.exports.loadUser = async () => {
  console.log(path.resolve("../task1/exercise.json"));
  let data = fs.readFileSync(path.resolve("../task1/exercise.json"), "utf-8");
  //files/exercise.json
  return data;
};
