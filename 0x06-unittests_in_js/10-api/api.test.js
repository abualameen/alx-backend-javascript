const request = require('supertest');
const app = require('./api');
const { expect } = require('chai');

describe('Login endpoint', () => {
  it('should return welcome message with username', async () => {
    const response = await request(app)
      .post('/login')
      .send({ userName: 'Betty' });
    expect(response.status).to.equal(200);
    expect(response.text).to.equal('Welcome Betty');
  });
});

describe('Available payments endpoint', () => {
  it('should return available payment methods', async () => {
    const response = await request(app)
      .get('/available_payments');
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    });
  });
});

