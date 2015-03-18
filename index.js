/*jshint esnext: true, laxcomma: true, eqeqeq: true, bitwise: true, curly: true, latedef: true, strict: true, plusplus: true*/
/*global process: true, module: true, require: true */
'use strict';

var processOptions = require('./lib/processOptions');
var formatMessage = require('./lib/formatMessage');

function RainbowBarf (writeOverride) {

  var self = this;

  function write (message) {
    process.stdout.write(message);
  }

  self.writer = writeOverride || write;

  return function RainbowBarf_log (message, options) {

    var opts = processOptions.parse(options);
    var msg = formatMessage.decorate(message, opts);

    return self.writer(msg);
  };

}

module.exports = RainbowBarf;
