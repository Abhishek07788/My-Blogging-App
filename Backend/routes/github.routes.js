const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/callback", (req, res) => {
  console.log(req.query.code);
  //use this code to access private github APIs / this is a token
  res.send("<h1>Your are sign in with google.</h1>");

});

module.exports = app;
