# Rainbow Barf

*Make terminal output pretty*

[![Circle CI](https://circleci.com/gh/nathanstilwell/rainbow-barf.svg?style=shield)](https://circleci.com/gh/nathanstilwell/rainbow-barf/tree/master) [![npm](https://img.shields.io/npm/v/rainbow-barf.svg?style=plastic)](https://www.npmjs.com/package/rainbow-barf) [![David](https://img.shields.io/david/dev/nathanstilwell/rainbow-barf.svg?style=plastic)](https://david-dm.org/nathanstilwell/rainbow-barf#info=devDependencies&view=table) [![Coveralls](https://img.shields.io/coveralls/nathanstilwell/rainbow-barf.svg?style=plastic)](https://coveralls.io/r/nathanstilwell/rainbow-barf?branch=master)


## Install

So here's the deal ... the world doesn't need any more *add Ansi codes to strings
for terminal output in node* utilities. But as a programmer, of course I built
this for the sake of building it. So if you are looking for a utility to make your
node terminal output look pretty, check out one of these projects:

+ [Chalk](https://www.npmjs.com/package/chalk)
+ [Colors](https://www.npmjs.com/package/colors)
+ [Kuler](https://www.npmjs.com/package/kuler)

If you ***still*** want to install it,

    npm install rainbow-barf

## usage:

```js

  var RainbowBarf = require('rainbow-barf');
  var log = new RainbowBarf();

  // pass in styles as a second argument
  log('this message is red', '-c:red');

  // styles can be a string
  log('this one is blue and underlined and bold', '-c:blue -ub');

  // styles can also be an array
  log('this one is yellow with a bright blue background and bold', ['c:yellow', 'k:bright_blue', 'b']);

  // styles can also be an object
  log('this one is black on white and blinking', {
    color: 'black',
    background: 'white',
    formatting: ['blink']
  });

  // I'm trying to be pretty easy going. Do what feels right
```

## available options

### Emphasis
```
b        text is bold

i        text is italic

u        text is underlined

l        text blinks

r		reverse formatting
```

### Colors
```
c:color               format text with specified named color. See below for available colors.

k:background-color    format text with background-color of specified name. See below for available colors.
```

### Inline formatting
	-n        do NOT add new line ('\n') after message


## Available Colors

![demo output](https://raw.githubusercontent.com/nathanstilwell/rainbow-barf/master/demo.png)

## Examples
```js
// log a message in the default text color with default formatting
log('message');

// log a message in bold
log('message', ['b']);

// log a message in red
log('message', ['c:red]);

// log a message in blue with a white background
log('message', ['c:blue', 'k:white']);

// log a message in blue in bold and underlined
log('message', ['c:blue', 'b', 'u']);

// for emphasis options, you can just group those together if you want
log('message', ['c:blue', 'bu']);
```

Logging diffent formatting inline with `-n`
```js
log('useage: ', ['bn']);
log('log', ['un']);
log(' [-biulrn] [-c color] [-k background]');
```

would log

![inline ouput](https://raw.githubusercontent.com/nathanstilwell/rainbow-barf/master/inline.png)

## Log somewhere else

If you have a super cool custom logger and you want to rainbow barf on that, the RainbowBarf constructor can take that as an argument (By default RainbowBarf will output to `process.stdout.write`). Check it:

```js
var RainbowBarf = require('rainbow-barf');

function anyFunctionThatTakesAStringAsAnArgument (message) {
  console.log('[so cool]:', message);
}

var log = new RainbowBarf(anyFunctionThatTakesAStringAsAnArgument);

log('now we\'re logging to console!!', ['c:bright_red', 'l']);
```

Let's be honest, I just did this so I could write tests for this. Peace!

## License

[WTFPL](http://www.wtfpl.net/) © Nathan Stilwell. Choose Freedom.
