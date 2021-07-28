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

  let post = new BlogModel({
    title:'Second Post',
    text: 'post body',
    author: {userName:'Zach'}
  })

post.save()
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.log(err)
  })


  BlogModel.find({})
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })