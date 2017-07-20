/*Define the HTTP routes of the application here*/
var express = require('express');


//create a new router variable
var router = express.Router()

//default route - return the web application
router.get('/', function(req, res){
    res.render('app')
});
     

//The GitHub Link - so we don't need to modify the view when the link changes!
router.get('/github', function(req, res){
    res.redirect('http://github.com/officialpatterson');
});


//export the router object for use in other modules
module.exports = router;