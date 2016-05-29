app.config(function($stateProvider){
	$stateProvider.state('index.basket.order',{
		parent: "index.basket",
		url: "/order",
		views:{
			"content@": { 
				templateUrl: "/scripts/app/order/order.html",
				controller: "OrderController"
			}
		}
	})
	.state('index.basket.order.confirm',{
		parent: "index.basket",
		url: "/confirm",
		views:{
			"content@": { 
				templateUrl: "/scripts/app/order/order-final.html",
				controller: "OrderFinalController"
			}
		}
	}).state('index.basket.order.thanks',{
		parent: "index.basket",
		url: "/thanks",
		views:{
			"content@": { 
				templateUrl: "/scripts/app/order/thanks.html"
			}
		}
	});
});