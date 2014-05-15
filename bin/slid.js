#!/usr/bin/env node

var colors = require('colors'); 
var argv = require('minimist')(process.argv.slice(2));;

var slide = require('../index');

console.log(argv);

if (argv.h || 0 === argv._.length) {
  console.log('Usage: ');
  console.log('"slid --generate [num]"    first: using template [num] to generate config file, for example: slid --generate 3');
  console.log('"slid --render"            then : using config file to render slides');
  console.log('"slid --run"               final: to show the rendered slides');
}

var mode = argv.generate || -1;
var currentMode = [3,4,5,6];

var tag = currentMode.forEach(function (ele) {
  if (ele === mode) {
    return true;
  } else {
    console.log('error template number, please check!');
    return false;
  }
}

// TODO 命令行解析                              
//if (tag && argv.generate) {
//  slide.generateConfigFile(mode);
//}
//
//if (tag && argv.render) {
//  slide.renderTemplate(mode);
//}
//
//if (tag) {
//  slide.start();
//}