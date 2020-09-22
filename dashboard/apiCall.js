'use strict'
        var app = angular.module('shg-app', []);
        
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