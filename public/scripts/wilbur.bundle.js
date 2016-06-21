webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('wilbursJournal', []);

	__webpack_require__(4);
	__webpack_require__(9);
	__webpack_require__(5);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(6);
	__webpack_require__(10);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('wilbursJournal').controller('mainCtrl', function($scope, dataService) {

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

	angular.module('wilbursJournal').service('dataService', function($http, $window) {

	  var saveToken = function(token) {
	    $window.localStorage['mean-token'] = token;
	  };

	  var getToken = function() {
	    return $window.localStorage['mean-token'];
	  }

	  var logout = function() {
	    $window.localStorage.removeItem('mean-token');
	  };

	  return {
	    saveToken: saveToken,
	    getToken: getToken,
	    logout: logout
	  };

	});


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('wilbursJournal').directive('register', function() {
	  return {
	    templateUrl: 'templates/register.html',
	    replace: true,
	    controller: 'registerCtrl'
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
	    replace: true,
	    controller: 'registerCtrl'
	  }
	});


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

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


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

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


/***/ }
]);