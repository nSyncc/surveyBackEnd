const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  questionOne: {
    type: Number,
    required: true
  },
  questionTwo: {
    type: Number,
    required: true
  },
  questionThree: {
    type: Number,
    required: true
  },
  questionFour: {
    type: Number,
    required: true
  },
  questionFive: {
    type: Number,
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