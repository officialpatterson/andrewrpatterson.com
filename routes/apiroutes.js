/*Define the HTTP routes of the application here*/
var express = require('express');
var blogController = require('../blogcontroller.js');

//create a new router variable
var apirouter = express.Router()

//API splash page
apirouter.get('/',function(req, res){
    res.render('apisplash')
});
//blog posts
apirouter.get('/blog').get(blogController.list_all_posts);

//profiles (Add, create, get)
apirouter.get('/profile',function(req, res){
    res.send('latest profile');
});

//analytics - visit(id, time of day, URl)
apirouter.get('/analyse',function(req, res){
    res.send('analytics');
});

//export the router object for use in other modules
module.exports = apirouter;