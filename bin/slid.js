#!/usr/bin/env node

var colors = require('colors');
var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs');

var slide = require('../index');

if (argv.help) {
  console.log('Usage: '.yellow);
  console.log('"slid --generate [num]"    first: using template [num] to generate config file, for example: slid --generate 3'.blue);
  console.log('"slid --render [num]"            then : using config and template [num] file to render slides'.blue);
  console.log('"slid --run"               final: to show the rendered slides'.blue);

  process.exit(0);
}

var mode = argv.generate || 3;
var currentMode = [3, 4, 5, 6];

var tag = false;
for (var i = 0; i < currentMode.length; i++) {
  if (mode === currentMode[i]) {
    tag = true;
  }
}

mode = argv.render || mode;
var target = "";

if ('darwin' === process.platform) {
  target = __dirname.split('/');
  target.pop();
  target = target.join('/');
} else if ('win32' === process.platform) {
  target = __dirname.split('\\');
  target.pop();
  target = target.join('\\');
} else {
  console.log('your OS not supported now' .red);
  process.exit(0);
}


if (tag && argv.generate) {
  slide.generateConfigFile(mode);
} else if (argv.render && fs.existsSync(process.cwd() + '/slides.yml')) {
  if (argv.render !== true) {
    slide.renderTemplate(mode);
  } else {
    console.log('please input the render template num as the first step~'.red);
  }
} else if (argv.run && fs.existsSync(target + '/target/slide.html')) {
  slide.start();
} else {
  console.log('please use "slid --help" to follow the steps, and check it~');
}