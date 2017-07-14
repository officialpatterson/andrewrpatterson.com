/* Application entry point*/

var express = require('express');
var app = express();
var routes = require('./routes.js')

//set the view engine and directory.
app.set('view engine', 'pug');
app.set('views','./views');

//define the URL and location of static files
app.use('/static', express.static('public'));

app.use('/', routes);

var port = process.env.PORT || 3000;
app.listen(port);