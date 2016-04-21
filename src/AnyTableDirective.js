/**
 * Created by sauriemm on 3/31/2016.
 */
function AnyTableDirective() {
    return {
        templateUrl: "src/anyTable.html",
        restrict: "E"
    };
}

var directives = angular.module('Bookmarks.directives', [])
    .directive('anyTable', AnyTableDirective);

//app.directive("anyTable", AnyTableDirective);
