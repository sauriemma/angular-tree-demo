/**
 * Created by sauriemm on 3/31/2016.
 */
function BookmarksTableDirective () {
    return {
        restict: "E",
        templateUrl: "src/partials/BookmarksTable.html"
    }
}

app.directive("bookmarksTable", BookmarksTableDirective);