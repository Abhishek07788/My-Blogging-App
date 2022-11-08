const express = require("express")
const Interview = require("../schema/interview.schema")


const app = express()

app.get("/", async (req, res) =>{
  const interview = await Interview.find().sort({date:-1})
  res.send(interview)
})


app.post("/addinterview", async (req, res) =>{
  const {author,title, content, description, date} = req.body;
  const newInterview = await Interview.create({author,title, content, description, date})
  res.send({
    status: true,
    message: "New interview Q. Added Successfully",
  });
})


app.post("/deleteinterview", async (req, res) =>{
  const {_id} = req.body;
  console.log('_id: ', _id);
  const Newinterview = await Interview.deleteOne({_id:_id})
  res.send({
    status: true,
    message: "Interview Q. deleted Successfully",
  });
})

module.exports = app;