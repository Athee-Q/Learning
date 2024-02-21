var assert = require('chai').assert;
var colorName = require('../index');
var Color = require('Color');

var testColors = [
    '#82A1B7',
    '#FFFFFF',
    '#E7EEF3',
    '#5A5E61'
];

var testResult = [
    'Pale Blue',
    'White',
    'Lavender',
    'Iron Gray'
];

describe('ColorName', function () {
    describe('sortColors', function () {
        it('should works well for rgb array', function () {
            testColors.forEach(function (color) {
                color = Color(color).rgbArray();
                colorName.sortColors(color);
                assert.ok('ok');
            });
        });
    });

    describe('closest', function () {
        it('should get correct color', function () {
            testColors.forEach(function (color, index) {
                color = Color(color).rgbArray();
                var result = colorName.closest(color);
                assert.equal(result.name, testResult[index]);
            });
        });
    });
});
