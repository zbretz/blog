const axios = require('axios');

const getFeedOneUser = (user = 'Zach', callback) => {

  const instance = axios.create({
    baseURL: 'http://localhost:8000',
  });

  instance.get(`/api/${user}/feed`)
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

module.exports = {getFeedAllUsers, getFeedOneUser}
