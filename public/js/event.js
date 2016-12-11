(function (app) {
    'use strict'

    //Controller Creation
    app.controller('eventCtrl', eventCtrl);

    //DI for Controller
    eventCtrl.$inject = ['$scope','$route','$location','$http'];
    var slabs = null;

    //Event Controller
    function eventCtrl($scope,$route,$location,$http){

        $http.get($location.protocol() + '://'+ $location.host() +':'+  $location.port()+"/eventtask/home/model_index/")
            .then(function(response) {

                $scope.total = response.data;
            });
    $scope.page_number = $route.current.params.id-1;
        if($scope.page_number === 'undefined')
        {
            $scope.page_number = 0;
        }
    $scope.per_page = 10;
    var offset = $scope.page_number;
   //     console.log(offset);
       var data= { offset: offset };
        var req = {
            method: 'POST',
            url: $location.protocol() + '://'+ $location.host() +':'+  $location.port()+"/eventtask/home/task_index",

                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $.param(data)

        }

        $http(req).success(function (data, status, headers, config) {
            console.log(data);
           $scope.displaydata = data;
        }).error(function (data, status, headers, config) {
            // TODO
        });





    }

})(angular.module("EventTask"));