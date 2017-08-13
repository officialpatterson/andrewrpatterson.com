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

        //check all form data is present and valid.
        req.checkBody("email", "invalid email address").notEmpty().isEmail();
        req.checkBody("name", "Invalid Name Field").notEmpty();
        req.checkBody("content", "Invalid message content").notEmpty();

         req.getValidationResult().then(function(result) {
            if (!result.isEmpty()) {
                res.status(400).send();
                return;
            }
         });
        //if we get this far the post data has passed the checks.
        var message = new Message(req.body);
        
       //save the message to the message schema.
        message.save(function(err) {
            if (err) return res.status(500).send();
            return res.status(200).send();
        });
        
    }
}