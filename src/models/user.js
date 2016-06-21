'use strict';

var mongoose = require('mongoose');

// user.email

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  hash: String,
  salt: String
});

var model = mongoose.model('User', userSchema);

module.exports = model;
