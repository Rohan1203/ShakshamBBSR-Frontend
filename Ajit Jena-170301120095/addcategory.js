var app = angular.module("ProductApp", []);
app.controller('productController',function ($scope, $http, $log) {
  $scope.catId;
  $scope.catName;
  $scope.catType;


  $scope.postData = function () {

    $http({
      url : "http://localhost:8080/product/addProduct" + "/" + $scope.catId + "/" +  $scope.catName + "/" + $scope.catType,
      method : "GET"
    }).then(function(response){
      $scope.result = response.data;
    },function(response){
      alert("Error is there"+ response.data);
    });
  };
});