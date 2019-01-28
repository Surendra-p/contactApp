//var app=angular.module('app',[]);

app.controller("AppCtrl",function($scope, $http){
	console.log("hello world from controller");

	var refresh = function() {
		$http.get('/contactlist').success(function(response){
			console.log("I got  the data I requested");
			$scope.contactlist = response;
			$scope.contact = '';
		});
	};	

	refresh();

	$scope.addContat = function(){
		if($scope.contact==""){
			alert("null not allowed");
		}
		else{
		console.log($scope.contact);
		$http.post('/addtlist',$scope.contact).success(function(response){
			console.log(response);
			refresh();
		});
		}
	};

	$scope.remove = function(id) {
		console.log(id);
		$http.delete('/deletelist/' + id).success(function(response){
			refresh();
		});
	};

	$scope.edit = function(id) {
		console.log(id);
		$http.get('/editlist/' + id).success(function(response){
			$scope.contact = response;
		});
	};

	$scope.update = function() {
		console.log($scope.contact._id);
		$http.put('/updatelist/' + $scope.contact._id, $scope.contact).success(function(response){
			refresh(); 
		});
	};

	$scope.deselect = function(){
		$scope.contact = " ";
	}
	//$scope.contactlist = contactlist;
});