//wireframes: https://wireframepro.mockflow.com/editor.jsp?editor=on&bgcolor=white&perm=Create&ptitle=Blog&category=sketchui&projectid=Me041e71cad2ccc1b82cde2f445d57e991626878616100&publicid=5080642e1b82440ba58db39280e1f178#/page/D53c347159ede61ee5c22ff6d04b8fddf
const express = require('express');
const path = require("path");
let fetch = require('../database/models/blog_commands')
let fetchUser = require('../database/models/user_commands')
const { auth, requiresAuth } = require('express-openid-connect');
require('dotenv').config();
const bodyParser = require("body-parser");
var session = require('express-session')

const app = express();

app.use(
  auth({
        routes: {
        // Override the default login route to use your own login route as shown below
        login: false
      },
      authRequired: false,
      auth0Logout: true,
      issuerBaseURL: process.env.ISSUER_BASE_URL,
      baseURL: process.env.BASE_URL,
      clientID: process.env.CLIENT_ID,
      secret: process.env.SECRET,
  })
);

app.use(session({
  secret: 'keyboard cat',
  // resave: false,
  // saveUninitialized: true,
  // cookie: { secure: true }
}))


const checkRegistration = () => {
  return (req, res, next) => {

    req.session.originalDestination = req.originalUrl
    var email = req.oidc.user.email
    fetchUser.getUserNameFromEmail(email, (err,data)=>{
      if (err){
        throw (err)
      } else {
          if(data[0]){
            next()
          } else {//REDIRECT HERE TO REGISTER PAGE
          res.redirect('/register_user')
        }
      }
    })
  }
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));


app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});


app.get('/login', (req, res) => {

  //ok so login doesn't relate to the auth process...it's just a dedicated login route?
  // res.oidc.login({ returnTo: '/profile' })...and then polly this function <- does the login
  // this sounds right..the login route was provided by auth0..they gove you the ption to do it manually and use the login utility at res.oidc.login




  // console.log(req.oidc.user.email)
  console.log('AAAAA')
  console.log(req.oidc)


  var email = req.oidc.user.email

  let username;

  //below should really be a 'find one query'
  fetchUser.getUserNameFromEmail(email, (err,data)=>{
    if (err){
      throw (err)
    } else {
        if(data[0]){
          console.log('test', data[0].username)
          username = data[0].username
          // res.redirect('/create')
        } else //REDIRECT HERE TO REGISTER PAGE
        res.redirect('/profile')

      }
  })



  // res.oidc.login({ returnTo: '/profile' })
  // else res.oidc.login({returnTo: '/aa'})

  // plan: new route that /login redirects to.
  // do all the checking/redirection in there. need to find the original destination tho (originalUrl?)

  });

  app.get('/register_user', requiresAuth(),  (req, res) =>{
    // var email = req.oidc.user.email

    // let username;

    // //below should really be a 'find one query'
    //.getUserNameFromEmail(email, (err,data)=>{
    //   if (err){
    //     throw (err)
    //   } else {
    //       if(data[0]){
    //         console.log('test', data[0].username)
    //         username = data[0].username
    //         res.redirect('/create')
    //       } else //REDIRECT HERE TO REGISTER PAGE
    //       res.redirect('/profile')

    //     }
    // })
    console.log('REGISTER USER ORIGINAL URL: ', req.originalUrl)
    console.log(req.session.originalDestination)

    res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
    // res.send('registration page')

  })

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
        // console.log(data)
        res.json(data)
      }
    })
 });

 app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.get('/edit', (req, res) => {
  res.send(history.location)

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
      // console.log(data)
    }
  })
});


app.get('/api/users', (req, res) => {
  var userPosts = fetch.fetchAllUsers((err, data) => {
    if(err){
      throw(err)
    } else{
      res.json(data)
      // console.log(data)
    }
  })
});

app.get('/create',requiresAuth(), checkRegistration(), (req, res)=>{
  console.log('url: /create', req.oidc.user)
  console.log('req info', req.url)
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
})

app.post('/api/create', (req, res) => {
  var email = req.oidc.user.email//JSON.stringify(req.oidc.user.email)
  console.log('email', req.oidc.user.email)

  var title = req.body.title
  var text = req.body.text

  //below should really be a 'find one query'
  fetchUser.getUserNameFromEmail(email, (err,data)=>{
    if (err){
      throw (err)
    } else {
      console.log('test', data[0].username)
      const userName = data[0].username
      const author = {userName:userName}
      fetch.createPost(title, text, author, (err,data)=>{
      })
    }
  })

  res.send('success')
})

app.post('/api/register_user', (req, res) => {
  var email = req.oidc.user.email

  var username = req.body.username
  var bio = req.body.bio

  fetchUser.registerUser(username, email, bio, (err,data)=>{
  })

})

app.get('/:user/post/:id', (req, res) => {
  const user = req.params['user']
  let _id = req.params['id']
   console.log(_id)
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
})

  app.get('/api/:user/post/:id', (req, res) => {
    const user = req.params['user']
    let _id = req.params['id']
    fetch.fetchPost(_id, (err, data)=>{
      if(err){
        console.log(err)
      } else {
        res.json(data)
      }
    })
});

app.listen(8000, () =>
  console.log('Example app listening on port 8000!'),
);

