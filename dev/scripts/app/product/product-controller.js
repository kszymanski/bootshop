app.controller('ProductController',function($scope, $stateParams, Products){
	$scope.product = {};
	Products.get(function(results){
		results.forEach(function(entry){
			if(entry.id == $stateParams.product){
				$scope.product = entry;
			}
		});
	});
	
});