'use strict';

var angular = require('angular');

angular.module('wilbursJournal').directive('profile', function() {
  return {
    templateUrl: 'templates/profile.html',
    replace: true,
    controller: 'mainCtrl'
  }
});
