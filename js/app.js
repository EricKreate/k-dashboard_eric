var kreate = angular.module('kreate', ['ui.router', 'ngCookies', 'ngMaterial']);

kreate.config(function ($stateProvider, $urlRouterProvider) {

  // Set default 'fallback' route
  // $urlRouterProvider.otherwise('/');

  // Define states/routes
  $stateProvider
  // Main template state
    .state('createuser', {
      url: '/createuser',
      templateUrl: 'views/createuser.html',
      controller: 'CreateUserController'
    })
    .state('userlist', {
      url: '/userlist',
      templateUrl: 'views/userlist.html',
      controller: 'UserListController'
    })
    .state('createapp', {
      url: '/createapp',
      templateUrl: 'views/createapp.html',
      controller: 'CreateAppController'
    });
});

// Run immediately - this is like the 'main' block.
kreate.run(['$rootScope', '$location',
  function ($rootScope, $location) {
    $location.path('/'); //createuser');
  }
]);

kreate.controller('CreateUserController', function ($scope, $state, $http) {
  $scope.user = {
    id: null,
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    apps: '{}',
    notes: ''
  };
  $scope.createUser = function () {
    var req = {
      method: 'POST',
      url: 'http://localhost:3000/v0/users',
      headers: {
        'Content-Type': 'application/json'
      },
      data: $scope.user
    };

    $http(req).success(function (data, status, headers, config) {
      alert('success!');
      $location.kpath('#/index.html');
    }).error(function (data, status, headers, config, statusText) {
      alert('error:' + status + ' ' + statusText);
    });
  };
});

kreate.controller('UserListController', function ($scope, $state, $http) {
  var req = {
    method: 'GET',
    url: 'http://localhost:3000/v0/users',
    headers: {
      'Content-Type': 'application/json'
    } //,
    //  data: $scope.user
  };
  console.log('here');
  $http(req).success(function (data, status, headers, config) {
    $scope.users = data;
    //  $location.kpath('#/userlist.html');
  }).error(function (data, status, headers, config, statusText) {
    alert('error:' + status + ' ' + statusText);
  });
});

kreate.controller('CreateAppController', function ($scope, $state) {
  $scope.app = {
    id: null,
    customer: '',
    title: '',
    database: '',
    assetPath: '',
    style: {},
    created: 0,
    modified: 0,
    creator_id: 0,
    manager_id: 0
  };
});

/*kreate.controller('MainController', function ($scope) {
  //$scope.logout = AuthService.logout;
}); */