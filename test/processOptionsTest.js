/*jshint esnext: true, laxcomma: true, eqeqeq: true, bitwise: true, curly: true, latedef: true, strict: true, plusplus: true*/
/*global require: false, describe: false, it: false */

'use strict';

var chai = require('chai');
var expect = chai.expect;
var processOptions = require('../lib/processOptions');

describe('Process Options', function () {
  it('should be an object', function () {
    expect(processOptions).to.be.a('object');
  });

  it('should have a parse function', function () {
    expect(processOptions.parse).to.be.a('function');
  });

  it('should parse blank options and return a newline', function () {
    var opts = processOptions.parse();
    expect(opts).to.be.a('object');
    expect(opts.color).to.be.equal('default');
    expect(opts.background).to.be.equal('default');
    expect(opts.formatting).to.be.empty;
    expect(opts.lineBreakOption).to.be.equal('\n');
  });

  describe('Process Options as strings', function () {
    it('should return an object if I give it a string', function () {
      var opts = processOptions.parse('-c:purple -nubirl -k:blue');
      expect(opts).to.be.a('object');
    });

    it('should process a color', function () {
      var opts = processOptions.parse('-c:red');
      expect(opts.color).to.be.equal('red');
    });

    it('should process a background color', function () {
      var opts = processOptions.parse('-k:red');
      expect(opts.background).to.be.equal('red');
    });

    it('should process formatting', function () {
      var opts = processOptions.parse('-ubirl');
      var formatting = ['underline', 'bold', 'italics', 'reverse', 'blink'];
      expect(opts.formatting).to.include.members(formatting);
    });

    it('should process line break option', function () {
      var opts = processOptions.parse('-n');
      expect(opts.lineBreakOption).to.be.equal('');
    });

    it('should process mixed options', function () {
      var opts = processOptions.parse('-c:red -nubirl -k:blue');
      var formatting = ['underline', 'bold', 'italics', 'reverse', 'blink'];
      expect(opts.color).to.be.equal('red');
      expect(opts.background).to.be.equal('blue');
      expect(opts.formatting).to.include.members(formatting);
      expect(opts.lineBreakOption).to.be.equal('');
    });
  }); // Process Options as string

  describe('Process Options as array', function () {
    it('should return an object if I give it an array', function () {
      var opts = processOptions.parse(['c:red', 'b', 'i']);
      expect(opts).to.be.a('object');
    });

    it('should process a color', function () {
      var opts = processOptions.parse(['c:red']);
      expect(opts.color).to.be.equal('red');
    });

    it('should process a background color', function () {
      var opts = processOptions.parse(['k:red']);
      expect(opts.background).to.be.equal('red');
    });

    it('should process formatting as a group', function () {
      var opts = processOptions.parse(['ubirl']);
      var formatting = ['underline', 'bold', 'italics', 'reverse', 'blink'];
      expect(opts.formatting).to.include.members(formatting);
    });

    it('should process formatting as individual elements', function () {
      var opts = processOptions.parse(['u', 'b', 'i', 'r', 'l']);
      var formatting = ['underline', 'bold', 'italics', 'reverse', 'blink'];
      expect(opts.formatting).to.include.members(formatting);
    });

    it('should process line break option', function () {
      var opts = processOptions.parse('n');
      expect(opts.lineBreakOption).to.be.equal('');
    });

    it('should process mixed options', function () {
      var opts = processOptions.parse(['c:red', 'nubirl', 'k:blue']);
      var formatting = ['underline', 'bold', 'italics', 'reverse', 'blink'];
      expect(opts.color).to.be.equal('red');
      expect(opts.background).to.be.equal('blue');
      expect(opts.formatting).to.include.members(formatting);
      expect(opts.lineBreakOption).to.be.equal('');
    });
  }); // Process Options as array

  describe('Process Options as object (aka \'Give it right back\')', function processOptionsAsObjectTests () {
    it('should return an object if I give it an object', function returnAnObject () {
      var opts = processOptions.parse({
        color: 'red',
        background: 'purple',
        bold: true
      });
      expect(opts).to.be.a('object');
    });

    it('should not alter the given object', function shouldNotAlterObject () {
      var formatting = ['underline', 'bold', 'italics', 'reverse', 'blink'];
      var opts = processOptions.parse({
        color: 'red',
        background: 'purple',
        formatting: formatting
      });
      expect(opts.color).to.be.equal('red');
      expect(opts.background).to.be.equal('purple');
      expect(opts.formatting).to.include.members(formatting);
      expect(opts.lineBreakOption).to.be.equal('\n');
    });

    it('should provide defaults', function returnDefaults () {
      var opts = processOptions.parse({});
      expect(opts.color).to.be.equal('default');
      expect(opts.background).to.be.equal('default');
      expect(opts.formatting).to.be.empty;
      expect(opts.lineBreakOption).to.be.equal('\n');
    });
  }); // Process Options as object

  describe('Process Options as garbage', function () {
    it('should return null if given an unexpected type', function () {
      var numberOpt = processOptions.parse(3);
      var boolOpt = processOptions.parse(true);
      var undefOpt = processOptions.parse(undefined);
      var infiniteOpt = processOptions.parse(Infinity);

      expect(numberOpt).to.be.a('null');
      expect(boolOpt).to.be.a('null');
      expect(undefOpt).to.be.a('null');
      expect(infiniteOpt).to.be.a('null');
    });

    it('should return null if I give it nothing', function returnNullForNothing () {
      var options;
      var opts = processOptions.parse(options);
      expect(opts).to.be.a('null');
    });
  }); // Process Options as garbage
}); // Process Options