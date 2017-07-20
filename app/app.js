
var express = require('express');
var app = express();

var routes = require('./routes/routes.js')

// set the static files location /public
app.use('/static', express.static(__dirname + '/public'));


//set the views middleware - so we don't have to specify path everytime
 
app.use(function(req, res, next) {
    res.sendView = function(view) {
        return res.sendFile(__dirname + "/public/" + view);
    }
    next();
});

// routes ==================================================
app.use('/', routes); //default web app route

module.exports = app;