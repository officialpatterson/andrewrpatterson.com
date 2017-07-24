var adminApp = angular.module('adminApp', ['ngRoute']);

    // configure our routes
    adminApp.config(function($routeProvider,  $locationProvider) {
        $routeProvider

            // route for the analyse page
            .when('/admin/analyse', {
                templateUrl : 'static/views/admin/analyse.html',
                
            })

            // route for the posts page
            .when('/admin/posts', {
                templateUrl : 'static/views/admin/posts.html',
                controller : 'postController'
            })

            // route for the create post page
            .when('/admin/newpost', {
                templateUrl : 'static/views/admin/post-form.html',
                controller : 'postFormController'
            })
            // route for the inbox page
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

//controller for viewing the posts
adminApp.controller('postController', function($scope, $http) {
  
  $http.get("/api/blog")
    .then(function(response) {
        //First function handles success
        $scope.posts = response.data;
        console.log($scope.posts);
    }, function(response) {
        //Second function handles error
        $scope.error = "Something went wrong";
    });

});
//controller for submitting messages to my inbox
adminApp.controller('postFormController', function($scope, $http) {
  
  $scope.processPostForm = function() {

    console.log($scope.post);
  $http.post('/api/blog', $scope.post).then(function(data){
    // if successful, bind success message to message
    $scope.success = "success";
    
  }).catch(function(data){
    console.log(data); 
    // if successful, bind success message to message
    $scope.failure = "failure";
    
  });
  };

});

