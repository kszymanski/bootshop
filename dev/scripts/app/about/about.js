app.config(function($stateProvider){
	$stateProvider.state('index.about',{
		parent: "index",
		url: "/about",
		views:{
			"content@": { 
				templateUrl: "/scripts/app/about/about.html",
				controller: "AboutController"
			}
		}
	}).state('index.about.sent', {
            parent: 'index.about',
            url: '/sent',
			params: { email: null},
            onEnter: function ($state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'scripts/app/about/mail-sent.html',
                    controller: 'MailController',
                    size: 'md'
                }).result.then(function (result) {
                    $state.go('index.about', null, {reload: true});
                }, function () {
                    $state.go('index.about');
                })
            }
        });
});