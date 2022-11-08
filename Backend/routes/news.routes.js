const express = require("express")
const News = require("../schema/news.schema")


const app = express()

app.get("/", async (req, res) =>{
  const news = await News.find().sort({date:-1})
  res.send(news)
})


app.post("/addnews", async (req, res) =>{
  const {image, author, website, title, content, description, date, url} = req.body;
  const NewNews = await News.create({image, author, website, title, content, description, date, url})
  res.send({
    status: true,
    message: "New news Added Successfully",
  });
})


app.post("/deletenews", async (req, res) =>{
  const {_id} = req.body;
  console.log('_id: ', _id);
  const NewNews = await News.deleteOne({_id:_id})
  res.send({
    status: true,
    message: "New news deleted Successfully",
  });
})

module.exports = app;