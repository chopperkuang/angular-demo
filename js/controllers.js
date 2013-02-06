'use strict';

function phoneListCtrl($scope) {
  // $scope.phones = [
  //   {"name": "Nexus S",
  //    "snippet": "Fast just got faster with Nexus S."},
  //   {"name": "Motorola XOOM™ with Wi-Fi",
  //    "snippet": "The Next, Next Generation tablet."},
  //   {"name": "MOTOROLA XOOM2222™",
  //    "snippet": "The Next, Next Generation tablet."},
  // ];
  // $scope.orderProp = 'age';

  var json = JSON.parse('{"status":"ok", "inquiryList":[{"id":"12", "name":"王先生"}, {"id":"13", "name":"李先生"}], "total_results":100}');
  console.log(json);
  console.log(json.inquiryList);
  _.each(json.inquiryList, function(value) { 
  		_.each(value, function(pv, pk) { 
  			console.log(pk + " - " + pv);
  		}
	);
  });
  $scope.status = json.status;
  $scope.inq_json = json;
}