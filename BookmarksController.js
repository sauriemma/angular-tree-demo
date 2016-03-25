        
        var app = angular.module('app', []);
        var example = angular.module("example", ["treeControl", "ui.bootstrap"/*, "template/tabs/tab.html", "template/tabs/tabset.html"*/]);
        
        function BookmarksController($http, $scope) {

            // Tree Options
            //$scope.treeOptions = {dirSelectable: false};

            $http.get('data/bookmarks.json').success(function(response) {
                console.log("Get Tree Data:" + response);
                $scope.treeData = response.children;
                $scope.tableData = response.children;
            });

            $scope.showSelected = function(node, selected, $parentNode, $index, $first, $middle, $last, $odd, $even) {
                if (node.type == "text/x-moz-place") {
                    console.log("Node " + node.title + " " + node.uri);
                }
                else if (node.type == "text/x-moz-place-container") {
                    console.log("Directory " + node.title + " " + node.uri);
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
        
        example.controller("BookmarksController", BookmarksController);