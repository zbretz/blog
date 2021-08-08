let UserModel = require('./user')

//  const fetchPost = function(_id, callback){
//   BlogModel.findById(_id)
//   .then(doc=> {callback(null,doc)})
//   .catch(err => {
//     callback(err, null)
//   })
// }


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

createUser(username, email, bio, (err,data)=>{
  if (err){
    console.log(err)
  }
  console.log(data)
})

//fetchAll(()=>{})

//fetchAllUsers((err, data) => console.log(data))




module.exports = {createUser}