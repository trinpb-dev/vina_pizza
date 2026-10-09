import { vi } from './vi';
import { en } from './en';

export type Dictionary = typeof en;

export const dictionaries = { vi, en };

export const getDictionary = (lang: string): Dictionary => {
  return dictionaries[lang as keyof typeof dictionaries] || vi;
};
