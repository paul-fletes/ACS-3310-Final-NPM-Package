import { makeCzar } from "./makeCzar";

export function generateRap(seedWord: string): string {
  if (seedWord.startsWith('ar')) {
    const rhymingWord: string = makeCzar(seedWord);
    return `I'm the czar, I goes hard; I be rhyming with a ${rhymingWord} 🎤`
  }
  return `I'm the czar, I go far, but yo I can't cz-ar with ${seedWord} 🤬`
}