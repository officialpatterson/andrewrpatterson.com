var mongoose = require('mongoose');
var blogModel = mongoose.model('blog');


//retrieves all posts from the database.
exports.list_all_posts= function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
