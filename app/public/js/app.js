var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {

    template: 'go to blog',
  })
  .when("/profile", {
    template: 'profile placeholder',
  })
  .when("/blog", {
    template: 'blog placeholder',
  })
  .when("/message", {
    template: 'message placeholder',
  });
});
