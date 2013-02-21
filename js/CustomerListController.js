'use strict';

angularDemo.controller('CustomerListController', function CustomerListController($scope, $http, CustomerService) {

	$scope.show = "hidden";

    CustomerService.myPrivate("83639").then(function(data){
    	$scope.customers = 	data;
    });
});