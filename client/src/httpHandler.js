const axios = require('axios');

const getFeedOneUser = (user = 'Zach', callback) => {

  const instance = axios.create({
    baseURL: 'http://localhost:8000',
  });

  instance.get(`/api/${user}/feed`)
    .then(response => {
   // console.log(response.data);
    callback(null,response.data)
    })
    .catch(function (err) {
    console.log(err);
    callback(err, null)

    })
    .then(function () {
      //
    });

}

const getFeedAllUsers = (callback) => {

  const instance = axios.create({
    baseURL: 'http://localhost:8000',
  });

  instance.get(`/api/all`)
    .then(response => {
    // console.log(response.data);
    callback(null,response.data)
    })
    .catch(function (err) {
    console.log(err);
    callback(err, null)

    })
    .then(function () {
      //
    });

}


const getUsers = (callback) => {

  const instance = axios.create({
    baseURL: 'http://localhost:8000',
  });

  instance.get(`/api/users`)
    .then(response => {
    // console.log(response.data);
    callback(null,response.data)
    })
    .catch(function (err) {
    console.log(err);
    callback(err, null)

    })
    .then(function () {
      //
    });

}

const getPost = (user='Zach', _id='610340848779b2ddec4a95ef', callback) => {

  const instance = axios.create({
    baseURL: 'http://localhost:8000',
  });

  instance.get(`/api/${user}/post/${_id}`)
    .then(response => {
    console.log(response.data);
    callback(null,response.data)
    })
    .catch(function (err) {
    console.log(err);
    callback(err, null)

    })
    .then(function () {
      //
    });

}


// const create = (user='Zach', _id='610340848779b2ddec4a95ef', callback) => {
const create = (post) => {
  const {title, text} = post

    return axios.post('http://localhost:8000/api/create', {
    title: title,
    text: text
  })

}

const registerUser = (user, callback) => {
  const {username, bio} = user

  axios.post('http://localhost:8000/api/register_user', {
    username: username,
    bio: bio
  }).then(response => {
    callback(null,response.data)
    })
    .catch(function (err) {
    callback(err, null)
    })


}

module.exports = {getFeedAllUsers, getFeedOneUser, getUsers, getPost, create, registerUser}
