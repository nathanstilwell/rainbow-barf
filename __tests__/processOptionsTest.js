/*jshint esnext: true, laxcomma: true, eqeqeq: true, bitwise: true, curly: true, latedef: true, strict: true, plusplus: true*/
/*global require: false, describe: false, it: false */

'use strict';

var processOptions = require('../lib/processOptions');

describe('ProcessOptions', function () {
  it('should be an object', function () {
    expect(typeof processOptions).toEqual('object');
  });

  describe('has a parse function,', function () {
    it('should be a function', function () {
      expect(typeof processOptions.parse).toEqual('function');
    });

    describe('it will process options as strings,', function () {
      it('should return an object if I give it a string', function () {
        var opts = processOptions.parse('-c:purple -nubirl -k:blue');
        expect(typeof opts).toEqual('object');
      });

      it('should process a color', function () {
        var opts = processOptions.parse('-c:red');
        expect(opts.color).toEqual('red');
      });

      it('should process a background color', function () {
        var opts = processOptions.parse('-k:red');
        expect(opts.background).toEqual('red');
      });

      it('should process formatting', function () {
        var opts = processOptions.parse('-ubirl');
        var formatting = ['underline', 'bold', 'italics', 'reverse', 'blink'];
        expect(opts.formatting).toEqual(formatting);
      });

      it('should process a line break option', function () {
        var opts = processOptions.parse('-n');
        expect(opts.lineBreakOption).toEqual('');
      });

      it('should process mixed options', function () {
        var opts = processOptions.parse('-c:red -nubirl -k:blue');
        var formatting = ['underline', 'bold', 'italics', 'reverse', 'blink'];
        expect(opts.color).toEqual('red');
        expect(opts.background).toEqual('blue');
        expect(opts.formatting).toEqual(formatting);
        expect(opts.lineBreakOption).toEqual('');
      });
    }); // Process Options as string

    describe('it will process options as an array', function () {
      it('should return an object if I give it an array', function () {
        var opts = processOptions.parse(['c:red', 'b', 'i']);
        expect(typeof opts).toEqual('object');
      });

      it('should process a color', function () {
        var opts = processOptions.parse(['c:red']);
        expect(opts.color).toEqual('red');
      });

      it('should process a background color', function () {
        var opts = processOptions.parse(['k:red']);
        expect(opts.background).toEqual('red');
      });

      it('should process formatting as a group', function () {
        var opts = processOptions.parse(['ubirl']);
        var formatting = ['underline', 'bold', 'italics', 'reverse', 'blink'];
        expect(opts.formatting).toEqual(formatting);
      });

      it('should process formatting as individual elements', function () {
        var opts = processOptions.parse(['u', 'b', 'i', 'r', 'l']);
        var formatting = ['underline', 'bold', 'italics', 'reverse', 'blink'];
        expect(opts.formatting).toEqual(formatting);
      });

      it('should process line break option', function () {
        var opts = processOptions.parse('n');
        expect(opts.lineBreakOption).toEqual('');
      });

      it('should process mixed options', function () {
        var opts = processOptions.parse(['c:red', 'nubirl', 'k:blue']);
        var formatting = ['underline', 'bold', 'italics', 'reverse', 'blink'];
        expect(opts.color).toEqual('red');
        expect(opts.background).toEqual('blue');
        expect(opts.formatting).toEqual(formatting);
        expect(opts.lineBreakOption).toEqual('');
      });
    }); // Process Options as array

    describe('it will process an object (aka \'Give it right back\'),', function processOptionsAsObjectTests () {
      it('should return an object if I give it an object', function returnAnObject () {
        var opts = processOptions.parse({
          color: 'red',
          background: 'purple',
          bold: true
        });
        expect(typeof opts).toEqual('object');
      });

      it('should not alter the given object', function shouldNotAlterObject () {
        var formatting = ['underline', 'bold', 'italics', 'reverse', 'blink'];
        var opts = processOptions.parse({
          color: 'red',
          background: 'purple',
          formatting: formatting
        });
        expect(opts.color).toEqual('red');
        expect(opts.background).toEqual('purple');
        expect(opts.formatting).toEqual(formatting);
        expect(opts.lineBreakOption).toEqual('\n');
      });

      it('should provide defaults', function returnDefaults () {
        var opts = processOptions.parse({});
        expect(opts.color).toEqual('default');
        expect(opts.background).toEqual('default');
        expect(opts.formatting).toEqual([]);
        expect(opts.lineBreakOption).toEqual('\n');
      });
    }); // Process Options as object

    describe('it will sort out the garbage,', function () {
      it('should return null if given an unexpected type', function () {
        var numberOpt = processOptions.parse(3);
        var boolOpt = processOptions.parse(true);
        var undefOpt = processOptions.parse(undefined);
        var infiniteOpt = processOptions.parse(Infinity);
        var blankOpt = processOptions.parse();

        expect(numberOpt).toEqual(null);
        expect(boolOpt).toEqual(null);
        expect(undefOpt).toEqual(null);
        expect(infiniteOpt).toEqual(null);
        expect(blankOpt).toEqual(null);
      });

      it('should return null if I give it nothing', function returnNullForNothing () {
        var options;
        var opts = processOptions.parse(options);
        expect(opts).toEqual(null);
      });
    }); // Process Options as garbage
  }); // parse function
}); // Process Options