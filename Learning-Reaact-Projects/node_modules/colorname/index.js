var Color = require('color');
var colors = require('./colors.json');
var optimist = require('optimist');

function compareColor(colorA, colorB) {
    return Math.abs(colorA[0] - colorB[0]) + Math.abs(colorA[1] - colorB[1]) + Math.abs(colorA[2] - colorB[2]);
}

function sortColors(color) {
    return colors.map(function (targetColor) {
        return {
            color: targetColor,
            rank: compareColor(color, targetColor.rgb)
        };
    }).sort(function (retA, retB) {
        if (retA.rank < retB.rank) {
            return -1;
        }

        if (retA.rank > retB.rank) {
            return 1;
        }

        return 0;
    });
}

function closest(color) {
    var ranks = exports.sortColors(color);
    return ranks[0].color;
}

exports.sortColors = sortColors;
exports.closest = closest;
