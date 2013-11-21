var md5 = require('./md5'),
	assert = require('assert');

describe('test MD5 binary encoding', function () {
	it('should use the binary encoded string', function () {
		var hash1, hash2, hash3
        hash1 = md5('abc', {asString: true});
        hash2 = md5(hash1 + 'a', {asString: true, encoding : 'binary'});
        hash3 = md5(hash1 + 'a', {encoding : 'binary'});
        // console.log('hash1', hash1);
        // console.log('hash2', hash2);
        // console.log('hash3', hash3);
        assert(hash3, '131f0ac52813044f5110e4aec638c169');
	});
});