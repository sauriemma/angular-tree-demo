/**
 * Created by sauriemm on 3/31/2016.
 */
function BookmarksTableDirective () {
    return {
        restict: "E",
        templateUrl: "src/partials/BookmarksTable.html"
    }
}

var directives = angular.module('Bookmarks.directives', [])
    .directive('bookmarksTable',BookmarksTableDirective);

//app.directive("bookmarksTable", BookmarksTableDirective);