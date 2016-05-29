app.controller('ProductController',function($scope, $stateParams, Products, Basket,toastr){
	$scope.product = {};
	Products.get(function(results){
		results.forEach(function(entry){
			if(entry.id == $stateParams.product){
				$scope.product = entry;
			}
		});
	});
	
	$scope.addToCart = function(product){
		Basket.addProduct(product);
		toastr.success('Sucess!', 'You just added ' + product.name);
	};
});