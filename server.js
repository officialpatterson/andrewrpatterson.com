/* Server*/
var app = require('./app/app.js');

var port = process.env.PORT || 3000;
console.log('Application is listening on port ' + port);
app.listen(port);
