/*jshint laxcomma: true, eqeqeq: true, bitwise: true, curly: true, latedef: true, strict: true, plusplus: true*/
/*global module: true */

'use strict';

var
  parseOptionsAsString,
  parseOptionsAsArray,
  extendDefaultOptions,
  parse;


extendDefaultOptions = function extendDefaultOptions (options) {
  var optionsObject = {
    color: 'default',
    background: 'default',
    formatting: [],
    lineBreakOption: '\n'
  };


  for (var prop in options) {
    optionsObject[prop] = options[prop];
  }

  return optionsObject;
};

parseOptionsAsArray = function parseOptionsAsArray (optionsArr) {

  var optionsObject = extendDefaultOptions({});

  optionsArr.forEach(function eachOption (optionGroup) {
    var optionGroupArr = optionGroup.split('');
    var option = null;

    // if we have a blank from the split
    if (optionGroupArr.length === 0) {
      return;
    }

    while (optionGroupArr.length) {
      option = optionGroupArr.shift();
      if ('c' === option) {
        // remove ':' and join the rest to get the color
         optionsObject.color = optionGroupArr.slice(optionGroupArr.indexOf(':') + 1).join('').trim();
         break;
      }
      if ('k' === option) {
        optionsObject.background = optionGroupArr.slice(optionGroupArr.indexOf(':') + 1).join('').trim();
        break;
      }
      if ('b' === option) {
        optionsObject.formatting.push('bold');
      }
      if ('u' === option) {
        optionsObject.formatting.push('underline');
      }
      if ('i' === option) {
        optionsObject.formatting.push('italics');
      }
     if ('l' === option) {
        optionsObject.formatting.push('blink');
      }
      if ('r' === option) {
        optionsObject.formatting.push('reverse');
      }
      if ('n' === option) {
        optionsObject.lineBreakOption = '';
      }
    } // while
  }); // options forEach

  return optionsObject;
};

parseOptionsAsString = function parseOptionsAsString (optionsString) {
  return parseOptionsAsArray(optionsString.split('-'));
};

parse = function parse (options) {
  var toString = Object.prototype.toString;

  if (toString.call(options) === '[object String]') {
    return parseOptionsAsString(options);
  }

  if (toString.call(options) === '[object Array]') {
    return parseOptionsAsArray(options);
  }

  if (toString.call(options) === '[object Object]') {
    return extendDefaultOptions(options);
  }

  return null;
};

module.exports = {
  parse : parse
};


