var should = require('should');
var fs = require('fs');
var slid = require('../index');

describe('slid template generate config test', function () {
    it('generate a config file', function () {
        slid.generateConfigFile(3);
        fs.existsSync(process.cwd() + '/slides.yml').should.be.ok;
    });
});

describe('slid template render', function () {
    it('render the template and generate a rendered file', function () {
        slid.renderTemplate(3);
        setTimeout(function () {
            fs.existsSync(__dirname + '/target/slide.html').should.be.ok;
        }, 5000);
    });
});

describe('slid open slides', function () {
    it('must open a browser contains slides', function () {
        slid.start();
    });
});