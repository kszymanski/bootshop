app.directive('categoriesList',function(Categories){
	return {
		scope: true,
		restrict: 'EA',
		template: '<div class="list-group"> <a ui-sref="index.hompeage({category: null})" ui-sref-active="active" class="list-group-item" >All</a><a ng-repeat="cat in cats" ui-sref="index.hompeage({category: cat.id})" class="list-group-item"  ui-sref-active="active">{{cat.name}}</a></div>',
		link: function(scope){
			scope.cats = Categories.get();
		}
	};
});