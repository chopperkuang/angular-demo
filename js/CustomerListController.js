'use strict';

angularDemo.controller('CustomerListController', function CustomerListController($scope, $http, $q, CustomerService) {

	$scope.show = "hidden";

    // CustomerService.myPrivate("83639").then(function(data){
    // 	$scope.customers = 	data;
    // });
	//console.log("myPrivate run.");
	var customers_1 = CustomerService.myPrivate("83639", 1);
	var customers_2 = [];
	var customers_3 = CustomerService.myPrivate("83639", 3);

	$q.all([customers_1, customers_2, customers_3]).then(function(arrayOfResults) {
		
		console.log("xx1=>");

		$scope.customers = 	arrayOfResults[0];

		angular.forEach(arrayOfResults, function(r, i){
			console.log("r=>" + i + "->" + r);
		});
	});
});
