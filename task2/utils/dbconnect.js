const mongoose = require("mongoose");

module.exports.DbConnect = () => {
  mongoose.connect(process.env.DB_URI).then(() => {
    console.log("Db connection success");
  });
};
