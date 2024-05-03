const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  it('Correct status code for index page?', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result for index page?', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('Correct status code when :id is a number?', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result when :id is a number?', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('Correct status code when :id is NOT a number (=> 404)?', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('Correct result when :id is NOT a number (=> 404)?', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(body).to.equal('Invalid cart ID');
      done();
    });
  });
});

describe('Login endpoint', () => {
  it('Correct status code for login endpoint?', (done) => {
    request.post({
      url: 'http://localhost:7865/login',
      body: { userName: 'Betty' },
      json: true
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result for login endpoint?', (done) => {
    request.post({
      url: 'http://localhost:7865/login',
      body: { userName: 'Betty' },
      json: true
    }, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});

describe('Available payments endpoint', () => {
  it('Correct status code for available payments endpoint?', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result for available payments endpoint?', (done) => {
    const expectedPaymentMethods = {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    };

    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      const actualPaymentMethods = JSON.parse(body);
      expect(actualPaymentMethods).to.deep.equal(expectedPaymentMethods);
      done();
    });
  });
});
