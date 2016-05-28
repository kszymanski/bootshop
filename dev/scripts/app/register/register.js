app.config(function($stateProvider){
	$stateProvider.state('index.register',{
		parent: "index",
		url: "/register",
		views:{
			"content@": { 
				templateUrl: "/scripts/app/register/register.html",
				controller: "RegisterController"
			}
		}
	});
});