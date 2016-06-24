'use strict';

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
  },
  function(username, password, done) {
    console.log("inside passport config");

    User.findOne({ email: username })
    .select('+hash')
    .select('+salt').exec(function(err, user) {
      console.log("Find user here");

      if (err) { return done(err); }
      // Return if user not found in database
      if (!user) {
        return done(null, false, {
          message: 'User not found.'
        });
      }
      // Return if password is wrong
      if (!user.validPassword(password)) {
        console.log("user password invalid");
        return done(null, false, {
          message: 'Password is wrong'
        });
      }
      // If credentials are correct, return the user object
      return done(null, user);
    });
  }
));
