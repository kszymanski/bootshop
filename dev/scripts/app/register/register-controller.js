app.controller('RegisterController', function ($scope, $rootScope, $state, $timeout, Users) {
	$scope.success = null;
	$scope.error = null;
	$scope.doNotMatch = null;
	$scope.errorUserExists = null;
	$scope.registerAccount = {};
	$timeout(function () {
		angular.element('[ng-model="registerAccount.login"]').focus();
	});

	$scope.register = function () {
		if ($scope.registerAccount.password !== $scope.confirmPassword) {
			$scope.doNotMatch = 'ERROR';
		} else {
			$scope.doNotMatch = null;
			$scope.error = null;
			$scope.errorUserExists = null;
			$scope.errorEmailExists = null;
		}
		
		Users.addUser($scope.registerAccount);
		$rootScope.user = $scope.registerAccount;
		$state.go('index.hompeage');
	};
});
