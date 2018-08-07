const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  questionResponse:{
    type: String,
    required: true
  },
  status: {
    type: String, 
    required: true
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})
