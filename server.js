/* Server*/
var app = require('./app/app.js');

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("App is running on port " + port);
});
