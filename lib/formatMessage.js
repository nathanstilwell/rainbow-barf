/*jshint esnext: true, laxcomma: true, eqeqeq: true, bitwise: true, curly: true, latedef: true, strict: true, plusplus: true*/
/*global module: true, require: true */

'use strict';

var escape = require('./escapeCodes.js');
var decorate;

decorate = function decorate (message, options) {
  var treatment = '';

  if (!options) {
    return message;
  }

  treatment += options.color ? escape.text(options.color) : '';
  treatment += options.background ? escape.background(options.background): '';

  options.formatting.forEach(function eachFormattingOption (format) {
    treatment += escape.format(format);
  });

  treatment += message + escape.reset();
  treatment += (typeof options.lineBreakOption === 'string') ? options.lineBreakOption : '\n';

  return treatment;
};

module.exports = {
  decorate: decorate
};