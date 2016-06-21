'use strict';

var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.register = function(req, res) {
  // TODO: input validations here.
  var user = new User();

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
};

module.exports.login = function(req, res) {
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
        "token" : token
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);
};
