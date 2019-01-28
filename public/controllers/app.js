var app = angular.module('app',['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('signin', {
		url:'/signin',
		templateUrl:'/login.html',
		controller:'loginCtrl',
		module: 'public'
	})
	.state('index', {
		url:'/contact',
		templateUrl:'/contact.html',
		controller:'AppCtrl'
	})
	$urlRouterProvider.otherwise("/signin");
}]);