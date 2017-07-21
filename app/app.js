
var express = require('express');
var app = express();
var mongoose   = require('mongoose');
var bodyParser = require('body-parser')

var config = require('../config.json');
var routes = require('./routes.js')
// set the static files location /public
app.use('/static', express.static(__dirname + '/public'));

//connect to the mongoDB instance
mongoose.connect(config.dburi); // connect to our database

 app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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