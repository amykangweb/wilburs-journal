'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./api');
var router = require('./api/register');
var passport = require('passport');

var app = express();

require('./database');
require('./models/user');
require('./config/passport');

app.use('/', express.static('public'));
app.use(parser.json());

app.use(passport.initialize());
app.use('/api', router);
app.use('/api/register', router);

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message": err.name + ": " + err.message});
  }
});

app.listen(3000, function() {
  console.log("The server is running on port 3000!");
});
