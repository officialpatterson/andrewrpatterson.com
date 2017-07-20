var mongoose = require('mongoose');
mongoose.connect('mongodb://officialandyp:cockatiel93@cluster0-shard-00-00-udfb8.mongodb.net:27017,cluster0-shard-00-01-udfb8.mongodb.net:27017,cluster0-shard-00-02-udfb8.mongodb.net:27017/andrewrpatterson?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');


module.exports = mongoose;
