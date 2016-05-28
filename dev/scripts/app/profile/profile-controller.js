app.controller('ProfileController',function($scope, $rootScope, Users){
	$scope.registerAccount = $rootScope.user;
	
	$scope.update = function(){
		Users.updateUser($scope.registerAccount);
	};
	
	$scope.$on('userUpdated', function () {
		$scope.registerAccount = $rootScope.user;
		$scope.success = true;
	});
});