(function (app) {
    'use strict'

    //Controller Creation
    app.controller('createCtrl', createCtrl);

    //DI for Controller
    createCtrl.$inject = ['$scope', '$http', '$location', '$route'];
    var slabs = null;


    //createCtrl Controller
    function createCtrl($scope, $http, $location, $route) {

        $scope.show_task= true;
        $scope.show_success = false;
        $scope.show_failure = false;

        $scope.createTask = function() {

            var data = {
                id:  $scope.id ,
                title:  $scope.title,
                discription:  $scope.description,
                STAT:  $scope.status
            }

            var req = {
                method: 'POST',
                url: $location.protocol() + '://'+ $location.host() +':'+  $location.port()+"/eventtask/home/insert_task",

                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param(data)

            }

            $http(req).success(function (data, status, headers, config) {
                console.log(data);
                $scope.show_success = data;
                $scope.show_task= false;
            }).error(function (data, status, headers, config) {
                $scope.show_failure = true;
                $scope.show_task= false;
            });




        }
    }
})(angular.module("EventTask"));