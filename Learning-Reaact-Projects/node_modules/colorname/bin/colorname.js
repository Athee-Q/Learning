#!/usr/bin/env node

var colorName = require('../index');
var variableName = require('variable-name');
var Color = require('Color');

var optimist = require('optimist')
    .usage('Usage: $0 [--help] [--less] colorString')
    .boolean('l')
    .alias('l', 'less')
    .alias('h', 'help')
    .describe('h', 'show this help');

if (optimist.argv.h) {
    return console.log(optimist.help());
}

optimist.demand(1);

var colors = optimist.argv._;

colors.forEach(function (color) {
    var result = colorName.closest(Color(color).rgbArray());
    if (optimist.argv.l) {
        console.log('@%s: %s;', variableName(result.name), color);
    } else {
        console.log('%s: %s(%s)', color, result.name, Color().rgb(result.rgb).hexString());
    }
});
