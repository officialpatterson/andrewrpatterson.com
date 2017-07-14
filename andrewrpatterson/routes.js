/*Define the HTTP routes of the application here*/
var express = require('express');


//create a new router variable
var router = express.Router()

//add new route to router
router.get('/', function(req, res){
    res.render('app')
});

//export the router object for use in other modules
module.exports = router;