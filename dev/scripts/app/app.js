'use strict'
var app = angular.module('bootshop',['ui.router', 'ngResource', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home/');
	
	$stateProvider.state('index',{
		abstract: true,
		views:{
			"navigation@": { templateUrl: "/scripts/app/navigation/main_navigation.html", controller: "NavController" },
			"footer@": { templateUrl: "/scripts/app/footer/main_footer.html" }
		}
	});
});