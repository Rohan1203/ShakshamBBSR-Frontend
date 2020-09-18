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