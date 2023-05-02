const { loadUser } = require("./loadUser");

module.exports.loadbodyParts = async (arr) => {
  loadUser()
    .then((val) => {
      const parsedData = JSON.parse(val);
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("foo");
        }, 300);
      });

      return bodyParts;
    })
    .catch((err) => {
      console.log(err.message);
    });
};
