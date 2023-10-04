import { makeCzar } from "./makeCzar";
import { generateRap } from "./rapGenerator";

// Sample Useage
const czarify = makeCzar('articus');
const rap = generateRap('article');

console.log(czarify) // "czarticus"
console.log(rap) // "I'm the czar, I goes hard; I be rhyming with a czarticle"