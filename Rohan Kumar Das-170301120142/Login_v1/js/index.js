'use strict'

var app = angular.module('myApp', []);

app.controller('indexController', function ($scope, $http, $log) {
	$scope.username;
	$scope.password;
	
	$scope.postData = function () {
	// var data = {
		
	// 	username: username,
	// 	password: password

	// };
	
		$http.post("http://localhost:8080/user?username=" + $scope.username + "&password=" + $scope.password).then(function(resp) {
			$scope.token = resp.data.token;
			$scope.username = resp.data.username;

			if ($scope.token == null) {
				alert("Please provide correct username and password");
			}
		}, function(resp){
					alert('Error occured during fetching data..' + resp.data);
		});
	 };
});

