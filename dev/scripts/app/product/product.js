app.config(function($stateProvider){
	$stateProvider.state('index.product',{
		parent: "index",
		url: "/product/:product",
		views:{
			"content@": { 
				templateUrl: "/scripts/app/product/product.html",
				controller: "ProductController"
			}
		}
	});
});