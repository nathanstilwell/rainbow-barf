/*jshint esnext: true, laxcomma: true, eqeqeq: true, bitwise: true, curly: true, latedef: true, strict: true, plusplus: true*/
/*global require: true*/

'use strict';

var RainbowBarf = require('./index.js');

var log = new RainbowBarf();

log('\n\n');
log('C', ['c:red', 'nu']);
log('o', ['c:green', 'nu']);
log('l', ['c:yellow', 'nu']);
log('o', ['c:blue', 'nu']);
log('r', ['c:purple', 'nu']);

log(' L', ['c:cyan', 'bnu']);
log('o', ['c:white', 'bnu']);
log('g', ['c:bright_red', 'bnu']);
log('g', ['c:bright_green', 'bnu']);
log('e', ['c:bright_yellow', 'bnu']);
log('r ', ['c:bright_blue', 'bnu']);

log('D', ['c:black', 'k:red', 'nu']);
log('E', ['c:black', 'k:green', 'nu']);
log('M', ['c:black', 'k:yellow', 'nu']);
log('O', ['c:black', 'k:blue', 'nu']);
log('   ', ['c:blue', 'u']);

log('\n\n');

log(' Available Text Colors', '-b');
log('\n');
log(' default ', ' -n');
log('black', '-c:black -k:white -n');
log(' red', '-c:red -n');
log(' green', '-c:green -n');
log(' yellow', '-c:yellow -n');
log(' blue', '-c:blue -n');
log(' purple', '-c:purple -n');
log(' cyan', '-c:cyan -n');
log(' white', '-c:white -n');
log(' bright_red', '-c:bright_red -n');
log(' bright_green', '-c:bright_green -n');
log(' bright_yellow', '-c:bright_yellow -n');
log(' bright_blue', '-c:bright_blue -n');
log(' bright_purple', '-c:bright_purple -n');
log(' bright_cyan', '-c:bright_cyan -n');
log(' bright_white', '-c:bright_white');

log('\n');
log(' Available Background Colors', '-b');
log('\n');

log('black ', '-k:black -c:white -n');
log(' red ', '-k:red -n -c:black');
log(' green ', '-k:green -n -c:black');
log(' yellow ', '-k:yellow -n -c:black');
log(' blue ', '-k:blue -n -c:black');
log(' purple ', '-k:purple -n -c:black');
log(' cyan ', '-k:cyan -n -c:black');
log(' white ', '-k:white -n -c:black');
log(' bright_red ', '-k:bright_red -n -c:black');
log(' bright_green ', '-k:bright_green -n -c:black');
log(' bright_yellow ', '-k:bright_yellow -n -c:black');
log(' bright_blue ', '-k:bright_blue -n -c:black');
log(' bright_purple ', '-k:bright_purple -n -c:black');
log(' bright_cyan ', '-k:bright_cyan -n -c:black');
log(' bright_white ', '-k:bright_white -c:black');

log('\n');
log(' Available Emphasis', '-b');
log('\n');

log('bold', ['b','n']);
log(' italic', ['i', 'n']);
log(' underline', ['u', 'n']);
log(' blink ', ['l', 'n']);
log('reverse', ['r']);

log('\n');

log('And ...', 'b');

log('\n');

log('You ', ['c:yellow', 'bn']);
log('can', ['c:blue', 'k:bright_green', 'n']);
log(' ', '-n');
log('combine', ['c:cyan', 'u', 'n']);
log(' ', '-n');
log('styles', ['c:purple', 'bn']);
log(' ', '-n');
log('like', ['c:white', 'k:red', 'bn']);
log(' ', '-n');
log('this', ['c:bright_green', 'un']);
log(' ', '-n');
log('Enjoy!', ['c:bright_red', 'lbu']);

log('\n❤', ['c:red','n']);
log(' Nathan', ['c:red']);