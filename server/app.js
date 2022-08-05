const express = require("express"); //load express module
const app = express();
const middleware = require("./routes/post");
app.use("/posts", middleware);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.listen(3000, () => {
  console.log("server running at 3000");
});
module.exports = app;
