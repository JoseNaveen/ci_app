var request = require('supertest');
var app = require('../test_app');

var assert = require('assert'); //mocha
var chai = require('chai');
var expect = null;

chai.should();
expect = chai.expect;

describe('GET /', function() {
    it('should return a 200', function(done) {
        request(app).get('/').expect(200, done);
    });
});