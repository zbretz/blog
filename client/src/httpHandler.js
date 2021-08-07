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
    console.log(response.data);
    callback(null,response.data)
    //console.log(response.data)
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
    console.log(response.data);
    callback(null,response.data)
    //console.log(response.data)
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
    //console.log(response.data)
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
const create = (text, callback) => {


  axios.post('http://localhost:8000/api/create', {
    text: text,
  });

}
module.exports = {getFeedAllUsers, getFeedOneUser, getUsers, getPost, create}
