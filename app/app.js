'use strict';

var angular = require('angular');

angular.module('wilbursJournal', []);

require('./scripts/controllers/main.js');
require('./scripts/controllers/register.js');
require('./scripts/directives/profile.js');
require('./scripts/directives/register.js');
require('./scripts/directives/users.js');
require('./scripts/services/authentication.js');
require('./scripts/services/registration.js');
