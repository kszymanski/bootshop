app.controller('LoginController',function($scope, $rootScope,$state, Users){
	$scope.login = function(){
		if(Users.login($scope.user)){
			$rootScope.logged = true;
			$state.go("index.hompeage");
		}else{
			$scope.error = true;
		}
	};
});