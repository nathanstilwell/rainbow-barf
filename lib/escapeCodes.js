/*jshint esnext: true, laxcomma: true, eqeqeq: true, bitwise: true, curly: true, latedef: true, strict: true, plusplus: true*/
/*global module: true */

'use strict';

  var escapePre = '\u001b[';
  var escapePost = 'm';

  var textColors = {
    'default' :          '39',
    black :              '30',
    red :                '31',
    green :              '32',
    yellow :             '33',
    blue :               '34',
    purple :             '35',
    cyan :               '36',
    white :              '37',
    bright_red :         '91',
    bright_green :       '92',
    bright_yellow :      '93',
    bright_blue :        '94',
    bright_purple :      '95',
    bright_cyan :        '96',
    bright_white :       '97'
  };

  var backgroundColors = {
    'default' :          '49',
    black :               '40',
    red :                 '41',
    green :               '42',
    yellow :              '43',
    blue :                '44',
    purple :              '45',
    cyan :                '46',
    white :               '47',
    bright_black :        '100',
    bright_red :          '101',
    bright_green :        '102',
    bright_yellow :       '103',
    bright_blue :         '104',
    bright_purple :       '105',
    bright_cyan :         '106',
    bright_white :        '107'
  };

  var emphasis = {
    'default' :       '0',
    bold :            '1',
    italics :         '3',
    underline :       '4',
    blink :           '5',
    reverse :         '7'
  };

function textColorEscapeCode (color) {
  return escapePre + textColors[color] + escapePost;
}

function backgroundColorEscapeCode (color) {
  return escapePre + backgroundColors[color] + escapePost;
}

function formatEscapeCode (format) {
  return escapePre + emphasis[format] + escapePost;
}

function resetEscapeCode () {
  return escapePre + '0' + escapePost;
}

module.exports = {
  text: textColorEscapeCode,
  background: backgroundColorEscapeCode,
  format: formatEscapeCode,
  reset: resetEscapeCode
};
