app.controller('NavController',function($scope,$rootScope,$state, Basket){
	$scope.items = Basket.getItemCount();
	$scope.logged = !!$rootScope.user;
	$scope.$on('cartContentsChanged', function () {
		$scope.items = Basket.getItemCount();
	});
	
	$scope.$on('userLogged', function () {
		$scope.logged = !!$rootScope.user;
	});
	
	$scope.logOut = function(){
		$scope.logged = false;
		$rootScope.user = false;
		$state.go("index.hompeage");
	}
});