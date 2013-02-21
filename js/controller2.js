
function MainCtrl($scope) {
	console.log(1);
	 $scope.timeOfDay = 'morning';
	 $scope.name = 'Nikki2';
}	
 
function ChildCtrl($scope) {
	console.log(2);
 	$scope.name = 'Mattie';
}
 
function BabyCtrl($scope) {
	console.log(3);
	 $scope.timeOfDay = 'evening';
	 $scope.name = 'Gingerbreak Baby2';
}