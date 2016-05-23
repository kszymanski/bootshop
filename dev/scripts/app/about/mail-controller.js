app.controller('MailController', function ($scope, $uibModalInstance, $stateParams) {
	$scope.email = $stateParams.email;
	$scope.clear = function () {
		$uibModalInstance.dismiss('cancel');
	};
});