"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRap = void 0;
var makeCzar_1 = require("./makeCzar");
function generateRap(seedWord) {
    if (seedWord.startsWith('ar')) {
        var rhymingWord = (0, makeCzar_1.makeCzar)(seedWord);
        return "I'm the czar, I goes hard; I be rhyming with a ".concat(rhymingWord, " \uD83C\uDFA4");
    }
    return "I'm the czar, I go far, but yo I can't cz-ar with ".concat(seedWord, " \uD83E\uDD2C");
}
exports.generateRap = generateRap;
