var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

//blogs have an ID, a timestamp, author, content.
var blogSchema   = new Schema({
    id: Number,
    timestamp: Date,
    author: String,
    content: String
});

module.exports = mongoose.model('blog', blogSchema);