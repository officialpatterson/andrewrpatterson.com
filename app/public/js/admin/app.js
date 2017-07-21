var adminApp = angular.module('adminApp', ['ngRoute']);

    // configure our routes
    adminApp.config(function($routeProvider,  $locationProvider) {
        $routeProvider

            // route for the home page
            .when('/admin/analyse', {
                templateUrl : 'static/views/admin/analyse.html',
                
            })

            // route for the about page
            .when('/admin/posts', {
                templateUrl : 'static/views/admin/posts.html',
            })

            // route for the contact page
            .when('/admin/inbox', {
                templateUrl : 'static/views/admin/inbox.html',
                controller: 'inboxController'
            });
            $locationProvider.html5Mode(true);
    });
//controller for submitting messages to my inbox
adminApp.controller('inboxController', function($scope, $http) {
  
  $http.get("/api/inbox")
    .then(function(response) {
        //First function handles success
        $scope.messages = response.data;
    }, function(response) {
        //Second function handles error
        $scope.error = "Something went wrong";
    });

});