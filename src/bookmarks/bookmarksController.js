        
        //var app = angular.module('app', []);
        //var app = angular.module("app", ["treeControl", "ui.bootstrap"/*, "template/tabs/tab.html", "template/tabs/tabset.html"*/]);
        
        function BookmarksController($http, $scope, $mdDialog) {

            // Tree Options
            //$scope.treeOptions = {dirSelectable: false};

            $http.get('data/bookmarks.json').success(function(response) {
                console.log("Get Tree Data: " + response.children[0].title);
                $scope.treeData = response.children;
                $scope.tableData = response.children;
                $scope.selected = $scope.treeData[0];
                $scope.expandedNodes = [$scope.treeData[0]];
                $scope.showSelected($scope.treeData[0]);
            });

            $scope.$on("$destroy", function() {
                alert("$destroy");
                //$( window ).off( "resize.Viewport" );
            });

            $scope.showSelected = function(node, selected, $parentNode, $index, $first, $middle, $last, $odd, $even) {
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

            $scope.clickHeader = function(param1) {
                console.log("clickAction  " + param1);
                $scope.orderByField = param1;
            };

            $scope.showAdvanced = function($event) {
                console.log($event.row.title);
                $mdDialog.show({
                    clickOutsideToClose: true,
                    //targetEvent: $event,
                    scope: $scope,        // use parent scope in template
                    preserveScope: true,  // do not forget this if use parent scope
                    // Since GreetingController is instantiated with ControllerAs syntax
                    // AND we are passing the parent '$scope' to the dialog, we MUST
                    // use 'vm.<xxx>' in the template markup
                    template: '<md-dialog>' +
                    '  <md-subheader>Settings</md-subheader>' +

                    '  <md-dialog-content>' +
                    '     Hi There {{vm.row}} no title' +
                    '  </md-dialog-content>' +

                    '  <md-dialog-actions>' +
                    '    <md-button ng-click="closeDialog()" class="Xmd-primaryX">' +
                    '      Close Greeting' +
                    '    </md-button>' +
                    '  </md-dialog-actions>' +

                    '</md-dialog>',
                    //locals: {
                    //    row: 'steve oooo'
                    //},
                    //controller: function($scope, theScope){
                    //    $scope.theScope = theScope;
                    //},
                    controller: function DialogController($scope, $mdDialog) {
                        //$scope.theScope = theScope;
                        $scope.closeDialog = function() {
                            $mdDialog.hide();
                        }
                    }
                });
            };

        }

        var controllers = angular.module('BookmarksControllers', [])
            .controller('BookmarksController',BookmarksController);
        
        //app.controller("BookmarksController", BookmarksController);
