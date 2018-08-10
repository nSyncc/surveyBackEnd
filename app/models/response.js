const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  responseOne: {
    type: String,
    required: true
  },
  responseTwo: {
    type: String,
    required: true
  },
  responseThree: {
    type: String,
    required: true
  },
  responseFour: {
    type: String,
    required: true
  },
  responseFive: {
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

module.exports = mongoose.model('Response', responseSchema)