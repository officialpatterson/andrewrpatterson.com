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
    templateUrl : 'static/views/front/message.html'
  })
  .otherwise({
  redirectTo: '/blog',
  templateUrl: 'static/views/front/blog.html',
  })
   $locationProvider.html5Mode(true);
});
