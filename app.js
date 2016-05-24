/*global angular*/

(function () {
    'use strict';

    var app = angular.module('practiceApp', ['ui.bootstrap']);

    app.controller('HomeCtrl', ['$scope', function ($scope) {
        console.log('loaded Ctrl');
        $scope.greet = "Hello World";
        $scope.students  = [{fn:'adrian', ln:'galicia'}, {fn:'rosario',ln:'marcial'}, {fn:'jim', ln:'carrey'}]
    }]);

}());
