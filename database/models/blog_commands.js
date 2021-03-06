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
//     title:'Something',
//     text: 'text text text',
//     author: {userName:'Kate'}
//   })

// post.save()
//   .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.log(err)
//   })

const fetchAll = function(callback){
  BlogModel.find({}).
  limit(12).
  sort({date: -1})
  .then(doc => {
    // console.log(doc)
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
  //  console.log(doc)
    callback(null, doc)
  })
  .catch(err => {
    console.error(err)
    callback(err, null)
  })
}

const fetchAllUsers = function(callback){
  BlogModel.find().distinct('author')
  .then(doc => {
   // console.log(doc)
    callback(null, doc)
  })
  .catch(err => {
    console.error(err)
    callback(err, null)
  })
}

 const fetchPost = function(_id, callback){
  BlogModel.findById(_id)
  .then(doc=> {callback(null,doc)})
  .catch(err => {
    callback(err, null)
  })
}

// const createPost = function(title, text, author){
//   let post = new BlogModel({
//     title:'Third Post..or is it fourth?',
//     text: 'text text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text text',
//     author: {userName:'Hazel'}
//   })
// }

var userName = 'Zach'
var title = 'Fourth Post'
var text = 'text text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text text'
var author = {userName:userName}

const createPost = function(title, text, author, callback){
  let post = new BlogModel({title,text,author})
  post.save()
  .then(doc => {
    console.log(doc)
    callback(null, doc)
  })
  .catch(err => {
    console.log(err)
    callback(err, null)
  })
}

//createPost(title,text,author)

  // fetchAll(()=>{})

//fetchAllUsers((err, data) => console.log(data))


  // BlogModel.deleteMany({blog: 'First Post'})
  // .then(doc => {
  //   console.log(doc)
  // })
  // .catch(err => {
  //   console.error(err)
  // })

  // BlogModel.deleteOne({ title: 'egeg' }, function (err) {
  //   if(err) console.log(err);
  //   console.log("Successful deletion");
  // });

  module.exports = {fetchAll, fetchAllbyUser, fetchAllUsers, fetchPost, createPost}