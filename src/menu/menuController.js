app.controller('MenuController', function ($scope, $mdSidenav, $state) {

    $scope.menuItems = [
        {name: 'Bookmarks', path: 'bookmarks'},
        {name: 'MemLeak', path: 'mem-leak'},
        {name: 'Input1', path: 'input1'},
        {name: 'Input2', path: 'input2'},
        {name: 'Modal', path: 'modal'}
    ];

    $scope.title = 'input';

    $scope.go = function (path, title) {
        $state.go(path);
        $scope.title = title;
    };

    $scope.toggleLeft = function () {
        $mdSidenav('left')
            .toggle();
    };

    $scope.menuIcon = 'menu';
    $scope.menuToggle = function () {
        if ($scope.menuIcon == 'menu') {
            $mdSidenav('left').open();
            $scope.menuIcon = 'arrow_back';
        }
        else {
            $mdSidenav('left').close();
            $scope.menuIcon = 'menu';
        }
    };
});