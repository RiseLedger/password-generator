var PasswordGenerator = function PasswordGenerator(config) {
    this.newPassword = '';
    this.init(config);
};

PasswordGenerator.prototype = {
    init: function (config) {
        var self = this;
        this.newPassword = '';

        for(var i = 0; i < config.len; i++) {
            var index = self._getRandom(0, config.use.length - 1);
            this.newPassword += self['get' + config.use[index] ]();
        }
    },

    getNumber: function () {
        return this._getRandom(0,9);
    },

    getChar: function () {
        return String.fromCharCode( this._getRandom(97, 122) );
    },

    getCharUpper: function () {
        return this.getChar().toUpperCase();
    },

    getSymbol: function () {
        var symbolRange = [[33,47], [58,64]];
        var choosenRange = symbolRange[
            this._getRandom(0, symbolRange.length - 1 )
        ];
        var symbolCharCode = this._getRandom(choosenRange[0], choosenRange[1]);

        return String.fromCharCode( symbolCharCode );
    },

    _getRandom: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};

module.exports = PasswordGenerator;
