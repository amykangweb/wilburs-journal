'use strict';

var angular = require('angular');

angular.module('wilbursJournal').controller('registerCtrl', function($http, $scope, $window, registrationService) {
  $scope.loggedIn = $window.localStorage['loggedin'];

  $scope.users = ["Amy"];

  $scope.register = function(user) {
    console.log("submitted");
    console.log(user.email);
    console.log(user.password);
    var registered = registrationService.saveUser(user).then(function(data) {
      console.log("came back");
      $window.localStorage['loggedin'] = 'true';
      $window.localStorage['token'] = data.token;
      $scope.users.push(data.email);
    });
  };

});
