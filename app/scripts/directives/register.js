'use strict';

var angular = require('angular');

angular.module('wilbursJournal').directive('register', function() {
  return {
    templateUrl: 'templates/register.html',
    replace: true,
    controller: 'registerCtrl'
  }
});
