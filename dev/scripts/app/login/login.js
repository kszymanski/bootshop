app.config(function($stateProvider){
	$stateProvider.state('index.login',{
		parent: "index",
		url: "/login",
		views:{
			"content@": { 
				templateUrl: "/scripts/app/login/login.html",
				controller: "LoginController"
			}
		}
	});
});