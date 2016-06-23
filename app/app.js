'use strict';

var angular = require('angular');

angular.module('wilbursJournal', []);

require('./scripts/controllers/main.js');
require('./scripts/controllers/authentication.js');
require('./scripts/directives/profile.js');
require('./scripts/directives/register.js');
require('./scripts/directives/login.js');
require('./scripts/directives/users.js');
require('./scripts/services/authentication.js');
