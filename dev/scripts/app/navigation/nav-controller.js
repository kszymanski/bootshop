app.controller('NavController',function($scope, Basket){
	$scope.items = Basket.getItemCount();
	$scope.$on('cartContentsChanged', function () {
		$scope.items = Basket.getItemCount();
	});
});