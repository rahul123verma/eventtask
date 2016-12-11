(function () {
    'use strict'


    var EventTaskApp = angular.module("EventTask", ['ngRoute']);

    EventTaskApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when("/create/", {
                templateUrl : "/eventtask/public/html/create.html",
                controller: 'createCtrl'
            })
            .when("/update/:id?/", {
                templateUrl : "/eventtask/public/html/update.html",
                controller: 'updateCtrl'
            })
            .when("/:id?/", {
                templateUrl : "/eventtask/public/html/event_task.html",
                controller: 'eventCtrl'
            });

    }]);
})();
