let BlogModel = require('./blog')

// let post = new BlogModel({
//   title: 'First Post'
// })

  // let blogSchema = new mongoose.Schema({
  //   title: {type: String, required: true, unique: true},
  //   text: {type: String, required: true},
  // //createdAt: Date;
  //   date: { type: Date, default: Date.now },
  //   author: {userName:String}
  // })

//   let post = new BlogModel({
//     title:'First Post',
//     text: 'post body',
//     author: {userName:'Zach'}
//   })

// post.save()
//   .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.log(err)
//   })

const fetchAll = function(callback){
  BlogModel.find({})
  .then(doc => {
    console.log(doc)
    callback(null, doc)
  })
  .catch(err => {
    console.error(err)
    callback(err, null)
  })
}

const fetchAllbyUser = function(user, callback){
  var author = {userName:user}
  BlogModel.find({author: author})
  .then(doc => {
    console.log(doc)
    callback(null, doc)
  })
  .catch(err => {
    console.error(err)
    callback(err, null)
  })
}

  // BlogModel.deleteMany({blog: 'First Post'})
  // .then(doc => {
  //   console.log(doc)
  // })
  // .catch(err => {
  //   console.error(err)
  // })

  module.exports = {fetchAll, fetchAllbyUser}