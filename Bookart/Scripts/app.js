/// <reference path="angular.min.js" />
/// <reference path="angular-route.min.js" />
/// <reference path="angular-animate.min.js" />

var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);

myApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/books", {
            templateUrl: "partials/book-list.html",
            controller: "BookListController"
        })
        .when("/kart", {
            templateUrl: "/partials/kart-list.html",
            controller: "KartListController"
        })
        .otherwise({
            redirectTo: "/books"
        });
    $locationProvider.html5Mode(true);
});

myApp.factory("kartService", function () {
    var kart = [];

    return {
        getKart: function () {
            return kart;
        },
        addToKart: function (book) {
            book.isAdded = true;
            kart.push(book);
            alert("Book:" + " " + book.name + " added to your kart successfully.");
        },
        buy: function (book) {
            alert("Thanks for buying the book:" + " " + book.name);
        }
    }
});

myApp.factory("bookService", function () {
    var books = [
        {
            isAdded: false,
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
            isAdded: false,
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
            isAdded: false,
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
            isAdded: false,
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
            isAdded: false,
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
            isAdded: false,
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

    return {
        getBooks: function () {
            return books;
        }
    }
});

myApp.controller("KartListController", function ($scope, kartService) {
    $scope.kart = kartService.getKart();

    $scope.buy = function (book) {
        kartService.buy(book);
    }
});

myApp.controller("HeaderController", function ($scope, $location) {
    $scope.appDetails = {};
    $scope.appDetails = {
        title: "Bookart",
        tagline: "We have 1 million books for you"
    };

    $scope.nav = {};
    $scope.nav.isActive = function (path) {
        if (path === $location.path()) {
            return true;
        }
        return false;
    }

});

myApp.controller("BookListController", function ($scope, bookService, kartService) {
    $scope.books = bookService.getBooks();

    $scope.addToKart = function (book) {
        kartService.addToKart(book);
        //Update the book status in the scope object.
        $scope.isAdded = true;
    }
});