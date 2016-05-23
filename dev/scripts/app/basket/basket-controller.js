app.controller('BasketController',function($scope, Basket){
	$scope.items = Basket.getProducts(); 
	console.log($scope.items);
	
});