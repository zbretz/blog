let mongoose = require('mongoose')
let validator = require('validator')
let db = require('../index')

let userSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},//this will be autopopulated
  joined: { type: Date, default: Date.now },
  bio: {type: String, required: false}
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

module.exports = mongoose.model('User', userSchema)