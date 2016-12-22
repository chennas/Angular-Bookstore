/// <reference path="angular.min.js" />

var myApp = angular.module("myApp", []);

myApp.controller("HeaderController", function ($scope) {
    $scope.appDetails = {
        title: "Bookart",
        tagline: "We have 1 million books for you"
    };
});

myApp.controller("BookListController", function ($scope) {
    $scope.books = [
        {
            imgUrl: "images/adultery.jpeg",
            name: "Nature",
            price: 205,
            rating: 4,
            binding: "Paperback",
            publisher: "Random House India",
            releaseDate: "12-01-2014",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id accumsan mi. Sed blandit quam sit amet turpis porta, in tristique ligula sollicitudin. Quisque ut justo nunc. Nullam sit amet suscipit turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus ac erat nunc. Mauris a sollicitudin mauris. Cras viverra eros a bibendum pharetra. Proin non erat at nisl tempor porttitor. Nunc lobortis mollis turpis in pretium."
        },
        {
            imgUrl: "images/geronimo.jpeg",
            name: "Action",
            price: 500,
            rating: 1,
            binding: "Paperback",
            publisher: "Penguin India",
            releaseDate: "12-08-2014",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id accumsan mi. Sed blandit quam sit amet turpis porta, in tristique ligula sollicitudin. Quisque ut justo nunc. Nullam sit amet suscipit turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus ac erat nunc. Mauris a sollicitudin mauris. Cras viverra eros a bibendum pharetra. Proin non erat at nisl tempor porttitor. Nunc lobortis mollis turpis in pretium."
        },
        {
            imgUrl: "images/life-or-death.jpeg",
            name: "Thriller",
            price: 120,
            rating: 2,
            binding: "Paperback",
            publisher: "Wrox publications",
            releaseDate: "12-01-2016",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id accumsan mi. Sed blandit quam sit amet turpis porta, in tristique ligula sollicitudin. Quisque ut justo nunc. Nullam sit amet suscipit turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus ac erat nunc. Mauris a sollicitudin mauris. Cras viverra eros a bibendum pharetra. Proin non erat at nisl tempor porttitor. Nunc lobortis mollis turpis in pretium."
        },
        {
            imgUrl: "images/playing.jpeg",
            name: "Comedy",
            price: 260,
            rating: 3,
            binding: "Paperback",
            publisher: "Professional",
            releaseDate: "12-06-2014",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id accumsan mi. Sed blandit quam sit amet turpis porta, in tristique ligula sollicitudin. Quisque ut justo nunc. Nullam sit amet suscipit turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus ac erat nunc. Mauris a sollicitudin mauris. Cras viverra eros a bibendum pharetra. Proin non erat at nisl tempor porttitor. Nunc lobortis mollis turpis in pretium."
        },
        {
            imgUrl: "images/the-fault.jpeg",
            name: "Action",
            price: 450,
            rating: 4,
            binding: "Paperback",
            publisher: "ABC Publishers",
            releaseDate: "12-03-2015",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id accumsan mi. Sed blandit quam sit amet turpis porta, in tristique ligula sollicitudin. Quisque ut justo nunc. Nullam sit amet suscipit turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus ac erat nunc. Mauris a sollicitudin mauris. Cras viverra eros a bibendum pharetra. Proin non erat at nisl tempor porttitor. Nunc lobortis mollis turpis in pretium."
        },
        {
            imgUrl: "images/wings-of-fire.jpeg",
            name: "Inspiration",
            price: 350,
            rating: 5,
            binding: "Paperback",
            publisher: "Random House India",
            releaseDate: "12-01-2015",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id accumsan mi. Sed blandit quam sit amet turpis porta, in tristique ligula sollicitudin. Quisque ut justo nunc. Nullam sit amet suscipit turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus ac erat nunc. Mauris a sollicitudin mauris. Cras viverra eros a bibendum pharetra. Proin non erat at nisl tempor porttitor. Nunc lobortis mollis turpis in pretium."
        }
    ];

    $scope.addToKart = function (book) {
        console.log("Add to kart:", book)
    }
});