/**
 * Created by sauriemm on 3/31/2016.
 */
function AnyTableDirective () {
    return {
        templateUrl: "src/partials/AnyTable.html",
        restrict: "E"
    }

}

app.directive("AnyTable", AnyTableDirective);