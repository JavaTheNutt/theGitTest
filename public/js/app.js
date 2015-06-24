angular
    /*This will set up the dependencies for the module. Even if there are no dependencies, an empty
    * array must be added*/
    .module('app', [
       'ui.router'
    ])
    /*Here we will set up the configuration for the routing. The variables for the function must be
    * annotated (placed into an array) so that when the file is minified, the variables will still be
    * available*/
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
        /*This will ensure that if a non-existent url is entered, we will be bounced back to the homepage*/
       $urlRouterProvider.otherwise('/');
        /*This will set up the various states to be routed to*/
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html',
                controller: 'homeCtrl'/*,*/
                /*****************NOT WORKING***************/
                /*THROWS A RESTRICTED URI ERROR, POSSIBLE ISSUE WITH THE PATH*/
                /*Resolve is used to access any required services before anything else is loaded*/
                /*resolve: {
                 /!*This will return the data from the JSON object located in the api directory*!/
                 friends : ['$http', function($http){
                 return $http.get('../api/friends.json').then(function (response) {
                 return response.data;
                 });
                 }]
                 }*/
                /*******************NOT WORKING*******************/
            })
            .state('about', {
                url: '/about',
                templateUrl: 'templates/about.html',
                controller: 'aboutCtrl'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'templates/contact.html',
                controller: 'contactCtrl'
            })
    }])
