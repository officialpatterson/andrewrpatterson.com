"use strict";

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PostSchema  = new Schema({
    timestamp: { type : Date, default: Date.now},
    titlee: String,
    content: String,
});

module.exports = mongoose.model('Post', PostSchema);