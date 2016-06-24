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

  router.post('/login', function(req, res) {
    console.log("log in request");
    console.log(res);
    passport.authenticate('local', function(err, user, info) {
    console.log("last passport auth");
    console.log(user);
      var token;

      // If Passport throws/catches an error
      if (err) {
        console.log("errored login");
        res.status(404).json(err);
        return;
      }

      // If a user is found
      if (user) {
        token = user.generateJWT();
        console.log("everything good!");
        res.status(200);
        res.json({
          "token" : token,
          "email" : user.email
        });
      } else {
        // If user is not found
        console.log("user is not here.");
        res.status(401).json(info);
      }

    })(req, res);
  });

module.exports = router;
