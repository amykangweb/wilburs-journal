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

module.exports = router;
