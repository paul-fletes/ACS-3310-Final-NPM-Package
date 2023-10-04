import { makeCzar } from "../makeCzar";

test('makeCzar should czar-ify a word starting with "ar-"', () => {
  const result = makeCzar('article')
  expect(result).toBe('czarticle')
});

test('makeCzar should return the arument unchanged if it does not start with "ar-"', () => {
  const result = makeCzar('bottle')
  expect(result).toBe('bottle')
})