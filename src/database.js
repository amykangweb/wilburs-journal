'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wilburs-journal', function(err) {
  if(err) {
    console.log('Failed connecting to Mongodb!');
  } else {
    console.log('Successfully connected to Mongo!');
  }
});
