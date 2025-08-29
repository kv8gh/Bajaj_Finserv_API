// Check if a string is numeric
export function isNumber(str: string): boolean {
  return /^[0-9]+$/.test(str);
}

// Check if a string is alphabetic
export function isAlphabet(str: string): boolean {
  return /^[a-zA-Z]+$/.test(str);
}

// Build concatenated string (reverse + alternating caps)
export function makeConcatString(alphabets: string[]): string {
  return alphabets
    .join("")
    .split("")
    .reverse()
    .map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");
}
