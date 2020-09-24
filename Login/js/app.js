'use strict'

var app = angular.module('shg-app', ['ngRoute']);

//Rohan's code start
app.config(function($routeProvider, $locationProvider) {
      $routeProvider.when('/dashboard', {
          templateUrl : "../dashboard/adminDashboard.html",
          controller : 'all-shg'
      })
      // $routeProvider.when('/', {
      //     templateUrl : 'index.html',
      //     controller : 'indexController'
      // }).otherwise({
      //     redirectTo : 'adminDashboard.html'
      // });
      //$locationProvider.html5Mode(true); //Remove the '#' from URL.
  }
);

app.controller('indexController', function ($scope, $http, $location) {
	var username = $scope.username;
	var password = $scope.password;

	$scope.postData = function () {

		$http.post("http://localhost:8080/user?username=" + username + "&password=" + password)
		.then(function(resp) {
			$scope.token = resp.data.token;
			$scope.username = resp.data.username;

			if ($scope.token == null) {
				 alert("Server not responding");
			}
			else{
        $scope.result = resp.data.token;
				 $location.path("/dashboard" );
			}
		}, function(resp){
				 alert('Error occured during fetching data..' + resp.data);
		});
	 };
});
//Rohan's code end

//puspa's code
// app.controller('all-shg', function($scope,$http,$log){
//             $http({
//             url:
//             'http://localhost:8080/shgrequests',
//             method: 'GET'
//             }).then(function(resp){
//             $log.log(resp.data);
//             $scope.data = resp.data;
//         }, function(resp){
            
//             $log.log('Error occured..'+resp.data)
//         });
//         });

// /*product addition*/
// app.controller('ProductController',function ($scope, $http, $log) {
  
//   $scope.catName;
//   $scope.productName;
//   $scope.description;
//   $scope.price;
//   $scope.shgId;
//   $scope.noOfAvailability;

//   $scope.postData = function () {

//     $http({
//       url : "http://localhost:8080/product/addProduct" + "/" + $scope.catName+ "/" + $scope.productName + "/" +$scope.description + "/" + $scope.price + "/" + $scope.shgId + "/" + $scope.noOfAvailability,
//       method : "GET"
//     }).then(function(response){
//       $scope.result = response.data;
//     },function(response){
//       alert("Error is there"+ response.data);
//     });
//   };
// });

// /*shg addition */
// app.controller('shgController',function ($scope, $http, $log) {
  
//   $scope.shgId;
//   $scope.shgName;
//   $scope.address;
//   $scope.blockName;
//   $scope.district;
//   $scope.state;
//   $scope.pincode;
//   $scope.mobileNumber;
//   $scope.noOfMember;
//   $scope.aadharNumber;
//   $scope.accountNumber;
//   $scope.ifscCode;
//   $scope.shgEmail;
  

//   $scope.postData = function () {

//     $http({
//       url : "http://localhost:8080/product/addProduct" + "/" + $scope.shgId+ "/" + $scope.shgName + "/" +$scope.addresss + "/" + $scope.blockName + "/" + $scope.district + "/" + $scope.state + "/" + $scope.pincode + "/" + $scope.mobileNumber + "/" +$scope.noOfMember + "/" + $scope.aadharNumber + "/" + $scope.accountNumber + "/" + $scope.ifscCode + "/" + $scope.shgEmail,
//       method : "GET"
//     }).then(function(response){
//       $scope.result = response.data;
//     },function(response){
//       alert("Error is there"+ response.data);
//     });
//   };
// });


// /* category addition */
// app.controller('categoryController',function ($scope, $http, $log) {
 
//   $scope.catName;
//   $scope.catType;


//   $scope.postData = function () {

//     $http({
//       url : "http://localhost:8080/category/addCategory" +  "/" +  $scope.catName + "/" + $scope.catType,
//       method : "GET"
//     }).then(function(response){
//       $scope.result = response.data;
//     },function(response){
//       alert("Error is there"+ response.data);
//     });
//   };
// });