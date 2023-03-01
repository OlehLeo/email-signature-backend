import { generateDivided } from './divided.js';
import { generatePlain } from './plain.js';

export const templates = [
  { title: 'divided', generate: generateDivided },
  { title: 'plain', generate: generatePlain }
];
