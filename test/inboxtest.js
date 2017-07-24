//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app/app.js');
var should = chai.should();
var Message = require('../app/inbox/message.js'); //import the Message Schema

chai.use(chaiHttp);

//Our parent block
describe('Inbox', () => {
    beforeEach((done) => { //Before each test we empty the database
        Message.remove({}, (err) => { 
           done();         
        });     
    });
afterEach((done) => { //Before each test we empty the database
        Message.remove({}, (err) => { 
           done();         
        });     
    });
  describe('/GET inbox', () => {
      it('returns all messages in inbox', (done) => {
        chai.request(server)
            .get('/api/inbox')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
              done();
            });
      });
  });
    
//missing email address.
  describe('/POST inbox', () => {
    var message = new Message({name: 'john doe', content: 'mymessage' });

      it('Missing Post data: email', (done) => {
        chai.request(server)
            .post('/api/inbox')
            .send(message)
            .end((err, res) => {
                 res.should.have.status(400);
              done();
            });
      });
  });
//missing name field.
  describe('/POST inbox', () => {
      var message = new Message({ email: 'john.doe@yahoo.co.uk', content: 'mymessage' });

      it('Missing Post data: name', (done) => {
        chai.request(server)
            .post('/api/inbox')
            .send(message)
            .end((err, res) => {
                 res.should.have.status(400);
              done();
            });
      });
  });
    //missing content
    describe('/POST inbox', () => {
      var message = new Message({ email: 'john.doe@yahoo.co.uk', name: 'john doe' });

      it('Missing Post data: content', (done) => {
        chai.request(server)
            .post('/api/inbox')
            .send(message)
            .end((err, res) => {
                 res.should.have.status(400);
              done();
            });
      });
  });    
  //malformed email address case
  describe('/POST inbox', () => {
    var message = new Message({ email: 'john.doeyahoo.com', name: 'john doe', content: 'mymessage' });

      it('Malformed email', (done) => {
        chai.request(server)
            .post('/api/inbox')
            .send(message)
            .end((err, res) => {
                 res.should.have.status(400);
              done();
            });
      });
  });
describe('/POST inbox', () => {
      var message = new Message({ email: 'john.doe@yahoo.co.uk', name: 'john doe', content: 'mymessage' });
      it('valid email', (done) => {
        chai.request(server)
            .post('/api/inbox')
            .send(message)
            .end((err, res) => {
                 res.should.have.status(200);
              done();
            });
      });
  });
});
