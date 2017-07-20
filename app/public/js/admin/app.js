console.log("admin app");
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
            });
            $locationProvider.html5Mode(true);
    });
