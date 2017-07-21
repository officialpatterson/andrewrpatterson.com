var Message = require('./message.js'); //import the Message Schema
module.exports = {
    getMessages : function(req, res){
        Message.find(function(err, messages) {
            if (err)
                res.send(err);

            res.json(messages);
        });
       
    },
    postMessage : function(req, res){

        var message = new Message(req.body);
       //save the message to the message schema.
        message.save(function(err) {
        if (err)
            res.send(err);
        res.json({ message: 'Message sent!' });
        }); 
    }
}