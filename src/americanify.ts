import translations from './translations.json';

export function americanify(text: string) {
    return text.split(' ').map((word) => translations[word] ?? word).join(' ');
}