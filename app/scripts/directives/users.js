'use strict';

var angular = require('angular');

angular.module('wilbursJournal').directive('users', function() {
  return {
    templateUrl: 'templates/users.html',
    replace: true,
    controller: 'registerCtrl'
  }
});
