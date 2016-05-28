'use strict'
var app = angular.module('bootshop',['ui.router', 'ngResource', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home/');
	
	$stateProvider.state('index',{
		abstract: true,
		views:{
			"navigation@": { templateUrl: "/scripts/app/navigation/main_navigation.html", controller: "NavController" },
			"footer@": { templateUrl: "/scripts/app/footer/main_footer.html" }
		}
	});
});

app.run(['$rootScope', '$state', 'Users', function($rootScope, $state, User)
{

  $rootScope.$on('$stateChangeStart'
    , function(event, toState, toParams, fromState, fromParams) {

    var isAuthenticationRequired =  !!toState.data && toState.data.requiresLogin && !!!$rootScope.user;

    if(isAuthenticationRequired)
    {
      event.preventDefault();
      $state.go('index.login');
    }
  });
}])