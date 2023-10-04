import { generateRap } from "../rapGenerator";

test('generateRap should rhyme when provided a word starting with "ar"', () => {
  const result = generateRap('art');
  expect(result).toBe("I'm the czar, I goes hard; I be rhyming with a czart 🎤");
});

test('generateRap should not rhyme when provided a word not starting with "ar"', () => {
  const result = generateRap('bottle');
  expect(result).toBe("I'm the czar, I go far, but yo I can't cz-ar with bottle 🤬");
});
