app.config(function($stateProvider){
	$stateProvider.state('index.profile',{
		parent: "index",
		url: "/profile",
		views:{
			"content@": { 
				templateUrl: "/scripts/app/profile/profile.html",
				controller: "ProfileController"
			}
		},
		data : {requiresLogin : true }
	});
});