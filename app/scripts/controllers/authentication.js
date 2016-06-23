'use strict';

var angular = require('angular');

angular.module('wilbursJournal')
.controller('authenticationCtrl', function($http, $scope, $rootScope, $window, authenticationService) {
  if($window.localStorage['loggedin']) {
    $rootScope.loggedIn = $window.localStorage['loggedin'];
  } else {
    $rootScope.loggedIn = 'false';
  };

  $scope.users = ["Amy"];

  $scope.register = function(user) {
    var registered = authenticationService.saveUser(user).then(function(data) {
      console.log("came back");
      $window.localStorage['loggedin'] = 'true';
      $window.localStorage['token'] = data.token;
      $window.localStorage['email'] = data.email;
      $scope.users.push(data.email);
      $rootScope.loggedIn = 'true';
    });
  };

  $scope.logIn = function(user) {
    console.log("login");
    authenticationService.signIn(user).then(function(data) {
      $window.localStorage['loggedin'] = 'true';
      $window.localStorage['token'] = data.token;
      $window.localStorage['email'] = data.email;
      $scope.users.push(data.email);
      $rootScope.loggedIn = 'true';
    });
  };

  $rootScope.logOut = function() {
    $window.localStorage.removeItem('token');
    $window.localStorage.removeItem('loggedin');
    $window.localStorage.removeItem('email');
    $rootScope.loggedIn = 'false';
  };

});
