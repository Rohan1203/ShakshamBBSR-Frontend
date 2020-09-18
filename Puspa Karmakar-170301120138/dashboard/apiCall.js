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