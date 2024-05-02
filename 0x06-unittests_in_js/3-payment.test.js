// 3-payment.test.js

const sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with correct arguments', function () {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnceWith('SUM', 100, 20)).to.be.true;

    calculateNumberSpy.restore();
  });
});

