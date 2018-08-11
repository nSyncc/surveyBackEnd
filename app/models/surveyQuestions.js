const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  question:{
    type: String,
    required: true
  },
  surveyID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "survey",
    required: true
  }
})