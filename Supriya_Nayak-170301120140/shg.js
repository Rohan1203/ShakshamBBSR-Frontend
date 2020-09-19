var app = angular.module("ShgApp", []);
app.controller('shgController',function ($scope, $http, $log) {
  $scope.sid;

  $scope.postData = function () {

    $http({
      url : "http://localhost:8080/shg/shggg" + "/" + $scope.sid,
      method : "GET"
    }).then(function(response){
      $scope.result = response.data;
    },function(response){
      alert("Error is there"+ response.data);
    });
  };
});