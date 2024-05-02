const request = require('request');
const { expect } = require('chai');
const server = require('./api');

describe('Index page', () => {
  // Make sure to stop the server after all tests
  after(() => {
    server.close();
  });

  it('Correct status code?', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Other?', (done) => {
    // Add any additional tests here
    done();
  });
});
