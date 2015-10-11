var expect = require('chai').expect;
var PasswordGenerator = require('./assets/js/PasswordGenerator');

var range = function (from, to) {
    var length = Math.max(Math.ceil((to - from)), 0);
    var range = Array(length);

    for (var i = 0; i <= length; i++, from++) {
        range[i] = from;
    }

    return range;
};

var pg = new PasswordGenerator({
    use: []
});

describe('PasswordGenerator', function() {
  describe('#getNumber()', function () {
    it('should return a random number between 0 and 9', function () {
        expect(pg.getNumber()).to.match(/[0-9]/);
    });
  });

  describe('#getChar()', function () {
    it('should return a lowercase character', function () {
        expect(pg.getChar()).to.match(/[a-z]/);
    });
  });

  describe('#getCharUpper()', function () {
    it('should return an uppercase character', function () {
        expect(pg.getCharUpper()).to.match(/[A-Z]/);
    });
  });

  describe('#getSymbol()', function () {
    it('should return a symbol', function () {
        var symbols = String.fromCharCode.apply(null, range(33, 47).concat(range(58,64)));
        expect(symbols.indexOf(pg.getSymbol())).to.be.within(0, symbols.length);
    });
  });
});
