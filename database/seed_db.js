let BlogModel = require('./models/blog')


var userName = 'Zach'
var title = 'Fourth Post'
var text = 'text text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text text'
var author = {userName:userName}

const createPost = function(title, text, author, callback){
  let post = new BlogModel({title,text,author})
  post.save()
  .then(doc => {
    console.log(doc)
 //   callback(null, doc)
  })
  .catch(err => {
 //  console.log(err)
    callback(err, null)
  })
}

createPost(title,text,author)