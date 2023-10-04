"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rapGenerator_1 = require("../rapGenerator");
test('generateRap should rhyme when provided a word starting with "ar"', function () {
    var result = (0, rapGenerator_1.generateRap)('art');
    expect(result).toBe("I'm the czar, I goes hard; I be rhyming with a czart 🎤");
});
test('generateRap should not rhyme when provided a word not starting with "ar"', function () {
    var result = (0, rapGenerator_1.generateRap)('bottle');
    expect(result).toBe("I'm the czar, I go far, but yo I can't cz-ar with bottle 🤬");
});
