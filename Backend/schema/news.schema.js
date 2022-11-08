const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  image: { type: String },
  author: { type: String },
  website: { type: String },
  title: { type: String },
  content: { type: String },
  description: { type: String },
  date: { type: String },
  url: { type: String }
});

const News = mongoose.model("news", newsSchema);
module.exports = News;
