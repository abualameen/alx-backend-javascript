const sinon = require('sinon');
const chai = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
    let consoleLogStub;

    beforeEach(function() {
        // Stub Utils.calculateNumber to always return 10
        sinon.stub(Utils, 'calculateNumber').returns(10);

        // Spy on console.log
        consoleLogStub = sinon.stub(console, 'log');
    });

    afterEach(function() {
        // Restore the stub and the spy after each test
        sinon.restore();
    });

    it('should call Utils.calculateNumber with type = SUM, a = 100, and b = 20', function() {
        sendPaymentRequestToApi(100, 20);
        chai.expect(Utils.calculateNumber.calledOnce).to.be.true;
        chai.expect(Utils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    });

    it('should log "The total is: 10"', function() {
        sendPaymentRequestToApi(100, 20);
        chai.expect(consoleLogStub.calledOnce).to.be.true;
        chai.expect(consoleLogStub.calledWith('The total is: 10')).to.be.true;
    });
});
