var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when("/profile", {
    templateUrl : 'static/views/front/profile.html'
  })
  .when("/blog", {
    templateUrl : 'static/views/front/blog.html'
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


  $http.post('/api/message', $scope.message).then(function(data){
    // if successful, bind success message to message
    $scope.success = "success";
    
  }).catch(function(data){
    console.log(data); 
    // if successful, bind success message to message
    $scope.failure = "failure";
    
  });
  };

});