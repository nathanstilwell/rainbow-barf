/*jshint eqnull: true */
/*global require: false, describe: false, it: false */

'use strict';

var chai = require('chai');
var expect = chai.expect;
var escape = require('../lib/escapeCodes');

describe('Escape Codes', function () {

  it('should return an escape codes object', function escapeCodesObjectTest () {
    expect(escape).to.be.a('object');
  });

  describe('have a text function', function () {
    it('should be a function', function textShouldBeAFunction () {
      expect(escape.text).to.be.a('function');
    });

    it('should return the escape code for black', function () {
      expect(escape.text('black')).to.be.equal('\u001b[30m');
    });

    it('should return the escape code for red', function () {
      expect(escape.text('red')).to.be.equal('\u001b[31m');
    });

    it('should return the escape code for green', function () {
      expect(escape.text('green')).to.be.equal('\u001b[32m');
    });

    it('should return the escape code for yellow', function () {
      expect(escape.text('yellow')).to.be.equal('\u001b[33m');
    });

    it('should return the escape code for blue', function () {
      expect(escape.text('blue')).to.be.equal('\u001b[34m');
    });

    it('should return the escape code for purple', function () {
      expect(escape.text('purple')).to.be.equal('\u001b[35m');
    });

    it('should return the escape code for cyan', function () {
      expect(escape.text('cyan')).to.be.equal('\u001b[36m');
    });

    it('should return the escape code for white', function () {
      expect(escape.text('white')).to.be.equal('\u001b[37m');
    });

    it('should return the escape code for bright_red', function () {
      expect(escape.text('bright_red')).to.be.equal('\u001b[91m');
    });

    it('should return the escape code for bright_green', function () {
      expect(escape.text('bright_green')).to.be.equal('\u001b[92m');
    });

    it('should return the escape code for bright_yellow', function () {
      expect(escape.text('bright_yellow')).to.be.equal('\u001b[93m');
    });

    it('should return the escape code for bright_blue', function () {
      expect(escape.text('bright_blue')).to.be.equal('\u001b[94m');
    });

    it('should return the escape code for bright_purple', function () {
      expect(escape.text('bright_purple')).to.be.equal('\u001b[95m');
    });

    it('should return the escape code for bright_cyan', function () {
      expect(escape.text('bright_cyan')).to.be.equal('\u001b[96m');
    });

    it('should return the escape code for bright_white', function () {
      expect(escape.text('bright_white')).to.be.equal('\u001b[97m');
    });
  });  // text function

  describe('have a background function', function () {
    it('should be a function', function () {
      expect(escape.background).to.be.a('function');
    });

    it('should return the escape code for black', function () {
      expect(escape.background('black')).to.be.equal('\u001b[40m');
    });

    it('should return the escape code for red', function () {
      expect(escape.background('red')).to.be.equal('\u001b[41m');
    });

    it('should return the escape code for green', function () {
      expect(escape.background('green')).to.be.equal('\u001b[42m');
    });

    it('should return the escape code for yellow', function () {
      expect(escape.background('yellow')).to.be.equal('\u001b[43m');
    });

    it('should return the escape code for blue', function () {
      expect(escape.background('blue')).to.be.equal('\u001b[44m');
    });

    it('should return the escape code for purple', function () {
      expect(escape.background('purple')).to.be.equal('\u001b[45m');
    });

    it('should return the escape code for cyan', function () {
      expect(escape.background('cyan')).to.be.equal('\u001b[46m');
    });

    it('should return the escape code for white', function () {
      expect(escape.background('white')).to.be.equal('\u001b[47m');
    });

    it('should return the escape code for bright_black', function () {
      expect(escape.background('bright_black')).to.be.equal('\u001b[100m');
    });

    it('should return the escape code for bright_red', function () {
      expect(escape.background('bright_red')).to.be.equal('\u001b[101m');
    });

    it('should return the escape code for bright_green', function () {
      expect(escape.background('bright_green')).to.be.equal('\u001b[102m');
    });

    it('should return the escape code for bright_yellow', function () {
      expect(escape.background('bright_yellow')).to.be.equal('\u001b[103m');
    });

    it('should return the escape code for bright_blue', function () {
      expect(escape.background('bright_blue')).to.be.equal('\u001b[104m');
    });

    it('should return the escape code for bright_purple', function () {
      expect(escape.background('bright_purple')).to.be.equal('\u001b[105m');
    });

    it('should return the escape code for bright_cyan', function () {
      expect(escape.background('bright_cyan')).to.be.equal('\u001b[106m');
    });

    it('should return the escape code for bright_white', function () {
      expect(escape.background('bright_white')).to.be.equal('\u001b[107m');
    });
  }); // background

  describe('have a format function', function () {
    it('should be a function', function () {
      expect(escape.format).to.be.a('function');
    });

    it('should return the escape code for bold', function () {
      expect(escape.format('bold')).to.be.equal('\u001b[1m');
    });

    it('should return the escape code for italics', function () {
      expect(escape.format('italics')).to.be.equal('\u001b[3m');
    });

    it('should return the escape code for underline', function () {
      expect(escape.format('underline')).to.be.equal('\u001b[4m');
    });

    it('should return the escape code for blink', function () {
      expect(escape.format('blink')).to.be.equal('\u001b[5m');
    });

    it('should return the escape code for reverse', function () {
      expect(escape.format('reverse')).to.be.equal('\u001b[7m');
    });
  }); // format

  describe('have a reset format function', function () {
    it('should be a function', function () {
      expect(escape.reset).to.be.a('function');
    });

    it('should return the escape code for reset', function () {
      expect(escape.reset()).to.be.equal('\u001b[0m');
    });
  });
}); // Escape Codes
