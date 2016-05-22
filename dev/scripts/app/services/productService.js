app.factory("Products",function($resource){
	return $resource('/data/products.json',{},{
		get: {method: 'GET', isArray: true}

	});
});