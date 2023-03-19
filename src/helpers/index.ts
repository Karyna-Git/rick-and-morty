import { ICharacter } from "./../types";

export const capitalizeFirstLetter = (word: string): string => {
  return word[0].toUpperCase().concat(word.slice(1));
};

export const sortCharactersByName = (characters: ICharacter[]): ICharacter[] => {
  return characters.sort((a, b) => a.name.localeCompare(b.name));
};
