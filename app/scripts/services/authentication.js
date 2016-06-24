'use strict';

var angular = require('angular');

angular.module('wilbursJournal')
.service('authenticationService', function($http, $q) {

  this.saveUser = function(user) {
    var deferred = $q.defer();
    $http.post('/api/register', user).success(function(data) {
       deferred.resolve(data);
    });
    return deferred.promise;
  };

  this.signIn = function(user) {
    var deferred = $q.defer();
    $http.post('/api/login', user).success(function(data) {
      deferred.resolve(data);
    });
    return deferred.promise;
  };

});
