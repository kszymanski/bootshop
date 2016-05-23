app.controller('HomepageController',function($scope, $stateParams, Products, Basket){
	$scope.products = Products.get();
	
	$scope.displayProduct = function(id){
		return !$stateParams.category || id == $stateParams.category;	
	};
	
	$scope.addToBasket = function(product){
		Basket.addProduct(product);
	};
});