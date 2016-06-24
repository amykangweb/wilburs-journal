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

  // Registration route
  router.post('/register', function(req, res) {
    var user = new User();

    user.email = req.body.email;
    user.setPassword(req.body.password);

    user.save(function(err, user) {

      if(err) {
        return res.status(500).json({err: err.message});
      }
      var token = user.generateJWT();
      res.json({'token': token, 'email': user.email});
    });
  });

  // Login route
  router.post('/login', function(req, res) {

    passport.authenticate('local', function(err, user, info) {
      var token;

      // If Passport throws/catches an error
      if (err) {
        res.status(404).json(err);
        return;
      }

      // If a user is found
      if (user) {
        token = user.generateJWT();
        res.status(200);
        res.json({
          "token" : token,
          "email" : user.email
        });
      } else {
        // If user is not found
        res.status(401).json(info);
      }

    })(req, res);
  });

module.exports = router;
