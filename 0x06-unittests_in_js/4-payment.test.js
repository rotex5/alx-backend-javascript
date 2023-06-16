const {describe, it} = require('mocha');
const sinon = require('sinon');
const Utils = require('./utils');
var { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');


describe('Stubs', function () {
  it('has the same math', () => {
    const stubUtils = sinon.stub(Utils, 'calculateNumber');
    stubUtils.returns(10);
    const spyCon = sinon.spy(console, 'log');

    sendPaymentRequestToApi(73, 20.5);

    expect(stubUtils.calledOnceWithExactly('SUM', 73, 20.5)).to.be.true;
    expect(spyCon.calledOnceWithExactly('The total is: 10')).to.be.true;

    stubUtils.restore();
    spyCon.restore();
  });
});
