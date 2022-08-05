const express = require("express"); //load express module
const app = express();
const middleware = require("./routes/post");
app.use("/api/posts", middleware);

app.get("/", (req, res) => {
  res.status(200).send("Hello, World!");
});
app.listen(3080, () => {
  console.log("server running at 3080");
});
module.exports = app;
