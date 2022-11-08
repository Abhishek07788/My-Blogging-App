const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema({
  author: { type: String },
  title: { type: String },
  content: { type: String },
  description: { type: String },
  date: { type: String },
});

const Interview = mongoose.model("interview", interviewSchema);
module.exports = Interview;
