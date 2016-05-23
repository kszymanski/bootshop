app.controller('MailController', function ($scope, $uibModalInstance, $stateParams) {
	$scope.email = $stateParams.email;
	console.log($stateParams.email);
	$scope.clear = function () {
		$uibModalInstance.dismiss('cancel');
	};
});