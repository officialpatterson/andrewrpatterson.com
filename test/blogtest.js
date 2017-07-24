/*POST on /api/blog should returnn a status code and the newly created object.*/

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app/app.js');
var should = chai.should();
var Post = require('../app/blog/post.js'); //import the Post Schema

chai.use(chaiHttp);

//Our parent block
describe('Blog', () => {
    beforeEach((done) => { //Before each test we empty the database
        Post.remove({}, (err) => { 
           done();         
        });     
    });
afterEach((done) => { //Before each test we empty the database
        Post.remove({}, (err) => { 
           done();         
        });     
    });
  describe('/GET blog', () => {
      it('returns all blog posts', (done) => {
        chai.request(server)
            .get('/api/blog')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
              done();
            });
      });
  });
    describe('/POST blog', () => {
      var post = new Post({ title: 'My Blog Title',  content: 'myPost content' });
      console.log("POST OBJECT: "+post);
      console.log(post);
      it('valid blog', (done) => {
        chai.request(server)
            .post('/api/blog')
            .send(post)
            .end((err, res) => {
                 res.should.have.status(200);
              done();
            });
      });
  });
//missing title
  describe('/POST blog', () => {
    var post = new Post({content: 'myPost content' });

      it('Missing Post data: title', (done) => {
        chai.request(server)
            .post('/api/blog')
            .send(post)
            .end((err, res) => {
                 res.should.have.status(400);
              done();
            });
      });
  });
//missing content.
  describe('/POST blog', () => {
      var post = new Post({ title: 'My Blog Title'});

      it('Missing Post data: name', (done) => {
        chai.request(server)
            .post('/api/blog')
            .send(post)
            .end((err, res) => {
                 res.should.have.status(400);
              done();
            });
      });
  }); 

});
