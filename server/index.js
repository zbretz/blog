//wireframes: https://wireframepro.mockflow.com/editor.jsp?editor=on&bgcolor=white&perm=Create&ptitle=Blog&category=sketchui&projectid=Me041e71cad2ccc1b82cde2f445d57e991626878616100&publicid=5080642e1b82440ba58db39280e1f178#/page/D53c347159ede61ee5c22ff6d04b8fddf
const express = require('express');
const path = require("path");
let fetch = require('../database/models/blog_commands')
const { auth, requiresAuth } = require('express-openid-connect');
require('dotenv').config();

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

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: 'a long, randomly-generated string stored in env',
//   baseURL: 'http://localhost:8000',
//   clientID: 'XfJy7QIBeHtppqnjKikHJWotC6MBVJWf',
//   issuerBaseURL: 'https://dev-h4p9ruiy.us.auth0.com'
// };

// //auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config));

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


 app.get('/:user/post/:id', (req, res) => {
 });

app.listen(8000, () =>
  console.log('Example app listening on port 8000!'),
);

