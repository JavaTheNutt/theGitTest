angular
    .module('app')
    .controller('aboutCtrl', ['$scope', function($scope){
        $scope.title = 'About';
        $scope.items = ['Home', 'About', 'Contact'];
    }]);
