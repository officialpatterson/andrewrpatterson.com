
console.log("loading app specific code");
var angular = require('angular');
var angularroute = require('angular-route');
var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/profile", {
    templateURL:'partials/profile'
  })
  .when("/invest", {
    template : "<p>Invest</p>"
  })
  .when("/join", {
    template : "<p>Join</p>"
  });
});