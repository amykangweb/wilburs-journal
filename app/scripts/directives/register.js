'use strict';

var angular = require('angular');

angular.module('wilbursJournal').directive('register', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/register.html',
  }
});
