app.controller('BasketController', function ($scope, $timeout, Basket, toastr) {
	$scope.items = Basket.getProducts();
	
	$scope.pay = function(){
		var sum = 0;
		$scope.items.forEach(function(entry){
			sum += (entry.quantity * entry.product.price);
		});
		return Math.round(sum * 100) / 100;
	};
	
	$scope.round = function(e){
		return 	Math.round(e * 100) / 100;
	};
	
	$scope.$on('cartContentsChanged', function () {
		$scope.items = Basket.getProducts();
	});
	
	$scope.remove = function (e) {
		Basket.removeProduct(e.product);
		toastr.error('Shame!', 'You just removed ' + e.product.name);
	};

});
