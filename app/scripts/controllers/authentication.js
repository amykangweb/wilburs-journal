'use strict';

var angular = require('angular');

angular.module('wilbursJournal')
.controller('authenticationCtrl', function($http, $scope, $rootScope, $window, authenticationService) {
  $rootScope.loggedIn = $window.localStorage['loggedin'];

  $scope.users = ["Amy"];

  $scope.register = function(user) {
    console.log("submitted");
    console.log(user.email);
    console.log(user.password);
    var registered = authenticationService.saveUser(user).then(function(data) {
      console.log("came back");
      $window.localStorage['loggedin'] = 'true';
      $window.localStorage['token'] = data.token;
      $window.localStorage['email'] = data.email;
      $scope.users.push(data.email);
      $rootScope.loggedIn = 'true';
    });
  };

  $rootScope.logOut = function() {
    console.log("log out.");
    $window.localStorage.removeItem('token');
    $window.localStorage.removeItem('loggedin');
    $window.localStorage.removeItem('email');
    $rootScope.loggedIn = 'false';
  };

});
