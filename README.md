# @paul-fletes/czartificial-intelligence

![Version](https://img.shields.io/npm/v/@paul-fletes/czartificial-intelligence)
![License](https://img.shields.io/npm/l/@paul-fletes/czartificial-intelligence)

## Description

This npm package provides tools for generating rap lyrics and transforming words that start with "ar" into "czar" words.

## Installation

To use this package in your project, you can install it via npm:

```bash
npm install @paul-fletes/czartificial-intelligence
```

## Usage

### Entry point: `index.ts`

### `makeCzar`

`makeCzar` is a function that transforms words starting with "ar" into "czar" words.

```javascript
const { makeCzar } = require('@paul-fletes/czartificial-intelligence');

const czarWord = makeCzar('art');
console.log(czarWord); // Output: 'czart'
```

### `generateRap`

`generateRap` is a function that generates rap lyrics based on a seed word. It uses `makeCzar` internally.

```javascript
const { generateRap } = require('@paul-fletes/czartificial-intelligence');

const rapLine = generateRap('star');
console.log(rapLine); // Output: "I'm the czar, I goes hard; I be rhyming with a czstar 🎤"
```

## Example

Here's an example of how you can use both functions together to create a rap verse:

```javascript
const { makeCzar, generateRap } = require('@paul-fletes/czartificial-intelligence');

const seedWord = 'armor';
const czarWord = makeCzar(seedWord);
const rapLine = generateRap(seedWord);

console.log(`Original word: ${seedWord}`);
console.log(`Czar word: ${czarWord}`);
console.log(`Rap line: ${rapLine}`);
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

You can use this template as a starting point for your package's README. Be sure to customize it with any additional information specific to your package and provide clear usage examples for your users.