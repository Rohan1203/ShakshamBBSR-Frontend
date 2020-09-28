'use strict'

var app = angular.module('shg-app', []);

//Rohan's code start

// app.run(function ($rootScope) {
//   $rootScope.token = 'vajscbischescc.qhdcuwehdjhkcnedsioc-wncjkesmbnedv.edvdjhjbn';
// });

app.controller('indexController', function($scope, $http) {

    // $scope.username = null;
    // $scope.password = null;

    $scope.postData = function() {

        $http.post("http://localhost:8080/user?username=" + $scope.username + "&password=" + $scope.password)
            .then(function(resp) {
                $scope.token = resp.data.token;
                $scope.username = resp.data.username;

                if ($scope.token == null) {
                    alert("Server not responding...");
                } else {
                    location.replace("../dashboard/adminDashboard.html");
                }
            }, function(resp) {
                alert('Error occured during fetching data..' + resp.data);
            });
    };
});
//Rohan's code end

//puspa's code
app.controller('all-shg', function($scope, $http, $log) {
    $scope.shgs = [{
        shgId: "",
        shgName: "",
        shgEmail: "",
        mobileNumber: "",
        address: "",
        blockName: "",
        district: "",
        state: "",
        pincode: "",
        noOfMember: "",
        aadharNumber: "",
        accountNumber: "",
        ifscCode: "",
        data: "",
        editable: "",
    }]
    $http({
        url: 'http://localhost:8080/shg/shgrequests',
        method: 'GET'
    }).then(function(resp) {
        $log.log(resp.data);
        $scope.shgs = resp.data;

    }, function(resp) {

        $log.log('Error occured..' + resp.data)
    });

    $scope.verify = function(index){
        $scope.value = $scope.shgs[index].shgId;
        $http({
        url: 'http://localhost:8080/shg/verifySHG/'+ $scope.value,
        method: 'GET'
    }).then(function(data) {
        
        alert("succes");

    }, function(data) {

        $log.log('Error occured..' + data.data)
    });     

    };

    $scope.entity = {}

    $scope.edit = function(index){
       $scope.entity = $scope.shgs[index];
       $scope.entity.index = index;
        $scope.entity.editable = true;

     };

     // $scope.save = function(index){
     //   $scope.shgs[index].editable = false;
       
       
     // }

});

/*product addition by Preeti*/
app.controller('ProductController', function($scope, $http, $log) {

    $scope.catName;
    $scope.productName;
    $scope.description;
    $scope.price;
    $scope.shgId;
    $scope.noOfAvailability;

    $scope.postData = function() {

        $http({
            url: "http://localhost:8080/product/addProduct" + "/" + $scope.catName + "/" + $scope.productName + "/" + $scope.description + "/" + $scope.price + "/" + $scope.shgId + "/" + $scope.noOfAvailability,
            method: "GET"
        }).then(function(response) {
            $scope.result = response.data;
        }, function(response) {
            alert("Error is there" + response.data);
        });
    };
});

/*shg addition by Preeti */
app.controller('shgController', function($scope, $http, $log) {

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


    $scope.postData = function() {

        $http({
            url: "http://localhost:8080/shg/addshg" + "/" + $scope.shgId + "/" + $scope.shgName + "/" + $scope.addresss + "/" + $scope.blockName + "/" + $scope.district + "/" + $scope.state + "/" + $scope.pincode + "/" + $scope.mobileNumber + "/" + $scope.noOfMember + "/" + $scope.aadharNumber + "/" + $scope.accountNumber + "/" + $scope.ifscCode + "/" + $scope.shgEmail,
            method: "GET"
        }).then(function(response) {
            // $scope.result = response.data;
            alert($scope.result);
        }, function(response) {
            alert("Error is there" + response.data);
        });
    };
});


/* category addition */
app.controller('categoryController', function($scope, $http, $log) {

    $scope.catName;
    $scope.catType;


    $scope.postData = function() {

        $http({
            url: "http://localhost:8080/category/addCategory" + "/" + $scope.catName + "/" + $scope.catType,
            method: "GET"
        }).then(function(response) {
            $scope.result = response.data;
        }, function(response) {
            alert("Error is there" + response.data);
        });
    };
});