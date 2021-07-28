let mongoose = require('mongoose')
let validator = require('validator')
let db = require('../index')

let blogSchema = new mongoose.Schema({
  title: {type: String, required: true, unique: true},
  text: {type: String, required: true},
//createdAt: Date;
  date: { type: Date, default: Date.now },
  author: {userName:String}
})

// blogSchema.pre('save', function (next) {
//   let now = Date.now()

//   this.updatedAt = now
//   // Set a value for createdAt only if it is null
//   if (!this.createdAt) {
//     this.createdAt = now
//   }

//   // Call the next function in the pre-save chain
//   next()
// })

module.exports = mongoose.model('Blog', blogSchema)