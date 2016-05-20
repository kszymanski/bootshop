app.config(function($stateProvider){
	$stateProvider.state('index.hompeage',{
		parent: "index",
		url: "",
		views:{
			"content@": { 
				templateUrl: "/scripts/app/homepage/homepage.html",
				controller: "HomepageController"
			}
		}
	});
});