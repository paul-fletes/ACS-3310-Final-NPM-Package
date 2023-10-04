"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCzar = void 0;
function makeCzar(input) {
    if (input.startsWith('ar')) {
        return "cz" + input;
    }
    return input;
}
exports.makeCzar = makeCzar;
