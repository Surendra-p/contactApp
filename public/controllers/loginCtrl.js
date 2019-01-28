app.controller("loginCtrl",function($scope, $http){
	console.log("hello world from controller");

	
	// $http.get('/').success(function(response){
	// 	console.log("I got the data");
	// });

	$scope.addlogin  = function(){
		//console.log($scope['addlogin']);
		$http.post('/addlist').success(function(response){
			var addlogin ={
			"mail":$scope['email'],
			"pasword":$scope['password']	
			};
			
			console.log(response);
		});
	};

});