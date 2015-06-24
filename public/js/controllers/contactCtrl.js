angular
    .module('app')
    .controller('contactCtrl', ['$scope', function($scope){
        $scope.title = 'Contact';
        $scope.items = ['Home', 'About', 'Contact'];
    }]);

