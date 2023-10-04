"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var makeCzar_1 = require("../makeCzar");
test('makeCzar should czar-ify a word starting with "ar-"', function () {
    var result = (0, makeCzar_1.makeCzar)('article');
    expect(result).toBe('czarticle');
});
test('makeCzar should return the arument unchanged if it does not start with "ar-"', function () {
    var result = (0, makeCzar_1.makeCzar)('bottle');
    expect(result).toBe('bottle');
});
