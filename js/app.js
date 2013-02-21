'use strict';

// angular.module('angularDemo', []).
//   config(['$routeProvider', function($routeProvider)  {
//   $routeProvider.
//       when('/show', {
//         controller: 'CustomerListCtrl',
//         templateUrl: 'views/show.html'
//       }).
//       otherwise({
//         redirectTo: '/show'
//       });
      
// }]);

var angularDemo = angular.module('angularDemo', ['ngResource']);

angularDemo.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/show', {templateUrl: 'views/show.html',   controller: 'CustomerListController'}).
      otherwise({redirectTo: '/show'});
}]);

