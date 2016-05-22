app.factory("Categories",function($resource){
	return $resource('/data/categories.json',{},{
		get: {method: 'GET', isArray: true}

	});
});