'use strict';

var angularDemo = angular.module('angularDemo', ['ngResource']);

angularDemo.config(function($routeProvider) {
	$routeProvider.
		when('/show', {
			controller: 'CustomerListController',
			templateUrl: 'views/show.html'
		}).
		otherwise({
			redirectTo: '/show'
		});
});

