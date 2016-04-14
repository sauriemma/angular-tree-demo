//var app = angular.module('app', []);
var app = angular.module("app", [
    'ui.router',
    'ngMaterial',
    'ngMessages',  // used to validate input

    "treeControl",
    "ui.bootstrap",


    //'bookmarks',

    "Bookmarks.controllers",
    "Bookmarks.directives"
]);

app.config(function ($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state("bookmarks", {
        url: "/",
        controller: "BookmarksController",
        templateUrl: "src/bookmarks/bookmarksView.html"
    });
    $stateProvider.state("home1", {
        url: "/home1",
        controller: "HomeCtrl",
        templateUrl: "src/home/home1.html"
    });
    $stateProvider.state("home2", {
        url: "/home2",
        controller: "HomeCtrl",
        templateUrl: "src/home/home2.html"
    });
    $stateProvider.state("mem-leak", {
        url: "/mem-leak",
        //controller: "HomeCtrl",
        templateUrl: "src/views/mem-leak.html"
    });

});

app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue', {
            'default': '400', // by default use shade 400 from the blue palette for primary intentions
            'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
            'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
            'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
        })
        .accentPalette('amber')
        .warnPalette('red')
        .backgroundPalette('grey', {
            'default': '50', // by default use shade 50 from the blue palette for primary intentions
            'hue-1': '500', // use shade 100 for the <code>md-hue-1</code> class
            'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
            'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
        });

});