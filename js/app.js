var kreate = angular.module('kreate', ['ui.router', 'ngCookies', 'ngMaterial']);

kreate.config(function ($stateProvider, $urlRouterProvider) {

  // Set default 'fallback' route
  $urlRouterProvider.otherwise('/');

  // Define states/routes
  $stateProvider
  // Main template state
    .state('createuser', {
    url: '/',
    templateUrl: 'views/createuser.html',
    controller: 'CreateUserController'
  });
});

// Run immediately - this is like the 'main' block.
kreate.run(['$rootScope', '$location',
  function ($rootScope, $location) {
    $location.path('/createuser');
  }
]);

kreate.controller('CreateUserController', function ($scope, $state) {

  $scope.user = {
    id: -1,
    email: 'e@e',
    password: 'pwd',
    firstname: 'Eric',
    lastname: 'Morrow',
    apps: '{}',
    notes: ''
  };
});

/*kreate.controller('MainController', function ($scope) {
  //$scope.logout = AuthService.logout;
}); */