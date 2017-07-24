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
    
      it('Missing Post data: email', (done) => {
        var message = new Message({name: 'john doe', content: 'mymessage' });
        chai.request(server)
            .post('/api/inbox')
            .send(message)
            .end((err, res) => {
                 res.should.have.status(400);
              done();
            });
      });

      it('Missing Post data: name', (done) => {
        var message = new Message({ email: 'john.doe@yahoo.co.uk', content: 'mymessage' });

        chai.request(server)
            .post('/api/inbox')
            .send(message)
            .end((err, res) => {
                 res.should.have.status(400);
              done();
            });
      });
      
      it('Missing Post data: content', (done) => {
        var message = new Message({ email: 'john.doe@yahoo.co.uk', name: 'john doe' });

        chai.request(server)
            .post('/api/inbox')
            .send(message)
            .end((err, res) => {
                 res.should.have.status(400);
              done();
            });
      });
    
      it('Malformed email', (done) => {
        var message = new Message({ email: 'john.doeyahoo.com', name: 'john doe', content: 'mymessage' });
        chai.request(server)
            .post('/api/inbox')
            .send(message)
            .end((err, res) => {
                 res.should.have.status(400);
              done();
            });
      });
      it('valid email', (done) => {
        var message = new Message({ email: 'john.doe@yahoo.co.uk', name: 'john doe', content: 'mymessage' });

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
