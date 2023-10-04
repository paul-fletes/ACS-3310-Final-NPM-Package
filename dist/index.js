"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var makeCzar_1 = require("./makeCzar");
var rapGenerator_1 = require("./rapGenerator");
var czarify = (0, makeCzar_1.makeCzar)('artform');
var rap = (0, rapGenerator_1.generateRap)('article');
console.log(czarify);
console.log(rap);
