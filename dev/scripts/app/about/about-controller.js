app.controller('AboutController', function ($scope, $state) {
	$scope.success = false;
	$scope.error = false;
	
	$scope.send = function (email){
		$state.go('index.about.sent', {email : email});
	};
});