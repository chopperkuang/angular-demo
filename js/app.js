'use strict';

var angularDemo = angular.module('angularDemo', ['ngResource']);

angularDemo.config(function($routeProvider) {
	console.log("start.")
	$routeProvider.
		when('/show', {
			controller: 'CustomerListController',
			templateUrl: 'views/show.html'
		}).
		otherwise({
			redirectTo: '/show'
		});
});

