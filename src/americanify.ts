import translations from "./translations.json";

export function americanify(text: string) {
  return text
    .split(" ")
    .map((word) => {
      const match = translations[word.toLowerCase()];

      if (!match) {
        return word;
      }

      return matchCasing(word, match);
    })
    .join(" ");
}

function matchCasing(original: string, translated: string): string {
  if (original[0].toUpperCase() === original[0]) {
    return `${translated[0].toUpperCase()}${translated.slice(1)}`;
  }

  return translated;
}
