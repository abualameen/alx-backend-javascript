const request = require('request');
const { expect } = require('chai');
const app = require('./api'); // Import the Express app

describe('Index page', () => {
  let server;

  // Start the server before running the tests
  before((done) => {
    server = app.listen(7865, () => {
      console.log('API available on localhost port 7865');
      done();
    });
  });

  // Close the server after running the tests
  after((done) => {
    server.close(() => {
      console.log('Server closed');
      done();
    });
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
