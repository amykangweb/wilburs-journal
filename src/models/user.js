'use strict';

var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../../env');

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

userSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

userSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJWT = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    email: this.email,
    exp: parseInt(expiry.getTime() / 1000),
  }, process.env.mysecret);
};

userSchema.plugin(passportLocalMongoose);

var model = mongoose.model('User', userSchema);

module.exports = model;
