const sinon = require('sinon');
var { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');


describe('Hooks', function () {
  let spyConsole;
  beforeEach('Set up spy to use for each test', function () {
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach('restore spy after each test',function () {
    spyConsole.restore();
  });

  it('logs correctly with 100, 20', function() {
    sendPaymentRequestToApi(100, 20);

    expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(spyConsole.calledOnce).to.be.true;
  });

  it('logs correctly with 10, 10', function() {
    sendPaymentRequestToApi(10, 10);

    expect(spyConsole.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(spyConsole.calledOnce).to.be.true;
  });
});
