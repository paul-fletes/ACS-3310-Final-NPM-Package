import { makeCzar } from "./makeCzar";
import { generateRap } from "./rapGenerator";

// Sample Useage
const czarify = makeCzar('argonaut');
const rap = generateRap('article');

console.log(czarify) // "czargonaut"
console.log(rap) // "I'm the czar, I goes hard; I be rhyming with a czarticle"