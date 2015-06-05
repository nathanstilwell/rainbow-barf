/*jshint eqnull: true */
/*global require: false, describe: false, it: false */

'use strict';

var chai = require('chai');
var expect = chai.expect;
var RainbowBarf = require('../index');

var customWriter = function customWriter (message) {
  return message;
};

describe('Rainbow Barf', function rainbowBarfTests () {
  var log = new RainbowBarf(customWriter);

  it('should be a function', function rainbowBarfLogIsAFunctionTest () {
    expect(log).to.be.a('function');
  });

  describe('Rainbow Barf should fall back to defaults', function rainbowBarfUsesDefaults () {
    it('should use default options if no options are provided', function useDefaultOptionsIfIgiveYouNothing () {
      var result = log('test');
      expect(result).to.equal('test\n');
    });

    it('should give me a blank line, if no parameters are given', function blankLineForNothing () {
      var result = log();
      expect(result).to.equal('\n');
    });
  });

  describe('Rainbow Barf should format output with text colors', function formatWithTextColorTests () {
    it('should make text red', function makeTextRedTest () {
      var result = log('test', '-c:red');
      expect(result).to.equal('\u001b[31m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text black', function makeTextBlackTest () {
      var result = log('test', '-c:black');
      expect(result).to.equal('\u001b[30m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text green', function makeTextGreenTest () {
      var result = log('test', '-c:green');
      expect(result).to.equal('\u001b[32m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text yellow', function makeTextYellowTest () {
      var result = log('test', '-c:yellow');
      expect(result).to.equal('\u001b[33m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text blue', function makeTextBlueTest () {
      var result = log('test', '-c:blue');
      expect(result).to.equal('\u001b[34m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text purple', function makeTextPurpleTest () {
      var result = log('test', '-c:purple');
      expect(result).to.equal('\u001b[35m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text cyan', function makeTextCyanTest () {
      var result = log('test', '-c:cyan');
      expect(result).to.equal('\u001b[36m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text white', function makeTextWhiteTest () {
      var result = log('test', '-c:white');
      expect(result).to.equal('\u001b[37m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text bright_red', function makeTextBrightRedTest () {
      var result = log('test', '-c:bright_red');
      expect(result).to.equal('\u001b[91m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text bright_green', function makeTextBrightGreenTest () {
      var result = log('test', '-c:bright_green');
      expect(result).to.equal('\u001b[92m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text bright_yellow', function makeTextBrightYellowTest () {
      var result = log('test', '-c:bright_yellow');
      expect(result).to.equal('\u001b[93m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text bright_blue', function makeTextBrightBlueTest () {
      var result = log('test', '-c:bright_blue');
      expect(result).to.equal('\u001b[94m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text bright_purple', function makeTextBrightPurpleTest () {
      var result = log('test', '-c:bright_purple');
      expect(result).to.equal('\u001b[95m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text bright_cyan', function makeTextBrightCyanTest () {
      var result = log('test', '-c:bright_cyan');
      expect(result).to.equal('\u001b[96m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text bright_white', function makeTextBrightWhiteTest () {
      var result = log('test', '-c:bright_white');
      expect(result).to.equal('\u001b[97m\u001b[49mtest\u001b[0m\n');
    });
  });

  describe('Rainbow Barf should format output with background colors', function formatWithBackgroundColorTests () {
    it('should make text black', function makeBackgroundBlackTest () {
      var result = log('test', '-k:black');
      expect(result).to.equal('\u001b[39m\u001b[40mtest\u001b[0m\n');
    });

    it('should make text red', function makeBackgroundRedTest () {
      var result = log('test', '-k:red');
      expect(result).to.equal('\u001b[39m\u001b[41mtest\u001b[0m\n');
    });

    it('should make text green', function makeBackgroundGreenTest () {
      var result = log('test', '-k:green');
      expect(result).to.equal('\u001b[39m\u001b[42mtest\u001b[0m\n');
    });

    it('should make text yellow', function makeBackgroundYellowTest () {
      var result = log('test', '-k:yellow');
      expect(result).to.equal('\u001b[39m\u001b[43mtest\u001b[0m\n');
    });

    it('should make text blue', function makeBackgroundBlueTest () {
      var result = log('test', '-k:blue');
      expect(result).to.equal('\u001b[39m\u001b[44mtest\u001b[0m\n');
    });

    it('should make text purple', function makeBackgroundPurpleTest () {
      var result = log('test', '-k:purple');
      expect(result).to.equal('\u001b[39m\u001b[45mtest\u001b[0m\n');
    });

    it('should make text cyan', function makeBackgroundCyanTest () {
      var result = log('test', '-k:cyan');
      expect(result).to.equal('\u001b[39m\u001b[46mtest\u001b[0m\n');
    });

    it('should make text white', function makeBackgroundWhiteTest () {
      var result = log('test', '-k:white');
      expect(result).to.equal('\u001b[39m\u001b[47mtest\u001b[0m\n');
    });

    it('should make text bright_black', function makeBackgroundBrightBlackTest () {
      var result = log('test', '-k:bright_black');
      expect(result).to.equal('\u001b[39m\u001b[100mtest\u001b[0m\n');
    });

    it('should make text bright_red', function makeBackgroundBrightRedTest () {
      var result = log('test', '-k:bright_red');
      expect(result).to.equal('\u001b[39m\u001b[101mtest\u001b[0m\n');
    });

    it('should make text bright_green', function makeBackgroundBrightGreenTest () {
      var result = log('test', '-k:bright_green');
      expect(result).to.equal('\u001b[39m\u001b[102mtest\u001b[0m\n');
    });

    it('should make text bright_yellow', function makeBackgroundBrightYellowTest () {
      var result = log('test', '-k:bright_yellow');
      expect(result).to.equal('\u001b[39m\u001b[103mtest\u001b[0m\n');
    });

    it('should make text bright_blue', function makeBackgroundBrightBlueTest () {
      var result = log('test', '-k:bright_blue');
      expect(result).to.equal('\u001b[39m\u001b[104mtest\u001b[0m\n');
    });

    it('should make text bright_purple', function makeBackgroundBrightPurpleTest () {
      var result = log('test', '-k:bright_purple');
      expect(result).to.equal('\u001b[39m\u001b[105mtest\u001b[0m\n');
    });

    it('should make text bright_cyan', function makeBackgroundBrightCyanTest () {
      var result = log('test', '-k:bright_cyan');
      expect(result).to.equal('\u001b[39m\u001b[106mtest\u001b[0m\n');
    });

    it('should make text bright_white', function makeBackgroundBrightWhiteTest () {
      var result = log('test', '-k:bright_white');
      expect(result).to.equal('\u001b[39m\u001b[107mtest\u001b[0m\n');
    });
  }); // background

  describe('Rainbow Barf should format with emphasis', function formatTextWithEmphasisTests () {
    it('should make text bold', function makeBoldTest () {
      var result = log('test', '-b');
      expect(result).to.equal('\u001b[39m\u001b[49m\u001b[1mtest\u001b[0m\n');
    });

    it('should make text italic', function makeItalicTest () {
      var result = log('test', '-i');
      expect(result).to.equal('\u001b[39m\u001b[49m\u001b[3mtest\u001b[0m\n');
    });

    it('should make text underlined', function makeBoldTest () {
      var result = log('test', '-u');
      expect(result).to.equal('\u001b[39m\u001b[49m\u001b[4mtest\u001b[0m\n');
    });

    it('should make text blink', function makeBoldTest () {
      var result = log('test', '-l');
      expect(result).to.equal('\u001b[39m\u001b[49m\u001b[5mtest\u001b[0m\n');
    });

    it('should make text reverse', function makeBoldTest () {
      var result = log('test', '-r');
      expect(result).to.equal('\u001b[39m\u001b[49m\u001b[7mtest\u001b[0m\n');
    });
  }); // emphasis


  describe('Rainbow Barf should format output in line', function formatTextInLineTests () {
    it('should make text red', function makeTextRedTest () {
      var result = '';
      result += log('red', '-c:red -n');
      result += log(' blue', ['c:blue', '-n']);
      result += log(' green', {
        color: 'green',
        lineBreakOption: ''
      });
      expect(result).to.equal('\u001b[31m\u001b[49mred\u001b[0m\u001b[34m\u001b[49m blue\u001b[0m\u001b[32m\u001b[49m green\u001b[0m');
    });
  }); // inline
}); // Rainbow Barf Tests
