'use strict';

var express = require('express');
var User = require('../models/user');
var passport = require('passport');
var secret = require('../../env');
var jwt = require('express-jwt');
var auth = jwt({
  secret: process.env.mysecret,
  userProperty: 'payload'
});

var router = express.Router();

router.post('/register', function(req, res) {
  var user = new User();

  console.log("users");

  user.email = req.body.email;
  user.setPassword(req.body.password);

  user.save(function(err, user) {
    console.log("how about here");

    if(err) {
      console.log(err.message);
      return res.status(500).json({err: err.message});
    }
    console.log("made it here");
    var token = user.generateJWT();
    res.json({'token': token, 'email': user.email});
  });
});

module.exports = router;
