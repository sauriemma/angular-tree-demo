        
        //var app = angular.module('app', []);
        //var app = angular.module("app", ["treeControl", "ui.bootstrap"/*, "template/tabs/tab.html", "template/tabs/tabset.html"*/]);
        
        function BookmarksController($http, $scope) {

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
            }

        }

        var controllers = angular.module('Bookmarks.controllers', [])
            .controller('BookmarksController',BookmarksController);
        
        //app.controller("BookmarksController", BookmarksController);