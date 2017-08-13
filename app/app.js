
var express = require('express');
var app = express();
var mongoose   = require('mongoose');
mongoose.Promise = require("bluebird");
var bodyParser = require('body-parser')
var expressValidator = require('express-validator');

var routes = require('./routes.js')
// set the static files location /public
app.use('/static', express.static(__dirname + '/public'));

//connect to the mongoDB instance

mongoose.connect(process.env.DATABASE); // connect to our database

 app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator()); // Add this after the bodyParser middlewares!

//set views
app.use(function(req, res, next) {
    res.sendView = function(view) {
        return res.sendFile(__dirname + "/public/" + view);
    }
    next();
});

// routes ==================================================
app.use('/', routes); //default web app route

module.exports = app;