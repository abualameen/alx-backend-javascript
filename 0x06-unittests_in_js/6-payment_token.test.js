const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
    it('should return a resolved promise with data object when success is true', function(done) {
        getPaymentTokenFromAPI(true)
            .then(response => {
                chai.expect(response).to.deep.equal({ data: 'Successful response from the API' });
                done();
            })
            .catch(err => {
                done(err);
            });
    });
});
