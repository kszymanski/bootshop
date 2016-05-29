app.controller('HomepageController',function($scope, $stateParams, Products, Basket,toastr){
	$scope.products = Products.get();
	
	$scope.displayProduct = function(id){
		return !$stateParams.category || id == $stateParams.category;	
	};
	$scope.addToCart = function(product){
		Basket.addProduct(product);
		toastr.success('Sucess!', 'You just added ' + product.name);
	};
});