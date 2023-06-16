const request = require("request");
const expect = require("chai").expect;
const {describe, it} = require("mocha");

describe("Integration Testing", () => {
   describe('GET /', () => {
    const options = {
	    url: 'http://localhost:7865/',
	    method: 'GET'
    }
    it("check correct status code and content", (done) => {
	    request(options, function(err, res, body) {
	      expect(res.statusCode).to.equal(200);
	      expect(body).to.contain("Welcome to the payment system");
	      done();
	    });
    });

    it("check correct content length", (done) => {
	    request(options, function(err, res, body) {
	      expect(res.headers['content-length']).to.equal('29');
	      done();
	    });
    });
  });

  describe('GET /cart/a12', () => {
    it('Responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/a12',
        method: 'GET',
      };

      request(options, function (err, res, body) {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/2', () => {
    it('Responds with 200 and id 2 in msg', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/2',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 2');
        done();
      });
    });
  });

  describe('GET /cart/helloworld', () => {
    it('Responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/helloworld',
        method: 'GET',
      };

      request(options, function (err, res, body) {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/', () => {
    it('Responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/',
        method: 'GET',
      };

      request(options, function (err, res, body) {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /available_payments JSON string', () => {
    it('Responds with 200 and correct JSON string', (done) => {
      const options = {
        url: 'http://localhost:7865/available_payments',
        method: 'GET',
      };

      request(options, function (err, res, body) {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal(
          '{"payment_methods":{"credit_cards":true,"paypal":false}}'
        );
        done();
      });
    });
  });

  describe('GET /available_payments JSON parsed', () => {
    it('Responds with 200 and correct JSON object when parsed', (done) => {
      const options = {
        url: 'http://localhost:7865/available_payments',
        method: 'GET',
      };

      request(options, function (err, res, body) {
        expect(res.statusCode).to.equal(200);
        const bodyParsed = JSON.parse(body);

        const referenceBody = {
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        };

        expect(bodyParsed).to.deep.equal(referenceBody);
        done();
      });
    });
  });

  describe('POST /login with body', () => {
    it('Responds with 200 and correct name Betty', (done) => {
      const options = {
        url: 'http://localhost:7865/login',
        method: 'POST',
        json: {
          userName: 'Betty',
        },
      };

      request(options, function (err, res, body) {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });

  describe('POST /login with no body', () => {
    it('Responds with 200 and correct name Undefined', (done) => {
      const options = {
        url: 'http://localhost:7865/login',
        method: 'POST',
      };

      request(options, function (err, res, body) {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome undefined');
        done();
      });
    });
  });
});
