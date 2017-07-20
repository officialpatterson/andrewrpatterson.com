/* Application entry point*/

var express = require('express');
var app = express();
var mongoose = require('mongoose')
var Task = require('./models/blog.js')
var routes = require('./routes/routes.js')
var apiroutes = require('./routes/apiroutes.js')


//set the view engine and directory.
app.set('view engine', 'pug');
app.set('views','./views');

//define the URL and location of static files
app.use('/static', express.static('public'));

app.use('/', routes); //default web app route
app.use('/api', apiroutes); //api routes


var port = process.env.PORT || 3000;

console.log('Application is listening on port ' + port);
app.listen(port);
