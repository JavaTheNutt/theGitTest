angular
    .module('app')
    /*The commented code is for connecting to a JSON file. Currently not working*/
    .controller('homeCtrl', ['$scope',/*friends,*/ function($scope/*, friends*/){
        $scope.title = 'Home';
        //$scope.friends = friends;
        $scope.items = ['Home', 'About', 'Contact'];
        $scope.mySelectedValue = 'Home';
    }]);
