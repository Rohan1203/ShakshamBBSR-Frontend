var app = angular.module("ProductApp", []);
app.controller('productController',function ($scope, $http, $log) {
  $scope.cid;

  $scope.postData = function () {

    $http({
      url : "http://localhost:8080/product/deletecat" + "/" + $scope.cid,
      method : "GET"
    }).then(function(response){
      $scope.result = response.data;
    },function(response){
      alert("Error is there"+ response.data);
    });
  };
});
