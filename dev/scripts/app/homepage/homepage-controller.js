app.controller('HomepageController',function($scope, $stateParams, Products){
	$scope.products = Products.get();
	
	$scope.displayProduct = function(id){
		return !$stateParams.category || id == $stateParams.category;	
	};

});