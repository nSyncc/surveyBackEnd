const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  response:{
    type: String,
    required: true
  },
  surveyID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "survey",
    required: true
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  }
})