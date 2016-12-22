/// <reference path="angular.min.js" />

var myApp = angular.module("myApp", []);

myApp.controller("HeaderController", function ($scope) {
    $scope.appDetails = {
        title: "Bookart",
        tagline: "We have 1 million books for you"
    };
});