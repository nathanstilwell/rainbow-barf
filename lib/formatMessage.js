/*global module, require */

'use strict';

var util = require('util');
var escape = require('./escapeCodes.js');
var decorate;

decorate = function decorate (message, options) {
  var treatment = '';

  if (!options) {
    return message + '\n';
  }

  treatment += options.color ? escape.text(options.color) : '';
  treatment += options.background ? escape.background(options.background): '';

  if (util.isArray(options.formatting)) {
    options.formatting.forEach(function eachFormattingOption (format) {
      treatment += escape.format(format);
    });
  }

  treatment += message + escape.reset();
  treatment += (typeof options.lineBreakOption === 'string') ? options.lineBreakOption : '\n';

  return treatment;
};

module.exports = {
  decorate: decorate
};