const request = require("request");
const expect = require("chai").expect;
const {describe, it} = require("mocha");

describe("Index page", () => {
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
});
