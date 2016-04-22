function BookmarksController($http, $scope, $mdDialog) {

    // Tree Options
    //$scope.treeOptions = {dirSelectable: false};

    $http.get('data/bookmarks.json').success(function (response) {
        console.log("Get Tree Data: " + response.children[0].title);
        $scope.treeData = response.children;
        $scope.selected = $scope.treeData[0];
        $scope.expandedNodes = [$scope.treeData[0]];
        $scope.showSelected($scope.treeData[0]);
    });

    $scope.$on("$destroy", function () {
        alert("$destroy");
    });

    $scope.showSelected = function (node, selected, $parentNode, $index, $first, $middle, $last, $odd, $even) {
        if (node.type == "text/x-moz-place") {
            console.log("Node " + node.title + " " + node.uri);
        }
        else if (node.type == "text/x-moz-place-container") {
            console.log("Directory " + node.title);
            $scope.tableData = node.children;
        }
        else {
            console.log("Other " + node.title + " " + node.uri);
        }
    };

    $scope.clickHeader = function (param1) {
        console.log("clickAction  " + param1);
        $scope.orderByField = param1;
    };

    $scope.showAdvanced = function ($event) {
        console.log($event.row.title);
        $scope.row = $event.row;
        $mdDialog.show({
            clickOutsideToClose: true,
            targetEvent: $event,
            scope: $scope,        // use parent scope in template
            preserveScope: true,  // do not forget this if use parent scope
            template: '<md-dialog>' +
            '  <md-subheader>Update</md-subheader>' +

            '  <md-dialog-content>' +
            '     <input ng-model="row.title" value="{{row.title}}"></input>' +
            '  </md-dialog-content>' +

            '  <md-dialog-actions>' +
            '    <md-button ng-click="closeDialog()" class="md-primary">' +
            '      Ok' +
            '    </md-button>' +
            '  </md-dialog-actions>' +

            '</md-dialog>',
            controller: function DialogController($scope, $mdDialog) {
                $scope.closeDialog = function () {
                    console.log("Update " + $scope.row.title);
                    $scope.tableData[$event.$index].title = $scope.row.title;
                    $mdDialog.hide();
                };
            }
        });
    };

}

var controllers = angular.module('BookmarksControllers', [])
    .controller('BookmarksController', BookmarksController);
