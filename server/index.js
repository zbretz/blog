//wireframes: https://wireframepro.mockflow.com/editor.jsp?editor=on&bgcolor=white&perm=Create&ptitle=Blog&category=sketchui&projectid=Me041e71cad2ccc1b82cde2f445d57e991626878616100&publicid=5080642e1b82440ba58db39280e1f178#/page/D53c347159ede61ee5c22ff6d04b8fddf
const express = require('express');
const path = require("path");
let fetch = require('../database/models/blog_commands')
const { auth, requiresAuth } = require('express-openid-connect');
require('dotenv').config();
const bodyParser = require("body-parser");


const app = express();

app.use(
  auth({
      authRequired: false,
      auth0Logout: true,
      issuerBaseURL: process.env.ISSUER_BASE_URL,
      baseURL: process.env.BASE_URL,
      clientID: process.env.CLIENT_ID,
      secret: process.env.SECRET,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));


app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});


app.get('/callback', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});


app.get('/aa', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get('/all', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

app.get('/api/all', (req, res) => {
  var allPosts = fetch.fetchAll((err, data) => {
      if(err){
        throw(err)
      } else{
        console.log(data)
        res.json(data)
      }
    })
 });

 app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.get('/edit', (req, res) => {

 });

 app.get('/:user/feed', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
 });


app.get('/api/:user/feed', (req, res) => {
  const user = req.params['user']
  var userPosts = fetch.fetchAllbyUser(user, (err, data) => {
    if(err){
      throw(err)
    } else{
      res.json(data)
      console.log(data)
    }
  })
});


app.get('/api/users', (req, res) => {
  var userPosts = fetch.fetchAllUsers((err, data) => {
    if(err){
      throw(err)
    } else{
      res.json(data)
      console.log(data)
    }
  })
});

app.get('/create',requiresAuth(), (req, res)=>{
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
  // res.send(JSON.stringify(req.oidc.user));
})

app.post('/api/create', (req, res) => {
  console.log(req.body)
  console.log(JSON.stringify(req.oidc.user))

  var userName = JSON.stringify(req.oidc.user.email)
  var title = req.body.title
  var text = req.body.text
  //const userName = 'lisa'
  const author = {userName:userName}
  fetch.createPost(title, text, author, (err,data)=>{
  })

})

app.get('/:user/post/:id', (req, res) => {
  const user = req.params['user']
  let _id = req.params['id']
   console.log(_id)
  // _id = String(_id)
  // const _id = '6104686c0a39b403e3248431'
  // const _id = '610340848779b2ddec4a95ef'
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));

})

  app.get('/api/:user/post/:id', (req, res) => {
    const user = req.params['user']
    let _id = req.params['id']
    // console.log(_idd)
    // _id = String(_id)
    // const _id = '6104686c0a39b403e3248431'
    // const _id = '610340848779b2ddec4a95ef'
    fetch.fetchPost(_id, (err, data)=>{
      if(err){
        console.log(err)
      } else {
      res.json(data)
      }
    })

//res.send(JSON.stringify(req.oidc.user));
});

app.listen(8000, () =>
  console.log('Example app listening on port 8000!'),
);

