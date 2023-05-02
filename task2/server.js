const app = require("./app");
const dotenv = require("dotenv").config();
const { DbConnect } = require("./utils/dbconnect");

DbConnect();
const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
