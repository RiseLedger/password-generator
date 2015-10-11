var clipboard = require('clipboard');
var PasswordGenerator = require('./assets/js/PasswordGenerator');

var button = document.querySelector('#generate');
button.addEventListener('click', function () {
    var config = {};
    config.len = parseInt( document.querySelector('#pass-length').value ) || 15;
    config.use = [];

    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    [].forEach.call(checkboxes, function (el) {
        if(el.checked) {
            config.use.push(el.value);
        }
    });

    var pg = new PasswordGenerator(config);
    document.querySelector('#generated-pass').value = pg.newPassword;
    clipboard.writeText(pg.newPassword);
}, false);
