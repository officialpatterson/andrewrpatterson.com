console.log("my application's front-end JS");

var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    console.log("routes");
  $routeProvider
  .when("/", {
    template: "<p>Home</p>"
  })
  .when("/about", {
    template : "<p>About</p>"
  })
  .when("/invest", {
    template : "<p>Invest</p>"
  })
  .when("/join", {
    template : "<p>Join</p>"
  });
});