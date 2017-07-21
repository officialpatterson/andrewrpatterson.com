"use strict";

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var MessageSchema  = new Schema({
    timestamp: { type : Date, default: Date.now},
    email: String,
    name: String,
    content: String
});

module.exports = mongoose.model('Message', MessageSchema);