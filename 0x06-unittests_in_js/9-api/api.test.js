const request = require('supertest');
const app = require('./api');
const { expect } = require('chai');

describe('Cart page', () => {
  it('should return payment methods for cart when id is a number', async () => {
    const response = await request(app).get('/cart/12');
    expect(response.status).to.equal(200);
    expect(response.text).to.equal('Payment methods for cart 12');
  });

  it('should return 404 when id is not a number', async () => {
    const response = await request(app).get('/cart/hello');
    expect(response.status).to.equal(404);
    expect(response.text).to.equal('Invalid cart ID. Must be a number.');
  });
});
