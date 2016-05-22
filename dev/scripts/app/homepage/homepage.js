app.config(function($stateProvider){
	$stateProvider.state('index.hompeage',{
		parent: "index",
		url: "/home/:category",
		views:{
			"content@": { 
				templateUrl: "/scripts/app/homepage/homepage.html",
				controller: "HomepageController"
			}
		}
	});
});