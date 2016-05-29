app.controller('OrderFinalController', function ($scope, $rootScope, $timeout, Basket, $state) {
	$scope.items = Basket.getProducts();
	$scope.user = $rootScope.user;
	
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
	
	$scope.go = function(){
		Basket.removeAll();
		$state.go('index.basket.order.thanks');
	}
	

});
