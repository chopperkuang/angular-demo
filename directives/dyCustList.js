'use strict';

angularDemo.directive('dyCustList', function() {
	return {
		restrict: 'E',
		require: 'ngModel',
		link: function(scope, element, attrs, ngModel) {
			// console.log(ngModel.$modelValue);
		},
		templateUrl: 'directives/custList.html'
	};	
});