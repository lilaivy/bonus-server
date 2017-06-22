/* eslint-disable */
const mongoose = require('mongoose-hapi');
mongoose.Promise = Promise;

const dbUri = 'mongodb://localhost:27017/friends'; 
mongoose.connect(dbUri);

//CONNECTION
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbUri);
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection error:' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});