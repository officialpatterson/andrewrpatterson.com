var Blog = require('./post.js'); //import the blog post Schema

module.exports = {
    getBlogs : function(req, res){
        Blog.find(function(err, blogs) {
            if (err)
                res.send(err);

            console.log(blogs);
            res.json(blogs);
           
        });
       
    },
    getBlog : function(req, res) {
        Blog.findById({_id: req.params.id}, (err, blog) => {
        if(err) res.send(err);
        //If no errors, send it back to the client
        res.json(blog);
    });     
    },
    postBlog : function(req, res){

        //check all form data is present and valid.
        req.checkBody("title", "missing title").notEmpty();
        req.checkBody("content", "Missing content").notEmpty();

         req.getValidationResult().then(function(result) {
            if (!result.isEmpty()) {
                res.status(400).send();
                return;
            }
         });
        //if we get this far the post data has passed the checks.
        var blog = new Blog(req.body);
        blog.save(function(err, blog) {
            if (err){
                console.log("500 ERROR");
                return res.status(500).send();
            };
            console.log("200 OK");
            return res.status(200).send();
        }); 
    }
}