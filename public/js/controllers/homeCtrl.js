angular
    .module('app')
    .controller('homeCtrl', ['$scope', function($scope){
        $scope.title = 'Home';
        $scope.items = ['Home', 'About', 'Contact'];
    }]);
