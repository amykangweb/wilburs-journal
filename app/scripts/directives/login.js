'use strict';

var angular = require('angular');

angular.module('wilbursJournal').directive('login', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/login.html'
  }
});
