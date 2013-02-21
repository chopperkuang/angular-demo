'use strict';

angularDemo.service('CustomerService', function CustomerService($http, $resource) {

	var self = this;

	self.myPrivate = function(empNo) {		
		var api_myPrivate = "http://10.8.11.34:8090/api/app/myPrivate/"+ empNo +"?callback=JSON_CALLBACK";
	    return $http.jsonp(api_myPrivate).then(
	    	function(response) { //success
	        	return response.data.inquiryList;	         
	    	}, 
	    	function(status) { //error
	    		console.log(status.status);
	    	}	
	    );	    
	}
});