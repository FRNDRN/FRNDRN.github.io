// Picks the string for the active locale. Keeps each piece of copy in one place,
// with its English (source of truth) and Spanish side by side.
export type Translate = (en: string, es: string) => string;
