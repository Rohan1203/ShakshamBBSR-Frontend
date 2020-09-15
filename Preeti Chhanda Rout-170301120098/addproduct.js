var app = angular.module("ProductApp", []);
app.controller('productController',function ($scope, $http, $log) {
  $scope.productId;
  $scope.catId;
  $scope.productName;
  $scope.description;
  $scope.price;
  $scope.shgId;

  $scope.postData = function () {

    $http({
      url : "http://localhost:8080/product/addProduct" + "/" + $scope.productId + "/" + $scope.catId+ "/" + $scope.productName + "/" +$scope.description + "/" + $scope.price + "/" + $scope.shgId,
      method : "GET"
    }).then(function(response){
      $scope.result = response.data;
    },function(response){
      alert("Error is there"+ response.data);
    });
  };
});