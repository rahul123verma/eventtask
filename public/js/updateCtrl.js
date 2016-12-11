(function (app) {
    'use strict'

    //Controller Creation
    app.controller('updateCtrl', updateCtrl);

    //DI for Controller
    updateCtrl.$inject = ['$scope','$http','$location','$route'];
    var slabs = null;

    //Update Controller
    function updateCtrl($scope,$http,$location,$route) {
        $scope.current_id = $route.current.params.id;
        var data= { id:  $scope.current_id };
      //  var displayData = $scope.displaydata;
        $scope.show_task= true;
        $scope.show_success = false;
        $scope.show_failure = false;

        var req = {
            method: 'POST',
            url: $location.protocol() + '://'+ $location.host() +':'+  $location.port()+"/eventtask/home/get_current_task",

            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $.param(data)

        }

        $http(req).success(function (data, status, headers, config) {
            console.log(data);
            $scope.displaydata = data;
        }).error(function (data, status, headers, config) {
            // TODO
        });

        $scope.updateStatus = function() {
            if($scope.displaydata.STAT ==1 || $scope.displaydata.STAT=="true")
            {
                $scope.displaydata.STAT=false;
            }
            else {
                $scope.displaydata.STAT=true;
            }

        };


        $scope.updateData = function() {
            var params = {
                id:  $scope.displaydata.id ,
                title:  $scope.displaydata.title,
                discription:  $scope.displaydata.discription,
                STAT:  $scope.displaydata.STAT
            };

            var req = {
                method: 'POST',
                url: $location.protocol() + '://'+ $location.host() +':'+  $location.port()+"/eventtask/home/update_current_task",

                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param(params)

            }

            $http(req).success(function (data, status, headers, config) {
                console.log(data);
                $scope.show_success = data;
                $scope.show_task= false;
            }).error(function (data, status, headers, config) {
                $scope.show_failure = true;
                $scope.show_task= false;
            });
        };




    }
})(angular.module("EventTask"));