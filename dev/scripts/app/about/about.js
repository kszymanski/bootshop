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
	});
});