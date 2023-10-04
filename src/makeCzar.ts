export function makeCzar(input: string): string {
  if (input.startsWith('ar')) {
    return "cz" + input
  }
  return input;
}