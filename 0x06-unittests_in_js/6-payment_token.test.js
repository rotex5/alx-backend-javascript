const getPaymentTokenFromAPI = require('./6-payment_token');
const {describe, it} = require("mocha");
const expect = require('chai').expect;


describe('getPaymentTokenFromAPI', function () {
  describe('arg true', function () {
    it('Async testing with done callback', function (done) {
      getPaymentTokenFromAPI(true)
        .then((res) => {
          expect(res).to.include({ data: 'Successful response from the API' });
          done();
        })
        .catch((err) => done(err));
    });
  });
});
