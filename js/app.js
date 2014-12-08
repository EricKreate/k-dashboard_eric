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

kreate.controller('CreateUserController', function ($scope, $state) {
  $scope.user = {
    id: -1,
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    apps: '{}',
    notes: ''
  };
});

kreate.controller('CreateAppController', function ($scope, $state) {
  $scope.app = {
    id: -1,
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