function BookmarksTableDirective() {
    return {
        restrict: "E",
        templateUrl: "src/bookmarks/partials/bookmarksTable.html"
    };
}

var directives = angular.module('BookmarksDirectives', [])
    .directive('bookmarksTable', BookmarksTableDirective);
