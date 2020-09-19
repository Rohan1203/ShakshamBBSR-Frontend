'use strict'

var app = angular.module('myApp', ['ngRoute']);

// app.controller("HomeController", function($scope, $location) {
//
// });

app.config([ '$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {
      $routeProvider.when('/dashboard', {
          templateUrl : "../Puspa_Karmakar-170301120138/dashboard/adminDashboard.html",
          controller : ''
      })
      // $routeProvider.when('/', {
      //     templateUrl : 'index.html',
      //     controller : 'indexController'
      // }).otherwise({
      //     redirectTo : 'adminDashboard.html'
      // });
      //$locationProvider.html5Mode(true); //Remove the '#' from URL.
  }
]);



app.controller('indexController', function ($scope, $http, $location) {
	$scope.username;
	$scope.password;

	$scope.postData = function () {

		$http.post("http://localhost:8080/user?username=" + $scope.username + "&password=" + $scope.password)
		.then(function(resp) {
			$scope.token = resp.data.token;
			$scope.username = resp.data.username;

			if ($scope.token == null) {
				 alert("Please provide correct username and password");
			}
			else{
        $scope.result = resp.data.token;
				 $location.path("../Puspa_Karmakar-170301120138/dashboard/adminDashboard.html" );
			}
		}, function(resp){
				 alert('Error occured during fetching data..' + resp.data);
		});
	 };
});
