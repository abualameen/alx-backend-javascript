const sinon = require('sinon');
const chai = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
    let consoleLogStub;

    beforeEach(function() {
        // Stub console.log to prevent actual output
        consoleLogStub = sinon.stub(console, 'log');
    });

    afterEach(function() {
        // Restore the stub after each test
        sinon.restore();
    });

    it('should log "The total is: 120" when called with totalAmount = 100 and totalShipping = 20', function() {
        sendPaymentRequestToApi(100, 20);
        chai.expect(consoleLogStub.calledOnce).to.be.true;
        chai.expect(consoleLogStub.calledWith('The total is: 120')).to.be.true;
    });

    it('should log "The total is: 20" when called with totalAmount = 10 and totalShipping = 10', function() {
        sendPaymentRequestToApi(10, 10);
        chai.expect(consoleLogStub.calledOnce).to.be.true;
        chai.expect(consoleLogStub.calledWith('The total is: 20')).to.be.true;
    });
});
