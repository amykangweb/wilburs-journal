'use strict';

var angular = require('angular');

angular.module('wilbursJournal')
.service('registrationService', function($http, $q) {

  this.saveUser = function(user) {
    console.log("save User");
    var deferred = $q.defer();
    $http.post('/api/register', user).success(function(data) {
       console.log("sent and received post for user");
       deferred.resolve(data);
    });
    return deferred.promise;
  };
});
