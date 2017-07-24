var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when("/profile", {
    templateUrl : 'static/views/front/profile.html'
  })
  .when("/blog", {
    templateUrl : 'static/views/front/blog.html',
    controller : 'blogController'
  })
  .when("/message", {
    templateUrl : 'static/views/front/message.html',
    controller: 'messageController'
  })
  .otherwise({
  redirectTo: '/blog',
  templateUrl: 'static/views/front/blog.html',
  })
   $locationProvider.html5Mode(true);
});

//controller for submitting messages to my inbox
app.controller('messageController', function($scope, $http) {
  // process the form
  $scope.processForm = function() {


  $http.post('/api/inbox', $scope.message).then(function(data){
    // if successful, bind success message to message
    $scope.success = "success";
    
  }).catch(function(data){
    console.log(data); 
    // if successful, bind success message to message
    $scope.failure = "failure";
    
  });
  };

});

//controller for displaying blog posts
app.controller('blogController', function($scope, $http) {
  
   $http.get("/api/blog")
    .then(function(response) {
        //First function handles success
        $scope.blogs = response.data;
    }, function(response) {
        //Second function handles error
        $scope.error = "Something went wrong";
    });

});