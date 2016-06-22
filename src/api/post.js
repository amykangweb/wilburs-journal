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

router.post('/posts', function(req, res) {
  var verified = jwt.verify(req.body.token, process.env.mysecret, function(err, token) {
    if(err) {
      console.log("Unverified token!");
      return res.status(500).json({err: err.message});
    } else {
      console.log("Verified.");
    }

    var blogPost = new Post();

    blogPost.title = req.body.title;
    blogPost.content = req.body.content;

    blogPost.save(function(err, blogPost) {
      console.log("posted!");

      if(err) {
        console.log(err.message);
        return res.status(500).json({err: err.message});
      }
      console.log("here");
      res.json({title: blogPost.title, content: blogPost.content});
    });
  });
});

module.exports = router;
