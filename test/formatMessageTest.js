/*jshint esnext: true, laxcomma: true, eqeqeq: true, bitwise: true, curly: true, latedef: true, strict: true, plusplus: true*/
/*global require: false, describe: false, it: false */

'use strict';

var chai = require('chai');
var expect = chai.expect;
var formatMessage = require('../lib/formatMessage');

describe('FormatMessage', function formatMessageTests () {

  it('should be an object', function shouldBeAnObjectTest () {
    expect(formatMessage).to.be.a('object');
  });

  describe('has a decorate function,', function decorateFunctionsTest () {

    var escapePre = '\u001b[';
    var escapePost = 'm';
    var reset = escapePre + '0' + escapePost;

    it('should be a function', function haveADecorateFunctionTest () {
      expect(formatMessage.decorate).to.be.a('function');
    });

    it('should return a string', function returnAStringTest () {
      var message = 'test';
      var defaultOptions = {
        color: 'default',
        background: 'default',
        formatting: [],
        lineBreakOption: '\n'
      };
      expect(formatMessage.decorate(message, defaultOptions)).to.be.a('string');
    });

    it('should format a message with default options', function formatWithDefaultOptionsTest () {
      var message = 'test';
      var defaultOptions = {
        color: 'default',
        background: 'default',
        formatting: [],
        lineBreakOption: '\n'
      };
      var result = formatMessage.decorate(message, defaultOptions);
      var expectedColor = escapePre + '39' + escapePost;
      var expectedBackgroundColor = escapePre + '49' + escapePost;

      expect(result).to.be.equal(expectedColor + expectedBackgroundColor + message + reset + '\n');
    });

    it('should format a message with missing options', function formatWithMissingOptions () {
      var message = 'test';
      var expectedColor = '\u001b[33m';
      var expectedBackground = '\u001b[45m';
      var expectedFormatting = '\u001b[1m';
      var testLinebreak = 'bonk';
      var resultOnlyColor;
      var resultOnlyBackground;
      var resultOnlyFormatting;
      var resultOnlyLineBreak;

      resultOnlyColor = formatMessage.decorate(message, {
        color: 'yellow'
      });
      resultOnlyBackground = formatMessage.decorate(message, {
        background: 'purple'
      });
      resultOnlyFormatting = formatMessage.decorate(message, {
        formatting: ['bold']
      });
      resultOnlyLineBreak = formatMessage.decorate(message, {
        lineBreakOption: testLinebreak
      });

      expect(resultOnlyColor).to.be.equal(expectedColor + message + reset + '\n');
      expect(resultOnlyBackground).to.be.equal(expectedBackground + message + reset + '\n');
      expect(resultOnlyFormatting).to.be.equal(expectedFormatting + message + reset + '\n');
      expect(resultOnlyLineBreak).to.be.equal(message + reset + testLinebreak);
    });

    it('should format a message with various options', function formatWithVariousOptionsTest () {
      var color = '\u001b[33m';
      var background = '\u001b[45m';
      var bold = '\u001b[1m';
      var italics = '\u001b[3m';
      var underline = '\u001b[4m';
      var blink = '\u001b[5m';
      var reverse = '\u001b[7m';
      var reset = '\u001b[0m';

      var message = 'this is a cool message';
      var options = {
        color: 'yellow',
        background: 'purple',
        formatting: ['underline', 'bold', 'italics', 'reverse', 'blink'],
        lineBreakOption: ''
      };

      var result = formatMessage.decorate(message, options);
      var expectedResult = color + background + underline + bold + italics + reverse + blink + message + reset + '';

      expect(result).to.be.equal(expectedResult);
    });


  }); // decorate function
}); // Format Message