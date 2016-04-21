var app = angular.module("app", [
    'ui.router',
    "ui.bootstrap",
    'ngMaterial',
    'ngMessages',  // used to validate input
    "treeControl",
    "ModalControllers",
    "BookmarksControllers",
    "BookmarksDirectives"
]);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state("bookmarks", {
        url: "/",
        controller: "BookmarksController",
        templateUrl: "src/bookmarks/bookmarksView.html"
    });
    $stateProvider.state("input1", {
        url: "/input1",
        controller: "InputController",
        templateUrl: "src/input/input1.html"
    });
    $stateProvider.state("input2", {
        url: "/input2",
        controller: "InputController",
        templateUrl: "src/input/input2.html"
    });
    $stateProvider.state("mem-leak", {
        url: "/mem-leak",
        //controller: "InputController",
        templateUrl: "src/mem-leak/mem-leak.html"
    });
    $stateProvider.state("modal", {
        url: "/modal",
        controller: "ModalController",
        templateUrl: "src/modal/modal.html"
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
