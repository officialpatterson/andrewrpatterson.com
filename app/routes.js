/*Define the HTTP routes of the application here*/
var express = require('express');
var inbox = require('./inbox/inboxcontroller.js');
var blog = require('./blog/blogcontroller.js');

//create a new router variable
var router = express.Router()


//route to the admin page
router.get('/admin/*', function(req, res){
    res.sendView('admin.html');
});   

//The GitHub Link - so we don't need to modify the view when the link changes!
router.get('/github', function(req, res){
    res.redirect('http://github.com/officialpatterson');
});

router.route('/api/inbox').get(inbox.getMessages).post(inbox.postMessage);
router.route('/api/blog/:id').get(blog.getBlog);
router.route('/api/blog').get(blog.getBlogs).post(blog.postBlog);

//default route - return the web application
router.get('*', function(req, res){
    res.sendView('index.html');
});


//export the router object for use in other modules
module.exports = router;