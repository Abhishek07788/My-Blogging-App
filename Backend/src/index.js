const express = require("express");
const cors = require("cors");
const compression = require("compression");
const DbConnect = require("../config/db");
const NewsRoute = require("../routes/news.routes");
const UserRoute = require("../routes/user.routes");
const githubRoute = require("../routes/github.routes");
const interviewRoute = require("../routes/interview.routes");

const app = express();

app.use(cors());
app.use(compression());
app.use(express.json());
app.use("/news", NewsRoute);
app.use("/user", UserRoute);
app.use("/github", githubRoute);
app.use("/interview", interviewRoute);

app.get("/", (req, res) => {
  res.send("<h2>This is my blogging app<h2>");
});

app.listen(8080, async () => {
  await DbConnect();
  console.log("stated at: http://localhost:8080");
});
