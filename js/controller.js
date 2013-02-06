function customerListCtrl($scope) {
    $scope.customers = [
        {id:'83124', name:'徐少阳先生', status:'求租', area:'静安寺', size:'2室1厅1卫', type:'A类', tel:'13900000000'},
        {id:'83456', name:'廖青',   status:'求购', area:'国际利都城', size:'2室2厅2卫', type:'Ｂ类', tel:'65989743'},
        {id:'83333', name:'余先生', status:'己租', area:'南京西路', size:'2室2厅2卫', type:'A类', tel:'13657890987'},
        {id:'83222', name:'祝阿姨', status:'求购', area:'五角场', size:'2室2厅2卫', type:'A类', tel:'65989743－012'},
        {id:'42424', name:'方小姐', status:'求租', area:'同济大学', size:'2室2厅2卫', type:'Ｂ类', tel:'13657890987'},
        {id:'56577', name:'李省',   status:'己租', area:'静安－静安寺', size:'2室2厅2卫', type:'A类', tel:'13657890987'},
        {id:'89888', name:'胡巍巍', status:'求购', area:'静安－南京西路', size:'2室2厅2卫', type:'A类', tel:'13657890987'},
        {id:'43434', name:'赵阳',   status:'求购', area:'静安－国际丽都城', size:'2室2厅2卫', type:'Ｃ类', tel:'13657890987'},
        {id:'34433', name:'匡前阳', status:'求购', area:'静安－曹家渡', size:'2室2厅2卫', type:'Ｃ类', tel:'13657890987'}
    ];
};
customerListCtrl.$inject = ['$scope'];

/*function PhoneListCtrl($scope, $http) {
    $http.get("phones/phonelist.json").success(function(data){
        $scope.phones = data;
    });
    $scope.orderProp = 'age';
};
PhoneListCtrl.$inject = ['$scope', '$http'];


function PhoneDetailCtrl($scope, $routeParams, $http) {
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
        $scope.phone = data;
    });
}
PhoneDetailCtrl.$inject = ['$scope', '$routeParams', '$http'];*/




