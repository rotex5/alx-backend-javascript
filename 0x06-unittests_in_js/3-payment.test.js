const {describe, it} = require('mocha');
const sinon = require('sinon');
const Utils = require('./utils');
var { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');


describe('Spies', function () {
  it('has the same math', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    const spyCon = sinon.spy(console, 'log');

    sendPaymentRequestToApi(73, 20.5);

    expect(spy.calledOnceWithExactly('SUM', 73, 20.5)).to.be.true;
    expect(spyCon.calledOnceWithExactly('The total is: 94')).to.be.true;

    spy.restore();
    spyCon.restore();
  });
});
