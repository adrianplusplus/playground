/*global angular*/

(function () {
    'use strict';

    var app = angular.module('practiceApp', ['ui.router', 'ui.bootstrap']);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'partials/tables.html',
                controller:'HomeCtrl'
            })
            .state('secondary', {
                url: '/secondary',
                templateUrl: 'partials/secondary.html',
                controller:'SecondaryCtrl'
            })
            .state('about',{
                url: '/about',
                templateUrl: 'partials/about.html',
                controller:'AboutCtrl'
            })
        
        ;
    })

    app.controller('HomeCtrl', ['$scope', function ($scope) {
        console.log('loaded home Ctrl');
        $scope.greet = "Hello World";
        $scope.students = [
            { fn: 'adrian', ln: 'galicia'}, 
            { fn: 'rosario', ln: 'marcial' },
            { fn: 'jim', ln: 'carrey'}
        ];
        
    }]);
    app.controller('SecondaryCtrl',['$scope',function($scope){
        console.log('loaded secondaryCtrl');
        
    }]);
    app.controller('AboutCtrl',['$scope',function($scope){
        console.log('loaded secondaryCtrl');
        
    }]);

}());
