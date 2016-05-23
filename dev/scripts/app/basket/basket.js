app.config(function($stateProvider){
	$stateProvider.state('index.basket',{
		parent: "index",
		url: "/basket",
		views:{
			"content@": { 
				templateUrl: "/scripts/app/basket/basket.html",
				controller: "BasketController"
			}
		}
	});
});