const express = require("express"); //load express module
const app = express();
const postsMiddleware = require("./routes/post");
const photosMiddleware = require("./routes/photos");
app.use("/api/posts", postsMiddleware);
app.use("/api/photos/:id", photosMiddleware.getPhotosById);
app.use("/api/photos", photosMiddleware.getPhotos);

app.get("/", (req, res) => {
  res.status(200).send("Hello, World!");
});

app.listen(3080, () => {
  console.log("server running at 3080");
});
module.exports = app;
