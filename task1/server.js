const app = require("./app");

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(__dirname);
  console.log(`server is running at port ${port}`);
});
