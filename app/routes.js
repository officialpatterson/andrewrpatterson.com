/*Define the HTTP routes of the application here*/
var express = require('express');
var inbox = require('./inbox/inboxcontroller.js');

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

router.route('/api/message').get(inbox.getMessages).post(inbox.postMessage);

//default route - return the web application
router.get('*', function(req, res){
    res.sendView('index.html');
});


//export the router object for use in other modules
module.exports = router;