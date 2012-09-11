var md5 = require('./md5.js');
var assert = require('assert');

describe('MD5', function () {
  it('should return the expected MD5 hash for "message"', function () {
    assert.equal('78e731027d8fd50ed642340b7c9a63b3', md5('message'));
  });
});
