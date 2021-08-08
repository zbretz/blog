let UserModel = require('./user')

var username = 'Zach'
var email = 'zachary.bretz@gmail.com'
var bio = 'creator. studying at hack reactor.'

const createUser = function(username, email, bio, callback){
  let user = new UserModel({username, email, bio})
  user.save()
  .then(doc => {
   // console.log(doc)
    callback(null, doc)
  })
  .catch(err => {
    console.log(err)
  //  callback(err, null)
  })
}

const getUserNameFromEmail = function(email, callback){
    UserModel.find({email:email})
  .then(doc=> {callback(null,doc)})
  .catch(err => {
    callback(err, null)
  })
}

// createUser(username, email, bio, (err,data)=>{
//   if (err){
//     console.log(err)
//   }
//   console.log(data)
// })

//getUserNameFromEmail('zachary.bretz@gmail.com', (err, data) => console.log(data))




module.exports = {createUser}