'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./api');
var passport = require('passport');

var app = express();

require('./database');
require('./models/user');
require('./config/passport');

app.use('/', express.static('public'));
app.use(parser.json());

app.use(passport.initialize());
app.use('/api', router);

app.listen(3000, function() {
  console.log("The server is running on port 3000!");
});
