webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('wilbursJournal', []);

	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('wilbursJournal').controller('mainCtrl', function($scope, dataService) {

	});


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

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
	    console.log("controller login");
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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('wilbursJournal').directive('profile', function() {
	  return {
	    templateUrl: 'templates/profile.html',
	    replace: true,
	    controller: 'mainCtrl'
	  }
	});


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('wilbursJournal').directive('register', function() {
	  return {
	    restrict: 'E',
	    templateUrl: 'templates/register.html',
	  }
	});


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('wilbursJournal').directive('login', function() {
	  return {
	    restrict: 'E',
	    templateUrl: 'templates/login.html'
	  }
	});


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('wilbursJournal').directive('users', function() {
	  return {
	    templateUrl: 'templates/users.html',
	    replace: true
	  }
	});


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

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
	    console.log("sign in service");
	    var deferred = $q.defer();
	    $http.post('/api/login', user).success(function(data) {
	      console.log("signed in return");
	      deferred.resolve(data);
	    });
	    return deferred.promise;
	  };

	});


/***/ }
]);