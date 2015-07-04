/*jshint esnext: true, laxcomma: true, eqeqeq: true, bitwise: true, curly: true, latedef: true, strict: true, plusplus: true*/
/*global require: false, describe: false, it: false */

'use strict';

var chai = require('chai');
var expect = chai.expect;
var processOptions = require('../lib/processOptions');

describe('ProcessOptions', function () {
  it('should be an object', function () {
    expect(processOptions).to.be.a('object');
  });

  describe('has a parse function,', function () {
    it('should be a function', function () {
      expect(processOptions.parse).to.be.a('function');
    });

    describe('it will process options as strings,', function () {
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

      it('should process a line break option', function () {
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

    describe('it will process options as an array', function () {
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

    describe('it will process an object (aka \'Give it right back\'),', function processOptionsAsObjectTests () {
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

    describe('it will sort out the garbage,', function () {
      it('should return null if given an unexpected type', function () {
        var numberOpt = processOptions.parse(3);
        var boolOpt = processOptions.parse(true);
        var undefOpt = processOptions.parse(undefined);
        var infiniteOpt = processOptions.parse(Infinity);
        var blankOpt = processOptions.parse();

        expect(numberOpt).to.be.a('null');
        expect(boolOpt).to.be.a('null');
        expect(undefOpt).to.be.a('null');
        expect(infiniteOpt).to.be.a('null');
        expect(blankOpt).to.be.a('null');
      });

      it('should return null if I give it nothing', function returnNullForNothing () {
        var options;
        var opts = processOptions.parse(options);
        expect(opts).to.be.a('null');
      });
    }); // Process Options as garbage
  }); // parse function
}); // Process Options