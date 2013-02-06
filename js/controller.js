function CustomerListCtrl($scope, $http) {
    
    $scope.show = "hidden";

    var api_myPrivate = "http://10.8.11.41:8090/api/app/myPrivate/83639?callback=JSON_CALLBACK";
    $http.jsonp(api_myPrivate).success(function(data) {
        $scope.customers = data.inquiryList;
        
    });

    $scope.call = function(num) {
        $http.jsonp("http://10.8.11.41:8090/api/app/" + num + "/phone?callback=JSON_CALLBACK").success(function(data) {
            console.log(data.phones[0].phoneNumber);
            $scope.phoneNumber = data.phones[0].phoneNumber;   
        });
        $scope.inquiryId = num;
        $scope.show = "";
    };
};


CustomerListCtrl.$inject = ['$scope', '$http'];
