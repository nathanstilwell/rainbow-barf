/*jshint eqnull: true */
/*global require: false, describe: false, it: false */

'use strict';

var escape = require('../lib/escapeCodes');

describe('EscapeCodes', function () {

  it('should return an object', function escapeCodesObjectTest () {
    expect(typeof escape).toEqual('object');
  });

  describe('has a text function,', function () {
    it('should be a function', function textShouldBeAFunction () {
      expect(typeof escape.text).toEqual('function');
    });

    it('should return the escape code for black', function () {
      expect(escape.text('black')).toEqual('\u001b[30m');
    });

    it('should return the escape code for red', function () {
      expect(escape.text('red')).toEqual('\u001b[31m');
    });

    it('should return the escape code for green', function () {
      expect(escape.text('green')).toEqual('\u001b[32m');
    });

    it('should return the escape code for yellow', function () {
      expect(escape.text('yellow')).toEqual('\u001b[33m');
    });

    it('should return the escape code for blue', function () {
      expect(escape.text('blue')).toEqual('\u001b[34m');
    });

    it('should return the escape code for purple', function () {
      expect(escape.text('purple')).toEqual('\u001b[35m');
    });

    it('should return the escape code for cyan', function () {
      expect(escape.text('cyan')).toEqual('\u001b[36m');
    });

    it('should return the escape code for white', function () {
      expect(escape.text('white')).toEqual('\u001b[37m');
    });

    it('should return the escape code for bright_red', function () {
      expect(escape.text('bright_red')).toEqual('\u001b[91m');
    });

    it('should return the escape code for bright_green', function () {
      expect(escape.text('bright_green')).toEqual('\u001b[92m');
    });

    it('should return the escape code for bright_yellow', function () {
      expect(escape.text('bright_yellow')).toEqual('\u001b[93m');
    });

    it('should return the escape code for bright_blue', function () {
      expect(escape.text('bright_blue')).toEqual('\u001b[94m');
    });

    it('should return the escape code for bright_purple', function () {
      expect(escape.text('bright_purple')).toEqual('\u001b[95m');
    });

    it('should return the escape code for bright_cyan', function () {
      expect(escape.text('bright_cyan')).toEqual('\u001b[96m');
    });

    it('should return the escape code for bright_white', function () {
      expect(escape.text('bright_white')).toEqual('\u001b[97m');
    });
  });  // text function

  describe('has a background function,', function () {
    it('should be a function', function () {
      expect(typeof escape.background).toEqual('function');
    });

    it('should return the escape code for black', function () {
      expect(escape.background('black')).toEqual('\u001b[40m');
    });

    it('should return the escape code for red', function () {
      expect(escape.background('red')).toEqual('\u001b[41m');
    });

    it('should return the escape code for green', function () {
      expect(escape.background('green')).toEqual('\u001b[42m');
    });

    it('should return the escape code for yellow', function () {
      expect(escape.background('yellow')).toEqual('\u001b[43m');
    });

    it('should return the escape code for blue', function () {
      expect(escape.background('blue')).toEqual('\u001b[44m');
    });

    it('should return the escape code for purple', function () {
      expect(escape.background('purple')).toEqual('\u001b[45m');
    });

    it('should return the escape code for cyan', function () {
      expect(escape.background('cyan')).toEqual('\u001b[46m');
    });

    it('should return the escape code for white', function () {
      expect(escape.background('white')).toEqual('\u001b[47m');
    });

    it('should return the escape code for bright_black', function () {
      expect(escape.background('bright_black')).toEqual('\u001b[100m');
    });

    it('should return the escape code for bright_red', function () {
      expect(escape.background('bright_red')).toEqual('\u001b[101m');
    });

    it('should return the escape code for bright_green', function () {
      expect(escape.background('bright_green')).toEqual('\u001b[102m');
    });

    it('should return the escape code for bright_yellow', function () {
      expect(escape.background('bright_yellow')).toEqual('\u001b[103m');
    });

    it('should return the escape code for bright_blue', function () {
      expect(escape.background('bright_blue')).toEqual('\u001b[104m');
    });

    it('should return the escape code for bright_purple', function () {
      expect(escape.background('bright_purple')).toEqual('\u001b[105m');
    });

    it('should return the escape code for bright_cyan', function () {
      expect(escape.background('bright_cyan')).toEqual('\u001b[106m');
    });

    it('should return the escape code for bright_white', function () {
      expect(escape.background('bright_white')).toEqual('\u001b[107m');
    });
  }); // background

  describe('has a format function,', function () {
    it('should be a function', function () {
      expect(typeof escape.format).toEqual('function');
    });

    it('should return the escape code for bold', function () {
      expect(escape.format('bold')).toEqual('\u001b[1m');
    });

    it('should return the escape code for italics', function () {
      expect(escape.format('italics')).toEqual('\u001b[3m');
    });

    it('should return the escape code for underline', function () {
      expect(escape.format('underline')).toEqual('\u001b[4m');
    });

    it('should return the escape code for blink', function () {
      expect(escape.format('blink')).toEqual('\u001b[5m');
    });

    it('should return the escape code for reverse', function () {
      expect(escape.format('reverse')).toEqual('\u001b[7m');
    });
  }); // format

  describe('has a reset format function,', function () {
    it('should be a function', function () {
      expect(typeof escape.reset).toEqual('function');
    });

    it('should return the escape code for reset', function () {
      expect(escape.reset()).toEqual('\u001b[0m');
    });
  });
}); // Escape Codes
