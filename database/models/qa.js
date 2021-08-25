let mongoose = require('mongoose')
let validator = require('validator')
let db = require('../index')

let questionsSchema = new mongoose.Schema({
  title: {type: String, required: true, unique: true},
  text: {type: String, required: true},
  date: { type: Date, default: Date.now },
  author: mongoose.ObjectId,
  answers: []
})

let answersSchema = new mongoose.Schema({
  text: {type: String, required: true},
  date: { type: Date, default: Date.now },
  author: mongoose.ObjectId,
  question: mongoose.ObjectId
})

module.exports = mongoose.model('Blog', blogSchema)