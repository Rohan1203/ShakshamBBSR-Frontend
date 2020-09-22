'use strict'

var app = angular.module('shg-app', []);

//Rohan's code start
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
//Rohan's code end




        
        
        app.controller('all-shg', function($scope,$http,$log){
            $http({
            url:
            'http://localhost:8080/shgrequests',
            method: 'GET'
            }).then(function(resp){
            $log.log(resp.data);
            $scope.data = resp.data;
        }, function(resp){
            
            $log.log('Error occured..'+resp.data)
        });
        });

/*product addition*/
app.controller('ProductController',function ($scope, $http, $log) {
  
  $scope.catName;
  $scope.productName;
  $scope.description;
  $scope.price;
  $scope.shgId;
  $scope.noOfAvailability;

  $scope.postData = function () {

    $http({
      url : "http://localhost:8080/product/addProduct" + "/" + $scope.catName+ "/" + $scope.productName + "/" +$scope.description + "/" + $scope.price + "/" + $scope.shgId + "/" + $scope.noOfAvailability,
      method : "GET"
    }).then(function(response){
      $scope.result = response.data;
    },function(response){
      alert("Error is there"+ response.data);
    });
  };
});

/*shg addition */
app.controller('shgController',function ($scope, $http, $log) {
  
  $scope.shgId;
  $scope.shgName;
  $scope.address;
  $scope.blockName;
  $scope.district;
  $scope.state;
  $scope.pincode;
  $scope.mobileNumber;
  $scope.noOfMember;
  $scope.aadharNumber;
  $scope.accountNumber;
  $scope.ifscCode;
  $scope.shgEmail;
  

  $scope.postData = function () {

    $http({
      url : "http://localhost:8080/product/addProduct" + "/" + $scope.shgId+ "/" + $scope.shgName + "/" +$scope.addresss + "/" + $scope.blockName + "/" + $scope.district + "/" + $scope.state + "/" + $scope.pincode + "/" + $scope.mobileNumber + "/" +$scope.noOfMember + "/" + $scope.aadharNumber + "/" + $scope.accountNumber + "/" + $scope.ifscCode + "/" + $scope.shgEmail,
      method : "GET"
    }).then(function(response){
      $scope.result = response.data;
    },function(response){
      alert("Error is there"+ response.data);
    });
  };
});


/* category addition */
app.controller('categoryController',function ($scope, $http, $log) {
 
  $scope.catName;
  $scope.catType;


  $scope.postData = function () {

    $http({
      url : "http://localhost:8080/category/addCategory" +  "/" +  $scope.catName + "/" + $scope.catType,
      method : "GET"
    }).then(function(response){
      $scope.result = response.data;
    },function(response){
      alert("Error is there"+ response.data);
    });
  };
});