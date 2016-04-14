function BookmarksTableDirective () {
    return {
        restrict: "E",
        templateUrl: "src/partials/BookmarksTable.html"
    };
}

//var directives = angular.module('bookmarks', [])
//    .directive('bookmarksTable', BookmarksTableDirective);

var directives = angular.module('Bookmarks.directives', [])
    .directive('bookmarksTable',BookmarksTableDirective);

//app.directive("bookmarksTable", BookmarksTableDirective);