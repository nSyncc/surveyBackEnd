const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  questionOne: {
    type: String,
    required: true
  },
  questionTwo: {
    type: String,
    required: true
  },
  questionThree: {
    type: String,
    required: true
  },
  questionFour: {
    type: String,
    required: true
  },
  questionFive: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Survey',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Question', questionSchema)