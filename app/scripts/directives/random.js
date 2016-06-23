'use strict';

var angular = require('angular');

angular.module('wilbursJournal').directive('random', function() {
  return {
    templateUrl: 'templates/random.html',
    replace: true
  }
});
