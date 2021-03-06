/*jshint eqnull: true */
/*global require, describe, it, process */

'use strict';

var RainbowBarf = require('../index');

var customWriter = function customWriter (message) {
  return message;
};

function captureStream (stream) {
  var oldWrite = stream.write;
  var buf = '';
  stream.write = function (chunk) {
    buf += chunk.toString(); // chunk is a String or Buffer
    oldWrite.apply(stream, arguments);
  };

  function unhook(){
   stream.write = oldWrite;
  }

  function captured () {
    return buf;
  }

  return {
    unhook: unhook,
    captured: captured
  };
}


describe('Rainbow Barf', function rainbowBarfTests () {
  var log = new RainbowBarf(customWriter);

  it('should be a function', function rainbowBarfLogIsAFunctionTest () {
    expect(typeof log).toEqual('function');
  });

  describe('writes to stdout by default,', function () {

    it('should print test', function(){
      var hook = captureStream(process.stdout);
      var standardOutBarf = new RainbowBarf();

      standardOutBarf('test');
      expect(hook.captured()).toEqual('test\n');

      hook.unhook();
    });
  });

  describe('uses defaults,', function rainbowBarfUsesDefaults () {
    it('should use default options if no options are provided', function useDefaultOptionsIfIgiveYouNothing () {
      var result = log('test');
      expect(result).toEqual('test\n');
    });

    it('should give me a blank line, if no parameters are given', function blankLineForNothing () {
      var result = log();
      expect(result).toEqual('\n');
    });
  });

  describe('formats output with text colors,', function formatWithTextColorTests () {
    it('should make text red', function makeTextRedTest () {
      var result = log('test', '-c:red');
      expect(result).toEqual('\u001b[31m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text black', function makeTextBlackTest () {
      var result = log('test', '-c:black');
      expect(result).toEqual('\u001b[30m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text green', function makeTextGreenTest () {
      var result = log('test', '-c:green');
      expect(result).toEqual('\u001b[32m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text yellow', function makeTextYellowTest () {
      var result = log('test', '-c:yellow');
      expect(result).toEqual('\u001b[33m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text blue', function makeTextBlueTest () {
      var result = log('test', '-c:blue');
      expect(result).toEqual('\u001b[34m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text purple', function makeTextPurpleTest () {
      var result = log('test', '-c:purple');
      expect(result).toEqual('\u001b[35m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text cyan', function makeTextCyanTest () {
      var result = log('test', '-c:cyan');
      expect(result).toEqual('\u001b[36m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text white', function makeTextWhiteTest () {
      var result = log('test', '-c:white');
      expect(result).toEqual('\u001b[37m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text bright_red', function makeTextBrightRedTest () {
      var result = log('test', '-c:bright_red');
      expect(result).toEqual('\u001b[91m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text bright_green', function makeTextBrightGreenTest () {
      var result = log('test', '-c:bright_green');
      expect(result).toEqual('\u001b[92m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text bright_yellow', function makeTextBrightYellowTest () {
      var result = log('test', '-c:bright_yellow');
      expect(result).toEqual('\u001b[93m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text bright_blue', function makeTextBrightBlueTest () {
      var result = log('test', '-c:bright_blue');
      expect(result).toEqual('\u001b[94m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text bright_purple', function makeTextBrightPurpleTest () {
      var result = log('test', '-c:bright_purple');
      expect(result).toEqual('\u001b[95m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text bright_cyan', function makeTextBrightCyanTest () {
      var result = log('test', '-c:bright_cyan');
      expect(result).toEqual('\u001b[96m\u001b[49mtest\u001b[0m\n');
    });

    it('should make text bright_white', function makeTextBrightWhiteTest () {
      var result = log('test', '-c:bright_white');
      expect(result).toEqual('\u001b[97m\u001b[49mtest\u001b[0m\n');
    });
  });

  describe('formats output with background colors,', function formatWithBackgroundColorTests () {
    it('should make background black', function makeBackgroundBlackTest () {
      var result = log('test', '-k:black');
      expect(result).toEqual('\u001b[39m\u001b[40mtest\u001b[0m\n');
    });

    it('should make background red', function makeBackgroundRedTest () {
      var result = log('test', '-k:red');
      expect(result).toEqual('\u001b[39m\u001b[41mtest\u001b[0m\n');
    });

    it('should make background green', function makeBackgroundGreenTest () {
      var result = log('test', '-k:green');
      expect(result).toEqual('\u001b[39m\u001b[42mtest\u001b[0m\n');
    });

    it('should make background yellow', function makeBackgroundYellowTest () {
      var result = log('test', '-k:yellow');
      expect(result).toEqual('\u001b[39m\u001b[43mtest\u001b[0m\n');
    });

    it('should make background blue', function makeBackgroundBlueTest () {
      var result = log('test', '-k:blue');
      expect(result).toEqual('\u001b[39m\u001b[44mtest\u001b[0m\n');
    });

    it('should make background purple', function makeBackgroundPurpleTest () {
      var result = log('test', '-k:purple');
      expect(result).toEqual('\u001b[39m\u001b[45mtest\u001b[0m\n');
    });

    it('should make background cyan', function makeBackgroundCyanTest () {
      var result = log('test', '-k:cyan');
      expect(result).toEqual('\u001b[39m\u001b[46mtest\u001b[0m\n');
    });

    it('should make background white', function makeBackgroundWhiteTest () {
      var result = log('test', '-k:white');
      expect(result).toEqual('\u001b[39m\u001b[47mtest\u001b[0m\n');
    });

    it('should make background bright_black', function makeBackgroundBrightBlackTest () {
      var result = log('test', '-k:bright_black');
      expect(result).toEqual('\u001b[39m\u001b[100mtest\u001b[0m\n');
    });

    it('should make background bright_red', function makeBackgroundBrightRedTest () {
      var result = log('test', '-k:bright_red');
      expect(result).toEqual('\u001b[39m\u001b[101mtest\u001b[0m\n');
    });

    it('should make background bright_green', function makeBackgroundBrightGreenTest () {
      var result = log('test', '-k:bright_green');
      expect(result).toEqual('\u001b[39m\u001b[102mtest\u001b[0m\n');
    });

    it('should make background bright_yellow', function makeBackgroundBrightYellowTest () {
      var result = log('test', '-k:bright_yellow');
      expect(result).toEqual('\u001b[39m\u001b[103mtest\u001b[0m\n');
    });

    it('should make background bright_blue', function makeBackgroundBrightBlueTest () {
      var result = log('test', '-k:bright_blue');
      expect(result).toEqual('\u001b[39m\u001b[104mtest\u001b[0m\n');
    });

    it('should make background bright_purple', function makeBackgroundBrightPurpleTest () {
      var result = log('test', '-k:bright_purple');
      expect(result).toEqual('\u001b[39m\u001b[105mtest\u001b[0m\n');
    });

    it('should make background bright_cyan', function makeBackgroundBrightCyanTest () {
      var result = log('test', '-k:bright_cyan');
      expect(result).toEqual('\u001b[39m\u001b[106mtest\u001b[0m\n');
    });

    it('should make background bright_white', function makeBackgroundBrightWhiteTest () {
      var result = log('test', '-k:bright_white');
      expect(result).toEqual('\u001b[39m\u001b[107mtest\u001b[0m\n');
    });
  }); // background

  describe('formats with emphasis,', function formatTextWithEmphasisTests () {
    it('should make text bold', function makeBoldTest () {
      var result = log('test', '-b');
      expect(result).toEqual('\u001b[39m\u001b[49m\u001b[1mtest\u001b[0m\n');
    });

    it('should make text italic', function makeItalicTest () {
      var result = log('test', '-i');
      expect(result).toEqual('\u001b[39m\u001b[49m\u001b[3mtest\u001b[0m\n');
    });

    it('should make text underlined', function makeBoldTest () {
      var result = log('test', '-u');
      expect(result).toEqual('\u001b[39m\u001b[49m\u001b[4mtest\u001b[0m\n');
    });

    it('should make text blink', function makeBoldTest () {
      var result = log('test', '-l');
      expect(result).toEqual('\u001b[39m\u001b[49m\u001b[5mtest\u001b[0m\n');
    });

    it('should make text reverse', function makeBoldTest () {
      var result = log('test', '-r');
      expect(result).toEqual('\u001b[39m\u001b[49m\u001b[7mtest\u001b[0m\n');
    });
  }); // emphasis


  describe('formats output in line,', function formatTextInLineTests () {
    it('should make text red without a newline', function makeTextRedTest () {
      var result = '';
      result += log('red', '-c:red -n');
      result += log(' blue', ['c:blue', '-n']);
      result += log(' green', {
        color: 'green',
        lineBreakOption: ''
      });
      expect(result).toEqual('\u001b[31m\u001b[49mred\u001b[0m\u001b[34m\u001b[49m blue\u001b[0m\u001b[32m\u001b[49m green\u001b[0m');
    });
  }); // inline
}); // Rainbow Barf Tests
