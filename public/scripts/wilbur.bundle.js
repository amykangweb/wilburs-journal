webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('wilbursJournal', []);

	__webpack_require__(3);
	__webpack_require__(10);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);


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
/* 4 */,
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
	    templateUrl: 'templates/register.html',
	    replace: true
	  }
	});


/***/ },
/* 7 */
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
/* 8 */
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
	});


/***/ },
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('wilbursJournal')
	.controller('authenticationCtrl', function($http, $scope, $rootScope, $window, authenticationService) {
	  $rootScope.loggedIn = $window.localStorage['loggedin'];

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

	  $rootScope.logOut = function() {
	    console.log("log out.");
	    $window.localStorage.removeItem('token');
	    $window.localStorage.removeItem('loggedin');
	    $window.localStorage.removeItem('email');
	    $rootScope.loggedIn = 'false';
	  };

	});


/***/ }
]);