const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../schema/user.schema");

const app = express();

app.post("/signup", async (req, res) => {
  const { name, email, password, role } = req.body;
  const oldUser = await User.findOne({ email });

  if (oldUser) {
    return res.send({ status: false, message: "Email already exist!" });
  } else {
    const user = await User.create({ name, email, password, role });
    return res.send({ status: true, message: "You have Signup Successfully" });
  }
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user) {
    return res.send({
      token: null,
      status: false,
      message: "Wrong Credential!",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    "ABHITHAKUR",
    { expiresIn: "5 minutes" }
  );

  const refreshtoken = jwt.sign({}, "REFRESH");

  res.send({
    name: user.name,
    email: user.email,
    token: token,
    status: true,
    refreshtoken:refreshtoken,
    role: user.role,
    message:
      user.role === "user"
        ? `You have login Successfully`
        : `You have login Successfully as an Admin`,
  });
});

//refresh token ---------------
app.post("/verify", async (req, res) => {
  const refreshtoken = req.headers.authorization;

  try {
    const data = jwt.verify(refreshtoken, "REFRESH");
    const maintoken = jwt.sign(data, "ABHITHAKUR");
    return res.send({ token: maintoken });
  } catch (e) {
    return res.send("Refresh token invalid !");
  }
});

module.exports = app;
